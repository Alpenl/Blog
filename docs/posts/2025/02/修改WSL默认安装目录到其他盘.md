---
title: 安装WSL并修改WSL默认安装目录到其他盘
date: 2025-02-19
tags:
  - 剪贴板
  - WSL
---

# 安装WSL并修改WSL默认安装目录到其他盘

> <!-- DESC SEP -->
> ✨文章摘要(AI生成)
> 本文介绍了如何在Win10/11系统下安装WSL（Windows Subsystem for Linux），并详细说明了如何将WSL的默认> 安装目录修改为其他盘符。
> <!-- DESC SEP -->

## 一、安装WSL

### 前提条件
- 操作系统要求：**Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11**

### 安装步骤

1. 启用适用于 Linux 的 Windows 子系统
```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

2. 启用虚拟化（需要管理员权限）
```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

3. 设置WSL默认版本为WSL2（推荐）
```powershell
wsl --set-default-version 2
```
> WSL2.0相比WSL1.0具备完整的Linux内核、托管VM和完全的系统调用兼容性

### 安装Linux发行版

有两种安装方式：

#### 1. 直接安装（推荐）
参考[官方手册](https://learn.microsoft.com/zh-cn/windows/wsl/install#change-the-default-linux-distribution-installed)，在管理员模式下运行：
```powershell
wsl --install
```
安装完成后重启计算机。

#### 2. 指定内核安装
- 安装指定发行版：
```powershell
wsl --install -d <Distribution Name>
```

- 查看可用的 Linux 发行版列表：
```powershell
wsl --list --online
# 或
wsl -l -o
```

## 二、修改WSL默认安装目录到其他盘

默认情况下，WSL安装在C盘。为了节省系统盘空间，我们可以将其迁移到其他盘符。

### 迁移步骤

1. 查看当前WSL发行版
```powershell
wsl -l --all -v
```

2. 导出分发版为tar文件
```powershell
wsl --export Ubuntu-20.04 d:\wsl-ubuntu20.04.tar
```
> 注：将`Ubuntu-20.04`替换为你的发行版名称

3. 注销当前分发版
```powershell
wsl --unregister Ubuntu-20.04
```

4. 重新导入并安装WSL
```powershell
wsl --import Ubuntu-20.04 d:\wsl-ubuntu20.04 d:\wsl-ubuntu20.04.tar --version 2
```
> 可以修改为你想要的安装目录

5. 设置默认登录用户
```powershell
ubuntu2004 config --default-user Username
```

6. 删除临时tar文件（可选）
```powershell
del d:\wsl-ubuntu20.04.tar
```

完成以上操作后，WSL的根文件系统将被迁移到新的目录（示例中为`D:\wsl-ubuntu20.04`）。

