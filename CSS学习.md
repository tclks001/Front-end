# 简介
CSS：层叠样式表（Cascading Style Sheets）
描述如何显示HTML元素
## 好处
让HTML专注于语义，CSS负责显示
可以使用外部样式表文件，更改整个网站的外观
# 语法
## 规则集
```CSS
h1 {color:red; font-size: 14px;}
```
选择器（`h1`）指向需要设置样式的HTML元素
声明（`color:red;`或`font-size: 14px;`）包含一个属性名称和一个值
多条声明用分号分隔，声明块由花括号括起来
# 选择器
## 元素选择器
根据元素名称选择
```CSS
p{
    text-align: center;
    color: red;
}
```
## id选择器
根据`id`属性**唯一**选择
```CSS
#china{
    color: red;
    font-size: 25px;
}
```
> id不能以数字开头
## 类选择器
根据`class`属性选择
```CSS
.country{
    font-size: 20px;
}
/*仅对属于country类的p元素生效*/
p.country{
    color: red;
}
/*仅对country类中的p元素生效，而该元素不必属于country类（后代选择器）*/
.country p{
    color: blue;
}
```
> 类名不能以数字开头
## 通用选择器
选择页面上的所有元素
```CSS
* {
    font-size: 14px;
}
```
## 分组选择器
选择若干元素，使其具有相同样式
```CSS
p,h1,h2 {
    font-size: 14px;
}
```
# 添加CSS
## 外部CSS
```HTML
<head>
    <link rel="stylesheet" type="text/css" href="/css/mystyle.css">
</head>
```
> 注意，属性值和单位之间不应有空格（如`14px`）
## 内部CSS
``` HTML
<head>
    <style>
        body{
            background-color: yellow;
        }
        h1{
            font-size: 18px;
        }
    </style>
</head>
```
## 行内CSS
用于给单个元素设置样式
```HTML
<h1 style="color: red;">红头文件</h1>
```
## 多个样式表
如果在多个样式表中为同一选择器定义了属性，将显示最后读取到的样式表的值
``` HTML
<head>
    <link rel="stylesheet" type="text/css" href="/css/mystyle.css">
    <style>
        body{
            background-color: yellow;
        }
        h1{
            font-size: 18px;
        }
    </style>
</head>
```
其中`/css/mystyle.css`为
``` CSS
body{
    background-color: blue;
}
```
如上例所示，因为`<link>`早于`<style>`，背景会显示黄色
## 层叠顺序
行内样式优先级最高，其次是外部和内部样式表，最后是浏览器默认样式表
# 注释
使用`/*注释内容*/`进行注释（包括在内部样式表中）
注释可以跨行
```CSS
h1{
    /*
    color: red;
    text-align: center;
    */
    font-size: 18px;
}
```
# 颜色
使用RGB、HEX、HSL、RGBA、HSLA等定义一个颜色
## 颜色名
有140种标准颜色名
## 背景色
修改`background-color`属性
```CSS
body{
    background-color: #66ccff;
}
div{
    background-color: #ff3300;
}
```
## 文本颜色
修改`color`属性
```CSS
h1{
    color: #006600;
}
p{
    color: #663377;
}
```
## 边框颜色
修改`border`属性
```CSS
div.div_1{
    border: 2px solid #cc3388;
}
div.div2{
    border: 2px solid #553377;
```
## 颜色值
### RGB颜色
通过公式`rgb(red,green,blue)`定义颜色
每个参数`red`，`green`，`blue`定义了0到255之间的颜色强度
如黑色`rgb(0,0,0)`，白色`rgb(255,255,255)`
如果三个光源强度相同，则显示为灰色。如`rgb(127,127,127)`
#### RGBA值
拓展了一个A表示不透明度。rgba(red,green,blue,alpha)
介于0到1之间，0表示完全透明，1表示完全不透明
如`rgba(255,255,255,0.5)`
> 该颜色会透出一部分所覆盖的颜色
假设本颜色为`rgba(r,g,b,a)`
覆盖下的颜色为`rgb(r',g',b')`
混合后颜色为`rgb(r*a+r'*(1-a),g*a+g'*(1-a),b*a+b'*(1-a))`
即两个颜色进行加权平均
### HEX颜色
使用十六进制值指定颜色，语法为`#rrggbb`
其中`rr`、`gg`、`bb`为介于`00`到`ff`的十六进制值，公式类似于RGB
### HSL颜色
使用色相（**H**ue）、饱和度（**S**aturation）、亮度（**L**ightness）指定颜色
色相是色轮上从0到360的度数。0是红色，120是绿色，240是蓝色
饱和度表示颜色的鲜艳程度，反映了红色、绿色、蓝色光的方差
亮度表示颜色的总能量，反映了红色、绿色、蓝色光的平均强度
> 定性地说，色相越接近0（或360）越红，越接近120越绿，越接近240越蓝
饱和度越接近0越灰，越接近1越鲜艳
亮度越接近0越黑，越接近1越白
在亮度L为0时，怎么调整都是黑。亮度为1时，怎么调整都是白。
在饱和度S为0时，怎么调整H都是灰，但调整L可以改变灰的程度。
#### HSLA值
使用A扩展了颜色的透明度，效果等同于RGBA的A。
# 背景
## 背景色`background-color`
```CSS
body{
    background-color: #00cc00;
}
```
### 不透明度`opacity`
```CSS
div{
    opacity: 0.5;
}
```
当使用`opacity`属性为元素背景添加透明度时，其**所有子元素**也会增加透明度
### 使用RGBA的透明度
如果只希望增加背景的透明度，可以通过设置背景色为RGBA颜色
```CSS
div{
    background-color: rgba(255,255,255,0.5);
}
```
## 背景图像`background-image`
使用`background-image`属性指定用作元素背景的图像
默认情况下图像会保持原大小，重复覆盖整个元素
```CSS
body{
    background-image: url("bgpaper.jpg");
}
```
> 注意文字和背景的搭配，以免干扰阅读
## 背景重复`background-repeat`
如果有些背景图不适合在水平和垂直方向上都重复（默认是这样的），可以通过`background-repeat`属性调整
如果想只水平（垂直）重复，可以设置为`repeat-x`（`repeat-y`）
如果不想重复，可以设置为`no-repeat`
### 背景位置`background-position`
如果想指定背景图的起始位置，可通过`background-position`属性设置
```CSS
body{
    background-image: url("bg.jpg");
    background-repeat: repeat-x;
    background-position: bottom;
}
```
上方例子将背景图设置在网页底部，并且只进行水平重复
## 背景附着`background-attachment`
指定背景图像是应该随页面的其余部分一起滚动还是固定（默认滚动）
固定背景实例：
```CSS
body{
    background-image: url("bg.jpg");
    background-attachment: fixed;
}
```
滚动背景实例：
```CSS
body{
    background-image: url("bg.jpg");
    background-attachment: scroll;
}
```
> 实测，在多个类中使用相同的固定背景，这些背景会“共享背景”，只渲染一张全局背景。
## 背景简写
按照`color`、`image`、`repeat`、`attachment`、`position`的顺序，把属性值写在`background`上
```CSS
body{
    background: #ffffff url("bg.jpg") no-repeat scroll left bottom;
}
```
> 属性缺失不要紧，只要按照顺序即可，浏览器会自动跳过无值的属性
# 边框
## 边框属性`border`
可以指定边框的样式、宽度、颜色等
## 样式`border-style`
指定边框的类型
`dotted`：点状边框，由小圆点组成
`dashed`：虚线边框
`solid`：实线边框
`double`：双线边框
`groove`：3D凹槽边框
`ridge`：3D垄状边框
`inset`：3D内陷边框
`outset`：3D外凸边框
`none`：无边框
`hidden`：隐藏边框
> 如果想分别调整四周的边框，可以设置`border-style`为四个值，分别表示上、右、下、左的边框

