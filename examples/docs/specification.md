# 代码规范

> 逐步整理中的代码规范，欢迎随时查看

## JavaScript
### 基础规则

#### 不使用分号
每行代码的结尾不使用分号
```javascript
// coding like this
const arr = []
// DONOT coding like this
var arr2 = [];
```

#### 代码缩进： 
所有涉及到 JavaScript 的代码，统一使用 `2空格` 的缩进

```javascript
switch (score) {
  case 5:
    console.log('excellent')
    break
  case 4:
    console.log('great')
    break
  case 3:
    console.log('good')
    break
  default:
    console.log('do better next time')
    break
}
```

#### 对齐
具有包裹性质的代码块，结束标志应与其开始标志所在行的开头对齐，内部缩进 2 个空格
```javascript
const arr = [1, 2, '3']
const arr = arr.map(e => {
  let type = 'Number'
  if (typeof(e) === 'String') {
    type = 'String'
  }
  console.log('e', e, type)
})
```

#### 注释

单行注释，在代码前的单独占一行；斜杠和注释内容中间保留一个空格
```javascript
// 我是一行注释
console.log('done')
```

在代码后的，注释斜杠前保留一个空格
```javascript
console.log('test') // 测试代码
```

多行注释，使用以下格式
```javascript
/**
* 第一行注释
* 第二行注释
* 第三行注释
*/
```
函数或方法的介绍性注释写在函数外面（前面）
```javascript
// 处理数组加和
function sum (arr) {
  let res = 0
  arr.map(num => {
    res += num
  })
  return res
}
```

#### 空格
声明变量或在使用表达式时，符号左右两边各保留 1 个空格
```javascript
const num = 10
num && console.log(num)
```

#### 字符串
字符串使用单引号
```javascript
const char = '你好'
```

字符串拼接时，使用模板字符串
```javascript
// coding like this
const name = '张三'
console.log(`my name is ${name}`)
// DONOT coding like this
console.log('my name is ' + name)
```


#### 变量和常量
使用 `const` 和 `let` ，不要使用 `var`
```javascript
// coding like this
const a = 'abc'
let b = 123
// DONOT coding like this
var c = 'abc'
```

#### 对象
对象的属性值，在冒号后添加一个半角空格，最后一个参数后没有逗号
```javascript
const obj = {
  name: '张三',
  age: 19,
  gender: 'male'
}
```

单属性对象或解构赋值时，在花括号里使用一行，花括号左右两边内部以及每个属性中间逗号后面添加一个空格
```javascript
const obj = { name: '张三' }
import { Button, Icon } from 'antd'
```

当解构赋值属性数量特别多时，使用多行
```javascript
const components = {
  Button,
  Icon,
  Col,
  Row,
  // ...
}
```


#### 数据类型
使用数据本身应该使用的数据类型
```javascript
// coding like this
const price = 100
// DONOT coding like this
const price = '100'
```

#### 使用全等判断
判断相等时应使用全等符号 `===`
```javascript
const a = 100
const b = '100'
// coding like this
console.log(a === b) // false
console.log(a === b * 1) // true
// DONOT coding like this
console.log(a == b) // true
```

#### 是非判断
用做是非（二选一）的判断使用三元法，尤其是用做返回值时的判断
```javascript
const ret = {
  genderText: gender === 'male' ? '男' : '女',
  role: localStorage.isAdmin ? 'admin' : 'customer'
}
```

#### 布尔型的使用
避免使用三元法返回布尔型，可以直接转成布尔型
```javascript
// coding like this
const buffer = 1
const condition = Boolean(buffer === 1)

// DONOT coding like this
const condition = buffer === 1 ? true : false
```

尽量使用布尔型或数字型进行判断，当需要用字符串做判断时，应使用英文半角字符
```javascript
const buffer = true
if (buffer) {
  // ... some codes ...
}
const res = {
  code: '000000'
}
if (res.code * 1 === 0) {
  // ... some codes ...
}
```

#### 函数
函数声明时，函数名和传参的括号中间保留一个空格，和函数体的花括号保留一个空格，箭头函数也一样
```javascript
function foo () {
  // ... some codes ...
}
const foo2 = () => {
  // ... some codes ...
}
```

声明箭头函数在只有一个参数时，可不写圆括号
```javascript
const arr = [1, 2, 3]
arr.map(e => {
  console.log(e)
})
```

函数默认值使用 es6 的标准，圆括号内左右不保留空格，多参数逗号后保留 1 个空格，最后一个参数后没有逗号
函数在使用时，传入多个参数也遵循以上要求
```javascript
function sum (a = 0, b = 0) {
  return a + b
}
sum(1, 2)
```


在已声明但保留，未使用的函数，应直接结束掉
```javascript
function foo () {}
```

如果函数体内只有十分简单的 1 行代码，可以直接一行返回，函数体花括号内部左右两边各保留一个空格

```javascript
const _debug = (...e) => { console.log('debug', ...e) }
_debug('test', 'answer')
```

#### 抛出错误
在接受到后端传来的数据时，应尽量使用 `try ... catch()` 对数据进行格式判断【待定】
使用 Promise 时，应把错误 reject 出来

### 数学运算

#### 自运算符
自增时使用 `+=` 运算符，不要使用 `++`，其他同理
```javascript
let sum = 0
for (let i = 1; i <= 100; i += 1) {
  sum += i
}
console.log('1 ~ 100 加和的结果是：', sum)
```

## HTML

#### html 属性和折行
html 属性赋值使用双引号
```html
<div class="my-div">
  my-div
</div>
```

属性和属性值为多个，并且超过一行显示极限时，应从代码层面统一折行，保留一个属性在标签行，剩余属性每个一行，开始标签的结束尖括号保留在最后一个属性的后面，除第一个属性外，其他每个属性缩进两个空格

```html
<input class="my-div"
  size="mini" />
```

如果容器内没有内容，应在开始标签后面直接结束掉，当容器内有内容时，除非内容非常短并且容器内没有其他容器，否则应折行

```html
<div class="clearfix"></div>
<div class="title">我是标题</div>
<div class="sub-title">
  <span>2020.12.28</span>
  我是副标题
</div>
```

属性过多时，应使用折行的形式，优先级为：原始属性/绑定属性/事件句柄/字典排序
```html
<div class="my-div flex-col-center"
  style="background: #333333; color: #ffffff"
  v-if="status === 'pending'"
  @click="handleDivClick">
  my-div
</div>
```

   