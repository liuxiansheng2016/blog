---
title: 'Angular'
date: '2025-1-10'
description: 'Angular 是一个 Web 框架，能够帮助开发者构建快速、可靠的应用。'
---

# Angular

## 模块

Angular 应用程序由多个模块组成，每个模块负责处理特定的功能或一组相关的功能

### 根模块

- 每个 Angular 应用程序至少有一个根模块，通常命名为 AppModule。



#### **1.2 根模块的属性**

- **declarations**: 声明属于该模块的组件、指令和管道。
- **imports**: 导入其他模块，以便在当前模块中使用它们的导出内容。
- **providers**: 注册服务提供者，使其在模块范围内可用。
- **bootstrap**: 指定应用程序启动时应该引导的根组件

### Feature modules

- 特性模块用于组织与特定功能相关的组件、服务、指令等。

### 共享模块（Shared Module）

- 共享模块包含可以在多个特性模块中复用的组件、指令和服务。

### core

- 通常包含核心模块和服务，如全局服务、拦截器等。。

路由懒加载模块（Lazy-Loaded Module）

loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

如果你的功能模块是通过路由懒加载的方式引入的，那么你不需要直接在 AppModule 中导入这些模块。相反，你应该在路由配置中定义它们。

### Standalone Components

它允许开发者创建不依赖于 NgModule 的组件、指令和管道。这意味着组件可以直接在其他组件中使用，而不需要通过 NgModule 进行声明和导出



## 数据传输

###

1父到子

1. 输入属性（@Input）

### 2子到父

使用 @Output 装饰器可以在子组件向父组件传递事件。子组件通过 EventEmitter 发出事件





### 3. 服务（Services）

使用服务可以在多个组件之间共享数据。服务可以通过依赖注入（DI）系统在组件中注入，并提供数据和方法。

### 4. 路由参数（Route Parameters）

###

5 storage

### 6 RXjs 发布订阅  





## 装饰器 decorator

装饰器（Decorators）是一种元编程工具，用于修改或注解类、方法、属性和参数

### 类装饰器

 @Component

用于定义 Angular 组件。组件是 Angular 应用的基本构建块，包含模板、样式和类。

@NgModule

定义模块。

@directive  
用于定义指令。指令用于在模板中添加行为。



@Injectable

用于定义服务。服务通常用于提供可重用的功能，如数据访问、业务逻辑等。



### 属性装饰器

@Input / @output

定义输入/输出属性

允许父组件向子组件传递数据。/ 允许父组件向子组件传递数据。

@ViewChild

用于获取组件或指令的实例。

### 方法装饰器

@HostListener

用于在指令或组件中监听宿主元素的事件。

### 怎么自定义装饰器  

装饰器的结构

装饰器函数接受一个或多个参数，具体取决于装饰器的类型：

- ****类装饰器****：接受一个参数，即类的构造函数。
- ****属性装饰器****：接受两个参数，即目标对象（类的原型或类本身）和属性名。
- ****方法装饰器****：接受三个参数，即目标对象（类的原型或类本身）、方法名和方法描述符。
- ****参数装饰器****：接受三个参数，即目标对象（类的原型或类本身）、方法名或属性名和参数索引。

装饰器的执行时机

装饰器在编译时被调用，而不是在运行时。这意味着装饰器可以用来修改类的定义，而不会影响运行时的性能。

装饰器的返回值

- ****类装饰器****：可以返回一个新的构造函数，以替换原来的类。
- ****方法装饰器****：可以返回一个新的方法描述符，以替换原来的方法。
- ****属性装饰器****：通常不返回值，因为它们主要用于修改属性的行为。
- ****参数装饰器****：通常不返回值，因为它们主要用于添加元数据。





## 依赖注入（Dependency Injection, DI）模式

Angular 的依赖注入系统是其核心特性之一。通过依赖注入，组件和服务可以轻松地获 取所需的依赖项，而不需要手动实例化对象。

## providedIn: 'root'



providedIn: 'root': 这个选项告诉 Angular，在根注入器中提供这个服务。这意味着服务在整个应用程序中都是单例的，可以在任何组件中注入和使用。

@Injectable() 是 Angular 中的一个装饰器，用于标记一个类为可注入的服务。

### Injectable



### 构造函数注入

