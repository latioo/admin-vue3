## 单页后台模板

```
基于 vue3, vite, pinia, antd-v
```

## 问题记录 - 已解决

### element+ 切换到 antd-v

```
主要原因: 目前UI是参照基于antd-v制作的模板
次要原因: 关于drawer组件, element中内容在mask下, 而antd中内容和mask同级, 感觉antd的设计更优
```

### a-layout-sider bug

```
1.如果 a-layout-sider 不是直接写在 layout/index.js 下, 而是在单文件组件里(例如AsideBar), 那么, 修改 AsideBar 的js 文件会导致组件"无限重新加载", error 超出最大调用次数
2.修改html 部分不会这样
3.和js setup 无关, 传统js写法一样有这个情况

解决: 外层 layout 添加属性 has-sider 可解决此问题
官方文档: hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动
```

### 关于 ref, reactive

```
文档上说 ref 参数为 {} 时, 会调用 reactive
所以我想那直接都用 ref 就行了, 没必要调用 reactive

事实上:
ref 参数为 obj 时, 是这样调用 reactive 的
ref(obj) = reactive({ value: obj })

这在模板文件中使用没区别, 但在 js 中 ref(obj) 多了一层 value
```

### 移除 icons 组件全局注册

```
添加原因:
 1.可能需要一个配置菜单图标的功能
移除原因:
 1.注册的话打包体积会增加1M多, 不划算
 2.如果这个需求是必要的, 可以在组件里去做这个事情
```

## 问题记录 - 挂起

```
router 官网示例:
const Home = { template: '<div>Home</div>' }

在 router-view 中不显示, 引入 .vue 文件正常显示
```

```
console.log 报 console undefined, 改为 window.console.log 可用

过一会儿直接写 console.log 又可用了 ???
```
