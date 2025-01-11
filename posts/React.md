---
title: 'React'
date: '2025-1-10'
description: ''
---

# React

## 基本写法

### 函数组件

Import react from “react”

function MyComponent({message}) {  
return (

&lt;div&gt;

&lt;p&gt;{message}&lt;/p&gt;

&lt;/div&gt;

)  
}

### 类组件

Import react from “react”

//import React, { Component } from 'react';

MyComponent extend react .Copponent {

//MyComponent extend Copponent {  
<br/>constructor(props){  
super(props)

this.state = {

message: props.initialMessage

};  
}

componentDidMount(){  
}

Render(){

return (

&lt;div&gt;

&lt;p&gt;{this.state.message}&lt;/p&gt;

&lt;/div&gt;

)  
<br/>}

}

### 高阶函数

基础写法
最简单的HOC只是对组件进行包装,并返回新的组件

const withClass = (wrappedComponent, className) => {  
return (props) => {  
&lt;div className={className}&gt;

&lt;WrappedComponent {...props} /&gt;

&lt;/div&gt;

}

}

使用

const Button = (props) => &lt;button {...props}&gt;Click Me&lt;/button&gt;;

const ButtonWithClass = withClass(Button, 'btn');

带状态的 HOC

Const withCounter = (wrappedComponent) = >{

Const withCounter = (props) => {  
const \[count, setCount\] = useState(0);

return &lt;WrappedComponent count={count} increment={() =&gt; setCount(count + 1)} {...props} />;

}

return WithCounter;

}  
使用

const CounterButton = ({ count, increment }) => ( &lt;button onClick={increment}&gt;

Clicked {count} times

&lt;/button&gt;

);

const EnhancedCounterButton = withCounter(CounterButton);

function withAuth(MyComponent, checkAuth) {  
return class extends React.Component {  
state = {

isAuthenticated: false

};

async componentDidMount() {

const isAuthenticated = await checkAuth();

this.setState({ isAuthenticated })ps

}

Render() {  
const isAuthenticated = this.state.isAuthenticated ;

If(!isAuthenticated ) return &lt;div&gt;unAuthenticated &lt;/div&gt;

If(isAuthenticated ) return &lt;MyComponent {...this,pros}/&gt; &lt;/div&gt;

}  
}  
}

### useState 和 setState

const \[count, setCount\] = useState(0);

const increment = () => {  
setCount(count + 1)

}

### 条件渲染

##### 三目运算符

##### 逻辑运算符

}

##### If 语句

<br/>

它使用虚拟 DOM,而不是真正的 DOM。

是一个轻量级的 JavaScript 对象，它最初只是 real DOM 的副本。它是一个节点树，它将元素、它们的属性和内容作为对象及其属性，每当底层数据改变时，整个 UI 都将在虚拟 dom 中重新渲染，然后计算之前 dom 表示与新表示的差异，然后用实际更改的内容更新 real dom

可以进行服务器端渲染。

它遵循单向数据流或数据绑定

## Dom diff

计算出 Virtual DOM 中真正变化的部分，并只针对该部分进行原生 DOM 操作，而非重新渲染整个页面。

### **React Diff 的主要步骤**

1. \***\*生成虚拟 DOM 树\*\***：当组件重新渲染时，React 会生成新的虚拟 DOM 树。
2. \***\*比较新旧虚拟 DOM 树\*\***：React 将新的虚拟 DOM 树与旧的虚拟 DOM 树进行比较，找出差异。
3. \***\*应用差异\*\***：React 将找出的差异应用到实际的 DOM 上，只更新需要更改的部分

React Diff 的比较规则主要包括以下几点：

- \***\*相同类型的节点\*\***：如果新旧树中的节点类型相同（例如都是 &lt;div&gt; 或 &lt;span&gt;），那么只会比较它们的属性和子节点。
- \***\*不同类型的节点\*\***：如果新旧树中的节点类型不同，则旧节点将被完全替换。
- \***\*键（key）\*\***：如果节点带有 key 属性，React 会使用 key 来唯一标识节点。这有助于 React 更精确地识别节点，从而减少不必要的重新渲染。
- \***\*属性和状态\*\***：比较节点的属性（如 className、style 等）和状态（如 state），如果发现不同，则更新相应的属性或状态。
- \***\*子节点\*\***：递归比较子节点，找出子节点之间的差异。

React 将 diff 分为三个阶段：tree diff、component diff 和 element diff1。

Tree Diff

Tree diff 涉及的是对整个组件树的不同层级之间的比较。由于 Web UI 中 DOM 节点跨层级的移动操作较少，React 选择只在同一层次内的节点间进行比较。如果某个节点不再存在于新树中，则该节点及其所有子节点都将被移除；反之，新增加的节点会被插入到适当的位置。这样做的好处是可以显著减少不必要的遍历次数 1。

Component Diff

Component diff 主要是针对同类型的组件实例之间的比较。如果两个组件属于同一类别，那么 React 会继续深入比较它们各自的子树；但如果组件类型不同，则旧组件及其所有子节点将被替换为新的组件树。此外，React 允许开发者通过 shouldComponentUpdate 方法自定义是否需要执行 diff 算法，以此避免不必要的计算 1。

Element Diff

Element diff 是指在同一层级的所有节点之间进行比较。当节点处于同一层级时，diff 提供了三种操作：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。例如，当旧集合中的节点 A、B、C 和 D 更新为新集合中的 B、A、D 和 C 时，React 不会尝试移动现有的节点，而是重新创建这些节点并按照新的顺序插入。这样做虽然看起来效率不高，但实际上对于大多数情况而言已经足够好，因为 Web 应用程序中的元素重排并不频繁 8。

## React 特点

JSX 语法

单向数据绑定

声明式编程

虚拟 dom

是一个轻量级的 js 对象，它是 real dom 的副本，是一个节点树，它将元素和属性作为 对象和属性。

步骤：

每当底层数据变化时，在虚拟 dom 中重新渲染

对比之前的 dom 表示和新表示之间的差异

用实际更改的内容更新 dom

可以服务器端渲染

## 虚拟 dom 和真实 dom

虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘

虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”

使用虚拟 DOM 的

### 优势如下

1. 减少 DOM 操作

直接操作真实的 DOM 是昂贵的操作，因为每次操作都会引起重排（reflow）和重绘（repaint），导致性能下降。虚拟 DOM 可以在内存中进行操作，然后一次性同步到真实 DOM，减少了不必要的重排和重绘。

1. 提高性能

虚拟 DOM 可以通过高效的 Diff 算法（如 React 的 Diff 算法）找出最小的更新集，从而减少实际 DOM 的更新次数，提高渲染效率。

3.易于调试

虚拟 DOM 是 JavaScript 对象，可以在开发工具中更容易地查看和调试。

4.跨平台

虚拟 DOM 提供了一种统一的表示形式，使得开发者可以在不同的平台上（如 Web、Native）使用相同的 API。

5.易于单元测试

虚拟 DOM 可以在没有实际 DOM 环境的情况下进行单元测试，因为它是纯 JavaScript 对象。

6.延迟渲染

虚拟 DOM 可以延迟渲染，直到需要时才真正更新到 DOM 中，这样可以避免不必要的渲染。

### 缺点

1.内存消耗:

维护虚拟 DOM 需要额外的内存开销，尤其是对于大型应用而言。虚拟 DOM 的大小与实际 DOM 的大小成正比，因此可能会增加内存使用量。

2.Diff 算法的复杂性

虚拟 DOM 的 Diff 算法本身也是复杂的操作，特别是在大数据集的情况下，Diff 算法可能会变得非常耗时。

3.初始化成本

创建虚拟 DOM 和执行 Diff 算法都有一定的初始化成本，这在初次渲染时可能会导致性能下降。

4.过度优化

虚拟 DOM 试图优化每一次的 DOM 更新，但在某些情况下，直接操作 DOM 可能更加简单和高效。过度依赖虚拟 DOM 可能会导致不必要的复杂性。

### [说说 React JSX 转换成真实 DOM 过程？](https://github.com/linwu-hi/code-interview/issues/104"%20\l%20"top)