在 Angular 中，依赖项通常是通过构造函数注入的。Angular 的编译器会分析构造函数参数，并从 DI 系统中获取相应的依赖项。



### 生命周期钩子和注入



### @Injectable() 和 @Inject

- @Injectable() 是 Angular 中的一个装饰器，用于标记一个类为可注入的服务。

**@Inject **装饰器****：

- ****非类令牌****：它特别适用于注入非类令牌，如 InjectionToken 或原始类型（例如字符串、数字）。
- ****显式注入****：它使依赖注入更加明确和清晰。
  - 假设你有两个不同版本的 LoggerService，但它们都实现了同一个接口 ILoggerService。在这种情况下，你可以使用 @Inject 来明确指定要注入哪一个具体的实现。

**InjectionToken**：用于创建标识符，以便在依赖注入系统中注入非类类型的值。

- ****注入非类类型的值****：通过 @Inject 装饰器和 InjectionToken 来实现。



### 注入令牌



## 设计模式

<https://zhuanlan.zhihu.com/p/672502223>

### 行为型设计模式

描述多个类或对象之间怎样==相互协作==共同完成单个对象都无法单独完成的任务

#### 1 模版方法模式

描述： 模板方法模式的核心思想是封装行为中的不变部分，同时允许可变部分通过子类来进行扩展。

在前端开发中，模板方法模式通常用于处理页面的渲染和事件处理。例如，我们可以定义一个基础的页面渲染算法，并在其中定义一些抽象方法，如初始化数据、绑定事件、渲染模板等，然后在子类中实现这些具体操作。这样可以使得我们在开发页面时，只需要关注具体的业务逻辑，而不用过多关注页面的渲染细节。

Angular 的生命周期钩子（如 ngOnInit, ngOnDestroy 等）采用了模板方法模式。这些钩子方法在组件的生命周期中自动调用，开发者可以在这些方法中添加自定义逻辑。

#### 2观察者模式（Observer Pattern）

Angular 广泛使用 RxJS 库来实现观察者模式。RxJS 提供了 Observable 和 Subject 等类，用于处理异步数据流和事件。

在 RxJS 中，观察者模式通过 Observable 和 Observer 来实现。

- ****Observable（可观察对象）****：一个可以发送数据流的对象。它可以发送多种类型的通知，包括 next（发送数据）、error（发送错误）和 complete（发送完成通知）。
- ****Observer（观察者）****：一个可以接收 Observable 发送的通知的对象。它包含三个回调函数：next、error 和 complete



##### 发布-订阅模式

Subject 类实现了发布订阅模式。Subject 是一个特殊的 Observable，它既可以作为 Observable 来订阅，也可以作为 Observer 来接收数据。



#### 3 策略模式

策略模式用于定义一系列算法，并将每一个算法封装起来，使它们可以互换。Angular 中的路由守卫（Guards）就是一个典型的例子



### **[创建型设计模式](https://zhida.zhihu.com/search?content_id=237574615&content_type=Article&match_order=1&q=%E5%88%9B%E5%BB%BA%E5%9E%8B%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F&zhida_source=entity"%20\t%20"https://zhuanlan.zhihu.com/p/_blank)**

#### 1 单例模式（Singleton Pattern）

Angular 的服务默认是单例的，即在整个应用中只有一个实例。这通过在服务的 @Injectable 装饰器中设置 providedIn: 'root' 来实现。



#### 2工厂模式（Factory Pattern）

描述：它是专门定义一个类，依据参数的不同，来负责创建其它类的实例，被创建的实例通常都具有共同的父类

1. ****创建服务****：定义你需要创建的不同服务。
2. ****创建工厂函数****：编写一个工厂函数，根据条件返回不同的服务实例。
3. ****注册提供者****：在模块中注册工厂提供者。
4. ****在组件中使用服务****：在组件中注入并使用服务。

###### 简单工厂

简单工厂模式是最基本的形式

简单工厂其实不是一个设计模式，反而比较像是一种编程习惯。

简单工厂模式（Simple Factory Pattern）也称为静态工厂模式，它是专门定义一个类，依据参数的不同，来负责创建其它类的实例，被创建的实例通常都具有共同的父类。之所以称作静态工厂模式，

假设我们有一个应用，需要创建不同类型的日志记录器（例如，文件日志记录器和数据库日志记录器）。

