# ES6+ 语法

## 变量定义

推荐只用`let`和`const`，不用`var`

### 可变变量`let`

变量可以重新赋值
作用域是块级作用域（仅在所属的`{}`内有效）
可用于储存临时状态

```js
let message = "Hello world!";
message = "Update!";
```

### 常量`const`

常量不能重新赋值（但常量对象和数组内容可以赋值）
作用域是块级作用域
如果数据不会变化，推荐用`const`

```js
const baseURL = "https://api.whatever.com"; // API地址在运行过程中不会改
```

## 箭头函数

对普通函数的一种简写

### 语法

```js
// 普通函数
function add(a, b) {
  return a + b;
}
// 箭头函数
const add = (a, b) => a + b;
```

> 省略了`function`关键字，更简洁。
> 如果只用一个`return`，可以省略`{}`和`return`

**常见用法：事件监听**
html：

```HTML
<template>
    <button @click="sayHello">click me</button>
</template>
```

js：

```js
const sayHello = () console.log("Hello world!")
```

> 常用于 method 或事件回调

### `this`绑定

见下例：

```js
const obj = {
    value: 42,
    regularFunction: function(){
        console.log(this->value); // this指向当前对象
    },
    arrowFunction: function() => {
        console.log(this->value); // this指向外部作用域的this（可能是undefined）
    }
}
obj.regularFunction(); // 输出42
obj.arrowFunciton();   // 输出undefined（假如外部作用域的this没有value属性）
```

> 箭头函数适合用于保持`this`一致性的场景，例如回调函数或嵌套函数中

**回调函数：**

```js
const obj = {
  values: [1, 2, 3],
  printValues: function () {
    this.values.forEach((value) => {
      console.log(value * this.multiplier);
    });
  },
  multiplier: 2,
};

obj.printValues(); // 输出2 4 6
```

> 在本例中`this.multiplier`的`this`继承自`printValues`，正确访问了`obj.multiplier`

**嵌套函数：**

```js
const obj = {
  value: 10,
  outerFunction: function () {
    const innerFunction = () => {
      console.log(this.value);
    };
    innerFunction();
  },
};

obj.outerFunction(); // 输出10
```

> 在本例中`this.value`的`this`继承自`outerFunction`，访问`obj.value`

## 对象解构

### 基本解构

解构用于快速提取对象的属性

```js
const person = { name: "Tom", age: 25 };
const { name, age } = person;
console.log(name, age); // "Tom" 25
```

应用场景：`props`解构

```js
const props = defineProps(["title", "content"]);
const { title, content } = props;
```

## 数组解构

类似于对象解构，快速提取数组元素

```js
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second); // 1 2
```

解构使代码更简单，避免手动索引

## 模板字符串` `` `和`${}`

```js
const name = "Vue";
console.log(`Hello, ${name}!`); // Hello, Vue!
// 不用模板字符串的写法
console.log("Hello, " + name + "!");
```

### 特点

- 支持多行字符串

```js
const text1 = "第一行\n第二行";
// 使用模板字符串可以直接换行
const text2 = `第一行
第二行`;
```

- 支持表达式运算

```js
const a = 10,
  b = 20;
console.log(`a + b = ${a + b}`);
// 等效于
console.log("a + b = " + (a + b));
```

### 应用：属性动态绑定

- 动态`class`绑定

```HTML
<template>
    <div :class="`box ${isActive ? 'active' : ''}`">
        Hello, Vue!
    </div>
</template>
```

- 动态`style`绑定

```HTML
<template>
    <div :style="`color: ${textColor}; font-size: ${fontSize}px`">
        Dynamic Style;
    </div>
</template>
```

> 动态绑定类名、样式很方便

# DOM 操作（Vue 里很少直接用）

> DOM（**D**ocument **O**bject **M**odel，文档对象模型）是 JavaScript 操作网页元素的接口
> JavaScript 允许通过 DOM API 访问和修改 HTML 结构、内容、样式

在原生 JavaScript 中（不使用 Vue），操作 DOM 的方式是：

```js
// 获取ID为"app"的元素
const app = document.getElementById("app");
// 获取class为"box"的元素（返回选择器第一个匹配的元素）
const box = document.querySelector(".box");
// 获取所有class为"item"的元素（返回一个Nodelist）
const items = document.querySelectorAll(".item");

// 修改元素的文本内容
box.textContent = "Updated!";
// 修改元素的样式
app.style.color = "red";
```

这些方法在 Vue 中不常用，因为 Vue 采用**数据驱动 DOM**的方式，直接操作数据即可让视图更新，无需手动操作 DOM。

## 数据驱动 DOM

只需修改 Vue 组件中的数据，Vue 就会自动更新 DOM。
**传统方式：**

