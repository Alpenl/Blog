---
title: Github配置ssh
date: 2025-02-03
tags:
  - 教程
  - ssh	
  - github
---

# GitHub 配置 SSH

<!-- DESC SEP -->

> ✨文章摘要
> 介绍了如何在 GitHub 上配置 SSH，包括生成 SSH 密钥对、获取公钥内容、添加公钥到 GitHub 账号以及验证是否设置成功。
> 2025.2.13 新增管理多个 SSH 密钥对的内容。

<!-- DESC SEP -->

## 管理一个 SSH 密钥对

### 1. 切换到 SSH 目录

切换到用户的 SSH 目录（如果目录不存在，系统会自动创建）：

```bash
cd ~/.ssh
```

### 2. 生成 SSH 密钥对

生成一个新的 SSH 密钥对，使用 RSA 加密算法，并指定一个邮箱地址作为注释：

```bash
ssh-keygen -t rsa -C "your_email@example.com"
```

执行后，系统会提示输入密钥保存路径（直接回车使用默认路径）和密码（可选）。如果不需要密码保护，直接回车即可。

### 3. 获取公钥内容

查看生成的公钥内容并复制到剪贴板：

```bash
cat ~/.ssh/id_rsa.pub
```

### 4. 将公钥添加到 GitHub 账号

1. 登录到 GitHub 账号。
2. 点击右上角的头像，选择 **Settings**。
3. 在左侧菜单中选择 **SSH and GPG keys**。
4. 点击 **New SSH key** 按钮。
5. 将复制的公钥内容粘贴到 **Key** 输入框中，并为该密钥添加一个标题（如“Personal Laptop”）。
6. 点击 **Add SSH key** 完成添加。

### 5. 验证 SSH 配置是否成功

测试 SSH 连接是否成功：

```bash
ssh -T git@github.com
```

如果配置正确，GitHub 会返回类似以下信息：

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

如果验证失败，可能是由于默认的 SSH 端口被限制。此时需要配置 `config` 文件。

### 6. 配置 SSH 客户端（如果验证失败）

在 `~/.ssh` 目录下新建或编辑 `config` 文件，添加以下内容：

```bash
Host github.com
  HostName ssh.github.com
  Port 443
  User git
```

------

## 管理多个 SSH 密钥对

### 1. 进入 SSH 目录

进入用户的 SSH 目录：

```bash
cd ~/.ssh
```

### 2. 生成多个 SSH 密钥对

为每个账号生成独立的 SSH 密钥对，避免覆盖默认文件。例如：

#### 生成工作账号密钥

```bash
ssh-keygen -t rsa -b 4096 -C "work@example.com"
```

保存路径输入：`~/.ssh/id_rsa_work`

#### 生成个人账号密钥

```bash
ssh-keygen -t rsa -b 4096 -C "personal@example.com"
```

保存路径输入：`~/.ssh/id_rsa_personal`

### 3. 将公钥添加到 GitHub 账号

#### 复制公钥内容

- 工作账号公钥：

```bash
cat ~/.ssh/id_rsa_work.pub
```

- 个人账号公钥：

```bash
cat ~/.ssh/id_rsa_personal.pub
```

#### 添加到 GitHub 账号

1. 登录到对应的 GitHub 账号。
2. 点击右上角的头像，选择 **Settings**。
3. 在左侧菜单中选择 **SSH and GPG keys**。
4. 点击 **New SSH key** 按钮。
5. 将复制的公钥内容粘贴到 **Key** 输入框中，并为该密钥添加一个标题（如“Work Laptop”或“Personal Laptop”）。
6. 点击 **Add SSH key** 完成添加。

### 4. 配置 SSH 客户端

编辑 `~/.ssh/config` 文件，定义主机别名及对应密钥：（有些网络不能使用22端口）

```bash
# 个人账号
Host github.com
  HostName ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/id_rsa_personal
# 工作账号
Host work.github.com
  HostName ssh.github.com
  User git
  Port 443
  IdentityFile ~/.ssh/id_rsa_work
```

### 5. 测试 SSH 连接

验证配置是否生效：

工作账户

```bash
ssh -T git@work.github.com
```

个人账户

```bash
ssh -T git@personal.github.com
```

如果配置正确，GitHub 会返回类似以下信息：

```
Hi work_username! You've successfully authenticated...
Hi personal_username! You've successfully authenticated...
```

### 6. 克隆仓库或修改远程 URL

#### 使用对应主机别名克隆仓库

```bash
git clone git@work.github.com:work_user/repo.git
```

```bash
git clone git@personal.github.com:personal_user/repo.git
```

#### 修改现有仓库的远程 URL

```bash
git remote set-url origin git@work.github.com:work_user/repo.git
```

### 7. 配置仓库级 Git 用户信息（可选）

不同仓库可能需要不同的用户名和邮箱。例如：

#### 工作仓库

```bash
cd work-repo
git config user.name "Work Name"
git config user.email "work@example.com"
```

#### 个人仓库

```bash
cd ../personal-repo
git config user.name "Personal Name"
git config user.email "personal@example.com"
```