###### 工厂方法

定义了一个创建对象的抽象接口（类或接口中的方法）==并不是代码中的interface==，但由子类决定要实例化的类 是哪一个。工厂方法把实例化推迟到子类

提供一个接口，让子类决定实例化哪一个类。





###### 抽象工厂

- ****工厂方法模式****适合于创建单一类型的产品，通过子类来决定具体的实现。
- ****抽象工厂模式****适合于创建一系列相关的产品，通过具体的工厂类来创建这些产品。

### 结构型设计模式

#### 1代理模式

描述：当我们想要对一个业务类进行某些横切性的增强时，例如：增加请求与响应 的日志、增加权限校验、增加远程请求对象封装等等。我们可以采用代理模式去实现， 而不需要修改原有的类。

#### 2组合模式

描述：用于将对象组合成树形结构以表示“部分-整体”的层次结构。

在 Angular 中，你可以利用组合模式来构建复杂的 UI 组件或数描述：它允许向一个现有的对象动态地添加新的功能，同时不改变其结构。它是继承的一种替代方案，可以实现在运行时动态地扩展对象的行为，而无需修改原有代码。

假设我们要构建一个简单的文件系统，其中包含文件和文件夹。文件夹可以包含文件和其他文件夹，形成一个树形结构。

1、Component：组合模式中的“根节点”，可以是接口、抽象类、普通类，该类中定义了其子类的所有共性内容，并且该类中还存在着用于访问和管理它子部件的方法。

2、Leaf：组合中的叶子节点，也就是最末端的节点，该节点下不会再有子节点。

3、Composite：非叶子节点，它的作用是存储子部件，并且在Composite中实现了对子部件的相关操作。

#### 3装饰器模式（Decorator Pattern）

用于修改或注解类、方法、属性和参数

#### 4适配器模式

模式描述：适配器模式允许你将一个类的接口转换成客户端期望的另一个接口。在 Angular 中，你可以使用适配器模式来处理不同数据源的格式转换。



## 路由

1. ****路由（Routes）****：定义了 URL 与组件之间的映射关系。
2. ****路由模块（RouterModule）****：用于配置路由的模块。
3. ****路由器（Router）****：负责根据当前 URL 导航到相应的组件。
4. ****路由出口（RouterOutlet）****：用于显示匹配到的组件。
5. ****路由参数（Route Parameters）****：可以从 URL 中提取动态参数。
6. ****路由守卫（Route Guards）****：用于控制路由的访问权限，如登录验证、权限检查等

### RouterModule.forRoot

RouterModule.forRoot 是配置 Angular 应用程序路由的核心方法





### 使用provideRouter

-   
    withInMemoryScrolling()：启用内存滚动恢复，确保用户在导航时保持滚动位置。
- withDebugTracing()：启用路由调试跟踪，有助于调试路由问题。

## EventEmitter

EventEmitter 的基本原理是观察者模式（Observer Pattern）。观察者模式定义了对象之间的一对多依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。

在 Angular 中，EventEmitter 主要用于父子组件之间的通信。以下是一些关键点：

#### 定义 EventEmitter

使用 @Output 装饰器将 EventEmitter 标记为输出属性。

EventEmitter 是一个 RxJS 的 Subject，它可以用来发射事件。

#### 发射事件

通过调用 emit 方法来发射事件，并传递事件数据。

#### 监听事件

父组件通过模板绑定来监听子组件的 EventEmitter 事件。

#### 代码实现

1 EventEmitter 类  
继承自 RxJS 的 Subject 类。Subject 是一个特殊的 Observable，它既是 Observer 又是 Observable，可以用来在多个订阅者之间共享数据。



2 @Output 装饰器

@Output 装饰器用于标记一个属性为输出属性，这样 Angular 可以在编译时识别并处理它



3事件监听

在父组件中，通过模板绑定来监听子组件的 EventEmitter 事件。



## 视图封装（View Encapsulation）

用于控制组件样式的可见性和作用域。Angular 提供了三种视图封装模式，

##### 1.1 Emulated（模拟）

这是默认的视图封装模式。在这种模式下，Angular 会模拟 Shadow DOM 的行为，通过为组件的样式添加唯一的选择器前缀，确保组件的样式不会影响其他组件。

