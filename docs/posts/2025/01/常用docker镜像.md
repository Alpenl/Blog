---
title: 常用docker镜像
date: 2025-02-16
tags:
  - 教程
  - docker
  - mysql
  - redis
---

# 常用docker镜像

> <!-- DESC SEP -->
>
> ✨文章摘要
> 本文是一个剪贴板，存放常用docker镜像的命令方便复制粘贴，并附上详细的解释以供新手快速搭建数据库环境
> <!-- DESC SEP -->

## Mysql

### mysql:5.7 镜像

```docker
docker run -p 3306:3306 --name Mysql -v Mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --restart=always -d mysql:5.7
```

- `-p 3306:3306`：将容器的3306端口映射到主机的3306端口，方便外部连接。
- `--name Mysql`：为容器指定一个名称，这里为 `Mysql`。
- `-v Mysql:/var/lib/mysql`：将宿主机的 `Mysql` 目录挂载到容器内的 `/var/lib/mysql` 目录，持久化数据。
- `-e MYSQL_ROOT_PASSWORD=root`：设置MySQL的root用户密码为 `root`，可以根据需求修改。
- `--restart=always`：容器异常退出后会自动重启。
- `-d mysql:5.7`：使用 `mysql:5.7` 镜像并在后台运行容器。

### mysql:8.0.20 镜像

```docker
docker run -p 3306:3306 --name Mysql -v Mysql:/var/lib/mysql8 -e MYSQL_ROOT_PASSWORD=root --restart=always -d mysql:8.0.20
```

与上面的命令类似，但这次使用的是 `mysql:8.0.20` 镜像。如果你需要其他版本，可以调整镜像版本。

### 进入docker容器内部

```docker
docker exec -it Mysql bash
```

- `docker exec -it`：进入正在运行的容器。
- `Mysql`：容器的名称。
- `bash`：启动 bash shell 进入容器内部，方便后续操作。

### 查看MySQL用户列表

```docker
SELECT user, host FROM mysql.user;
```

- 通过该命令查看MySQL数据库中所有用户及其主机名，方便检查权限配置。

### 忽略MySQL表名大小写

1. 进入 MySQL 容器内部

   ```docker
   docker exec -it Mysql bash
   ```

2. 使用 `echo` 命令编辑 MySQL 配置文件 `my.cnf`

   ```docker
   echo "[mysqld]" >> /etc/mysql/my.cnf
   echo "lower_case_table_names=1" >> /etc/mysql/my.cnf
   ```

   - 第一个命令将 `[mysqld]` 配置段添加到 `my.cnf` 配置文件中。
   - 第二个命令设置 `lower_case_table_names=1`，这意味着MySQL将不区分表名大小写，避免在不同操作系统之间迁移数据时出现问题。

3. 退出容器并重新启动 MySQL 服务

   ```docker
   exit
   ```

4. 重启MySQL容器

   ```docker
   docker restart Mysql
   ```

   - 重启容器使得新的配置生效。

## Redis

### 创建docker容器 redis 镜像并绑定自定义配置文件和数据存储路径

```docker
docker run --restart=always -p 6379:6379 --name redis -v /home/dj/redis/redis.conf:/etc/redis/redis.conf -v /home/dj/redis/data:/data -d redis:latest redis-server /etc/redis/redis.conf
```

- `--restart=always`：容器异常退出后会自动重启。
- `-p 6379:6379`：将容器的6379端口映射到主机的6379端口，方便外部连接。
- `--name redis`：为容器指定一个名称，这里为 `redis`。
- `-v /home/dj/redis/redis.conf:/etc/redis/redis.conf`：将宿主机的 `redis.conf` 配置文件挂载到容器内的 `/etc/redis/redis.conf`，自定义配置。
- `-v /home/dj/redis/data:/data`：将宿主机的 `data` 目录挂载到容器内的 `/data` 目录，持久化Redis数据。
- `-d redis:latest`：使用 `redis:latest` 镜像并在后台运行容器。
- `redis-server /etc/redis/redis.conf`：指定Redis使用容器内的自定义配置文件进行启动。
