# guide 

## 内部链接
[Home](/) <!-- 跳转到根部的 README.md -->

[about](/about/) <!-- 跳转到 foo 文件夹的 index.html -->

[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->

[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->

[bar - four](../bar/four.html) <!-- 也可以用 .html -->

## GitHub 风格的表格

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 表情
:tada: :100:

## 目录
[[toc]]

## 自定义容器

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::


::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
:::

## 其他
<span v-for="i in 3">{{ i }} </span>


{{ $page }}


 # text <Tag/> 

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

[comment]: <> (<style lang="sass">)

[comment]: <> (  .title)

[comment]: <> (    font-size: 20px)

[comment]: <> (</style>)