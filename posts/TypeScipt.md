---
title: 'Typescript'
date: '2025-1-11'
description: 'Js的超集，面向对象的编程语言，包含类和接口的概念'
---

# Typescript

## 为什么推荐使用TS

主要是静态类型检测，更有利于构建大型项目

## 类型检查

// 在ts中，定义isFlag为true，为布尔类型boolean

// 在变量名后加冒号和类型，如 :boolean

let isFlag:boolean = true

// 重新赋值到字符串类型会报错

isFlag = "hello swr"

任意类型any void类型

## Const

### **类型检查与安全性**

当使用 const 修饰变量时，编译器会执行更严格的类型检查，确保该变量在其生命周期内不会被意外修改

### 内联替换与优化

对于局部 const 变量，编译器通常不会为它们分配实际的内存空间，而是直接在编译时将它们替换为对应的值（即所谓的“常量折叠”），从而避免了运行时访问内存的操作，提高了执行速度 19。此外，由于 const 表达式的值是在编译期确定的，因此可以更容易地进行各种编译优化，如循环展开、函数内联等



## 元组类型tuple

什么是元组类型？其实元组是数组的一种。

表示已知元素数量和类型的数组

let person:\[string,number\] = \['邵威儒',28\]

有点类似解构赋值，但是又不完全是解构赋值，比如元组类型必须一一对应上，多了少了或者类型不对都会报错。

元组类型是一个不可变的数组，长度、类型是不可变的。

## 枚举

### **数字枚举**



### **字符串枚举**



## 类

**抽象类**





如果子类继承的是一个抽象类，子类必须实现父类里的抽象方法，不然的话不能实例化，会报错。

**Public private protected修饰符**

**private**：

- - 只能在声明它的类内部访问。
    - 不能被子类继承或访问。

**protected**：

- - 可以在声明它的类及其子类中访问。
    - 可以被子类继承和访问。

## 接口

****接口**** 主要用于描述对象的形状，可以被实现或继承，适合用于描述数据模型或约定

## interface 和 type 的区别

1定义

type关键字可以定义一个集合，可以包含各种类型的属性和值，以用来描述对象、函数、联合类型、交叉类型等。

interface： 它定义了一个对象的形状，描述了对象应该具有的属性及类型

Interface只能表示 object、class、function 类型。

type 还可以用来表示其他的类型，比如基本数据类型、联合类型、交叉类型等

2写法

type使用等号来定义类型别名，

而interface使用花括号直接定义接口的成员。

3声明合并

type 不支持声明合并

interface支持声明合并

4 继承

Interface支持继承  
type：可以通过 & 符号创建交叉类型，以组合现有的多种类型

1 type和interface的定义

type A = string; // 声明了一个类型别名A，同时它的类型等价于string类型

type StatusCode = 200 | 301 | 400 | 500 | 502;

type PossibleDataTypes = string | number | (() => unknown);





联合类型（ | ）和交叉类型（&）

Type 组合方式





Interface 多次声明来合并声明



Interface extend继承







## 泛型

泛型可以理解为宽泛的类型，通常用于类和函数

TypeScript 的泛型（Generics）是一种强大的工具，它允许开发者在定义函数、类或接口时使用类型参数，而不是具体的类型。

一个组件可以支持多种类型的数据,为代码添加额外的抽象层和可重用性

// T表示泛型，具体什么类型是调用这个方法的时候决定的。

function getData&lt;T&gt;(value:T):T{

return value;

}

getData&lt;number&gt;(123456);

函数声明中的 &lt;T&gt;:

这是泛型类型的声明部分。它告诉 TypeScript 编译器，这个函数将会使用一个名为 T 的类型参数。T 可以代表任何类型，并且这个类型将在调用函数时由调用者提供或通过上下文推断出来。

参数列表中的 value: T:

在这里，T 指定了函数接受的参数 value 的类型。这意味着传入给 getData 函数的 value 参数可以是任意类型，但是一旦确定了这个类型，它在整个函数内部就只能是这种类型。例如，如果你传递了一个字符串，那么在这个函数的作用域内，T 就是 string 类型。