```HTML
<div id="app">Hello</div>
<button onclick="changeText()">修改文本</button>

<script>
    function changeText(){
        document.getElementById("app").textContent = "Hello, html!";
    }
</script>
```

**Vue 方式：**

```HTML
<template>
    <div>{{massage}}</div>
    <button @click="changeText">修改文本</button>
</template>
<script setup>
    import {ref} from "vue";
    const message = ref("Hello");
    const changeText = () => {
        massage.value = "Hello, Vue!";
    };
</script>
```

**Vue 数据驱动 DOM 的好处：**

- 传统方式需要手动获取 DOM 元素并修改。Vue 只需修改数据，自动更新 DOM。
- 传统方式的修改逻辑散落各处，难以维护。Vue 逻辑清晰，数据和视图绑定。
- 传统方式频繁操作 DOM，可能影响性能。Vue 内部优化，减少不必要的 DOM 操作。

## Vue 仍然需要手动操作 DOM 的情况

- 获取原生 DOM 元素的尺寸、位置信息（如`offsetHeight`，`getBoundingClientRect()`）
- 操作非 Vue 组件控制的第三方库（如`Chart.js`，`Three.js`）
- 手动聚焦某个输入框（`input.focus()`）
- 在`transition`过渡动画中监听原生事件

# `Promise` & `async`/`await`异步方法

在 JavaScript 中，`Promise`是一种用于处理**异步操作**的机制
它表示某个操作的最终完成及其结果的值

**Promise 的三种状态：**

- `pending`（进行中）：初始状态，异步操作未完成
- `fulfilled`（已成功）：操作成功完成，`Promise`返回结果
- `rejected`（已失败）：操作失败，`Promise`返回错误

**Promise 示例：**

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("数据加载成功！");
    } else {
      reject("数据加载失败！");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log(result); // 输出"数据加载成功！"
  })
  .catch((error) => {
    console.log(error); // 如果success=false，就输出"数据加载失败！"
  });
```

## `async`/`await`

取代`then`写法，更像同步代码，更容易理解
**示例：**

```js
const fetchData = async () => {
  try {
    const res = await fetch("https://api.example.com/data"); // 发送请求
    const data = await res.json(); // 解析json
    console.log("获取到了数据：", data);
  } catch (error) {
    console.log("请求失败！", error);
  }
};
```

`await`表示**等待异步操作完成**，然后执行下一步
`try...catch`用于捕获错误，防止请求失败导致程序崩溃

## 应用例：生命周期钩子

示例：

```HTML
<template>
  <div v-if="data">{{ data }}</div>
  <div v-else>加载中...</data>
</template>
<script setup>
  import { ref, onMonted } from "vue";
  const data = ref(null);
  const fetchData = async () => {
    try{
      const res = await fetch("https://api.example.com/data");
      data.value = await res.json(); // Vue需要.value访问ref数据
    }catch(error){
      console.log("请求失败：", error);
    }
  };

  onMounted(fetchData); // 组件加载时执行
</script>
```

> 生命周期钩子：指的是 Vue 组件从创建到销毁的过程中，在各个阶段执行特定的逻辑
> （最常用的就是`onMounted`：组件挂载到 DOM 时执行）

`const data = ref(null);`：创建了一个响应式引用。当`data`发生变化时，Vue 会自动更新。
`ref()`返回的是一个对象（`{value: null}`），因此`data.value`才是真正存储的值

### 关键：fetchData 异步函数

- `const fetchData = async () => {...}`：
  通过`async`关键字**把函数变成异步的**，这个函数会返回一个`Promise`
  在异步函数里才能用`await`关键字进行异步操作
- `await fetch("https://api.example.com/data")`：
  通过`fetch`调用 API，发送 HTTP 请求，获取数据，返回一个`Promise`
  `await`让**JavaScript 暂停执行**，直到`fetch`完成并返回到`res`（成功或失败）
- `await res.json()`：
  和前一步类似，也是一个异步操作，等待解析 json 数据
  解析后赋值给`data.value`。由于`data`是响应式的，检测到变化后更新视图
- `try...catch`：
  处理错误，防止崩溃。如果出错了，还能打印错误信息

## `watchEffect` + 异步请求

在 Vue3 中，`watchEffect`是一个**响应式监听函数**，它会**自动收集依赖**，并在依赖变化时**重新执行**回调函数
在下例中，`watchEffect(fetchData)`会自动**监听 url 变化**，在 url 变动时**自动重新请求**数据。

```HTML
<template>
  <div v-if="data">{{ data }}</div>
  <div v-else>加载中...</div>
</template>

<script setup>
import { ref, watchEffect } from "vue";

const data = ref(null);
const url = ref("https://api.example.com/data");