### **1\. 解析 JSX**

会被转译成类似于以下的 JavaScript 代码：

### **2\. 创建虚拟 DOM**

React.createElement 函数创建一个虚拟 DOM 节点，这个节点是一个 JavaScript 对象，通常具有以下结构

### **3\. 比较虚拟 DOM**

### **4\. 更新真实 DOM**

## 组件

### React.Component

class Greeting extends React.Component{

render(){

return &lt;h1&gt;Hello,{this.props.name}&lt;/h1&gt;;

}

}

在 React.Componnet 的子类中必须定义 render 函数

### Refs

#### React.createRef

创建一个 ref 属性附加到 react 元素的 ref

Class MyComponent extends React.Componnet{

constructor(props){

super(props);

this.inputRef =React.createRef();

}

render(){

return &lt;input type=”text” ref={this.inputRef}/&gt;

}

componentDidMout(){

this.inputRef.current.focus();

}

}

使用回调

这种方式允许更精确地控制何时设置和移除 ref

#### React.forwardRef

React.forwardRef 的 API 中 ref 必须指向 dom 元素而不是 React 组件

React.forwardRef 会创建一个 React 组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

将 DOM 节点暴露给父组件

在多个组件中转发 ref

接收渲染函数作为参数。React 将使用 props 和 ref 作为参数来调用此函数。此函数应返回 React 节点

为什么需要 React.forwardRef

在 React 中，类组件可以通过 ref 属性访问其实例。然而，函数组件没有实例，因此不能直接接收 ref。React.forwardRef 允许我们创建一个函数组件，该组件可以接收一个 ref 并将其转发给子组件或者其他需要的地方。

使用 React.forwardRef 的例子

假设我们有一个函数组件 MyInput，我们希望能够在父组件中通过 ref 获取到这个输入框的引用：

import React, { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {

return (

&lt;input {...props} ref={ref} /&gt;

);

});

export default MyInput;

在父组件中使用 MyInput 并通过 ref 获取输入框的引用：

import React, { useRef } from 'react';

import MyInput from './MyInput';

const ParentComponent = () => {

const inputRef = useRef(null);

const handleClick = () => {

if (inputRef.current) {

inputRef.current.focus(); // 获得焦点

console.log(inputRef.current.value); // 获取输入框的值

}

};

return (

&lt;div&gt;

&lt;MyInput ref={inputRef} type="text" placeholder="Enter something" /&gt;

&lt;button onClick={handleClick}&gt;Focus Input&lt;/button&gt;

&lt;/div&gt;

);

};

export default ParentComponent;

在这个例子中，我们通过 useRef 创建了一个 ref，并将其传递给了 MyInput 组件。这样，我们就可以在父组件中通过 inputRef 访问到 MyInput 组件的 DOM 节点，并对其进行操作。

## 元素

### CreateElement()

React.creaateElement(

Type,

\[props\],

\[…children\]

)

### CreateFactory()

React.createFactory()

返回用于生产指定类型的 react 元素的函数，类型参数既可以是标签名（div）也可以是 React 组件的类型（class 组件或者函数组件），或者是 react fragment 类型。

### 操作元素

CloneElement()

React.cloneElement(

element;,

\[props\]

\[…children\]

)

以 element 元素为样板克隆并且返回新的 React 元素，返回的 props 是将新的 props 与原始的元素的 props 浅层合并后的结果，key 和 ref 将保留。

isValidElement()

验证对象是否为 React 元素，

React.Children

提供了用于处理 this.props.children 不透明数据结构的实用方法。

React.Children.map(children,function\[thisArg\])

React.Children.forEach (children,function\[thisArg\])

如果 children 是一个 Fragment 对象将视为单一子节点处理

React.Children.count(children)

React.children.only(children)

React.Children.toArray(children)将数据结构以数组的方式变平开并返回，并为每一个子节点分配一个 key. 当想要在渲染函数中操作子节点的集合，它会非常实用，特别是当你想要在向下传递 this.props.chidren 之前对内容重新排序或获取子集时。

验证 children 是否只有一个子节点，如果有则返回它。否则会抛出错误

在 children 里面的每个直接子节点上调用一个函数并将 this 设置为 thisArg。如果 children 是一个数组，它将遍历数组的每一个子节点并调用该函数，如果是 null 将返回 null

### Fragments

React 还提供了用于减少不必要嵌套的组件。

React.Fragment

能在不额外创建 DOM 元素的情况下，render（）方法中返回多个元素。

render() {

return (

&lt;React.Fragment&gt;

Some text.

&lt;h2&gt;A heading&lt;/h2&gt;

&lt;/React.Fragment&gt;

);

}

也可以使用简写语法&lt;></&gt;

key 是唯一可以传递给 Fragment 的属性

### portal

ReactDOM.createPortal(child, container)

一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框：

## 生命周期

挂载（Mounting）、更新（Updating）和卸载（Unmounting

#### **Mounting 阶段**

1. \***\*constructor(props)\*\***：构造函数，在组件实例创建时调用。在这里可以初始化 this.state。
2. \***\*static getDerivedStateFromProps(props, state)\*\***：静态方法，用于在组件实例化或更新时根据 props 更新 state。此方法返回的对象将与 state 合并。
3. \***\*render()\*\***：渲染方法，返回一个描述 UI 的 React 元素。
4. \***\*componentDidMount()\*\***：在组件挂载到 DOM 后立即调用。这里可以执行数据获取、设置定时器等操作。

#### **Updating 阶段**

1. \***\*static getDerivedStateFromProps(props, state)\*\***：在每次更新前调用，用于根据新的 props 更新 state。
2. \***\*shouldComponentUpdate(nextProps, nextState)\*\***在更新前调用，返回 true 或 false 来决定是否需要更新。建议使用 PureComponent 或 React.memo。
3. \***\*render()\*\***：渲染方法，返回一个描述 UI 的 React 元素。
4. \***\*getSnapshotBeforeUpdate(prevProps, prevState)\*\***：在 React 应用更改之前调用，用于捕获有关当前 DOM 的信息。返回的值将作为参数传递给 componentDidUpdate。
5. \***\*componentDidUpdate(prevProps, prevState, snapshot)\*\***：在组件更新到 DOM 后立即调用。可以在这里执行副作用操作，如网络请求等。

#### **Unmounting 阶段**

1. \***\*componentWillUnmount()\*\***：在组件即将从 DOM 中卸载之前调用。可以在这里清理定时器、事件监听器等。

### 其他 API

#### setState()

setState(updater, \[callback\])

this.setState((state, props) => {

return {counter: state.counter + props.step};

});

this.setState({quantity: 2})

#### forceUpdate()

强制渲染

#### DefaultProps

添加默认 props，用于 props 未赋值但不能为 null 的情况

This.props.children 是一个特殊的 prop.通常由 JSX 表达式的子组件组成，而非组件本身的定义

## ReactDOM

### Render()

ReactDOM.render(element, container\[, callback\])

如果已经渲染过就执行更新操作

### Hydrate()

与 render（）相同与 render() 相同，但它用于在 ReactDOMServer 渲染的容器中对 HTML 的内容进行 hydrate 操作。React 会尝试在已有标记上绑定事件监听器。

### React.PureComponent

区别在于并未实现 shouldComponnetUpdate()

而 React.PureComponent 中以浅层对比 prop 和 state 的方式实现了该函数。如果赋予了 react 组件相同的 props 和 state 再某些情况下使用 purecomponent 可提高性能

### **函数组件（Functional Components）**

#### **使用 Hooks**

随着 React Hooks 的引入，函数组件可以拥有类似于类组件的生命周期方法。主要使用的 Hooks 包括：

1. \***\*useState()\*\***：用于添加组件的局部状态。
2. \***\*useEffect()\*\***：用于执行副作用操作，如数据获取、设置订阅等。可以模拟类组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount。
3. \***\*useContext()\*\***：用于消费上下文中的值。
4. \***\*useReducer()\*\***：用于处理更复杂的状态逻辑。
5. \***\*useCallback()\*\***：返回一个 memoized 回调函数。
6. \***\*useMemo()\*\***：返回一个 memoized 值。
7. \***\*useRef()\*\***：返回一个可变的引用对象。

