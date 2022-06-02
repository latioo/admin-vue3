## 单页后台模板

```
基于 vue3, vite, element+
```

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 踩坑记录

```
router 官网示例:
const Home = { template: '<div>Home</div>' }

在 router-view 中不显示, 引入 .vue 文件正常显示
```

```
console.log 报 console undefined, 改为 window.console.log 可用

过一会儿直接写 console.log 又可用了 ???
```

```
element+ 切换到 antd-v
主要原因: 目前UI是参照基于antd-v制作的模板
次要原因: 关于drawer组件, element中内容在mask下, 而antd中内容和mask同级, 感觉antd的设计更优
```
