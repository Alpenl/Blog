---
title: 聊聊同源策略限制 AJAX 请求
date: 2023-02-17
tags: 
  - 同源策略
  - AJAX
  - Web 安全
---

# 聊聊同源策略限制 AJAX 请求

> ✨文章摘要（AI生成）

<!-- DESC SEP -->

在这篇博客中，笔者探讨了同源策略如何限制 AJAX 请求，并提出了一些深思的问题。首先，同源策略是浏览器的核心安全功能，主要限制了脚本对其他域的访问，包括 cookies、localStorage、DOM 和 AJAX 请求。笔者质疑，既然脚本无法访问跨域 cookies，是否可以放宽对 AJAX 请求的限制，从而简化跨域操作。通过研究，笔者发现虽然 cookies 不可跨域共享，但在同一浏览器的不同 Tab 中却是可见的，这使得 CSRF 攻击成为可能。

此外，笔者指出，AJAX 请求的限制是为了防止敏感数据泄露，比如 CSRF token。即使有 CSRF token 的防护，允许 AJAX 跨域请求仍可能导致安全隐患。最后，笔者强调，尽管 CSRF token 是有效防御手段，但同源策略依然需要限制 AJAX 请求，以增强安全性。整体而言，笔者希望通过这篇文章引发更多关于 Web 安全的讨论与思考。

<!-- DESC SEP -->

## 前言

- 浏览器的同源策略及相关的 AJAX 跨域解决方案相信各位前端🐒们已经烂熟于心了，最近我脑子里突然冒出一些问题，就是标题中为什么同源策略要限制 AJAX 请求
- 接下来我们来讨论下这些问题，可能某些问题对于你来说很荒谬，但希望能对你带来一些奇怪的感觉，接下来就是我的一个思考过程+资料查阅+相关解释
- 这篇博客算是一个提问吧，非该领域的人，有些问题检索起来不知如何提问，所以这里写了一篇文章

## 开始

> 同源策略（Same Origin Policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说 Web 是构建在同源策略的基础之上的，浏览器只是针对同源策略的一种实现。

我之前记的笔记是--**同源策略主要限制了三个方面**：

- 当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。
- 当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。
- 当前域下 ajax 无法发送跨域请求。

所以接下来我产生了下面这个问题...

## 既然已经限制了对 cookies 的访问，为什么还要限制 ajax 请求呢？

因为我们为了解决 AJAX 跨域请求的问题，实现了很多种跨域解决方案；既然脚本不能访问获取其他站点的 cookies，那是否意味着这是安全的，同源策略可以放开对 AJAX 的请求呢，从而减少我们对跨域实现的工作量呢，虽然现在实现跨域操作已经非常方便了。

1）结果发现了“**cookies 虽然不能跨域共享，但是似乎可以跨站点共享**”这点被我忽略的特性，如下述解释，当然你在阅读之前需要了解[CSRF](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)相关内容

*CSRF 简单来说就是根据浏览器发送请求时，自动携带与站点相关的 cookies，因此恶意网站利用这点使用我们已登录重要网站的 cookies 达到一系列违规操作*

> [参考](https://juejin.cn/post/6958413563799011365#heading-14)在同一浏览器，当前打开的多个 Tab 页网站，无论是否为同一站点，cookie 都是共享可见的。这个共享不是说每个网站的脚本可以访问别的网站的 cookie，而是说，**你向同一服务器发送请求时，会带上浏览器保存的对于那个服务器的所有 cookie，而不管你从哪个网站发起的请求**。

2）从另外一方面思考，其实同源策略主要就是限制 JS 脚本对其他站点的操作，而 ajax 又处于 JS 脚本中，自然而然也会受到限制...

3）在《白帽子讲 Web 安全》中看到这样一句话：如果 XMLHttpRequest 能够跨域访问资源，则可能会导致一些敏感数据泄露，比如 CSRF 的 token，从而导致发生安全问题。

我们知道，CSRF 的防范手段之一就是 CSRF token：

- 它的信任基础就是 CSRF 攻击只能利用其他网站的 cookies，并不能直接窃取用户的相关信息；
- 并且攻击者需要提前猜测到接口的所有关键参数，这样加上自动携带的 cookies 才能请求接口成功。

所以 CSRF token 这种防御手段就是基于这两点，在用户刚进入页面的时候返回给用户一个随机 token，之后请求中将该 token 作为参数就可以了，这样通过对比 cookie 中保存的 token 就能区别是否是来自其他站点的恶意请求了。

???在这里我并没有想到：假设允许 AJAX 跨域访问，是如何窃取 CSRF token 的场景的，也没有找到相关的资料，希望有小伙伴帮忙回答这个疑问...

## 同源策略下 CSRF 又可以如何生效

刚才从同源策略聊到了 CSRF，这里就从 CSRF 出发聊聊同源策略，我们知道 CSRF 的防御手段之一还有对 refer 头的判断，而其缺点就是 refer 是否可以伪造取决于第三方浏览器的实现

- 即使大多数浏览器的 referer 内容是无法改变的，但是也无法完全保证所有浏览器更改不了（虽然 HTTP 协议上有明确的要求
- 但是每个浏览器对于 Referer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。
- 使用验证 Referer 值的方法，就是把安全性都依赖于第三方（即浏览器）来保障，
- 从理论上来讲，这样并不是很安全。在部分情况下，攻击者可以隐藏，甚至修改自己请求的 Referer。）

所以即使拥有同源策略，也不能完全限制 CSRF 攻击，还需要一些其他手段，比如 CSRF toekn

## 那还有必要在同源策略中限制 AJAX 请求吗

兜兜转转又绕回来了，这里我想的是既然大多数场景都是直接使用 CSRF token 进行防范，那针对同源策略对 AJAX 的请求还有必要限制吗，因为最终服务器都是通过判断 token 是否一致来判断是否为自己的站点。

???当然，如果 AJAX 在可以随意跨域的情况下可以直接窃取 CSRF token，那肯定不安全，希望有人能帮忙解释一下

## 最后

web 安全技术是一个很大的领域，我这里管中窥豹，难免可能会有一些理解不到位的情况出现，如果存在相关错误，也希望各位不吝赐教，友善指出，我也会及时纠正...

## 参考

- [cookie 与 CSRF 攻击](https://juejin.cn/post/6958413563799011365#heading-14)
- [CSRF 攻防实战（附 JS 源码）](https://juejin.cn/post/6869573026980036616)
- [前端安全系列（二）：如何防止 CSRF 攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)
- [魔法才能打败魔法：关于获取 csrf-token 前端技巧思考](https://xz.aliyun.com/t/7084)
- [CSRF 第 N 次学习——搞清楚攻击为什么能成功](https://www.cnblogs.com/clwsec/p/16530449.html)
- [白帽子讲 web 安全](https://weread.qq.com/web/reader/7c4327b05cfd497c4eaa52fk16732dc0161679091c5aeb1)