### UnmoutComponnetAtNode()

React.unmountComponnetAtNode(container)

从 DOM 中卸载组件

FindDOMNode()

不推荐使用

CreatePortal()

ReactDOM.createPortal(child,container)

创建 portal,将提供一种将子节点渲染到 DOM 节点中方式

## ReactDOMServer

ReactDOMServer 对象允许你将组件渲染成静态标记，通常被使用在 Node 服务端

renderToString()

ReactDOMServer.renderToString(element)将返回一个 HTML 字符串，在服务器生成 HTML.以加快页面加载速度，达到 SEO 优化

### SusPense

Suspense 使得组件可以等待某些操作结束后再渲染支持的场景是 React.lazy 动态加载组件,以防止某些子组件尚未具备渲染条件。

// 该组件是动态加载的

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {

return (

// 显示 &lt;Spinner&gt; 组件直至 OtherComponent 加载完成

&lt;React.Suspense fallback={<Spinner /&gt;}>

&lt;div&gt;

&lt;OtherComponent /&gt;

&lt;/div&gt;

&lt;/React.Suspense&gt;

);

}

React.lazy

允许定义一个动态加载的组件，这有助于缩减 bundle 的体积，并延迟加载初次渲染未使用道德组件

Const SomeComponnet = React.lazy(() => import(‘./SomeCoponment’))

React.Suspense

## ReactTestUtils

可搭配所选的测试框架，轻松实现 React 组件测试，我们使用 Jest 来轻松是实现 JS 测试

### act()

为断言准备一个组件，包裹要渲染的代码并在调用 act() 时执行更新。

## Hook

Hook 是 React16.8 的新特性它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性，

为已知的 React 概念提供了更直接的 API:pros,state,context,refs 以及生命周期

### 原因

1. 复杂组件变得难以理解

2.难以理解的 class

### 基础 Hook

### Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）

不要在循环，条件或嵌套函数中调用 Hook，必须始终在 React 函数的顶层使用 Hook

#### UseState

useState 就是一个 hook.通过在函数组件里调用它来给组件添加一些内部 state.react 会在重复渲染时保留这个 state.useState 会返回一个值：当前状态和一个让你更新它的函数。可以在事件处理函数中或者其他一些地方调用这个函数，类似与 this.setState，但是不会将新的 state 与旧的 state 合并。

一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。

读取时：

当我们想在 class 中显示当前的 count，我们读取 this.state.count：

&lt;p&gt;You clicked {this.state.count} times&lt;/p&gt;

在函数中，我们可以直接用 count:

&lt;p&gt;You clicked {count} times&lt;/p&gt;

更新时：

在 class 中，我们需要调用 this.setState() 来更新 count 值：

&lt;button onClick={() =&gt; this.setState({ count: this.state.count + 1 })}> Click me

&lt;/button&gt;

在函数中，我们已经有了 setCount 和 count 变量，所以我们不需要 this:

&lt;button onClick={() =&gt; setCount(count + 1)}> Click me

&lt;/button&gt;

#### UseEffect

在组件执行过程中执行数据获取，订阅或者手动修改 DOM

useEffect 就是一个 Effect hook,和 class 组件中 conponnetDidMount,DidUpdate 和 willUnmout 具有相同的用途，只是合成了一个 API

UseContext

额外的 Hook

#### UseReducer

在 hooks 中提供了的 useReducer 功能，可以增强 ReducerDemo 函数提供类似 Redux 的功能，引入 useReducer 后，useReducer 接受一个 reducer 函数作为参数，reducer 接受两个参数一个是 state 另一个是 action 。然后返回一个状态 count 和 dispath，count 是返回状态中的值，而 dispatch 是一个可以发布事件来更新 state 的。

export default function ReducerDemo() {

const \[count, dispath\] = useReducer((state,action)=> {

if(action === 'add'){

return state + 1;

}

return state;

}, 0);

return (

&lt;div&gt;

&lt;h1 className="title"&gt;{count}&lt;/h1&gt;

<button className="btn is-primary"

onClick={()=> dispath('add')}

\>Increment&lt;/button&gt;

&lt;/div&gt;

)

}

<br/>

#### useCallback

useCallback 是 React 的一个 hook，用于优化性能。它的作用是缓存一个函数，确保在组件重新渲染时，不会创建新的函数实例。

useCallback 接受两个参数：回调函数和一个依赖数组。当依赖数组中的依赖项发生变化时，才会重新创建回调函数。如果依赖数组为空，则回调函数只会在组件首次渲染时创建一次。

使用 useCallback 的场景包括：

将回调函数传递给子组件，避免子组件不必要的重新渲染。

将回调函数作为 effect 的依赖项，确保 effect 只在特定依赖项发生变化时执行。

在使用 memo 进行组件优化时，将回调函数作为第二个参数传递给 memo，确保只有当回调函数发生变化时，才会重新渲染组件。

如果我们不使用 useCallback，每次父组件重新渲染时都会创建一个新的 onClick 函数，导致子组件重新渲染

示例代码：

import React, { useState, useCallback } from 'react';

// 子组件

function Child({ onClick }) {

return (

&lt;button onClick={onClick}&gt;

Click me!

&lt;/button&gt;

);

}

// 父组件

function Parent() {

const \[count, setCount\] = useState(0);

// 使用 useCallback 来返回一个被优化过的函数

const handleClick = useCallback(() => {

console.log('Button clicked');

setCount(count + 1);

}, \[setCount\]); // 依赖项数组只包含 setCount，确保每次渲染时引用不变

return (

&lt;div&gt;

&lt;p&gt;Count: {count}&lt;/p&gt;

&lt;Child onClick={handleClick} /&gt;

&lt;/div&gt;

);

}

export default Parent;在上面的例子中，handleClick 函数只会在组件首次渲染时创建一次，不会因为组件重新渲染而创建新的实例。

#### useMemo

useMemo 是 React 提供的一个用于优化组件性能的钩子函数。它可以缓存组件的计算结果，并在依赖项发生变化时重新计算。这可以避免在每次组件渲染时都重新计算相同的值，从而提高组件的性能。

useMemo 的语法如下：

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), \[a, b\]);

其中，computeExpensiveValue 是一个计算函数，它会在组件渲染时调用，并返回需要缓存的值。a 和 b 是计算函数的依赖项，当依赖项发生变化时，useMemo 会重新计算缓存的值。

使用 useMemo 的一个常见场景是在渲染大量数据时进行性能优化。例如，在渲染一个表格时，我们可能需要根据表格的数据进行一些复杂的计算，如计算每行数据的总和、平均值等。如果在每次渲染时都进行这些计算，会导致页面的响应变慢。使用 useMemo 可以缓存这些计算结果，并在数据发生变化时重新计算，从而提高页面的性能。

#### useRef

const refContainer = useRef(initialValue);

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。

## Redux

React 只是 DOM 的一个抽象层，并不是 Web 应用的完整解决方案。

没有涉及组件中的通信。

设计思想， web 应用是一个状态机，视图与状态一一对应，所有的状态保存在一个对象里面。

Action:一个对象，其中 type 是必须的

Reducer:是一个纯函数，接受 Action 和当前 State 作为参数，返回一个新的 State.

Store

1. Store.dispatch() 是 view 发出 Action 的唯一方法
2. Store.getState()
3. Store.subscribe() 设置监听函数，一旦 state 发生变化，就自动执行这个函数。

纯函数：

修改传入参数；

执行有副作用的操作，如 API 请求和路由跳转；

调用非纯函数，如 Date.now() 或 Math.random()。

单一数据源：整个应用的全局 state 被存储在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。

State 是只读的：唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事情的普通对象。

使用纯函数来执行修改：为了描述 action 如何改变 state tree，你需要编写纯的 reducers。

### 使用 useSelector 和 useDispatch

useSelector 是一个 React Hook，用于从 Redux Store 中选择状态的一部分。在这里，我们选择 count 的值。