##### 1.2 None（无）

在这种模式下，组件的样式将直接应用于全局样式表，没有任何作用域限制。这意味着组件的样式可能会与其他组件的样式发生冲突。

##### **1.3 ShadowDom（Shadow DOM）**

在这种模式下，组件的样式将完全封装在 Shadow DOM 中，确保组件的样式不会影响其他组件，也不会被其他组件的样式所影响。这种模式需要浏览器支持 Shadow DOM。

## 变更检测

### 默认

默认策略是最常用的策略，Angular 会自动检测组件及其子组件的所有变化

### Onpush

22.2 OnPush 策略

OnPush 策略是一种优化策略，适用于纯组件（即组件的输出只依赖于输入）。启用 OnPush 策略后，Angular 只在以下情况下才会检查组件的变更：

- 组件的输入属性发生变化
- 组件接收到新的事件（如 @Input、@Output）
- 组件内的异步操作完成（如 Promise、Observable）
- 通过 ChangeDetectorRef.markForCheck

要启用 OnPush 策略，可以在组件装饰器中设置 changeDetection 属性：

Default ：

这是默认的变更检测策略。每次事件触发时，Angular 会检查所有组件。

适用于大多数情况，但可能会导致性能问题，特别是在大型应用中。

OnPush：

仅在输入属性（@Input）发生变化或事件触发时进行变更检测。

适用于纯组件（没有副作用的组件），可以提高性能。

ChangeDetectorRef 提供了几种方法来管理变更检测过程：

ChangeDetectorRef 是 Angular 中一个非常重要的类，它提供了对组件变更检测机制的细粒度控制。

markForCheck()：当使用 OnPush 策略时，如果组件的输入属性没有发生变化，但你仍然希望该组件及其祖先组件被检查，则可以调用此方法。这将使得即使没有触发器，也会检查该组件（markForCheck() 不会立即触发变更检测，而是将当前组件及所有父组件标记为需要检测的状态。这意味着如果一个组件或其某个祖先组件使用了 OnPush 策略，调用 markForCheck() 后，Angular 将会在下一次全局变更检测时重新评估这些组件的状态，）

detach()：从变更检测树中移除当前组件的变更检测器。这意味着该组件及其子组件将不再执行变更检测，直到重新附加为止。这对于避免不必要的变更检测非常有用，特别是在处理大量数据或复杂计算时8。

reattach()：将之前分离出去的变更检测器重新添加回变更检测树中，从而使组件能够再次参与变更检测流程。通常与 detach() 一起使用，以实现局部变更检测8。

detectChanges()：强制立即对该组件及其所有子组件执行一次变更检测。这对于确保视图及时反映最新的数据状态特别有帮助，尤其是在异步操作完成之后1。

checkNoChanges()：用于调试目的，检查是否存在未预期的状态更改。它会抛出错误，如果发现任何脏值（即未经处理的数据变更）。这个方法在开发阶段很有用，但在生产环境中应该谨慎使用，因为它可能会导致性能问题8

## app.module.ts根模块文件

## Angular CDK

Angular CDK (Component Dev Kit) 是 Angular 团队提供的一套工具和构建块，旨在帮助开发者更轻松地创建高质量的 Angular 组件。CDK 不是一个独立的库，而是作为 @angular/cdk 包的一部分发布，它提供了许多底层功能，这些功能在 Angular Material 中被广泛使用，但也可以独立于 Material 使用。

### **主要特点**

****基础组件****：

- 1. CDK 提供了一些基础组件，如 Overlay、Portal、Scrolling 等，这些组件可以用来构建复杂的 UI 组件。
  2. 例如，Overlay 可以用来创建浮动面板（如对话框、弹出菜单等），而 Portal 可以用来将内容动态插入到 DOM 中。

## Angular 指令

Angular 指令是 Angular 框架中的一个重要概念，它们允许你将行为附加到 DOM 元素上。指令可以用来操作 DOM、监听事件、响应数据变化等。Angular 中主要有三种类型的指令：

1属性型指令（Attribute Directives）：

用于改变元素的外观或行为。

通常以 @Directive 装饰器来定义，并通过属性的形式应用到元素上。

例如，内置的 ngClass 和 ngStyle 指令。

2结构型指令（Structural Directives）：

用于在模板中添加或移除 DOM 元素。