const fetchData = async () => {
  try {
    const res = await fetch(url.value);
    data.value = await res.json();
  } catch (error) {
    console.error("请求失败:", error);
  }
};

// 监听 url 变化，自动重新请求
watchEffect(fetchData);
</script>
```

`watchEffect`首先会立刻执行`fetchData()`，并**自动监听其内部的所有响应式变量**
当 url 变化时，Vue 会自动重新执行`fetchData()`，从新的 url 处获取数据
这种方式适用于依赖数据动态变化的情况

# 数组方法

**Vue 里常用数组来进行**

- 渲染列表（`v-for`）
- 过滤数据（搜索、筛选）
- 计算数据（统计、变换）

使用数组方法可以使代码更加简洁。

## `map()`

对数组的每个元素执行操作，返回一个新数组，不会修改原数组

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // 输出[2,4,6]
```

`map`的成员是一个回调函数对象，它会对数组中的每个元素依次执行该回调函数。

### 其他写法：

- 使用普通函数

```js
const numbers = [1, 2, 3];
function double(n) {
  return n * 2;
}
const doubled = numbers.map(double);
console.log(doubled);
```

- 使用匿名函数

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(function (n) {
  return n * 2;
});
console.log(doubled);
```

## `filter()`

返回一个新数组，只包含符合条件的元素，不会修改原数组

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // 输出：[2,4,6]
```

和`map`类似，`filter`的成员也是回调函数对象

## `find()`

找到第一个符合条件的元素，并返回它（如果找不到就返回`undefined`）
不会修改原数组

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Cindy" },
];
const user = users.find((u) => u.id === 1);
console.log(users); // 输出：{ id: 1, name: "Alice" }
```

## `forEach()`

遍历数组，对数组每个元素执行某个操作。**不会返回新数组，不会修改原数组**

```js
const numbers = [1, 2, 3];
numbers.forEach((n) => console.log(n));
// 输出：1
// 2
// 3
```

## 其他数组方法

- `some()`：**至少有一个**元素符合条件：`numbers.some(n => n > 5)`
- `every()`：**所有**元素都符合条件：`numbers.every(n => n > 5)`
- `reduce()`：求和
- `sort()`：排序

# 数组应用

**处理数据的三种方式：**

- Methods（方法）：用户交互时调用的函数
- Computed（计算属性）：根据已有的数据计算新数据，自动更新
- Watch（侦听器）：监听数据变化并执行操作

数组的应用主要是 Methods，结合 Vue 的`v-for`（渲染列表）、`v-model`（绑定输入）进行数据的过滤和计算。

## 渲染列表`v-for`

> 列表数据通常是从后端获取的，我们可以使用 Vue 方法来动态更新列表
> 当用户点击按钮或执行操作时，调用方法来修改数据

**渲染列表示例：**

```HTML
<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.name}} - ￥{{item.price}}
        <button @click="removeItem(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import {ref} from "vue";
  const items = ref([
    {id: 1, name: "手机", price: 1999},
    {id: 2, name: "电脑", price: 5999},
    {id: 3, name: "耳机", price: 299}
  ]);
  // 删除方法
  const removeItem = (id)=>{
    items.value = items.value.filter(item=>item.id!==id);
  };
</script>
```

### 解析

- `v-for="item in items"`：用于循环渲染一个列表或者对象
  `items`是一个数组或对象，`v-for`会遍历其中的每个元素
  `item`是遍历过程中当前项的别名，每次渲染的内容为该`item`的`name`和`price`属性
- `:key="item.id"`：给每个列表项提供一个唯一标记（供方法修改）
  帮助 Vue 跟踪每个元素，高效更新 DOM。当某一项变化时，Vue 知道具体是哪一项发生了变化。

## 过滤数据

> 当用户输入关键词时，商品列表会实时更新，只显示匹配的商品

```HTML
<template>
  <div>
    <input v-model="searchQuery" placeholder="搜索商品..." />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">
        {{item.name}} - ￥{{item.price}}
      </li>
    </ul>
  </div>
</template>
<script setup>
  import {ref,computed} from "vue";
  const items = ref([
    {id: 1, name: "手机", price: 1999},
    {id: 2, name: "电脑", price: 5999},
    {id: 3, name: "耳机", price: 299}
  ]);
  const searchQuery = ref(""); //绑定搜索框输入
  const filteredItems = computed(()=>{
    return items.value.filter(item=>item.name.includes(searchQuery.value));
  });
