# HTML简介
- HTML：**标记语言**（不是编程语言）
使用标记标签来描述网页
- HTML标签：尖括号包围关键词
通常**成对**出现
第一个标签是开始标签，第二个标签是结束标签
- HTML文档：网页
浏览器读取HTML文档，使用标签解释页面内容。
# 基本实例
## 标题：`<h1>` ~ `<h6>`
```HTML []
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
```
> 请仅仅把标题标签用于标题文本。不要仅仅为了产生粗体文本而使用它们。请使用其它标签或 CSS 代替。
## 段落：`<p>`
```HTML []
<p>段落1</p>
<p>段落2</p>
```
## 链接：`<a>`
```HTML []
<a herf="https://www.baidu.com">点击进入百度</p>
```
> herf是一个属性，表示链接的地址。
## 图像：`<img>`
```HTML []
<img src="/image/1.png" width="100" height="200" />
```
> src表示图片的地址
用width和height表示图片的宽高
# HTML元素
- 一个元素包括从开始标签到结束标签内的所有代码
> 开始标签也称为开放标签，结束标签也称为闭合标签

## 语法
- 以开始标签起始
- 以结束标签终止
- 开始标签和结束标签之间称为内容
- 有些元素只有一个标签
- 在开始标签中进行关闭（开始标签就是结束标签）
- 大多数元素可以拥有属性
## 嵌套
HTML文档由嵌套的HTML元素构成
```HTML []
<html>
    <body>
        <p>段落1</p>
        <p>段落2</p>
    </body>
</html>
```
## 实例解释
### `<p>`元素：
定义HTML文档中的一个段落
### `<body>`元素：
定义HTML文档的主体
### `<html>`元素：
定义整个HTML文档
## 不要忘记结束标签
> 大多数浏览器能在缺失结束标签的时候正确显示HTML
但会产生不可预料的结果，HTML未来版本（XHTML）不允许省略

## 空HTML元素
只有一个标签（如`<br />`换行符号）
```HTML []
<br />
```
> 尽管`<br>`也有效，但添加斜杠`<br />`是正确方法
## 使用小写字母
HTML标签对大小写不敏感，推荐使用小写
XHTML强制使用小写
# HTML属性
属性提供了有关HTML元素的**更多**信息
规定在**开始标签**中
以**名称/值**对的形式出现
```HTML []
name="value"
```
## 属性实例
链接的地址在href属性中指定
```HTML []
<a href="www.baidu.com">点击进入百度</a>
```
## 更多HTML属性实例
### align
```HTML []
<h1 align="center">居中</h1>
```
### bgcolor
背景颜色
```HTML []
<body bgcolor="66ccff"></body>
```
### border
边框
```HTML []
<table border="1"></table>
```
> - 属性推荐使用小写
> - 始终为属性添加引号
> - 如果属性值本身含有双引号，那么必须使用单引号
# 标题
通过`<h1>`~`<h6>`进行定义
```HTML []
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
```
> 浏览器会自动在标题前后添加空行
HTML会自动在**块级元素**前后添加空行，比如段落、标题
- 标题用途是内容编制索引，不要用于产生大号文本
- 根据逻辑进行分级
## 水平线
`<hr />`在页面中创建水平线
```HTML []
<hr />
```
> 可用于分割文章中的小节