通常以 \* 符号作为前缀，表示它们会影响宿主元素及其子元素。

例如，内置的 \*ngIf 和 \*ngFor 指令。

改变元素的行为  


使用&lt;div appHighlight&gt;

结构型指令  
Featurecheck







使用

\*gdFeatureCheck=’featureName’  
说明这是一个结构型指令

- **gdFeatureCheck**：用于传递静态值，不涉及动态计算。
- **\[gdFeatureCheck\]**：用于传递动态值或表达式，会触发变更检测。
- **\*gdFeatureCheck**：用于结构型指令，影响 DOM 结构，可以传递静态值或动态值。

## 应用启动时执行初始化逻辑

### APP_INITIALIZER（使用provideAppInitializer 替换）

APP_INITIALIZER 是一个用于在应用启动时执行初始化逻辑的注入令牌



### provideAppInitializer



- **APP_INITIALIZER**：是一个注入令牌，用于在应用启动之前执行初始化逻辑。
- **provideAppInitializer**：是一个辅助函数，提供了更简洁和类型安全的方式来配置 APP_INITIALIZER。



### **bootstrapApplication 启动独立组件**

独立组件的应用，并且你想在应用启动前执行一些初始化逻辑：



platformBrowser().bootstrapModule(MyModule);

### Muti:true

，使用 multi: true 可以确保这些提供者都被正确地添加到一个数组中，而不是被覆盖。



## 注册拦截器

使用

httpHeaderIntercepter  
添加请求头

ErrorIntercepter  
拿到错误码，转换错误对象

LogIntercepter  
排除文字 图片获取时的log

tokenIntercepter

给http 请求添加token，并且如果没有token的话

Retry



（timer(0) 表示立即重试）

可以定义一个core-interceptors.providers.ts

将所有的拦截器放进去

1你需要创建一个实现了 HttpInterceptor 接口的类。这个接口只有一个方法 intercept



2接下来，你需要在你的应用中注册这个拦截器。你可以通过 providers 数组将拦截器提供给依赖注入系统，并使用 HTTP_INTERCEPTORS 注入令牌。



3使用 withInterceptors 和 withInterceptorsFromDi





## HttpClient

### 配置HttpClient

HttpClientModule 在 Angular 16 及更高版本中已被标记为不推荐使用,

不需要再导入httpclientModule



#### provideHttpClient 函数

#### 独立组件（standalone component）的应用



#### **使用 NgModule**



- **provideHttpClient**：这是一个函数，用于配置 HttpClient。
- **withInterceptorsFromDi**：这个函数会从依赖注入器中获取所有已注册的 HTTP_INTERCEPTORS，并将它们添加到 HttpClient 的拦截器链中。

### 怎么使用HttpClient





### **将 Observable 转换为 Promise**

#### **使用 toPromise（RxJS 6.x 及之前版本）**

#### 使用firstValueFrom or lastValueFrom



取消订阅  
Subscription 是一个对象，用于表示对 Observable 的订阅。通过 Subscription 对象，你可以控制订阅的生命周期，包括取消订阅



### 取消订阅

####  **使用 Subscription 管理多个订阅**

如果你有多个订阅，可以使用 Subscription 类来管理它们

#### **1. private subscriptions: Subscription = new Subscription();**

这种声明方式创建了一个新的 Subscription 对象，并将其赋值给 subscriptions 属性。这个 Subscription 对象可以用来管理多个订阅，通过 add 方法将多个订阅添加到这个对象中。

优点：

- ****集中管理****：可以将多个订阅集中管理在一个 Subscription 对象中。
- ****自动取消****：当调用 unsubscribe 方法时，所有添加的订阅都会被自动取消。



如果使用

this.subscriptions.push(subscription1);的话，需要遍历所有订阅然后取消

subscriptions的声明方式如下：  
private subscriptions: Subscription\[\] = \[\];

#### **destroy$？**

private destroy$: Subject&lt;void&gt; = new Subject&lt;void&gt;();

- 这里定义了一个名为 destroy$ 的私有属性，类型为 Subject&lt;void&gt;。void 表示这个 Subject 不会发送任何实际的数据，只是一个信号。





- 你调用 this.destroy$.next() 来发出一个信号，表示组件即将销毁。
- 然后调用 this.destroy$.complete() 来完成这个 Subject，确保不会再有新的信号发出。