> 辨析`border-style: none`、`border-style: hidden`、`border-color: rgba(0, 0, 0, 0)`、`border-width: 0`
四种方式都是让边框不可见。区别在于:
`border-style: none`：边框不存在，不占空间，不影响周围布局，浏览器不渲染。
`border-style: hidden`：与`none`基本相同，只在表格中影响相邻单元格的边框。
`border-color: rgba(0, 0, 0, 0)`：仍然占据空间，影响周围布局。
`border-width: 0`：浏览器在计算时会渲染边框，但宽度为0所以不可见。常用于后续可能恢复的场景。
## 宽度`border-width`
指定边框的宽度
可以设为特定大小（单位为`px`/`pt`/`cm`/`em`），也可以使用预设值`thin`/`medium`/`thick`
与样式类似，可以设置为四个值，分别表示上、右、下、左的边框宽度
## 颜色`border-color`
与上述相似。可以使用所有的颜色表示法。
如果未设置`border-color`，将会继承元素的颜色`color`
## 单独设置一边
```CSS
p{
    border-top-style: solid;
    border-right-width: 2px;
}
```
使用`top`/`right`/`bottom`/`left`分别定义上、右、下、左的样式
> 如果设置了1个值（比如给`border-style`），将应用到四边上
如果设置了2个值，将会先给**上下**，再给**左右**
如果设置了3个值，将会先给**上**、再给**左右**，最后给**下**
如果设置了4个值，将会按照**上、右、下、左**的顺序分配
## 边框简写
依次是`border-width`，`border-style`，`border-color`
```CSS
p{
    border: 2px solid #00ffff;
}
```
单独设置一边：
```CSS
p{
    border-bottom: 2px solid #00ffff;
}
```
## 圆角边框`border-radius`
给边框添加圆角（设置圆弧半径）
```CSS
div{
    border: 2px solid black;
    border-radius: 5px;
}
```
# 外边距`margin`
使用`margin`属性在边框之外创建空间
> **`margin`在`border`的外边**