</script>
```

### 解析

- `v-model="searchQuery"`绑定搜索框输入
  这里绑定了`searchQuery`这个`ref`变量
  实现了双向绑定：用户`input`的内容会更新`searchQuery`，而`searchQuery`的变化也会同步到输入框
- `computed(()=>{...})`计算属性
  `filteredItems`是一个计算属性，值依赖`items`和`searchQuery`这两个`ref`
  `items.value.filter(...)`筛选`items`数组，`item=>item.name.includes(searchQuery.value)`返回包含关键词的商品

**计算属性`computed`和响应式引用`ref`**

- `ref`响应式变量内部封装了一个对象，必须通过`.value`访问和修改它。
  适用于可变数据（用户输入、计数器）、存储组件的状态（`isLoading`、`userInfo`）
- `computed`计算属性创建**派生**的响应式数据，**依赖于**其他的响应式数据，并且会自动缓存
  如上例中，`filteredItems`依赖于`items`和`searchQuery`这两个`ref`
  `filteredItems`会追踪其变化，并且自动变化
- `ref`是可读写的，而`computed`只读，不能主动修改（只能随依赖的变化而变化）
  （除非特殊定义一个可写`computed`，能够反向影响`ref`的值）
- `computed`也能依赖`computed`
  Vue 会自动追踪所有依赖关系，并自动优化（如果依赖不变，响应就不变）

## 计算数据

> 计算购物车总价

```HTML
<template>
  <div>
    <h2>购物车</h2>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.name}} -￥{{item.price}} × {{item.quantity}}
      </li>
    </ul>
    <h3>总价：￥{{totalPrice}}</h3>
  </div>
</template>
<script setup>
  import {ref,computed} from "vue";
  const items = ref([
    {id: 1, name: "手机", price: 1999, quantity: 1},
    {id: 2, name: "电脑", price: 5999, quantity: 1},
    {id: 3, name: "耳机", price: 299, quantity: 2}
  ]);
  // 计算属性：计算总价
  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });
</script>
```

### 解析

- `items.value.reduce(...)`：计算所有商品的总价

**语法：**

```js
array.reduce((累加变量，当前元素) => {计算逻辑}, 初始值)
```

以`items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)`为例来说
即对于`items.value`的每个`item`，将其`price * quantity`加到`sum`上，且`sum`初始值为 0

# Vue 相关的 JS 特性

## 动态对象属性名

对象属性名是动态的，可以动态生成对象结构，或者动态属性绑定
**例：**

```js
const key = "name";
const obj = {
  [key]: "Vue",
};
console.log(obj); // 输出：{name: "Vue"}
```

> `[key]`不是普通的属性名，而是变量`key`的值，即`"name"`
> 此时`obj`等价于`{name: "Vue"}`

### `:key`绑定动态属性

在`v-for`里需要`:key`绑定唯一标识。通常是`id`，但也可以是动态属性

```html
<template>
  <ul>
    <li v-for="item in items" :key="item[dynamicKey]">
      {{item.name}} - ￥{{item.price}}
    </li>
  </ul>
</template>
<script setup>
  import { ref } from "vue";
  const dynamicKey = ref("id");
  const items = ref([
    { id: 1, name: "手机", price: 1999 },
    { id: 2, name: "电脑", price: 5999 },
  ]);
</script>
```

> `:key="item[dynamicKey]"`使`key`变成动态属性，随`dynamicKey`变化
> 刚开始`dynamicKey="id"`，则`:key="item.id"`
> 可以改成`dynamicKey="name"`，则`:key="item.name"`

添加一个方法，切换`dynamicKey`

```HTML
<template>
...
  <button @click="toggleKey">当前Key：{{dynamicKey}}</button>
...
</template>
<script setup>
···
  // dynamicKey在"name"和"id"之间切换
  const toggleKey = () => {
    dynamicKey.value = dynamicKey.value === "id" ? "name" : "id";
  };
···
</script>
```

**模板语法**特性：自动解包
在`<template>`里，`:key="item[dynamicKey]"`中的`dynamicKey`实际上指的是`dynamicKey.value`
因为`dynamicKey`是一个`ref`变量（对象），在`<template>`里会自动解包为`dynamicKey.value`
而在`<script>`里不能自动解包，只能老老实实写`dynamicKey.value`

### 动态创建对象

输入`key`和`value`，动态创建对象

```HTML
<template>
  <div>
    <input v-model="newKey" placeholder="输入属性名" />
    <input v-model="newValue" placeholder="输入值" />
    <button @click="addProperty">添加属性</button>
    <pre>{{obj}}</pre>
  </div>
</template>
<script setup>
  import {ref, reactive} from "vue";
  const obj = reactive({});// 初始空对象
  const newKey = ref("");
  const newValue = ref("");
  const addProperty = () => {
    if(newKey.value){
      obj[newKey.value] = newValue.value;
    }
  };