pipe(takeUntil(this.destroy$)) 创建一个新的 Observable，它会在 this.destroy$ 发出信号时停止发出值。

## 国际化

### 1实现工厂类（来动态加载和合并翻译文件）

- ****TranslateLoaderFactory**** 这是一个工厂类，返回一个新的类 LazyTranslateLoader，该类实现了 TranslateLoader 接口。



### 2模块导入  



Providers: \[brandTranslateService\]

### **3使用 TranslateService**

配置语言（项目中用的是配置brand）  



### 4 **在模板中使用管道**

  
或者在ts中直接  
this.brandTranslateService.getText('WELCOME').subscribe((res: string) => { this.welcomeMessage = res; });

## @ngmodule



### useFactory

- **useFactory**：是一个工厂函数，用于动态地创建和返回服务实例。
- **deps**：指定工厂函数的依赖项。



### Usevalue

提供的值是静态的，在应用运行时不会改变。

### InjectionToken

InjectionToken 是 Angular 中用于创建依赖注入令牌的类。这些令牌可以用来标识那些不能直接通过类来提供的值，例如原始类型（如字符串、数字）、数组或对象等。使用 InjectionToken 可以让你在 DI 系统中明确地指定要注入的值，并且可以为这些值提供一个描述性的名称。





## Angular CDK

Angular CDK (Component Dev Kit) 是 Angular 团队提供的一套工具和组件，旨在帮助开发者构建高质量的 Angular 应用程序。CDK 不仅包括一些可以直接使用的 UI 组件，更重要的是它提供了许多底层服务和工具，

- cdk/overlay：用于处理弹出层、对话框等覆盖物相关的逻辑。
- cdk/drag-drop：支持拖拽交互。
- cdk/a11y：提供无障碍辅助功能。
- cdk/layout：提供布局相关服务，例如断点检测。
- 

## Reactive Forms

1. **FormGroup**：表示一组控件（FormControl），可以是简单的输入字段，也可以是其他 FormGroup 或 FormArray。



1. **FormControl**：表示单个表单控件，例如文本框、复选框等。你可以为每个 FormControl 添加验证器（Validators）。
2. **FormArray**：表示一个动态数组，其中可以包含多个 FormControl 或 FormGroup。这对于实现动态添加或移除表单字段非常有用。



1. **FormBuilder**：提供了一种简便的方式来创建 FormGroup、FormControl 和 FormArray，简化了表单构建过程。

this.fb.array(\[this.createItem()\]) 创建了一个 FormArray，其中包含一个由 createItem 方法返回的 FormGroup。

5 formArrayName

是 Angular Reactive Forms 中的一个指令，它用于将 FormArray 绑定到模板中的一个 &lt;div&gt; 或其他容器元素。使用 formArrayName 指令可以让 Angular 知道哪个 DOM 元素对应于表单模型中的 FormArray

formGroup 指令用于将一个 FormGroup 实例绑定到一个 &lt;form&gt; 元素或任何其他容器元素上。

formControlName 指令用于将一个 FormControl 实例绑定到一个具体的输入元素上。每个带有 formControlName 的输入元素都对应于 FormGroup 中的一个键值对。

## 项目结构

- core: 通常包含核心模块和服务，如全局服务、拦截器等。
  - Component: Error/pagenotfount/success、
  - Factories: initial-load/translate-loader/app-preloading-strategy
  - Guards
  - Interceptors: error/http-deader/logging/retry/token
  - Models: 接口文件（也可以放在shared目录下）
  - Enums: 枚举文件（也可以放在shared目录下）

core-routing.module.ts/core.module.ts

- features: 通常包含应用的各个功能模块，每个功能模块可能包含自己的组件、服务和路由。(如果使用懒加载模块就不用导入到app.module)
- shared: 通常包含共享的组件、服务和管道等，可以在多个功能模块中复用。
  - shared.module.ts

app-routing.module.ts: 应用的路由模块，定义了应用的路由配置。

app.module.ts: 应用的根模块，定义了应用的模块配置。

assets

- brands: 品牌相关的静态资源。
- docs: 文档相关的静态资源。
- favicon: 网站的 favicon 图标。
- fonts: 字体文件。
- i18n: 国际化资源文件。
- images: 图片资源。