useDispatch 是另一个 React Hook，用于获取 Redux 的 dispatch 函数，以便分发动作。

#### 初始化状态

浅色版本

const initialState = Map({ count: 0});

这里创建了一个 Map 对象作为初始状态，该对象包含一个键 count 和一个初始值 0。

#### 定义 Reducer 和 action

根据动作的类型，Reducer 会返回一个新的状态对象。由于使用了 Map，我们可以使用 set 方法来创建一个新的不可变对象，而不会修改原始状态。

#### 创建 Redux Store

const store = createStore(counterReducer);

#### **应用入口文件 (App.js)**

### Redux 不使用 hooks 的基本使用

· connect 将 ui 组件和逻辑组合成一个容器组件，然后在 UI 组件的 props 属性中就可以拿到 action 和 state

· mapStateToProps 是一个函数。它的作用将 state 对象映射到当前 UI 组件的 props 中，以便能够在 UI 层获取到数据；

· mapDispatchToProps 是 connect 函数的第二个参数，用来建立 UI 组件的参数到 store.dispatch 方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。

#### 定义 Reducers 和 Actions

#### 创建 Redux Store

#### 使用 connect 连接组件

##### 不使用 mapDispatchToProps

##### 使用 mapDispatchToProps

#### 4\. 应用入口文件 (App.js)

### Context 和 Redux

### Context

创建 Context：使用 React.createContext 创建一个上下文对象。

提供 Context：使用 Context.Provider 将状态提供给子组件。

消费 Context：使用 Context.Consumer 或 useContext Hook 在子组件中消费状态。

### **使用 Context**

#### **使用 useContext 的函数组件**

#### **使用 Consumer 的类组件**

Consumer：每次 Context 值变化时，Consumer 组件会重新渲染。如果组件树很深，可能会导致性能问题。

useContext：React 会优化 useContext 的性能，只有当 Context 值变化时，使用 useContext 的组件才会重新渲染。

### Redux 和 context 对比

#### context 优点

1. \***\*简单易用\*\***：Context API 是 React 的一部分，不需要额外安装依赖，使用起来非常直观。
2. \***\*轻量级\*\***：没有复杂的配置，适合小型到中型项目的状态管理。
3. 响应式更新：当 Context 中的值发生变化时，所有订阅了该 Context 的组件都会自动重新渲染。

#### context **缺点：**

1. \***\*深度嵌套组件性能问题\*\***：如果组件树很深，且频繁更新 Context 中的值，会导致大量不必要的重新渲染。
2. \***\*缺乏中间件支持\*\***：不像 Redux，Context API 没有内置的中间件机制，例如异步操作处理、日志记录等。
3. \***\*状态管理不够规范\*\***：对于大型应用，容易导致状态管理混乱，难以维护。

#### Redux 优点

1. \***\*集中式状态管理\*\***：所有状态都存储在一个中心化的 store 中，便于管理和调试。
2. \***\*强大的生态系统\*\***：有许多成熟的中间件和工具支持，如 redux-thunk、redux-saga、redux-logger 等。
3. \***\*可预测的状态变化\*\***：通过纯函数（reducers）来管理状态变化，确保状态的可预测性。

#### Redux 缺点

1. \***\*学习曲线较陡\*\***：需要理解许多概念，如 actions、reducers、store 等。
2. \***\*配置复杂\*\***：需要设置 store、middleware、reducers 等，对于小型项目可能显得过于繁琐。
3. \***\*性能开销\*\***：虽然有性能优化手段（如 reselect），但在某些情况下，频繁的状态更新仍可能导致性能问题。

Context：简单易用，适合小型应用和局部状态管理。 （父子组件之间共享状态）

Redux：复杂但强大，适合大型应用和全局状态管理。

## 问题

### Element 和 componnet

Element

element 其实就基本就可以解释为 Virtual DOM

Component

ReactComponent 则是可以接收参数输入并且返回某个 ReactElement 的函数或者类.

### 渲染原理

Jxs 如何生成 element

Element 如何生成真实 dom.

两棵树只会对同层次的节点进行比较。如果同层级的树发生了更新，则会将该节点及其子节点同时进行更新

### React context

使用场景： 不同层级的组件访问同一批数据

但是 Context 会让组件变得不纯粹，因为依赖了全局变量

Context 通过组件树提供了一个传递数据的方法； 从而避免了每一个层级手动传递 props 属性

**React.createContext：**创建一个上下文的容器(组件), defaultValue 可以设置共享的默认数据

假如、Consumer 向上找不到 Provider 的时候，怎么办，react 并不会报错，只不过取不到值而已、这个时候创建 Context 的时候  
createContext 可以传入默认值，当找不到 Provider 的时候，就会显示默认值

const {Provider, Consumer} = React.createContext(defaultValue);

<br/>**Provider** 和他的名字一样。用于生产共享数据的地方

**Consumer** 然后后代组件用 Customer 包裹得到数据

在包含关系的情况下， 可以用 children prop 来将他们的子组件传递到渲染结果中：

&lt;Contacts /&gt; 和 &lt;Chat /&gt; 之类的 React 元素本质就是对象（object），所以你可以把它们当作 props，像其他数据一样传递。

### ContextType

简化 context 使用，不使用 comsumer 也可以共享变量

<https://blog.csdn.net/landl_ww/article/details/93514944>

### Portals

能将子节点渲染到父组件的 DOM 层次之外

ReactDOM.createPortal(child, container)

对于 portal 的一个典型用例是当父组件有 overflow: hidden 或 z-index 样式，但你需要子组件能够在视觉上 “跳出(break out)” 其容器。例如，对话框以及提示框。

### React 严格模式

React.StrictMode

严格模式检查仅仅在开发模式运行。

import React from 'react';

function ExampleApplication() {

return (

&lt;div&gt;

&lt;Header /&gt;

&lt;React.StrictMode&gt; &lt;div&gt;

&lt;ComponentOne /&gt;

&lt;ComponentTwo /&gt;

&lt;/div&gt;

&lt;/React.StrictMode&gt; &lt;Footer /&gt;

&lt;/div&gt;

);

}

在上述的示例中，*不*会对 Header 和 Footer 组件运行严格模式检查。但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查。

不安全的生命周期

过时 API

### 使用 SVG

1 直接引入

2 使用 react-svg 模块

### 减小打包后生成的 js 文件

### UseEffect 和 useLayoutEffect

#### 执行时机

useEffect：在浏览器绘制之后执行。

useLayoutEffect：在浏览器绘制之前同步执行。

#### 阻塞性

useEffect：不会阻塞浏览器更新屏幕，因此更适合用于不需要立即更新 DOM 的副作用操作。

useLayoutEffect：会阻塞浏览器更新屏幕，因此更适合用于需要在浏览器绘制之前读取或修改 DOM 的副作用操作。

#### 性能影响

useEffect：由于不会阻塞浏览器更新屏幕，对性能的影响较小。

useLayoutEffect：由于会阻塞浏览器更新屏幕，可能会导致性能下降，特别是当副作用操作复杂或耗时较长时。

useEffect 导致屏幕闪烁或布局抖动的主要原因是它在浏览器绘制之后执行，这意味着在 useEffect 中进行的 DOM 操作或状态更新可能会在用户已经看到初始渲染结果之后发生，从而导致视觉上的不连贯或闪烁。

#### 优化 useEffect 的使用

如果必须使用 useEffect，可以通过以下方法来减少闪烁或抖动的影响：

延迟更新：

使用 requestAnimationFrame 来延迟 DOM 更新，确保在下一个浏览器绘制周期中进行更新。

条件渲染：

在初始渲染时显示一个占位符或加载状态，确保在 useEffect 中完成所有必要的操作后再显示最终内容。

#### 为什么 useLayoutEffect 在 SSR 中不可用？

1. \***\*缺少浏览器环境\*\***：服务器端没有浏览器环境，因此无法访问 DOM，也无法执行与 DOM 相关的操作。
2. \***\*同步执行\*\***：useLayoutEffect 需要在浏览器绘制之前同步执行，而服务器端渲染是在服务器上完成的，没有浏览器绘制的概念

