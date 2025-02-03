---
title: Github配置ssh
date: 2025-02-03
tags:
  - 教程
  - ssh	
  - github
---

Github配置ssh

<!-- DESC SEP -->
> ✨文章摘要
介绍了如何在Github上配置ssh，包括生成ssh key、获取公钥内容、添加公钥到Github账号以及验证是否设置成功。
<!-- DESC SEP -->

1. 切换到根目录

```
cd ~/.ssh
```

2. 生成ssh key     

```
ssh-keygen -t rsa -C "xxx@xxx.com"
```
执行后一直回车即可
3. 获取ssh key公钥内容并复制

```
cat id_rsa.pub
```

4. Github账号上添加公钥

![ssh](https://20021217.xyz/Alpen.github_ssh.png)

5. 验证是否设置成功

```
ssh -T git@github.com
```

6. 配置
若验证不成功则需配置**config**：

​		新建文件**config**写入：

```
Host github.com
  Hostname ssh.github.com
  Port 443
  User git
```