css

- brands: 品牌相关的 CSS 文件。
- components: 组件相关的 CSS 文件。
- fonts: 字体相关的 CSS 文件。
- mixins: CSS 混入文件。
- page-design: 页面设计相关的 CSS 文件。
- pages: 页面相关的 CSS 文件。
  - Footer/header/menu
- reset.scss: 重置样式文件。
- styles.scss: 主要的样式文件。
  - H1/h2/font/color/notification/

environments: 环境配置文件。

mirage: Mirage.js 相关文件，用于模拟数据。

module-federation.ts: 模块联邦相关的配置文件。

Enums

最推荐的做法是将枚举放在 shared/models 文件夹中.

比如与应用程序配置、环境设置等相关的枚举，可以考虑将其放置在 core 文件夹中

## 常见用法

### ng-container 和ng-template

ng-container 是 Angular 提供的一个特殊的容器标签，它允许你在模板中创建逻辑分组而不向最终的 DOM 添加额外的节点。这意味着 ng-container 在渲染时不会出现在页面上，也不会影响样式或布局。

ng-container 还可以与 ngTemplateOutlet 结合使用来递归调用模板，这有助于减少不必要的 DOM 元素嵌套，并且能够更灵活地传递参数给子模板

ng-template

另一方面，ng-template 是一个用于定义模板片段的 Angular 指令。这些模板片段本身并不会直接显示在页面上，而是作为模板的一部分被引用和重用。ng-template 的内容只有在通过特定的指令（如 \*ngIf、\*ngFor 或 ngTemplateOutlet）显式渲染时才会出现在视图中8。



ng-template 可以用来创建复杂的条件渲染逻辑，比如根据上下文的不同显示不同部分的内容。通过 context 参数，还可以向模板传递数据，使模板变得更加动态和交互性强4。



### ngTemplateOutlet

ngTemplateOutlet 是 Angular 框架中的一个内置结构指令，它允许开发者动态地插入由 ng-template 定义的模板内容。这个功能特别有用，尤其是在需要创建高度可定制或复用的组件时。通过 ngTemplateOutlet，你可以将一个提前准备好的 TemplateRef 插入到页面指定的位置，并且可以传递上下文数据给该模板以实现更加灵活的内容展示

在父组件中定义一个模板，并在子组件中渲染它：



parent.component.html 中定义了一个名为 customContent 的模板，并通过 &lt;app-child&gt; 标签将其传递给了子组件。子组件接收到这个模板后，在其自己的模板中使用了 ngTemplateOutlet 来渲染父组件传递过来的内容。同时，还设置了上下文对象 { $implicit: 'someItem' }，使得父组件定义的模板能够获取到传递的数据 item。

$implicit 等于let-item  
$implicit 是一个特殊的上下文变量名称，它用于 ngTemplateOutlet 和其他结构指令中，当定义模板引用变量时，可以用来表示默认传递的数据值

除了 $implicit，你也可以添加其他键值对到上下文对象中，以便在模板中使用不同的局部变量名进行绑定。



### 获取子组件的实例

使用 @ViewChild 获取单个子组件实例

使用 @ViewChildren 获取多个子组件实例

使用 @ContentChild 和 @ContentChildren 获取内容投影的子组件实例

## @Optional() @SkipSelf()

用于构造函数参数的参数装饰器

Optional

将参数标记为可选依赖项。如果找不到依赖关系，DI框架将提供null。

SkipSelf

它告诉DI框架从父注入器开始依赖项解析。分辨率在注射器层次结构中向上工作，因此不会检查本地注射器的提供者。



## Rxjs

<https://segmentfault.com/a/1190000021143815>

一种用于异步编程的库。它基于响应式编程模型

### 观察者

#### Observer

****定义****：一个 Observer 是一个拥有三个可选方法的对象或实现这些方法的函数，用于接收来自 Observable 的通知：

- **next(value)**：当 Observable 发出一个值时调用。
- **error(error)**：当 Observable 遇到错误并终止时调用。
- **complete()**：当 Observable 正常完成且不再发出更多值时调用。

作用：Observer 负责处理从 Observable 接收到的数据或事件，并对这些数据或事件做出响应。它订阅了 Observable 后，就会开始监听由该 Observable 发出的通知。

