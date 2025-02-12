import { type DefaultTheme } from 'vitepress'

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  collapsed: boolean
  items: SidebarItem[]
}

// 此文件由脚本自动生成，请勿手动修改
export function createSideBarZH(): DefaultTheme.Sidebar {
  return {
    '/notes/': [
      {
        text: 'AI相关',
        collapsed: false,
        items: [
          { text: '01Cursor中的java相关提示词', link: '/notes/AI相关/01Cursor中的java相关提示词' },
          { text: '02Cursor中的uniapp相关提示词', link: '/notes/AI相关/02Cursor中的uniapp相关提示词' },
          { text: '03Thinking-Claude', link: '/notes/AI相关/03Thinking-Claude' }
        ]
      },
      {
        text: 'CSS相关',
        collapsed: true,
        items: [
          { text: 'Flex_布局教程：语法篇', link: '/notes/CSS相关/Flex_布局教程：语法篇' }
        ]
      },
      {
        text: 'JavaScript',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/JavaScript/index' },
          { text: '01JS常见手写面试题', link: '/notes/JavaScript/01JS常见手写面试题' },
          { text: '02NodeJS详细教程', link: '/notes/JavaScript/02NodeJS详细教程' }
        ]
      },
      {
        text: 'NestJS',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/NestJS/index' },
          { text: '01controller', link: '/notes/NestJS/01controller' },
          { text: '02service', link: '/notes/NestJS/02service' },
          { text: '03module', link: '/notes/NestJS/03module' },
          { text: '04DTO', link: '/notes/NestJS/04DTO' },
          { text: '05postgreSQL', link: '/notes/NestJS/05postgreSQL' },
          { text: '06原理细节', link: '/notes/NestJS/06原理细节' },
          { text: '07应用配置', link: '/notes/NestJS/07应用配置' },
          { text: '08更多模块', link: '/notes/NestJS/08更多模块' },
          { text: '09openAPI', link: '/notes/NestJS/09openAPI' },
          { text: '10测试', link: '/notes/NestJS/10测试' }
        ]
      },
      {
        text: 'Python基础',
        collapsed: true,
        items: [
          { text: '01python数据模型', link: '/notes/Python基础/01python数据模型' },
          { text: '02序列构成的数组', link: '/notes/Python基础/02序列构成的数组' },
          { text: '03字典与集合', link: '/notes/Python基础/03字典与集合' },
          { text: '04文本与字节序列', link: '/notes/Python基础/04文本与字节序列' },
          { text: '05一等函数', link: '/notes/Python基础/05一等函数' },
          { text: '06使用一等函数实现设计模式', link: '/notes/Python基础/06使用一等函数实现设计模式' },
          { text: '07函数装饰器与闭包', link: '/notes/Python基础/07函数装饰器与闭包' },
          { text: '08对象引用、可变性和垃圾回收', link: '/notes/Python基础/08对象引用、可变性和垃圾回收' },
          { text: '09符合python风格的对象', link: '/notes/Python基础/09符合python风格的对象' },
          { text: '10序列的修改、散列和切片', link: '/notes/Python基础/10序列的修改、散列和切片' },
          { text: '11接口：从协议到抽象基类', link: '/notes/Python基础/11接口：从协议到抽象基类' },
          { text: '12继承的优缺点', link: '/notes/Python基础/12继承的优缺点' },
          { text: '13正确重载运算符', link: '/notes/Python基础/13正确重载运算符' },
          { text: '14可迭代的对象、迭代器和生成器', link: '/notes/Python基础/14可迭代的对象、迭代器和生成器' },
          { text: '15上下文管理和else块', link: '/notes/Python基础/15上下文管理和else块' },
          { text: '16协程', link: '/notes/Python基础/16协程' },
          { text: '17使用future处理并发', link: '/notes/Python基础/17使用future处理并发' },
          { text: '18使用asyncio包处理并发', link: '/notes/Python基础/18使用asyncio包处理并发' },
          { text: '19元编程', link: '/notes/Python基础/19元编程' }
        ]
      },
      {
        text: 'Rust基础学习',
        collapsed: true,
        items: [
          { text: '01认识Cargo', link: '/notes/Rust基础学习/01认识Cargo' },
          { text: '02变量绑定与解构', link: '/notes/Rust基础学习/02变量绑定与解构' },
          { text: '03基本类型', link: '/notes/Rust基础学习/03基本类型' },
          { text: '04所有权与借用', link: '/notes/Rust基础学习/04所有权与借用' },
          { text: '05复合类型', link: '/notes/Rust基础学习/05复合类型' },
          { text: '06流程控制', link: '/notes/Rust基础学习/06流程控制' },
          { text: '07模式匹配', link: '/notes/Rust基础学习/07模式匹配' },
          { text: '08方法Method', link: '/notes/Rust基础学习/08方法Method' },
          { text: '09泛型', link: '/notes/Rust基础学习/09泛型' },
          { text: '10特征', link: '/notes/Rust基础学习/10特征' },
          { text: '11特征对象', link: '/notes/Rust基础学习/11特征对象' },
          { text: '12深入特征', link: '/notes/Rust基础学习/12深入特征' },
          { text: '13动态数组Vector', link: '/notes/Rust基础学习/13动态数组Vector' },
          { text: '14KV存储HashMap', link: '/notes/Rust基础学习/14KV存储HashMap' },
          { text: '15认识生命周期', link: '/notes/Rust基础学习/15认识生命周期' },
          { text: '16返回值和错误处理', link: '/notes/Rust基础学习/16返回值和错误处理' },
          { text: '17包和模块', link: '/notes/Rust基础学习/17包和模块' },
          { text: '18注释和文档', link: '/notes/Rust基础学习/18注释和文档' },
          { text: '19格式化输出', link: '/notes/Rust基础学习/19格式化输出' },
          { text: '20实战-文件搜索工具', link: '/notes/Rust基础学习/20实战-文件搜索工具' }
        ]
      },
      {
        text: 'Vue相关',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/Vue相关/index' },
          { text: 'Vue3 是如何运行的', link: '/notes/Vue相关/01Vue3是如何运行的' },
          { text: '02Vue3编译器', link: '/notes/Vue相关/02Vue3编译器' },
          { text: '03虚拟DOM', link: '/notes/Vue相关/03虚拟DOM' },
          { text: '04Vue3-Reactivity', link: '/notes/Vue相关/04Vue3-Reactivity' },
          { text: '05Mini-Vue', link: '/notes/Vue相关/05Mini-Vue' },
          { text: '06Vue3其他', link: '/notes/Vue相关/06Vue3其他' }
        ]
      },
      {
        text: 'Web3.0',
        collapsed: true,
        items: [
          { text: '00Solidity8新特性', link: '/notes/Web3.0/00Solidity8新特性' },
          { text: 'index', link: '/notes/Web3.0/index' },
          { text: '01Solidity8基本语法', link: '/notes/Web3.0/01Solidity8基本语法' },
          { text: '02Solidity8高级', link: '/notes/Web3.0/02Solidity8高级' },
          { text: '03Solidity8进阶', link: '/notes/Web3.0/03Solidity8进阶' }
        ]
      },
      {
        text: 'threejs入门',
        collapsed: true,
        items: [
          { text: '01起步', link: '/notes/threejs入门/01起步' },
          { text: '02一个基本的threejs应用', link: '/notes/threejs入门/02一个基本的threejs应用' },
          { text: '03基于物理的渲染和照明', link: '/notes/threejs入门/03基于物理的渲染和照明' },
          { text: '04变换、坐标系和场景图', link: '/notes/threejs入门/04变换、坐标系和场景图' },
          { text: '05动画循环', link: '/notes/threejs入门/05动画循环' },
          { text: '06纹理映射', link: '/notes/threejs入门/06纹理映射' },
          { text: '07插件', link: '/notes/threejs入门/07插件' },
          { text: '08环境光', link: '/notes/threejs入门/08环境光' },
          { text: '09组织你的场景', link: '/notes/threejs入门/09组织你的场景' },
          { text: '10内置几何体', link: '/notes/threejs入门/10内置几何体' },
          { text: '11以gLTF格式加载3D模型', link: '/notes/threejs入门/11以gLTF格式加载3D模型' },
          { text: '12threejs动画系统', link: '/notes/threejs入门/12threejs动画系统' }
        ]
      },
      {
        text: '前端八股文',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/前端八股文/index' },
          { text: '01HTML', link: '/notes/前端八股文/01HTML' },
          { text: '02CSS', link: '/notes/前端八股文/02CSS' },
          { text: '03JavaScript', link: '/notes/前端八股文/03JavaScript' },
          { text: '04Vue', link: '/notes/前端八股文/04Vue' },
          { text: '05计算机网络', link: '/notes/前端八股文/05计算机网络' },
          { text: '06浏览器原理', link: '/notes/前端八股文/06浏览器原理' },
          { text: '07性能优化', link: '/notes/前端八股文/07性能优化' }
        ]
      },
      {
        text: '后端储备',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/后端储备/index' },
          { text: '01Django进阶学习笔记', link: '/notes/后端储备/01Django进阶学习笔记' },
          { text: '02DRF学习笔记', link: '/notes/后端储备/02DRF学习笔记' },
          { text: '03Redis学习笔记', link: '/notes/后端储备/03Redis学习笔记' }
        ]
      },
      {
        text: '微前端设计与实现',
        collapsed: true,
        items: [
          { text: '01前端概览', link: '/notes/微前端设计与实现/01前端概览' },
          { text: '02微前端原则', link: '/notes/微前端设计与实现/02微前端原则' },
          { text: '03微前端的架构和挑战', link: '/notes/微前端设计与实现/03微前端的架构和挑战' },
          { text: '04探索微前端架构', link: '/notes/微前端设计与实现/04探索微前端架构' },
          { text: '05其他', link: '/notes/微前端设计与实现/05其他' }
        ]
      },
      {
        text: '数据库01',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/数据库01/index' },
          { text: '01数据库系统概述', link: '/notes/数据库01/01数据库系统概述' },
          { text: '02关系数据库', link: '/notes/数据库01/02关系数据库' },
          { text: '03SQL(重点)', link: '/notes/数据库01/03SQL(重点)' },
          { text: '05数据库管理与维护(重点)', link: '/notes/数据库01/05数据库管理与维护(重点)' },
          { text: '06关系数据理论(重点)', link: '/notes/数据库01/06关系数据理论(重点)' },
          { text: '07数据库设计', link: '/notes/数据库01/07数据库设计' }
        ]
      },
      {
        text: '算法与数据结构',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/算法与数据结构/index' },
          { text: '01基础概念', link: '/notes/算法与数据结构/01基础概念' },
          { text: '02线性表', link: '/notes/算法与数据结构/02线性表' },
          { text: '03栈和队列', link: '/notes/算法与数据结构/03栈和队列' },
          { text: '04数组', link: '/notes/算法与数据结构/04数组' },
          { text: '05树', link: '/notes/算法与数据结构/05树' },
          { text: '06图', link: '/notes/算法与数据结构/06图' },
          { text: '07查找', link: '/notes/算法与数据结构/07查找' },
          { text: '08排序', link: '/notes/算法与数据结构/08排序' },
          { text: '10算法概述', link: '/notes/算法与数据结构/10算法概述' },
          { text: '11递归与分治', link: '/notes/算法与数据结构/11递归与分治' },
          { text: '12动态规划', link: '/notes/算法与数据结构/12动态规划' },
          { text: '13贪心算法', link: '/notes/算法与数据结构/13贪心算法' },
          { text: '14回溯与分支界限', link: '/notes/算法与数据结构/14回溯与分支界限' },
          { text: '15经典算法实现', link: '/notes/算法与数据结构/15经典算法实现' },
          { text: '16剑指Offer', link: '/notes/算法与数据结构/16剑指Offer' }
        ]
      },
      {
        text: '计算机基础知识',
        collapsed: true,
        items: [
          { text: 'index', link: '/notes/计算机基础知识/index' },
          { text: '01操作系统基础', link: '/notes/计算机基础知识/01操作系统基础' }
        ]
      }
    ]
  }
}