</script>
```

> `v-model`绑定到输入框。用户输入属性名和值后，`newKey.value`和`newValue.value`会自动更新
> 动态属性名`[newKey.value]`提取出字符串作为属性名

**另一种写法：**

```js
···
const obj = ref({});
···
const addProperty = () => {
  if(newKey.value){
    obj.value = {...obj.value, [newKey.value]: newValue.value};
  }
};
···
```

#### 用`reactive`和`ref`有什么不同？

- **根本原因：**`reactive`返回的是**Proxy 代理对象**，而`ref`进行了**对象封装**
- `reactive`通过 Proxy 拦截属性的读取和写入，所以它可以追踪属性的新增、删除、修改
- `ref`返回的是一个对象，必须用`.value`访问数据
- `reactive`可以直接访问和修改属性（`obj.prop`），而`ref`需要`.value`才能访问封装在内部的对象（`obj.value.prop`）
- `ref`不能检测新增属性，只能检测属性的变化。也就是说如果写成下面写法的话，`obj.value`确实会被修改，但不会被`ref`检测到

```js
···
const obj = ref({});
···
const addProperty = () => {
  if(newKey.value){
    obj.value[newKey.value] = newValue.value; // 检测不到
  }
};
···
```

#### `reactive`和`ref`的选择

- 如果保存基本类型（如`number`，`string`，`boolean`），或对象不需要新增属性，推荐使用`ref`
- 如果保存对象，并且需要**动态新增属性**，推荐使用`reactive`
  如果想对 ref 进行新增属性，则必须采用`obj.value = {...obj.value, [newKey.value]: newValue.value};`的写法
  对整个对象进行拷贝，添加新的属性，并更新，这样`ref`才能检测到变化

## 函数式编程

### methods

主要用于处理用户交互，比如点击按钮、提交表单等

```HTML
<template>
  <div>
    <button @click="increment">+1</button>
    <p>计数：{{count}}</p>
  </div>
</template>
<script>
  import {ref} from "vue";
  const count = ref(0);
  const increment = () => {
    count.value += 1;
  };
</script>
```

> 每次点击`<button>`时触发`increment`方法，使`count`+1
> 修改数据时被`ref`检测到，自动渲染到表单

### 纯函数

指的是**不修改全局变量、相同输入总是产生相同输出、无副作用**的方法

```js
const add = (a, b) => a + b; // 输出只和输入有关，并且无其他影响
```

> 可用在`computed`计算属性中，使其自动更新

# 解构 & 拓展运算符

## 解构赋值

快速从对象或数组中提取数据并赋值给变量
常见应用：提取对象成员、处理函数参数、解构 API 返回的数据

### 对象解构

```js
const obj = { name: "Vue", version: "3.0" };
// 解构方法
const { name, version } = obj;
// 传统方法
const name = obj.name;
const version = obj.version;
```

解构方法更简洁直观，直接从对象里提取对应属性

### Vue `props`解构

`props`（属性，**Prop**erties）是**父组件**传递给**子组件**的**只读**信息
用于让子组件可以接收外部数据，而不用自己定义

**例：**

- 定义子组件：`SoftwareInfo.vue`

```HTML
<template>
  <div class="info-card">
    <p><strong>软件名称：</strong>{{name}}</p>
    <p><strong>版本号：</strong>{{version}}</p>
  </div>
</template>
<script setup>
  import {computed, watch} from "vue";
  // 接收props
  const props = defineProps({
    name: String,
    version: String
  });
  // 监听props变化
  watch(() => props.version, (newVal, oldVal) => {
    console.log(`版本更新：${oldVal} -> ${newVal}`);
  });