返回值类型 : T:

最后的 T 定义了函数的返回值类型。这表明 getData 函数将返回与输入参数 value 同一类型的值。因此，如果 value 是一个数字，则返回值也将是一个数字；如果 value 是一个对象，则返回值也是一个相同类型的对象。

## 类型断言

可以用来手动指定一个值具体的类型，即允许变量从一种类型更改为另一种类型。

"尖括号" 语法：&lt;类型&gt;值



as 语法：值 as 类型

let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length

## 配置tsconfig.json

首先我们要生成一个tsconfig.json来告诉ts-loader怎样去编译这个ts代码

tsc --init

会在项目中生成了一个tsconfig.json文件，接下来进入这个文件，来修改相关配置

// tsconfig.json

{

// 编译选项

"compilerOptions": {

"target": "es5", // 编译成es5语法

"module": "commonjs", // 模块的类型

"outDir": "./dist", // 编译后的文件目录

"sourceMap": true, // 生成sourceMap方便我们在开发过程中调试

"noImplicitAny": true, // 每个变量都要标明类型

"jsx": "react", // jsx的版本,使用这个就不需要额外使用babel了，会编译成React.createElement

},

// 为了加快整个编译过程，我们指定相应的路径

"include": \[

"./src/\*\*/\*"

\]

}

Constructor方法，类被实例化一次调用一次

包含构造函数的派生类必须调用super()，它会执行基类的构造方法和其他方法。

Protected成员在类的内部和子类可以调用

接口声明的方法 应用的类必须调用  
类型声明文件里面只有类型代码，没有具体的代码实现

protected修饰符  
除了能够在（deriving classes）派生类，也就是子类中访问到base class成员，其他的特性和private基本一致

Void表示没有任何返回值的函数

## 数组的类型

最简单的方法是使用\[类型+方括号\]表示法

Let Fibonacci: number\[\] = \[1,1,2,3,5\]

数组泛型表示数组

Let Fibonacci: Array&lt;number&gt; = \[1,2,3\]

一个比较常见的做法是，用 any 表示数组中允许出现任意类型：

let list: any\[\] = \['Xcat Liu', 25, { website: '<http://xcatliu.com>' }\];

## 重载

允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。

利用联合类型，我们可以这么实现：

这时，我们可以使用重载定义多个 reverse 的函数类型：

function reverse(x: number): number;

function reverse(x: string): string;

function reverse(x: number | string): number | string {

if (typeof x === 'number') {

return Number(x.toString().split('').reverse().join(''));

} else if (typeof x === 'string') {

return x.split('').reverse().join('');

}

}

此时可以使用类型断言，将 something 断言成 string：  
function getLength(something: string | number): number {  
if ((&lt;string&gt;something).length) {  
return (&lt;string&gt;something).length;  
} else {  
return something.toString().length;  
}  
}  
<br/>类型断言的用法如上，在需要断言的变量前加上 &lt;Type&gt; 即可。

## 重写

当父类和其[派生类](https://so.csdn.net/so/search?q=%E6%B4%BE%E7%94%9F%E7%B1%BB&spm=1001.2101.3001.7020"%20\t%20"https://blog.csdn.net/qq_24518001/article/details/_blank)拥有同一个方法时，这种情况就是方法的重写



## 三斜线指令

管理模块之间的依赖关系

引入库的类型定义

三斜线指令以 /// &lt;reference ... /&gt; 开头，放在文件的顶部。  






替代方案：在现代 TypeScript 项目中，通常使用 tsconfig.json 文件中的 types 和 lib 字段来管理类型定义，三斜线指令的使用频率逐渐减少。

## Mixin

由于TypeScrip中的类不支持多继承，所以引入了混合（Mixin）的特性，可以间接实现多继承的效果



使用mixin  


概念

首先，抽象类是不允许被实例化的：

其次，抽象类中的抽象方法必须被子类实现：

this参数在回调函数里

“内部模块”现在称做“命名空间”。 “外部模块”现在则简称为“模块”