## 注释
```HTML []
<!--浏览器自动忽略注释里的内容-->
```
> 可用于分割文章中的小节
# 段落
```HTML []
<p>段落1</p>
<p>段落2</p>
```
> 空段落`<p></p>`会产生一个空行，但是不建议这么做。
## 不要忘了结束标签
```HTML []
<p>不要忘了结束标签
<p>不要忘了结束标签
```
> 尽管HTML可以正常显示，但是不建议。XHTML不支持。
## 折行
在段落中使用`<br />`进行换行，而不产生新段落
```HTML []
<p>第一行<br />第二行<br />第三行</p>
<p>新的一段</p>
```
> 这是一个空元素，没有内容和结束标签
## 推荐使用<br />
> 将来版本中不允许没有结束标签的HTML元素，`<br>`不长远
## 格式
在HTML源代码中，空行和连续的空格都算做一个空格。
> 无法通过在代码中添加额外的空格或换行来改变输出的效果
# 样式
## style属性
改变所有HTML元素的样式
## 别用以下标签和属性
```HTML
<center>定义居中的文本</center>
<font>定义HTML字体</font>
<basefont>定义HTML字体</basefont>
<s>定义删除线文本</s>
<strike>定义删除线文本</strike>
<u>定义下划线文本</u>
align 定义文本的对齐方式
bgcolor 定义背景颜色
color 定义文本颜色
```
> 以上标签和属性应该用样式`style=""`代替
- 多个样式之间用`;`分隔
## 实例：背景颜色`background-color`
```HTML []
<body style="background-color:yellow">
    <h1 style="background-color:red">红底标题</h1>
    <p>黄底主体</p>
    <p style="background-color:green">绿底段落</p>
</body>
```
- 旧的`bgcolor`属性已被淘汰，仅能用于`body`
## 实例：字体、颜色、尺寸
- 字体：font-family
- 颜色：color
- 尺寸：font-size
```HTML []
<body>
    <p style="font-family: Verdana">Verdana字体</p>
    <p style="color: blue; font-size:small">蓝色小字段落</p>
</body>
```
- 旧的`font`标签已被淘汰
## 实例：文本对齐`text-align`
```HTML []
<p style="text-align:center">这段话居中</p>
```
- 旧的`align`属性已被淘汰
> 仅作用于块级元素。如果某个标签默认不是块级，需要修改`display`样式
# 文本格式化
- 现代Web开发思想认为，在HTML中仅进行**语义**上的描述，把**样式**上的描述留给CSS。
- 例如，`<strong>`和`<em>`表示强调、加重，应该在HTML中展示。
- 而`<b>`（加粗）、`<i>`（斜体）、`<big>`（大）、`<small>`（小）等纯样式性质的描述，应该通过CSS实现。
- `<div>`和`<span>`没有语义性，在使用时用别的含有语义的标签，如`<strong>`和`<em>`等。
```HTML []
<em>着重</em>
<strong>加重语气</strong>
<ins>插入字</ins>
<del>删除字</del>
```
# 引用
## 短引用`<q>`
浏览器通常会为`<q>`元素包围引号
```HTML []
<p>后面是<q>引用</q>部分</p>
```
## 长引用`<blockquote>`
定义被引用的节
浏览器通常会对`<blockquote>`元素进行**缩进**处理
用`cite`属性标记本节的来源
```HTML []
<p>鲁迅说过：</p>
<blockquote cite="鲁迅">blockquote里面是长引用</blockquote>
<blockquote>blockquote<br />可以用<br />换行</blockquote>
```
## 缩略词`<abbr>`
指明这是缩略词
用`title`属性标记本缩略词的含义
在浏览器上，把鼠标移到缩略词上会显示出含义
```HTML []
<p><abbr title="World Health Organization">WHO</abbr> cares</p>
```
## 定义`<dfn>`
比较复杂，不如用缩略词`<abbr>`
## 联系信息`<address>`
定义文档的联系信息
浏览器通常以斜体显示，并在前后添加折行
## 著作标题`<cite>`
定义著作的标题
浏览器通常以斜体显示
## 双向重写`<bdo>`
定义双流向文本
```HTML []
<p>
    <!--dir="rtl"的display改成block的话就会跑到屏幕最左边-->
    <bdo dir="rtl" style="display: block">This sentence would be writen from right to left</bdo>
    <bdo dir="ltr">This sentence would be writen from left to right</bdo>
</p>
```
# 注释
## 注释标签`<!--`和`-->`
放置提示信息
可以不在同一行，一对注释可以注释多行代码
## 条件注释
```HTML []
<!--[if IE 8]>
    ...
<![endif]-->
```
可以仅在IE8编译
# 颜色
## 颜色值
HEX（如#ffff00）
RGN（如(255,255,0)）
## 颜色名
支持16种颜色名，其他颜色只能用颜色值
# CSS
## 如何使用样式
### 外部样式表
一个样式需要应用到很多页面
```HTML []
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
### 内部样式表
单个文件需要特别样式
```HTML []
<head>
    <style type="text/css">
        body{background-color: red}
        p{margin-left: 20px}
    </style>