</script>
<style scoped>
  .info-card{
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>
```

- 定义父组件：`App.vue`

```HTML
<template>
  <div>
    <h1>软件信息列表</h1>
    <!--传递不同的props-->
    <SoftwareInfo name="Vue" version="3.3.0" />
    <SoftwareInfo name="React" version="18.2.0" />
    <SoftwareInfo name="Angular" version="15.0.0" />
    <!--通过按钮修改props-->
    <button @click="updateVersion">更新 Vue 版本</button>
    <SoftwareInfo :name="dynamicName" :version="dynamicVersion" />
  </div>
</template>
<script setup>
  import {ref} from "vue";
  import SoftwareInfo from "./SoftwareInfo.vue";
  // 定义动态数据
  const dynamicName = ref("Vue");
  const dynamicVersion = ref("3.3.0");
  // 更新 props
  const updateVersion = () => {
    dynamicVersion.value = "3.4.0";
  };
</script>
```

> 在本例中，定义了`<SoftwareInfo>`子组件，父组件把`name`和`version`两个`props`传递给子组件
> 子组件中的`watch`监听`version`的变化，在变化时打印到控制台

#### 另一种传递方法：`v-bind`

```html
<ChildComponent v-bind="{name, version}" />
```

等价于：

```html
<ChildComponent :name="name" :version="version" />
```

> 用`v-bind="数组"`的好处就是扩展性好

#### 属性加`":"`有什么用？

加冒号的属性会解析为 JavaScript 表达式，不加冒号则直接传递字符串

- `<SoftwareInfo name="Vue" version="3.3.0" />`（静态）
  字符串`"Vue"`和`"3.3.0"`直接传递给子组件的`prop`
- `<SoftwareInfo :name="dynamicName" :version="dynamicVersion" />`（动态）
  Vue 解析变量`dynamicName`和`dynamicVersion`的值，将其绑定到`prop`，传递给子组件

和**插值语法`{{···}}`**的区别：
在 HTML **属性**中，不能直接使用插值语法，只能用冒号解析表达式
插值语法适用场景：HTML **标签内容**。如`<p>当前软件：{{dynamicName}}</p>`

#### 推荐：`<script setup>`和`<style scoped>`

`setup`的好处：不需要手动`return`；编译阶段直接优化，避免运行时开销；变量、函数仅当前组件可用，不会污染全局
`scoped`的好处：CSS 只作用于当前组件，不会被外部 CSS 干扰，也不会影响外部 CSS（样式隔离）

#### 扩展：`watch`和`watchEffect`的区别：

- `watch`：不仅需要**新值**，也需要**旧值**。监听**特定变量**，需要手动指定
- `watchEffect`：只关心**变化后**的值，因此更简洁。监听**所有依赖项**，自动收集

**`watch`的语法：**

```js
watch(
  监听的数据,
  (新值, 旧值) => {
    /* 变化后执行的逻辑 */
  },
  可能存在的配置项
);
```

> 这里监听的数据推荐使用`getter`函数，即`() => 数据`的形式，能够自动追踪非`ref`变量（如`props`）
> 如果监听的数据是`ref`或`reactive`，则不需要。直接写数据即可

**如果要监听多个项，可以写成数组形式：**

```js
watch(
  [监听的数据1, 监听的数据2, 监听的数据3],
  ([新值1, 新值2, 新值3], [旧值1, 旧值2, 旧值3]) => {
    /* 任何一个数据变化后执行的逻辑 */
  },
  配置项
);
```

**配置项例：深层监听**
如果监听整个`reactive`，需要加`{deep:true}`，否则 Vue 只会监听对象的**引用**变化，而不会监听其内部属性

```js
const state = reactive({ version: "1.0.0", name: "VueApp" });
watch(state, (newState, oldState) => {
  console.log("状态变化：", oldState, newState);
});
```

### 方法参数解构

通过解构，`methods`只提取需要的数据

```HTML
<template>
  <button @click="showInfo({name: "Vue", version: "3.3.0"})">
    点击查看信息
  </button>
</template>
<script setup>
  const showInfo = ({name, version}) => {
    console.log(`框架：${name}，版本：${version}`);
  };
</script>
```

`showInfo`接收一个对象，直接解构`name`和`version`
避免在函数体内使用`obj.name`、`obj.version`这样一层层取值，代码更清晰

#### 默认参数结合解构

通过默认参数结合结构，可以在参数缺少时提供默认值，避免`undefined`错误

```js
const showInfo = ({ name = "未知框架", version = "未知版本" } = {}) => {
  console.log(`框架：${name}，版本：${version}`);
};

showInfo(); // 框架：未知框架，版本：未知版本
showInfo({ name: "Vue" }); // 框架：Vue，版本：未知版本
```

- 函数调用时**没有传入某个参数字段**（即`showInfo({ name: "Vue" })`的情况）
  在解构时自动填充默认值`version = "未知版本"`
- 函数调用时**没有传入参数对象**（即`showInfo()`的情况）
  在解构时提供默认空对象` = {}`，属性可以从空对象中获取`undefined`，并采用默认值

## 扩展运算符`...`

### 对象扩展

```js
const obj1 = { name: "Vue" };
const obj2 = { ...obj1, version: "3.0" };
console.log(obj2); // {name: "Vue", version: "3.0"}
```

`...obj1`复制`obj1`的所有属性，`version: "3.0"`添加新的属性

### 数组扩展

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

`...arr1`复制`arr1`的所有属性，`4, 5`添加到`arr2`里

### 合并`props`传递

```HTML
<template>
  <ChildComponent v-bind="{ ...baseProps, extraProps: "额外数据" }" />
</template>
<script setup>
  import {reactive} from "vue";
  import ChildComponent from "./ChildComponent.vue";
  const baseProps = reactive({name: "Vue", version: "3.0"});
</script>
```

> 用`v-bind` + `...`，可以很方便地添加在`props`上添加额外数据

# 模块化

目标：把代码拆分成独立的文件，按需导入，提高**复用性**，避免全局**变量污染**

## ES6 模块化

每个`.vue`组件都是一个 ES6 模块

### 导出`export` 和导入 `import`

一个模块可以导出变量、函数、类等内容

```js
// 导出函数
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// 导出对象
const utils = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
};
export default utils;
```

> 一个 vue 里只能有一个 `export default` 默认导出，用于导出整个模板对象

**`export`用于命名导出**，可以导出多个变量、函数、类等

```js
export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