### JSX 的内联条件渲染

三目运算符

&& 或者 return null

### React 事件传参数

使用内联箭头函数

每次组件重新渲染时都会创建一个新的回调函数实例

&nbsp;使用 bind 方法

&lt;button onClick={this.deleteRow.bind(this, id)}&gt;Delete Row&lt;/button&gt;

### React 事件绑定

上述的代码看似没有问题，但是当将处理函数输出代码换成 console.log(this)的时候，点击按钮，则会发现控制台输出 undefined

为了解决上面正确输出 this 的问题，常见的绑定方式有如下：

1.render 方法中使用 bind

这种方式在组件每次 render 渲染的时候，都会重新进行 bind 的操作，影响性能

2.render 方法中使用箭头函数

通过 ES6 的上下文来将 this 的指向绑定给当前组件，同样再每一次 render 的时候都会生成新的方法，影响性能

3.constructor 中 bind

4 定义阶段使用箭头函数绑定

### React 事件机制

React 并不是将 click 事件绑定到了 div 的真实 DOM 上，而是在 document 处监听了所有的事件，当事件发生并且冒泡到 document 处的时候，React 将事件内容封装并交由真正的处理函数运行。这样的方式不仅仅减少了内存的消耗，还能在组件挂在销毁时统一订阅和移除事件。

除此之外，冒泡到 document 上的事件也不是原生的浏览器事件，而是由 react 自己实现的合成事件（SyntheticEvent）。因此如果不想要是事件冒泡的话

应该调用 event.preventDefault()方法，而不是调用 event.stopProppagation()方法。

目的：

兼容所有浏览器，更好的跨平台；

将事件统一存放在一个数组（事件池），避免频繁的新增与删除（垃圾回收）。

方便 react 统一管理和事务机制。

### React 的事件和普通的 HTML 事件有什么不同？

对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰；

对于事件函数处理语法，原生事件为字符串，react 事件为函数；

react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用 preventDefault()来阻止默认行为。

事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到 document 上合成事件才会执行

### React 组件中怎么做事件代理？它的原理是什么？

React 基于 Virtual DOM 实现了一个 SyntheticEvent 层（合成事件层），定义的事件处理器会接收到一个合成事件对象的实例，它符合 W3C 标准，且与原生的浏览器事件拥有同样的接口，支持冒泡机制，所有的事件都自动绑定在最外层上。

在 React 底层，主要对合成事件做了两件事：

事件委派： React 会把所有的事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部事件监听和处理函数。

自动绑定： React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件

### React-为什么不要直接改 state

直接修改 react react 不会重新渲染，setstate 是异步的

我们在改变 state 的时候，需要重新生成一个对象去代替原来的 state，而不是直接改原来的

如果连续写多次 setState，会将多次 setState 的状态修改合并成一次状态修改。

### 函数式组件没有生命周期

没有继承 React.Component,由于生命周期函数是 React.Component 类的方法实现的,所以没继承这个类,自然就没法使用生命周期函数

### 如何提高组件的渲染效率

1.子组件执行 shouldcomponentUpdate 接收两个参数控制是否渲染

2. **使用 React.PureComponent**

**3.** React 提供了一个辅助对象来实现浅比较(shallowCompare)这种模式 - 继承自 React.PureComponent。当组件更新时，如果组件的 props 和 state 都没发生改变，render 方法就不会触发，省去 Virtual DOM 的生成和比对过程，达到提升性能的目的。

4\. immutable.js 不可突变的数据结构

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变

### Immutable 的好处

1. \***\*可预测性\*\***：由于不可变对象不会改变，因此它们的行为更加可预测。
2. \***\*易于调试\*\***：状态不变意味着更容易追踪 bug，因为你可以确定某个状态在某个时间点的值。
3. \***\*性能优化\*\***：React 利用浅比较（shallow comparison）来决定是否重新渲染组件。不可变数据结构可以提高这种优化的有效性。
4. \***\*并发安全\*\***：不可变数据结构在多线程环境下更容易处理，因为不存在数据竞争（race conditions）的问题。
5. \***\*易于理解\*\***：不可变数据使得代码更容易理解和维护

最常用的库之一是 Immutable.js，它提供了一系列不可变的数据结构，如 Map, List, Set 等。

2\. 使用 Redux 与 Immutable 数据

Redux 是一个流行的用于状态管理的库，可以结合 Immutable 数据结构来提高性能。

在使用 redux 过程中也可以结合 Immutable，不使用 Immutable 前修改一个数据需要做一个深拷贝

1：

const initialState = {

count: 0

};

2：

const initialState = Map({

count: 0

});

在做 react 性能优化的时候，为了避免重复渲染，我们会在 shouldComponentUpdate()中做对比，当返回 true 执行 render 方法

Immutable 通过 is 方法则可以完成对比，而无需像一样通过深度比较的方式比较

### Render 方法调用

1. 当国家改变使用 this.setState()
2. 当你的组件收到新的 props
3. 当 this.forceUpdate()被叫时。

初始化：当组件被创建并被插入到 DOM 中时，会触发初始渲染，render 方法会被调用。

更新：当组件的 props 或 state 发生改变时，会触发组件的更新。在更新过程中，React 会检查组件之前的虚拟 DOM 数和当前的虚拟 DOM 树的差异，然后只更新发生变化的部分。在更新过程中，render 方法会再次被调用。

父组件更新：如果组件的父组件发生更新，就会导致组件本身的更新，render 方法会被调用。

强制更新：通过调用组件实例的 forceUpdate 方法可以强制组件进行更新，即使组件的 props 和 state 没有发生变化，render 方法也会执行。

### React.createClass 和 extends Component 的区别

React.createClass 和 extends Component 的 bai 区别主要在于：

（1）语法区别

createClass 本质上是一个工厂函数，extends 的方式更加接近最新的 ES6 规范的 class 写法。两种方式在语法上的差别主要体现在方法的定义和静态属性的声明上。

createClass 方式的方法定义使用逗号，隔开，因为 creatClass 本质上是一个函数，传递给它的是一个 Object；而 class 的方式定义方法时务必谨记不要使用逗号隔开，这是 ES6 class 的语法规范。

（2）propType 和 getDefaultProps

React.createClass：通过 proTypes 对象和 getDefaultProps()方法来设置和获取 props.

React.Component：通过设置两个属性 propTypes 和 defaultProps

（3）状态的区别

React.createClass：通过 getInitialState()方法返回一个包含初始值的对象

React.Component：通过 constructor 设置初始状态

（4）this 区别

React.createClass：会正确绑定 this

React.Component：由于使用了 ES6，这里会有些微不同，属性并不会自动绑定到 React 类的实例上。

（5）Mixins

React.createClass：使用 React.createClass 的话，可以在创建组件时添加一个叫做 mixins 的属性，并将可供混合的类的集合以数组的形式赋给 mixins。

如果使用 ES6 的方式来创建组件，那么 React mixins 的特性将不能被使用了。

————————————————

版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：<https://blog.csdn.net/weixin_46714216/article/details/142070201>

import React from 'react';

let MyMixin = {

doSomething(){}

}

let TodoItem = React.createClass({

mixins: \[MyMixin\], // add mixin

render(){

return &lt;div&gt;&lt;/div&gt;

}

})

### 为什么 reducer 是一个纯函数

redux 源代码中将 oldState 和 newState（reducer 返回的结果）做比较，如果 reducer 为非纯函数，两者指向同一个地址，导致 react 认为 state 无变化，从而不更新页面。

### 高阶组件

一个高阶组件就是一个函数，接受一个组件作为输入，然后返回一个新的组件作为结果。

1 重用代码

2.修改现有组件的行为，， 比如使用第三方组件，独立于原有的组件，可以产生新组件，对原组件没有侵害。

约定

props 保持一致

- 你不能在函数式（无状态）组件上使用 ref 属性，因为它没有实例
- 不要以任何方式改变原始组件 WrappedComponent
- 透传不相关 props 属性给被包裹的组件 WrappedComponent
- 不要再 render() 方法中使用高阶组件
- 使用 compose 组合高阶组件
- 包装显示名字以便于调试