#### Observable

****定义****：Observable 是一个可以被订阅的对象，它代表了一个可能异步发生的值或事件序列。一旦有观察者订阅它，Observable 就会开始发送通知给这个观察者。

生产者与消费者：Observable 是生产者，负责生成数据流；而 Observer 是消费者，负责消费这些数据。





#### 其他创建方法

#### **使用静态创建方法**

RxJS 提供了多个静态方法来创建特定类型的 Observables，例如从数组、Promise、事件等创建。

- from: 将任何可迭代对象或 Promise 转换为 Observable。
- of: 创建一个发出一系列指定值的 Observable。
- interval: 创建一个每隔一定时间发出递增数值的 Observable。
- timer: 创建一个在指定延迟后开始发出值的 Observable。

### 订阅

什么是订阅？订阅是表示可支配资源的对象，通常是 Observable 的执行。





取消订阅

1 subscription.unsubscribe();

2 private subscriptions: Subscription\[\] = \[\];

3 通过 "adding" 一个订阅到另一个订阅来做到这一点：



### Of

of 方法可以接受一系列的值，并立即创建一个 Observable，该 Observable 会依次发出这些值，并在最后一个值发出之后完成。



### From

from 方法可以接受任何可迭代的对象（如数组、字符串、Set、Map，promise 等），并创建一个 Observable，该 Observable 会依次发出可迭代对象中的每个元素，并在最后一个元素发出之后完成。

你可以使用 from 将一个 Promise 转换为 Observable。





### Pipe

pipe 方法是一个函数，它接受一系列的操作符作为参数，并返回一个新的操作符



### Subject

- ****Subject****：是一个可以被多个观察者订阅的可观察对象，同时它可以向观察者发送值。
- ****BehaviorSubject****：始终保持最新的值，并且新订阅的观察者可以接收到这个最新的值。

Subject 是一个特殊的对象，它同时具备 Observable 和 Observer 的特性。具体来说，Subject 可以作为 Observable 被多个订阅者订阅，同时也可以作为 Observer 接收数据并将其广播给所有订阅者。









### mergeMap


假设你有一个用户 ID 列表，你需要根据这些 ID 获取用户的详细信息。你可以使用 flatMap 来实现这一点：



### **switchMap**

**switchMap**: 类似于 mergeMap，但当新的 Observable 发出时，它会取消之前的 Observable。

/ 只输出最后一个 Observable 的结果



### mergeAll

假设你有一个发出多个 Observables 的 Observable，你需要将这些 Observables 的值合并到一个单一的 Observable 中



### concatWith和concatAll

#### concatWith

将当前的 Observable 与另一个 Observable 连接起来，只有当前一个 Observable 完成后，才会开始订阅下一个 Observable。



在这个例子中，source1 先发出 1, 2, 3，然后 source2 发出 4, 5, 6。concat 确保了 source1 完成后再开始 source2

#### concatAll

假设你有一个发出多个 Observable 的 Observable，你需要按顺序处理这些 Observable：



如果不使用concatAll

返回的是两个observable.

#### concatAll 和mergeAll

- **concatAll** 适合于需要保持内部 Observables 顺序的情况，它会确保按照它们被发出的顺序依次执行。
- **mergeAll** 适用于需要同时并发处理多个内部 Observables 的情况，它可以将所有内部 Observable 的输出合并到一个单一的流中，但不保证值的顺序。

### Tap

用于对来自源 observable 的通知执行副作用



###

forkJoin

当有一组 observables，但你只关心每个 observable 最后发出的值时，此操作符是最适合的。它可能与 [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"%20\t%20"_blank) 的使用方式类似。



### pairwise  

 


假设你有一个数字序列，你想计算每对相邻值之间的差值：





假设你有一个事件流，你想检测每次值变化的情况：



### retry  

 
  

### Race

使用首先发出值的 observable 。

### startWith  


  

### timer

timer 接收第二个参数，它决定了发出序列值的频率，在本例中我们在1秒发出第一个值  


### Interval



### publish



### Share



### shareReplay

共享源 observable 并重放指定次数的发出。


### debounce

只有在另一个 Observable 确定的特定时间跨度过去且没有另一个源发射时，才从源 Observable 发出通知。



### 将Observable转换成Promise


Tsconfig  