导出了`sum`和`multiply`这两个函数，可以被其他模块**按需**导入。例如

```js
import { sum, multiply } from "./utils.js"; // 必须使用花括号
console.log(sum(2, 3));
console.log(multiply(2, 3));
```

> 在**命名导出**中，`import`的变量名必须和`export`的一致

**`export default`用于默认导出**，一个模块只能有一个

```js
const utils = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
};
export default utils;
```

导出了`utils`对象，包含`sum`和`multiply`，其他模块如此导入：

```js
import utils from "./utils.js"; // 不需要花括号
console.log(utils.sum(2, 3));
console.log(utils.multiply(2, 3));
```

默认导出在导入时允许**自由命名**，因此不需要花括号。还可以这么写：

```js
import myUtils from "./utils.js"; // 自由命名
console.log(myUtils.sum(2, 3));
console.log(myUtils.multiply(2, 3));
```

## 单文件组件的`export default`和`<script setup>`

在单文件组件中，每个**组件**通常使用`export default`导出

**子组件：`MyComponent.vue`**

```HTML
<template>
  <p>{{message}}</p>
</template>
<script>
  export default {
    name: "MyComponent",
    data() {
      return {
        message: "Hello world!"
      };
    }
  };
</script>
```

> `export default`使`MyComponent.vue`成为一个模块，可以被其他组件导入

**父组件：**

```HTML
<template>
  <div><MyComponent /></div>
</template>
<script>
  import MyComponent from "./MyComponent.vue"; // 导入组件
  export default {
    components: {
      MyComponent // 注册组件
    }
  };
</script>
```

> `import MyComponent from "./MyComponent.vue"`导入组件
> `components: { MyComponent }`注册组件
> 之后在`<template>`里使用它

### 使用`<script setup>`

可以使用`<script setup>`简化`export default`和`return`

**使用`<script setup>`的子组件：**

```HTML
<template>
  <p>{{message}}</p>
</template>
<script setup>
  import {ref} from "vue";
  const message = ref("Hello world!");
</script>
```

**使用`<script setup>`的父组件：**

```HTML
<template>
  <div><MyComponent /></div>
</template>
<script setup>
  import MyComponent from "./MyComponent.vue"; // 导入组件，无需注册
</script>
```

## 组合式 API 的`export default`和`<script setup>`

组合式 API 指的是**函数式**的方式（`data`、`methods`、`computed`）组织逻辑

**传统方法：**`data`、`methods`、`computed`分离

```js
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
```

> 这种方法下，变量定义在`data()`，方法定义在`methods`，逻辑分散

**`<script setup>`写法：**

```HTML
<script setup>
  import {ref} from "vue";
  const count = ref(0);
  const increment = () => count.value++;
</script>
```

> 改进点：
> `count`和`increment`直接定义，不需要`data()`和`methods` > `<script setup>`自动暴露变量，不需要`return`

### 逻辑封装

如果 count 逻辑需要在多个组件中复用，可以**封装成一个普通函数**

```js
import {ref} from "vue";
export function useCounter() {
  const count = ref(0);
  count increment = () => count.value++;
  return {count, increment};
}
```

**在组件中使用：**

```HTML
<template>
  <button @click="increment">点击次数：{{count}}</button>
</template>
<script setup>
  import {useCounter} from "./useCounter.js";
  count {count, increment} = useCounter(); // 对象解构
</script>
```

也可以在`.vue`组件中**显式导出逻辑**

```HTML
<template>
  <button @click="increment">点击次数：{{count}}</button>
</template>
<script setup>
  import {ref} from "vue";
  function useCounter() {
    const count = ref(0);
    const increment = () => count++;
    return {count,increment};
  };

  export {useCounter};
</script>
```

父组件不仅可以导入整个`.vue`子**组件**，也可以只导入子组件导出的**逻辑**

```HTML
<template>
  <div>
    <h2>父组件</h2>
    <button @click="increment">点击次数：{{ count }}</button>
  </div>
</template>
<script setup>
  import { useCounter } from "./ChildComponent.vue";
  const {count,increment} = useCounter;
</script>
```

# 事件监听

事件监听（事件绑定）封装了原生`addEventListener`，让事件处理更简洁、高效

## 原生`addEventListener`

在纯 JavaScript，可以用`addEventListener`来监听事件

```js
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});
```

> `addEventListener`监听按钮点击。当按钮被点击时，执行回调函数，打印`"Button clicked!"`