举个例子，存在一个组件，需要从缓存中获取数据，然后渲染。一般情况，我们会如下编写：

上述代码当然可以实现该功能，但是如果还有其他组件也有类似功能的时候，每个组件都需要重复写 componentWillMount 中的代码，这明显是冗杂的

下面就可以通过高价组件来进行改写，如下：

### 受控组件

类似于表单元素会维护自身的状态，基于用户输入更新

在使用表单来收集用户输入时，例如&lt;input&gt;&lt;select&gt;&lt;textearea&gt;等元素都要绑定一个 change 事件，当表单的状态发生变化，就会触发 onChange 事件，更新组件的 state。这种组件在 React 中被称为受控组件

### Purecoponnet

React 创建了 PureComponent 组件创建了默认的 shouldComponentUpdate 行为。这个默认的 shouldComponentUpdate 行为会一一比较 props 和 state 中所有的属性，只有当其中任意一项发生改变是，才会进行重绘。

需要注意的是，PureComponent 使用浅比较判断组件是否需要重绘

因此，下面对数据的修改并不会导致重绘（假设 Table 也是 PureComponent)

options.push(new Option())

options.splice(0, 1)

options\[i\].name = "Hello"

这些例子都是在原对象上进行修改，由于浅比较是比较指针的异同，所以会认为不需要进行重绘。

### 传递数据

Props 传递参数

Props 传递方法

Ref 获取组件的实例

Redux

React context

发布订阅

###

为什么 useState 要使用数组而不是对象 ？

useState 返回一个数组而不是对象的主要原因是，数组的解构赋值更加灵活。这样，你可以自由地命名你的状态变量和更新函数，而不是被迫使用像 this.state 和 this.setState 这样的命名。

###

