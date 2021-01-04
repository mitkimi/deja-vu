# 代码规范

> 逐步整理中的代码规范，欢迎随时查看

## JavaScript
### 基础规则
> JavaScript 有关代码格式的基础规则基本遵循 eslint-standard 规则，将按照此规则进行代码检查
但命名方面为后续补充规则
所有规则均为强制性，开发者需遵守


#### 源文件
JavaScript源文件必须以无BOM的UTF-8编码

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

不允许使用 Tab 制表符或者 4 空格代替

`switch` 中的 `case` 和 `default` 应保持缩进

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

#### 空格
二元运算符操作数之间必须使用空格，但一元运算符不能使用空格
```javascript
let len = arr.length
len ++
const ret = len + 1
return ret + 1
```

方法、条件语句、循环语句等，圆括号 `()` 和花括号 `{}` 与名称之间均保留 1 个空格，但圆括号内左右两边不使用空格
包括但不限于 if / else / for / while / function / switch / do / try / catch / finally
```javascript
// coding like this
function foo (a, b) {
  // ... some codes ...
}
for (let i = 0; i < 10; i += 1) {
  console.log(i)
}

// DONOT coding like this
function fe( a, b ){
  // ... some codes ...
}
if('1'*1===1){
  console.log('log')
}
```
函数执行时不使用空格
```javascript
foo()
```

变量/常量的声明、赋值时，等号前后保留 1 个空格
```javascript
const a = 10
```

对象的创建或属性赋值时，属性的冒号 `:` 后有 1 个空格，但冒号前没有
```javascript
const obj = {
  a: 1,
  b: 2
}
```

#### 换行
应在每行赋值、执行后换行
```javascript
// coding like this
let obj = {
  a: 1,
  b: '2',
  c: 'abc'
}

// DONOT coding like this
let obj = {
  a: 1
  ,b: '2'
  ,c: 'abc'
}
```

逻辑操作符（与/或/非）等如需换行，应在新行的最前面
```javascript
if (
  1 === 1
  && true
  && (1 + 1 === 2 || 5 % 2 === 0)
) {
  // ... some codes ...
}
```
多行代码块、多行条件应换行，但相关连续的代码块（例如 `else`、`else if`）不换行，在花括号前后保留 1 空格
```javascript
if (condition) {
  // ... some codes ...
} else {
  // ... some codes ...
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

完整的函数注释结构
```javascript
/**
 * 方法名称
 * @author    mitkimi | i@mitkimi.com | Sept.24, 2018
 * @version   2.x
 * @param     username      string     用户名
 *            passwd        string     密码
 *            isCheck       boolean    是否选中
 * @return    object
 * @example   func( mitkimi, abcde )
 */
```

| 注释字段 |            语法             |               含义               |            DEMO            |
| :------: | :-------------------------: | :------------------------------: | :------------------------: |
| @author  |  @author 作者信息/附属信息  | 描述这个方法或函数的作者以及时间 | @author mitkimi 2018/09/24 |
| @version |      @version xx.xx.xx      |              版本号              |       @version 1.0.3       |
|  @param  | @param 参数名 数据类型 描述 |      入参，多个参数时写多行      |  @param name string 名称   |
| @return  |      @return 数据类型       |               出参               |      @return boolean       |
| @example |      @exmaple 示例代码      |          演示函数的使用          |                            |

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

- 命名方式：小驼峰
- 命名规范：前缀名词
- 命名建议：语义话

```javascript
// coding like this
let maxCount = 10
const tableTitle = 'Login Table'

// DONOT coding like this
let setCount = 10
let getTitle = 'File Name'
```

#### 函数
- 命名方式：小驼峰
- 命名规范：动词前缀
- 命名建议：语义话

| 动词 | 含义 | 返回值 |
| :-----: | :-----: | :-----: |
| can | 判断是否可执行 | Boolean |
| has | 判断是否含有某个值 | Boolean |
| is | 判断是否为某个值 | Boolean |
| get | 获取某个值 | any |
| set  | 设置某个值  | null，当执行判断时返回 Boolean |
| load | 加载某些数据 | 同上 |
| query | 涉及到数据查询的方法 | any |
| handle | 用户点击操作相关的方法 | any |

以上动词可以连续使用

举例
```javascript
// 是否可阅读
function canRead () {
  return true
}
// 用户点击按钮查询数据
async handleQueryTableData () {
  const uri = '/table/list'
  const params = {
    id: 123
  }
  const { res: data } = await post(uri, params)
  console.log('res', res)
}
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
#### 类/构造函数
- 命名方式：大驼峰
- 明敏规范：前缀为名称
- 命名建议：语义话

```javascript
class Person {
  public name: string
  constructor (name) {
    this.name = name
  }
}

const person = new Person('mitkimi')
```
公共属性和公共方法与变量和函数命名一致；
私有属性和私有方法使用一个下划线作为前缀，后面与公共属性和公共方法保持一致。

```javascript
class Person {
  private _name: string
  constructor() {
    // 构造器公共方法
    getName() {
      return this._name
    }
    setName() {
      this._name = name
    }
}
const person = new Person()
person.setName('mitkimi')
person.getname() // -> mitkimi
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

   