## Vue 事件监听（`@`语法）

Vue 通过`@`提供了更简洁的事件绑定方式

```HTML
<template>
  <button @click="handleClick">Click</button>
</template>
<script setup>
  const handleClick = () => console.log("Button clicked!");
</script>
```

## 事件参数传递

### 通过`event`对象传递参数

```HTML
<template>
  <button @click="handleClick">Click</button>
</template>
<script setup>
  const handleClick = (event) => console.log("Event Object", event);
</script>
```

**`event`对象都能做什么？**

- 获取事件类型：`event.type`（`"click"`）
- 获取触发事件的元素：`event.target`（`"点击的<button>元素"`）
- 获取点击坐标：`event.clientX`，`event.clientY`
- 阻止事件冒泡：`event.stopPropagation()`

  > 冒泡：当点击子组件时，事件会逐级向上冒泡到它的所有上级元素，直到根元素
  > 比如说，一个`<button>`嵌套在`<div>`里。点击`<button>`时，`<div>`也会触发事件

- 阻止默认行为：`event.preventDefault()`
  例：阻止超链接跳转

```HTML
<a href="#" @click="handleClick">跳不了</a>
<script setup>
  const handleClick = () => {
    event.preventDefault(); // 阻止跳转
    console.log("链接跳转被拦截！")
  }
</script>
```

### 传递自定义参数

```HTML
<template>
  <button @click="handleClick(dynamicMessage)">Click</button>
</template>
<script setup>
  import {ref} from "vue";
  const dynamicMessage = ref("Hello Vue");
  const handleClick = (message) => console.log(message);
</script>
```

**同时传递自定义参数和`event`：**

```HTML
<template>
  <!--$event手动传递event-->
  <button @click="handleClick(dynamicMessage, $event)">Click</button>
</template>
<script setup>
  import {ref} from "vue";
  const dynamicMessage = ref("Hello Vue");
  const handleClick = (message, event) => console.log(message, event);
</script>
```

> `$event`代表原生事件对象，手动传递以确保`event`参数不丢失

## 事件修饰符

事件修饰符可以简化事件处理逻辑，避免手动调用`event.stopPropagation()`或者`event.preventDefault()`等

- `.stop`阻止事件冒泡

```HTML
<template>
  <div @click="parentClick">
    <button @click.stop="childClick">点我</button>
  </div>
</template>
<script setup>
  const parentClick = () => console.log("父元素响应"); // 不响应
  const childClick = () => console.log("子元素响应");  // 响应
</script>
```

> 不用`event.stopPropagation()`，代码更清爽

- `.prevent`阻止默认行为

```HTML
<template>
  <a href="#" @click="handleClick">链接被阻止</a>
</template>
<script setup>
  const handleClick = () => console.log("链接被阻止");
</script>
```

- `.self`仅在事件发生在自身时触发（发生在子组件时不触发）
- `.once`事件只触发一次
- `.capture`在捕获阶段触发事件
- `.passive`事件处理器不调用`preventDefault()`，提升滚动性能

## 组件通信`emit`

子组件使用`$emit`触发自定义事件，父组件监听该事件并执行相应逻辑
实现**子**组件向**父**组件传递数据

### 实现流程

- 子组件通过`defineEmits(["事件名"])`声明事件
- 子组件通过`emit("事件名", 数据)`触发事件，并可携带参数
- 父组件在子组件标签通过`<子组件 @事件名="回调函数">`上监听该事件
- 父组件接收数据，并执行`回调函数(参数) => {...}`

**例：**
**子组件**点击按钮后，触发`sendMessage`方法，通过`$emit`事件把数据传给父组件

```HTML
<template>
  <button @click="sendMessage">点击发送</button>
</template>
<script setup>
  import {defineEmits} from "vue";
  const emit = defineEmits(["messageSent"]); // 声明事件
  const sendMessage = () => emit("messageSent", "Hello from Child!"); // 触发事件
</script>
```

> `defineEmits(["messageSent"])`声明子组件支持的事件
> `emit("messageSent", "Hello from Child!")`触发事件，并传递数据字符串

**父组件**在<ChildComponent>上监听`messageSent`事件，获取子组件传来的信息

```HTML
<template>
  <div>
    <ChildComponent @messageSent="handleMessage" />
    <p>子组件消息：{{ message }}</p>
  </div>
</template>
<script setup>
  import {ref} from "vue";
  import ChildComponent from "./ChildComponent.vue";
  const message = ref("");
  const handleMessage = (msg) => message.value = msg;
</script>
```

> `@messageSent="handleMessage"`监听子组件的`handleMessage`事件
> `handleMessage(msg)`接收子组件传来的`msg`并更新`message`，使其显示在模板里