</head>
```
### 内联样式
个别元素需要应用特殊的样式（通过style属性）
```HTML []
<p style="color: blue; font-size:small">蓝色小字段落</p>
```
**样式按照优先级规则生效**
# 链接
HTML使用超链接与网络上的另一个文档相连
## HTML超链接`<a>`
使用`<a>`标签在HTML中创建链接
两种使用方式：
- 通过`href`属性，创建一个指向**另一个文档**的链接
- 通过`name`属性，创建**文档内**的书签
## 语法
```HTML []
<a href="#">链接文本</a>
```
`href`指定链接的目标
链接文本被作为超链接显示，点击超链接会将页面带到目标页面
> 链接文本不一定是文字，图片或者其他HTML元素都可以是文本
## `target`属性
定义被链接的文档在何处显示（默认将当前网页刷新为新文档）
```HTML []
<a href="#" target="_blank">在新页面中打开链接</a>
```
## `name`属性
定义**锚**的名称，创建HTML页面中的书签
可以根据命名锚，创建跳至某个锚的链接
```HTML []
<a name="pall">
    <hr />
    <hr />
    <p>上面是两条水平线</p>
</a>
<a href="#pall">点击跳转至水平线</a>
```
## `/`的问题
在请求访问一个文件夹时，最好在末尾加上`/`，否则服务器会产生两次http请求
如`href="www.baidu.com/item"`
第一次请求，服务器判断出`/item`是一个文件夹，加上`/`返回一个重定向
第二次请求`www.baidu.com/item/`
在请求访问文件时，不要加`/`，有些浏览器可能会解读为文件夹而找不到
# 图像
## 图像标签`<img>`和源属性`src`
`<img>`是空标签
源属性`src`的值是图像的URL地址
```HTML []
<img src="url" />
```
## 替换文本属性`alt`
当浏览器无法载入图片时，浏览器将显示这个替代性的文本而不是图像，告诉读者未加载出的图像的信息
```HTML []
<img src="none.jpg" alt="什么都没有" />
```
> 加载图片需要时间，建议慎用图片
## 图像实例
### 背景图像`background`
把`background`属性设为图片即可。如果图像小于页面将会进行重复
### 图像在文本中
通过`align`设置对齐方式。默认底部对齐。
# 表格
- 表格由`<table>`标签定义
- 表格中的每行由`<tr>`（**t**able**r**ow）标签定义
- 每行中的每格由`<td>`（**t**able**d**ata）标签定义
```HTML []
<head>
    <style>
        table{border: 1px solid black;}
        td{border: 1px solid black;}
    </style>
</head>
<body>
    <table>
        <tr>
            <td>一一</td>
            <td>一二</td>
        </tr>
        <tr>
            <td>二一</td>
            <td>二二</td>
        </tr>
        
    </table>
</body>
```
## 表格和边框属性`border`
> 在`<table>`里设置属性`border="1"`可以起到上述css的效果（同时应用于表格和表项）
但这种写法已经过时了，原因和上面说的一样，HTML应该注重语义而非形式
## 表头`<th>`
与`<td>`一样，写在`<tr>`里。浏览器会把表头加粗居中显示。
## 空单元格
某些浏览器无法处理无内容的单元格。这时可以通过添加空格转义符`&nbsp;`解决。
## 更多实例
### 表格标题`<caption>`
```HTML []
<body>
    <caption>乘法表</caption>
    <table>
        <tr>
            <td>一一</td>
            <td>一二</td>
        </tr>
        <tr>
            <td>二一</td>
            <td>二二</td>
        </tr>
        
    </table>
</body>
```
### 跨行（列）单元格`rowspan`（`colspan`）
```HTML []
<table>
    <tr>
        <td></td>
        <th colspan="3">横</td>
    </tr>
    <tr>
        <th rowspan="3">竖</td>
        <td>一一</td>
        <td>一二</td>
        <td>一三</td>
    </tr>
    <tr>
        <td>二一</td>
        <td>二二</td>
        <td>二三</td>
    </tr>
    <tr>
        <td>三一</td>
        <td>三二</td>
        <td>三三</td>
    </tr>
</table>
```
### 框架`frame`
用`frame`属性特定画出某一个方向上的边框
# 列表
## 无序列表
用`<ul>`定义一个无序列表（**u**nordered **l**ist）
每个表项用`<li>`定义
```HTML []
<ul>
    <li>中国</li>
    <li>美国</li>
</ul>
```
> 可以用`type`属性修改符号的格式
或者在css里用`list-style-type`修改
## 有序列表
用`<ol>`定义一个有序列表（**o**rdered **l**ist）
每个表项同样用`<li>`定义
```HTML []
<ol>
    <li>中国</li>
    <li>美国</li>