可以分别设置`top`/`right`/`bottom`/`left`定义上、右、下、左的边距
同样也可以简写，方法类似于边框
**可以设置的值：**
- `auto`：浏览器自动计算边距，使其水平居中于自己所属的容器元素
- 长度：以px、pt、cm等单位指定外边距
- %：以元素**宽度的百分比**计算的外边距
- inherit：从父元素继承外边距
> 外边距可以是负值，可能导致重叠

## 外边距合并
外边距的意义是本元素的边框和另一个元素的边框之间距离的最小值
因此，如果A元素的外边距是10，B元素的外边距是5，那么A和B边框的距离就会是10
自合并：某个元素没有边框，也没有填充，上下边距就会合成一个
如果有多个这样的元素，就会全部挤在一起（因为没有边框和填充，相当于边距之间啥也没有）
如果A容器里边装了个B，B的外边距是5，A的外边距是10，总和的外边距还是10
# 内边距`padding`
也叫**填充**
使用`padding`在边框内生成空间
和外边距类似，可以分别设置，也可以简写。但不允许负值
没有`auto`值
## 与长宽的关系
`width`表示**内容区域**或者说**元素**的宽度。
内容区域外边是内边距，再外边是边框，再外边是外边距
如果想在宽度不变的情况下设置内边距，可以修改`box-sizing: border-box;`
在这种情况下，页面的`width`将表示`border`两端的宽度，也就是原来的 $width+2*border+2*padding$
# 高度`height`和宽度`width`
默认指的是元素的高度和宽度（内边距`padding`之间的范围）
**可以设置的值：**
- `auto`：默认值
- 长度：用带单位的长度指定
- %：以包含它的块的长/宽百分比定义
- initial：默认值
- inherit：继承父类
## 最大宽度`max-width`
在容器大小调整时，能够自适应缩小。最大只能这么大
相比而言`width`是固定的，如果比容器大就会溢出，或者自动出现水平滚动条
# 框模型
也叫**盒**模型。所有HTML都可以视为方框。
最外层是外边距`padding`，里面是边框`border`，里边是内边距（也叫填充）`padding`，最里面是元素`element`。
其中外边距、内边距都是透明的，边框可以设置样式。
内边距会显示元素的背景，外边距是透明的，显示父元素的背景
边框同样会显示元素的背景。如果边框是半透明的，或者是存在透明部分（`dotted`或者`dashed`），就能看出来
# 轮廓`outline`
在**边框外**绘制一条线，凸显元素
与边框`border`的不同之处在于：
轮廓绘制在边框之外，可能和其他元素重叠（外边距不够的情况下）
轮廓不是元素尺寸的一部分，宽和高不受轮廓线的影响
## 轮廓样式`outline-style`
通过`outline-style`设置，可选的样式和边框的样式相同。
## 轮廓宽度`outline-width`
可选择的值包括特定尺寸，或者`thin`、`medium`、`thick`之一
## 轮廓颜色`outline-color`
可以使用多种颜色名称定义轮廓颜色
`outline-color: invert`已经不再支持
## 轮廓简写
按照`width`、`style`、`color`的顺序写。其中`style`是必要的。
## 轮廓偏移`outline-offset`
在轮廓和边框之前添加空隙
# 文本
## 文本颜色`color`
可以使用多种颜色名称定义轮廓颜色
## 文本对齐`text-align`
可以左对齐`left`，右对齐`right`，居中对齐`center`，两端对齐`justify`
### 文本方向