常见性能优化指南  
[Https://zhuanlan.zhihu.com/p/559922432](Https://zhuanlan.zhihu.com/p/559922432)

一、避免不必要的渲染

二、优化条件渲染

三、列表中正确的使用 key

四、组件销毁后清理引用数据

五、正确的处理数据

六、缓存优化

七、批量更新，减少 Render 次数

八、懒渲染/虚拟列表

九、debounce、throttle 优化频繁触发的回调

#### **使用 React.memo 和 useMemo usecallback**

- \***\*React.memo\*\***：用于优化函数组件的重新渲染。当父组件重新渲染时，如果函数组件的 props 没有变化，则不会重新渲染。
- \***\*useMemo\*\***：用于缓存计算结果，当依赖项没有变化时，不会重新计算。

#### 使用 React.lazy 和 &lt;Suspense&gt;

#### 使用 shouldComponentUpdate 或 PureComponent

- \***\*shouldComponentUpdate\*\***：在类组件中可以重写此方法来手动控制组件是否需要更新。
- \***\*PureComponent\*\***：React 提供的基类，它会根据 props 和 state 的浅层比较来决定是否需要重新渲染。

#### 优化状态管理

- \***\*useState\*\*** 和 \***\*useReducer\*\***：尽量减少全局状态的数量，优先考虑局部状态。
- \***\*Context API\*\***：对于需要跨多个组件传递的状态，可以使用 Context API 来避免 prop-drilling。

#### 优化虚拟 DOM

- \***\*避免不必要的重新渲染\*\***：确保只有在状态或 props 改变时才重新渲染。
- \***\*使用 Key 属性\*\***：确保列表中的元素都有唯一的 key 属性，以帮助 React 识别哪些元素发生了变化。

### setState

假如 setState 是同步更新的，每更新一次，这个过程都要完整执行一次，无疑会造成性能问题。此外为了批次和效能

1. \***\*异步更新\*\***：setState 是异步的，不会立即更新状态。
2. \***\*合并状态更新\*\***：多次 setState 调用会被合并。
3. \***\*回调函数\*\***：可以传递回调函数来处理状态更新后的逻辑。
4. \***\*批处理更新\*\***：React 会尽量将多次状态更新批处理为一次更新，以提高性能。

#### 异步更新

changeText() {

this.setState({

message: "你好啊"

})

console.log(this.state.message); // Hello World}

从上面可以看到，最终打印结果为 Hello world，并不能在执行完 setState 之后立马拿到最新的 state 的结果

如果想要立刻获取更新后的值，在第二个参数的回调中更新后会执行

changeText() {

this.setState({

message: "你好啊"

}, () => {

console.log(this.state.message); // 你好啊

});}

#### 批量更新

handleClick = () => {

this.setState({

count: this.state.count + 1,

})

console.log(this.state.count) // 1

this.setState({

count: this.state.count + 1,

})

console.log(this.state.count) // 1

this.setState({

count: this.state.count + 1,

})

console.log(this.state.count) // 1

}

实际等价于如下：

Object.assign(

previousState,

{index: state.count+ 1},

{index: state.count+ 1},

...

)

由于后面的数据会覆盖前面的更改，所以最终只加了一次

如果是下一个 state 依赖前一个 state 的话，推荐给 setState 一个参数传入一个 function，如下：

onClick = () => {

this.setState((prevState, props) => {

return {count: prevState.count + 1};

});

this.setState((prevState, props) => {

return {count: prevState.count + 1};

});

}

### 组件间通信

- 父组件向子组件传递
  - props
- 子组件向父组件传递
  - 父组件向子组件传一个函数，然后通过这个函数的回调
- 兄弟组件之间的通信
  - 则父组件作为中间层来实现数据的互通，通过使用父组件传递
- 父组件向后代组件传递
  - 使用 context 提供了组件之间通讯的一种方式
- 非关系组件传递
  - 建议将数据进行一个全局资源管理 redux

### 常见的 CSS 引入方式有以下

- 在组件内直接使用
  - 直接在组件中书写 css 样式，通过 style 属性直接引入
- 组件中引入 .css 文件
- 组件中引入 .module.css 文件
  - className
- CSS in JS
  - styled-components

### ErrorBoundary

组件内异常，也就是异常边界组件能够捕获的异常，主要包括：

1. 渲染过程中异常；
2. 生命周期方法中的异常；
3. 子组件树中各组件的 constructor 构造函数中异常。

不能捕获的异常，主要是异步及服务端触发异常：

1. 事件处理器中的异常；  
   处理方法： 使用 try/catch 代码进行捕获
2. 异步任务异常，如 setTiemout，ajax 请求异常等；  
   处理方法：使用全局事件 window.addEventListener 捕获
3. 服务端渲染异常；
4. 异常边界组件自身内的异常；  
   处理方法：将边界组件和业务组件分离，各司其职，不能在边界组件中处理逻辑代码，也不能在业务组件中使用 didcatch

<br/>

错误边界（Error Boundaries）:

错误边界是在 React 16 中引入的一个特性，它允许你捕捉发生在其子组件树任何位置的 JavaScript 错误，并且不会让整个组件树崩溃。错误边界可以是任何类组件或函数组件，只要它们定义了特定的生命周期方法或 hook。

形成错误边界组件的两个条件：

使用了 static getDerivedStateFromError()

使用了 componentDidCatch()

抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 处理错误

### useEffect

当传递空数组 \[\] 时，useEffect 只会在组件挂载和卸载时调用一次，因此返回的函数也只会在组件卸载时执行一次。

当传递依赖数组时

### Key

提供唯一的 key 可以帮助 React 更快地识别和更新元素，从而提高性能。当列表中有大量元素时，这一点尤为重要。

1.使用唯一标识符：确保提供的 key 是唯一的，并且在每次渲染时都保持一致。

2.避免使用索引作为 key：如果列表项的位置可能会改变，避免使用索引作为 key，因为这会导致不必要的重新渲染。

3.使用稳定的标识符：如果可能，使用来自数据源的稳定标识符（如数据库 ID）作为 key。

### Virtual DOM

是一个轻量级的 JavaScript 对象，它最初只是 real DOM 的副本。它是一个节点树，它将元素、它们的属性和内容作为对象及其属性

### 展示组件和 容器组件

展示组件更关心 UI

容器组件 更关心组件如何运作的，通常是有状态的

## Fiber

在 React 16 中引入了 Fiber 架构，这一架构是为了解决原有实现的一些限制和问题。

### **为什么采用 Fiber 架构？**

#### **1\. 并发渲染（Concurrency）**

React 之前的实现是基于 Stack（栈）驱动的，这意味着在渲染期间，如果有一个长任务正在进行，那么整个 UI 都会被阻塞，直到这个任务完成。这对于用户体验来说是非常不利的，特别是在大型应用中，长任务可能会导致应用变得无响应。Fiber 架构的设计是为了支持并发渲染，即在渲染过程中能够中断并恢复，从而允许 React 在渲染过程中插入其他工作，如处理用户输入，使应用更加流畅。

#### **2\. 更好的错误处理**

Fiber 结构提供了更好的错误处理机制。每个 Fiber 节点都有一个指向父节点的指针，这使得错误处理更加容易，因为可以在树的任意位置中断渲染，捕获错误，并且可以选择性地重试。

#### **3\. 细粒度的更新**

Fiber 架构使得 React 可以更好地追踪每个组件的状态，因为每个 Fiber 节点都可以保存其自己的工作进度。这意味着 React 可以在需要的时候回溯到之前的某个状态，或者在某个点暂停渲染，稍后再继续。

#### **4\. 改进的性能**

Fiber 结构通过将工作分解成更小的任务来改进性能。每个 Fiber 节点代表一个单独的工作单元，React 可以根据优先级调度这些单元，这样就可以优先处理重要的更新，而将次要的更新推迟。

#### **5\. 更灵活的更新逻辑**

由于 Fiber 结构的引入，React 可以更灵活地管理更新逻辑。例如，通过 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期方法，React 可以在渲染的不同阶段收集信息并做出决策。

#### **6\. 可中断性和优先级**

Fiber 结构允许 React 在渲染过程中中断，这意味着 React 可以根据优先级来安排渲染任务，比如先渲染高优先级的任务，然后再处理低优先级的任务。

### fiber 架构的工作原理

Fiber 架构的核心思想是将工作分割成更小的单位，并且可以中断这些单位的工作，以便在需要时恢复。

下面是一个简化的 Fiber 架构的工作原理概述：

#### Fiber 节点结构

每个 Fiber 节点都是一个对象，包含以下属性：

- \***\*Type\*\***: 表示节点的类型，如类组件、函数组件、DOM 元素等。
- \***\*Key\*\***: 用于唯一标识兄弟节点。
- \***\*State Node\*\***: 实际的 DOM 节点或组件实例。
- \***\*Child/Sibling/Return\*\***: 指向子节点、同级节点以及父节点的指针。
- \***\*Work In Progress\*\***: 当前正在执行的工作副本。
- \***\*Flags/Effects\*\***: 记录当前节点的副作用，如需要添加、删除或更新 DOM。
- \***\*Priority\*\***: 工作的优先级。
- \***\*Tag\*\***: 标记节点的类型，如同步、异步等。

#### 工作循环（Work Loop）

React 使用一个工作循环来处理渲染任务。这个循环是可中断的，意味着它可以被中断并在后续的时间片中恢复。工作循环的基本步骤如下：

1. \***\*初始化\*\***：当需要更新组件时，React 创建一个根 Fiber 节点，并启动工作循环。
2. \***\*调度\*\***：React 使用调度器（Scheduler）来确定何时执行渲染工作。调度器考虑优先级和其他系统负载来决定何时执行工作。
3. \***\*执行\*\***：在每个时间片内，React 处理一小部分工作，例如，遍历虚拟 DOM 树的一部分，计算差异，等等。
4. \***\*中断\*\***：如果时间片结束或有更高优先级的任务到来，React 会中断当前的工作，并保存所有的工作进度。
5. \***\*恢复\*\***：当再次获得执行时间时，React 会从中断的地方恢复工作，直到所有的工作都完成。
6. \***\*提交\*\***：当所有的工作都完成时，React 会执行提交阶段，将实际的 DOM 更新操作应用到界面上。

#### 主要阶段

Fiber 架构的工作流程主要包括以下两个主要阶段：

##### 1\. Render Phase（渲染阶段）

在渲染阶段，React 会根据最新的状态和属性构建新的虚拟 DOM 树。这个阶段涉及到：

- \***\*递归遍历\*\***：遍历整个虚拟 DOM 树，为每个节点创建或更新对应的 Fiber 节点。
- \***\*计算差异\*\***：比较新的虚拟 DOM 树与旧的虚拟 DOM 树之间的差异。
- \***\*中断与恢复\*\***：如果需要，中断当前的工作并在下一个时间片恢复。

##### 2\. Commit Phase（提交阶段）

提交阶段是在新的虚拟 DOM 树构建完成后发生的，它涉及到：

- \***\*更新 DOM\*\***：将计算出的差异应用到真实的 DOM 上。
- \***\*执行副作用\*\***：如调用生命周期方法、执行回调等。
- \***\*清理工作\*\***：清理不再需要的 Fiber 节点。

## useImperativeHandle

useImperativeHandle 是 React Hooks 中的一个 Hook，它用于自定义父组件通过 ref 访问子组件实例时的行为。这个 Hook 可以让你指定当一个父组件获取一个子组件的 ref 时，希望暴露哪些方法或值给父组件。这样可以让你控制父组件如何与子组件交互。

### **useImperativeHandle 的用途**

1. \***\*暴露方法\*\***：允许子组件向父组件暴露方法，以便父组件可以调用这些方法。
2. \***\*定制** ref **行为\*\***：让你能够自定义暴露给父组件的 ref 对象的值或方法，使得父组件能够按照预期的方式与子组件交互。

### **useImperativeHandle 的基本用法**

- **useImperativeHandle(ref, createHandle, \[input\])**
- **  
   ref**：由父组件传递给子组件的 ref 对象。
- **createHandle**：一个函数，返回一个对象，该对象包含了希望暴露给父组件的方法或值。
- **input**：可选的依赖数组，用于确定何时重新创建 createHandle 函数的结果。

### **使用示例**

import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {

const \[count, setCount\] = useState(0);

useImperativeHandle(ref, () => ({

increment: () => setCount(count + 1),

getCount: () => count,

}));

return &lt;div&gt;Count: {count}&lt;/div&gt;;

});

export default ChildComponent;

#### **父组件**EerrorBoundary

import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ChildComponent = forwardRef((props, ref) => {

const \[count, setCount\] = useState(0);

useImperativeHandle(ref, () => ({

increment: () => setCount(count + 1),

getCount: () => count,

}));

return &lt;div&gt;Count: {count}&lt;/div&gt;;

});

export default ChildComponent;

## BrowserRouter 和 HashRouter

### **1. **BrowserRouter\*\*\*\*

工作原理

- \***\*HTML5 History API\*\***：BrowserRouter 使用 HTML5 的历史记录 API (pushState, replaceState, popstate) 来管理路由。它利用浏览器的地址栏和历史记录来实现平滑的页面切换，而不需要重新加载整个页面。

优点

- \***\*更好的用户体验\*\***：用户可以使用浏览器的前进和后退按钮来导航，而不会导致页面重新加载。
- \***\*更干净的 URL\*\***：URL 不包含 # 符号，看起来更专业和整洁。
- \***\*搜索引擎优化 (SEO)\*\***：由于 URL 更干净，搜索引擎更容易抓取和索引页面。

缺点

- \***\*服务器配置\*\***：需要服务器配置来处理所有路由请求，将它们重定向到主入口文件（通常是 index.html）。否则，直接访问非根路径的 URL 会导致 404 错误。
- \***\*不支持旧浏览器\*\***：HTML5 History API 在一些旧浏览器中可能不可用。

&lt;BrowserRouter&gt;：包裹应用以启用路由。

&lt;Routes&gt;：包含多个 &lt;Route&gt;，匹配 URL 并渲染组件。

&lt;Route&gt;：定义路径到组件的映射。

#### 路由跳转

#### Link 和 NavLink

Link 还是 NavLink，它们的工作原理都是拦截浏览器默认的行为（即页面刷新），并通过调用 history.pushState() 方法来改变 URL，而不触发完整的页面加载。

Link 组件的主要功能是生成一个 HTML &lt;a&gt; 标签

NavLink 是基于 Link 构建的一个更高级别的组件，它不仅提供了与 Link 相同的功能，而且还增加了自动检测是否处于活动状态的能力这意味着你可以轻松地为当前选中的链接应用特定的样式或类名

声明式导航：这种方式是声明式的，意味着它直接作为 JSX 的一部分出现在组件返回的渲染树中。当条件满足时，React 将会渲染 &lt;Navigate&gt; 组件，这会导致 URL 和视图的变化。

支持状态传递：通过 state 属性，你可以传递额外的信息给目标页面，例如当前试图访问的位置（location），以便登录成功后能够返回原来的页面。

替换历史条目：replace 属性设置为 true 可以确保这次导航不会添加新的历史记录条目，而是替换掉当前的历史条目。这对于避免用户点击浏览器的“后退”按钮返回到受保护页面是有用的。

### **2. **HashRouter\*\*\*\*

工作原理

- \***\*URL 哈希 (#)\*\***：HashRouter 使用 URL 的哈希部分（即 # 后面的部分）来管理路由。浏览器的地址栏会显示类似于 <http://example.com/#/about> 的 URL。
- HashRouter 依赖于浏览器的 hashchange 事件来检测路由的变化

优点

- \***\*无需服务器配置\*\***：由于路由信息包含在 URL 的哈希部分，服务器只需要处理根路径的请求，不需要特殊配置。
- \***\*兼容性好\*\***：支持所有现代浏览器和大部分旧浏览器。

缺点

- \***\*URL 不够美观\*\***：URL 中包含 # 符号，看起来不够专业。
- \***\*搜索引擎优化 (SEO)\*\***：搜索引擎可能不会很好地抓取和索引带有 # 的 URL，影响 SEO。
- \***\*书签和分享\*\***：用户在书签或分享 URL 时，可能会遇到问题，因为哈希部分不会发送到服务器。

## React 服务端渲染（Server-Side Rendering, SSR）

<https://github.com/linwu-hi/code-interview/issues/127>

是一种在服务器端生成 React 组件的 HTML 标签的技术，然后将生成的 HTML 发送给客户端浏览器，由浏览器进行渲染。相比传统的客户端渲染（Client-Side Rendering, CSR），SSR 可以改善首屏加载速度，提高 SEO 效果，并提供更好的用户体验。

React 服务端渲染的原理

1.组件转为 HTML 字符串：

在服务器端，React 组件会被转换成对应的 HTML 字符串。这通常通过 ReactDOMServer.renderToString() 方法完成。

2.HTML 字符串插入到页面中：

生成的 HTML 字符串会被插入到发送给客户端的 HTML 页面中。

3.客户端接管：

当 HTML 页面加载到客户端浏览器后，React 会接管页面的渲染任务。这个过程通常通过 ReactDOM.hydrate() 方法完成，该方法会将静态 HTML 标签“激活”为可交互的 React 组件。

### 创建服务器端渲染逻辑

### 创建客户端接管逻辑

在客户端，我们需要让 React “激活”已经插入页面中的 HTML 标签。

### ReactDOM.hydrate() 方法的作用如下

寻找 DOM 节点：document.getElementById('root') 用于查找页面中 ID 为 root 的 DOM 节点。

激活静态 HTML 标签：将静态 HTML 标签转换为可交互的 React 组件，使组件能够响应用户操作并进行状态更新。

### 水合的具体过程

#### 1 读取静态 HTML

ReactDOM.hydrate 会读取服务器生成的静态 HTML，解析其中的 DOM 节点。

#### 2 对比虚拟 DOM

ReactDOM.hydrate 会将静态 HTML 中的 DOM 节点与 React 组件的虚拟 DOM 进行对比。

如果两者一致，React 会保留现有的 DOM 节点，避免不必要的重新渲染。

如果两者不一致，React 会进行必要的 DOM 更新，使页面变为可交互状态。

#### 3 附加事件处理器

React 会为静态 HTML 中的 DOM 节点附加事件处理器，使其变得可交互。

## Next.js 服务端渲染的基本步骤

只需要编写页面组件，并在需要的情况下使用 getInitialProps 方法来获取初始数据。

在客户端，Next.js 会自动处理页面的激活，这意味着你不需要手动调用 ReactDOM.hydrate()。

1.创建 Next.js 应用。

2.编写页面组件。

3.使用 getInitialProps 获取初始数据。（已被废弃）

4.部署应用。

创建 Next.js 应用

npx create-next-app my-app

cd my-app

npm run dev

编写页面组件

1. Next.js 自动为你创建了一个默认的页面 pages/index.js。你可以在这个文件中编写你的页面组件。

2\. 使用 getInitialProps 获取初始数据

如果你想在服务端渲染时获取一些初始数据，可以使用 getInitialProps 静态方法。这个方法会在服务端渲染时运行，并将返回的对象合并到页面组件的 props 中。

## Navigate

&lt;Navigate&gt; 组件的 replace 属性用于控制浏览器的历史记录栈的行为。当 replace 属性设置为 true 时，它会替换当前的历史记录条目，而不是在历史记录栈中添加一个新的条目。

不使用 replace

假设初始状态为 / 页面：

用户点击按钮导航到 /dashboard。

浏览器的历史记录栈变为：\[/, /dashboard\]。

用户点击后退按钮。

浏览器返回到 / 页面。

使用 replace

假设初始状态为 / 页面：

用户点击按钮导航到 /dashboard，并且使用 replace。

浏览器的历史记录栈变为：\[/dashboard\]（/ 被替换了）。

用户点击后退按钮。

浏览器返回到更早的页面（如果没有其他历史记录条目的话，可能会返回到主页或关闭标签页）。

## 搭建步骤

#### **腾讯云 NPM 镜像：**

npm config set registry <https://mirrors.cloud.tencent.com/npm/>

1 npm install -g create-react-app （npm uninstall -g create-react-app before install）

2 npx create-react-app my-app (if use ts, npx create-react-app my-app --template typescript)

3 cd my-app

4 npm start

## React

<https://github.com/semlinker/reactjs-interview-questions#>

<https://segmentfault.com/a/1190000044078956>

1. 虚拟 dom
2. 渲染流程
3. 类组件和函数组件
4. 在构造函数中调用 super(props)
5. 受控组件
6. react 中不能直接修改 state
7. SetState 以后发生了什么
8. SetState 值丢失
9. setState 同步还是异步？
10. React 逻辑复用方式有哪些
11. 使用 Hooks 有踩过哪些坑？
12. useRef 有什么作用？
13. useMemo
14. useCallback
15. 怎么理解 Fiber 和并发模式
16. react 绑定事件是匿名函数
17. React 的合成事件
18. Reconciler
19. Hook 的优势
20. Diff
21. useEffect
22. 使用 key 来做同级比对。如果使用数组下标作为 key，有以下情况：
23. React.lazy (动态代码加载)
24. 性能优化
25. 组件间通信
26. 引入 CSS
27. 异步
28. Redux connect
29. React Hooks 的限制
30. useEffect 与 useLayoutEffect
31. Memo 和 usememo
32. dangerouslySetInnerHTML
33. redux
34. ErrorBoundary
35. 路由
36. react-router a 标签和 link
37. useReducer
38. 自定义 Hook
39. React 触发 render 方法
40. Redux 和 Redux-Thunk 的关系
41. Fiber 架构
42. createPortal
43. React 中的 createContext 和 useContext
44. React 为什么要废弃 componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子
45. 优化策略
46. 判断一个 React 组件是 class component 还是 function component
47. React.memo() 和 useMemo()
48. 说说 React 事件和原生事件的执行顺序
49. 如果在组件中绑定事件处理程序时使用匿名函数
50. PureComponent
51. Hashrouter 和 historyrouter
52. react 给一个菜单栏，如何设置权限管理，只展示对应权限的菜单列表