</ol>
```
> 可以用`type`属性修改数字的格式（数字、大小写字母、大小写罗马数字）
或者在css里用`list-style-type`修改
可以用`value`属性修改起始数字（默认是1）
列表的每个表项都可以是各种元素
列表可以嵌套
## 定义列表
用`<dl>`开始一个定义列表（**d**escription **l**ist），也叫描述列表
用`<dt>`开始一个术语项（**d**escription **t**erm）
用`<dd>`开始一个描述项（**d**escription **d**escription）
```HTML []
<dl>
    <dt>中国</dt>
    <dd>社会主义国家</dd>
    <dt>美国</dt>
    <dd>资本主义国家</dd>
</dl>
```
> 浏览器会默认对`<dt>`加粗，对`<dd>`缩进
`<dt>`和`<dd>`可以一对多，也可以多对一（只起一个渲染作用）
```HTML []
<dl>
    <dt>中国</dt>
    <dd>社会主义国家</dd>
    <dd>发展中国家</dd>
    <dt>美国</dt>
    <dt>英国</dt>
    <dd>资本主义国家</dd>
</dl>
```
# 块
## 块元素
在显示时通常会以**新行**来开始和结束
如`<h1>`，`<p>`，`<ul>`，`<table>`
## 内联元素
在显示时不会以新行开始
如`<b>`，`<td>`，`<a>`，`<img>`
## `<div>`元素
块级元素，没有特殊含义。
可用于页面布局。
## `<span>`元素
内联元素，没有特殊含义。
可用作文本的容器。
> 如上方所谈，`<div>`和`<span>`没有语义性，在使用时用别的含有语义的标签，如`<strong>`和`<em>`等。
# 类
对元素设置类，使我们能够为特定的一类元素定义相同的CSS样式
```HTML []
<style>
.country{
    background-color: #66ccff;
    color: #993300;
    margin: 20px;
    padding: 20px;
    width: 190px;
}
.country p{
    margin-left: 0;
}
</style>
...
<div class="country">
    <h1>中国</h1>
    <p>好完了好完了好完了好完了好完了好完了好完了好完了好完了好完了好完了</p>
</div>
<div class="country">
    <h1>美国</h1>
    <p>哎呀我去美国怎么这么坏哎呀我去美国怎么这么坏哎呀我去美国怎么这么坏</p>
</div>
```
## 块级元素分类
为`<div>`元素分类
## 内联元素分类
为`<span>`元素分类
# `id`属性
指定HTML元素的唯一ID，在HTML文档中必须是唯一的。
用于指向CSS中的特定样式声明。
JavaScript也可以使用它来访问和操作拥有特定ID的元素。
```HTML []
<style>
    #China_VS_American{
        width: max-content;
        border: 6px solid black;
    }
    #China_VS_American .china p{
        font-weight: 700;
    }
</style>
```
## 与`Class`的差异
一个id名称只能由页面中的**一个**HTML元素使用
同一个类名可以由**多个**HTML元素使用
## 通过ID和链接实现HTML书签
```HTML []
<h1 id="C1">第一章</h1>
...
<a href="#C1">跳转到第一章</a>
<!--或者在另一个文档中-->
<a href="/html/A.html#C1">跳转到高数第一章</a>
```
## 在JavaScript中使用ID
学到JS再说
# 内联框架iframe
用于在网页内显示网页
```HTML []
<iframe scr="URL">未加载成功URL</iframe>
```
## 设置高度和宽度
使用`height`和`width`
## 无边框
可设置属性`frameborder="0"`
## 在iframe打开链接
链接的`target`属性引用`iframe`的`name`属性
```HTML []
<iframe name="iframe_1" style="height: 400px; width: 640px;"></iframe>
<p>
    <a href="https://www.bilibili.com/" target="iframe_1">点击进入B里</a>
</p>
```
# JavaScript
## `<script>`标签
定义JavaScript
可以内含脚本，也可以通过`src`指向外部脚本文件
## 功能
- 更改内容
- 更改样式
- 更改属性
```HTML []
<div onclick="fun1()" id="div1" class="click_test" style=" background-color: #ff0000;">点我</div>
<div onclick="fun2()" id="div2" class="click_test" style=" background-color: #0000ff;">别点我</div>
<script>
    function fun1(){
        document.getElementById("div1").innerHTML="别点我";
        document.getElementById("div2").innerHTML="点我";
        document.getElementById("div1").style.backgroundColor="#0000ff";
        document.getElementById("div2").style.backgroundColor="#ff0000";
        
    }
    function fun2(){
        document.getElementById("div1").innerHTML="点我";
        document.getElementById("div2").innerHTML="别点我";
        document.getElementById("div1").style.backgroundColor="#ff0000";
        document.getElementById("div2").style.backgroundColor="#0000ff";
    }
</script>
```