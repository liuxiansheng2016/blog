---
title: 'Node'
date: '2024-03-14'
description: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，用于在服务器端运行 JavaScript 代码。'
---

# Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，它允许开发者使用 JavaScript 在服务器端编写可扩展的网络应用。Node.js 的主要特点包括：

非阻塞 I/O：

Node.js 使用事件驱动、非阻塞 I/O 模型，这使得它非常适合处理大量并发连接。Node.js 可以高效地处理 I/O 密集型任务，如网络请求、文件读写等。

单线程模型：

Node.js 是单线程的，这意味着它在一个进程中只运行一个主线程。这种设计简化了编程模型，并且避免了多线程带来的复杂性问题。

事件循环（Event Loop）：

Node.js 的核心是事件循环，它负责管理和调度异步操作。事件循环确保了非阻塞 I/O 操作的高效执行。

模块系统：

Node.js 有一个强大的模块系统，允许开发者将代码组织成模块。每个文件都是一个模块，可以通过 require 函数导入其他模块。

丰富的标准库：

Node.js 提供了大量的内置模块，如 http, fs, path, crypto 等，这些模块使得开发网络应用变得更加容易。

npm（Node Package Manager）：

npm 是 Node.js 的包管理器，它提供了大量的第三方库和工具，极大地丰富了 Node.js 生态系统。

其他特性

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对 http 服务器发起请求的 request 对象就是一个 Stream，还有 stdout（标准输出）。

util 是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心 JavaScript 的功能 过于精简的不足。

events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。

你可以通过 require("events");来访问该模块。

## Express

是一个 nodejs web 应用框架，用于构建 Web 应用和 API。

<https://www.simplilearn.com/tutorials/nodejs-tutorial/nodejs-express>

### **Express 和 koa**

#### **选择 Express**

- 成熟稳定：如果你需要一个成熟稳定的框架，Express 是一个不错的选择。
- 丰富的生态系统：如果你需要大量的第三方中间件和工具，Express 的生态系统非常丰富。
- 易于上手：如果你是初学者或者项目时间紧张，Express 的学习曲线平缓，可以快速上手。

#### **选择 Koa**

- 现代化：如果你希望使用更现代化的语法和特性，Koa 是一个更好的选择。
- 基于生成器/异步函数：Koa 最初使用生成器（generators），后来转向全面支持 async/await，这使得编写非阻塞 I/O 操作的代码更加直观。
- 中间件系统：采用了洋葱模型的中间件架构，每个中间件可以访问上下文对象（context），并且可以在请求和响应之间插入逻辑。
- HTTP2 支持：更好地支持 HTTP2 和其他现代网络协议。
- 错误处理：通过 try-catch 结构，可以更容易地捕获和处理异步操作中的错误。

Koa 的最大特色，，就是中间件（middleware）Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。Koa 中使用 app.use()用来加载中间件，基本上 Koa 所有的功能都是通过中间件实现的。每个中间件默认接受两个参数，第一个参数是 Context 对象，第二个参数是 next 函数。只要调用 next 函数，就可以把执行权转交给下一个中间件。

```javascript
const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  console.log('Middleware 1 - before')
  await next()
  console.log('Middleware 1 - after')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 - before')
  await next()
  console.log('Middleware 2 - after')
})

app.use(async (ctx, next) => {
  console.log('Middleware 3 - before')
  await next()
  console.log('Middleware 3 - after')
})

app.use(async (ctx) => {
  ctx.body = 'Hello, World!'
})

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
```

上面的执行顺序就是：

```
Middleware 1 - before
Middleware 2 - before
Middleware 3 - before
Middleware 3 - after
Middleware 2 - after
Middleware 1 - after
```

通过这个顺序我们可以发现这是个栈结构以"先进后出"（first-in-last-out）的顺序执行

Koa 框架采用了洋葱模型（也称为中间件模型）来处理请求和响应。洋葱模型通过一系列中间件来处理请求，每个中间件都可以选择性地调用 await next() 来传递控制权给下一个中间件

如果没有调用 await next()，则后续的中间件将不会被执行

在 Koa 中，错误处理中间件通常放在最前面，以便捕获所有中间件抛出的错误。

### express-session

是一个用于 Express.js 应用程序的中间件，它允许你轻松地管理用户会话（session）。通过 express-session，你可以存储和访问用户的会话数据，这对于保持用户登录状态、购物车内容等非常有用

#### 1. express-session 的主要作用

##### 保持用户状态

- 登录状态：允许用户登录后，在多个请求之间保持认证状态，而无需每次请求都重新登录。
- 个性化体验：保存用户偏好设置或其他个性化信息，以便在不同页面或请求间提供一致的用户体验。

##### 管理会话数据

- 临时数据存储：可以将一些需要跨多个请求使用的临时数据（如购物车内容）存储在会话中。
- 安全性增强：通过签名和加密机制保护会话数据的安全性，防止篡改。

#### 2. 工作原理

express-session 的工作流程大致如下：

1. 生成会话 ID：当用户首次访问时，express-session 会为该用户生成一个唯一的会话 ID，并将其存储在客户端的 cookie 中。
2. 存储会话数据：服务器端会创建一个与该会话 ID 关联的数据对象，用来存储会话期间所需的数据。默认情况下，这些数据被保存在内存中，但在生产环境中通常会使用持久化存储（如 Redis 或 MongoDB）。
3. 后续请求验证：每当用户发出新的请求时，服务器会检查请求中的 cookie，从中提取出会话 ID 并查找对应的会话数据。如果找到匹配项，则恢复用户的会话状态；否则，创建新的会话。
4. 更新会话数据：根据应用逻辑，可以在会话数据中添加、修改或删除信息，并确保这些更改被正确保存。

```javascript
app.use(
  session({
    secret: 'your_very_secure_and_random_secret_key', // 用于签名 session ID 的密钥
    resave: false, // 不要重新保存未修改的会话
    saveUninitialized: false, // 不要保存未初始化的会话
    cookie: {
      secure: process.env.NODE_ENV === 'production', // 生产环境中启用 HTTPS
      httpOnly: true, // 防止 JavaScript 访问 cookie
      maxAge: 24 * 60 * 60 * 1000, // 设置 cookie 的最大存活时间为 24 小时
      sameSite: 'lax', // 增加对 CSRF 攻击的防护
    },
  }),
)
app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++
    res.send(`You've visited this page ${req.session.views} times.`)
  } else {
    req.session.views = 1
    res.send('Welcome to the site!')
  }
})
```

但在生产环境中，你应该考虑使用更持久化的存储方案，例如 Redis、MongoDB 或其他数据库。这可以通过第三方库（如 connect-redis 或 connect-mongo）来实现。

```javascript
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://localhost:27017/sessiondb',
      ttl: 14 * 24 * 60 * 60, // 会话数据的有效期为 14 天，以秒为单位
    }),
    cookie: { secure: true },
  }),
)
```

### express.static

是 Express.js 提供的一个内置中间件函数，用于提供静态文件（如 HTML 文件、图像、CSS 文件和 JavaScript 文件）。它使得你可以轻松地将某个目录下的文件作为静态资源提供给客户端。

在单页应用（SPA）中，前端路由由客户端 JavaScript 代码（例如 React Router）处理。服务器只需要提供一个入口点，即 index.html 文件。所有的前端路由都由客户端处理，而不是服务器。

```javascript
app.use(
  express.static(path.join(__dirname, '../build'), {
    maxAge: '1d', // 设置缓存时间为1天
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache')
      } else {
        res.setHeader('Cache-Control', 'public, max-age=86400') // 1天
      }
    },
  }),
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
```

## Communication

#### 1\.  进程间通信 (IPC)

##### 1\. 使用 child_process 模块

child_process 模块允许你创建子进程，并通过标准输入（stdin）、标准输出（stdout）和标准错误（stderr）与子进程通信。

父进程代码

```
const { spawn } = require('child_process');

const child = spawn('node', ['child.js']);

child.stdout.on('data', (data) => {
  console.log(`Received from child: ${data.toString()}`);
});

child.stderr.on('data', (data) => {
  console.error(`Child stderr: ${data.toString()}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

// 向子进程发送数据
child.stdin.write('Hello from parent\n');
child.stdin.end();
```

子进程代码 (child.js)

```
process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  console.log(`Received from parent: ${data.toString().trim()}`);
  process.stdout.write('Hello from child\n');
});

process.stdin.on('end', () => {
  process.stdout.write('Parent closed stdin\n');
  process.exit(0);
});
```

使用 IPC（Inter-Process Communication）

child_process 模块还支持通过 IPC 通道进行通信。这适用于 fork 创建的子进程。
父进程代码 (parent.js)

```
const { fork } = require('child_process');

const child = fork('child.js');

child.on('message', (msg) => {
  console.log(`Received from child: ${msg}`);
});

// 向子进程发送消息
child.send('Hello from parent');
```

子进程代码 (child.js)

```
process.on('message', (msg) => {
  console.log(`Received from parent: ${msg}`);
  process.send('Hello from child');
});
```

##### 2\. 使用 SharedArrayBuffer 和 Atomics

在 Node.js 10.5.0 及以上版本中，可以使用 SharedArrayBuffer 和 Atomics 进行共享内存通信。这种方式适用于需要高性能、低延迟的场景。

父进程 (parent.js)

```
const { Worker } = require('worker_threads');
const { SharedArrayBuffer } = require('util');

const buffer = new SharedArrayBuffer(1824);
const int32Array = new Int32Array(buffer);

int32Array[0] = 0; // 初始化

const worker = new Worker('child.js', { workerData: { buffer } });

worker.on('message', (msg) => {
  console.log(`Received from child: ${msg}`);
});

// 向子进程发送消息
worker.postMessage('Hello from parent');
```

子进程 (child.js)

```
const { workerData, parentPort } = require('worker_threads');

const int32Array = new Int32Array(workerData.buffer);

parentPort.on('message', (msg) => {
  console.log(`Received from parent: ${msg}`);
  int32Array[0] = 1; // 更新共享内存
  parentPort.postMessage('Hello from child');
});
```

##### 3\. 使用 socket 通信

可以通过 TCP 或 UDP 套接字进行进程间通信。这种方式适用于跨机器的进程通信。

```
服务器进程 (server.js)
const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(`Received from client: ${data.toString()}`);
    socket.write('Hello from server\n');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

```
客户端进程 (client.js)
const net = require('net');

const client = net.connect({ port: 3000 }, () => {
  console.log('Connected to server');
  client.write('Hello from client\n');
});

client.on('data', (data) => {
  console.log(`Received from server: ${data.toString()}`);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
```

##### 4\. 使用 Redis 或 MQ（消息队列）

可以使用 Redis 或者其他消息队列（如 RabbitMQ、Kafka 等）进行进程间通信。这种方式适用于分布式系统和微服务架构。

```
生产者进程 (producer.js)
const redis = require('redis');
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});

client.publish('channel', 'Hello from producer');
client.quit();
```

```
消费者进程 (consumer.js)
const redis = require('redis');
const subscriber = redis.createClient();

subscriber.on('error', (err) => {
  console.error('Redis error:', err);
});

subscriber.subscribe('channel');

subscriber.on('message', (channel, message) => {
  console.log(`Received from ${channel}: ${message}`);
  subscriber.unsubscribe();
  subscriber.quit();
});
```

#### 2. 网络通信

Node.js 提供了多种模块来实现网络通信，包括 HTTP、HTTPS、TCP 和 UDP 等。

网络通信：使用 http, https, net, dgram 等模块实现基于 TCP 和 UDP 的网络通信。

WebSocket 通信：使用 ws 库实现全双工的 WebSocket 通信。

## I/O

它允许应用程序在等待 I/O 操作（如文件读写、网络请求等）完成时继续执行其他任务。

非阻塞 I/O 模型

1\. 基本概念

非阻塞 I/O：在非阻塞 I/O 模型中，当一个 I/O 操作开始时，不会阻塞主线程。相反，操作系统会立即返回控制权给应用程序，而 I/O 操作则在后台进行。当 I/O 操作完成时，操作系统会通知应用程序，通过回调函数或事件来处理结果。

事件驱动：Node.js 使用事件驱动架构，通过事件循环（Event Loop）来管理异步操作。事件循环不断地检查和处理各种事件队列中的任务。

#### 避免阻塞的最佳实践

- 保持回调函数简短：每个 JavaScript 回调应该尽快完成，避免长时间运行的计算。
- 使用异步操作：尽量使用异步方法而不是同步方法，特别是在处理 I/O 操作时。
- 分区任务：将复杂任务分解成多个小任务，每个小任务的执行时间较短。
- 使用工作线程池：将 CPU 密集型任务卸载到工作线程池中，以避免阻塞事件循环。

## Synchronous and Asynchronous

同步：当调用一个同步函数时，调用者必须等待该函数返回后才能继续执行后续的操作。这意味着如果一个同步操作耗时较长，比如文件读取或网络请求，那么整个应用程序将会被阻塞，直到该操作完成

异步：相反，异步操作一旦发起就会立即返回，允许调用者继续执行后续的任务。当异步操作完成时，它会通过某种机制（如事件、回调函数等）通知调用者，并传递必要的结果信息。这种方式使得 Node.js 能够高效地处理高并发场景，因为它不会因为等待某个长时间运行的任务而停止响应新的请求

#### 异步流程控制的方法

- 回调函数（Callbacks）
- 事件监听器（Event Listeners）
- Promises 提供了一种更现代且优雅的方式来处理异步操作。它们代表了异步操作最终的状态变化（成功或失败）
- Async/Await
- 流（Streams）对于需要逐步处理大量数据的情况，Node.js 提供了流的概念。流是一种抽象接口，用于处理流动的数据。你可以监听流的不同事件（如 data、end、error）来逐步处理数据或响应流的状态变化

## Eventloop

1. 单线程：Node.js 运行在一个单线程上，这意味着所有 JavaScript 代码都在同一个线程中执行。
2. 异步 I/O：Node.js 使用异步 I/O 操作来处理耗时任务，如文件系统操作、网络请求等，这些操作不会阻塞主线程。
3. 事件驱动：Node.js 使用事件驱动模型，当某个事件发生时，会触发相应的回调函数。

事件循环的详细流程

1 初始化：

Node.js 启动时，首先执行主模块中的同步代码。

然后进入事件循环。

1. Timers：执行 setTimeout 和 setInterval 设置的回调函数。
2. Pending Callbacks：执行一些系统操作的回调函数，如 TCP 错误。
3. Idle, Prepare：内部使用。这个阶段通常用于内部统计和性能分析。
4. Poll：检索新的 I/O 事件；执行与 I/O 相关的回调。
5. Check：执行 setImmediate 设置的回调函数。
6. Close Callbacks：执行一些关闭回调，例如 socket.on('close', ...)。

```
console.log('Start');

setTimeout(() => {
  console.log('Timer 1');
}, 0);

setImmediate(() => {
  console.log('Immediate');
});

process.nextTick(() => {
  console.log('Next tick');
});

console.log('End');
```

```
输出顺序
Start
End
Next tick
Timer 1
Immediate
```

## V8

V8 的内存主要分为两个部分：堆（Heap）和栈（Stack）。

#### **1.1 栈（Stack）**

- 局部变量：函数调用时，局部变量和函数参数存储在栈中。
- 调用栈：函数调用的上下文信息（如调用者、返回地址等）也存储在栈中。
- 生命周期：栈中的数据在函数调用结束后自动释放。

#### **1.2 堆（Heap）**

- 对象：JavaScript 对象（包括数组、函数等）存储在堆中。
- 动态分配：堆中的内存是动态分配的，对象的生命周期由垃圾回收器管理。
- 垃圾回收：V8 使用垃圾回收算法来自动管理堆内存，释放不再使用的对象**2\. 堆内存管理**

#### **2.1 堆的分区**

V8 的堆内存分为几个区域，主要包括：

- 新生代（Young Generation）：
  - Eden 空间：新创建的对象首先分配到这里。
  - Survivor 空间：经历第一次垃圾回收后仍然存活的对象会被移动到这里。
- 老生代（Old Generation）：
  - 老生代空间：长期存活的对象会被移动到这里。

#### V8 的垃圾回收机制

V8 主要使用以下几种垃圾回收算法来管理内存：

##### 1 Mark-Sweep（标记-清除）

标记：从根对象开始，递归地标记所有可达对象。

清除：回收未被标记的对象。

优点：能够处理循环引用。

缺点：会产生内存碎片。

##### 2Mark-Compact（标记-压缩）

标记：与 Mark-Sweep 相同，从根对象开始，递归地标记所有可达对象。

压缩：在清除未被标记的对象后，将存活的对象移动到连续的内存区域，以减少内存碎片。

优点：既能处理循环引用，又能减少内存碎片。

##### 3Generational Garbage Collection（分代垃圾回收）

新生代（Young Generation）：

Scavenge：使用半空间复制（Copying）算法，将 Eden 空间和 Survivor 空间中的存活对象复制到另一个 Survivor 空间。

老生代（Old Generation）：

Mark-Sweep 或 Mark-Compact：处理长期存活的对象，使用标记-清除或标记-压缩算法。

#### V8 内存限制

1\. 浏览器环境

在浏览器中，每个标签页或 iframe 都有自己的 V8 实例，因此每个实例都有自己的内存限制。具体限制因浏览器而异，但通常如下：

Chrome：

32 位系统：每个标签页大约有 512MB 的堆内存限制。

64 位系统：每个标签页大约有 1.4GB 的堆内存限制。

2\. Node.js 环境

在 Node.js 中，可以通过命令行参数来调整 V8 的内存限制。默认情况下，Node.js 的内存限制如下：

32 位系统：

堆内存：默认为 512MB。

64 位系统：

堆内存：默认为 1.4GB。

## FS

#### fs.Stats

fs.Stats：提供了文件或目录的各种属性，包括文件大小、权限、修改时间等。

#### 文件查找优先级

缓存的模块优先级最高

如果是内置模块，则直接返回，优先级仅次缓存的模块

如果是绝对路径 / 开头，则从根目录找

如果是相对路径 ./开头，则从当前 require 文件相对位置找

如果文件没有携带后缀，先从 js、json、node 按顺序查找

如果是目录，则根据 package.json 的 main 属性值决定目录下入口文件，默认情况为 index.js

如果文件为第三方模块，则会引入 node_modules 文件，如果不在当前仓库文件中，则自动从上级递归查找，直到根目录

#### path 模块常用方法

```
const path = require('node:path');
const notes = '/users/joe/notes.txt';

path.dirname(notes); // /users/joe
path.basename(notes); // notes.txt
path.extname(notes); // .txt
```

**path.join(\[...paths\])**：将多个路径片段连接成一个完整的路径。

```
const path = require('path');
const filePath = path.join('/home', 'user', 'documents', 'file.txt');
console.log(filePath); // 输出：/home/user/documents/file.txt
```

path.resolve(\[...paths\])：将路径或路径片段解析为绝对路径。

```
const path = require('path');
const absolutePath = path.resolve('src', 'index.js');
console.log(absolutePath); // 输出：/current/working/directory/src/index.js
```

**path.normalize(path)**：规范化路径，消除多余的 . 和 ..。

**path.parse(path)**：将路径解析为对象。

**path.format(pathObject)**：将路径对象格式化为路径字符串。

#### 读取文件

#### 1\.使用文件描述符读取文件

首先需要获取文件描述符。这可以通过 fs 模块提供的方法来完成：

```
const fs = require('node:fs');
fs.open('/path/to/file', 'r', (err, fd) => {
  if (err) throw err;
  console.log(`File descriptor: ${fd}`);
});
```

如果你已经有一个文件描述符（例如通过 fs.open 获取），你可以使用 fs.read 方法来读取文件内容。

```
const fs = require('node:fs');

fs.open('/path/to/file.txt', 'r', (err, fd) => {
  if (err) throw err;

  const buffer = Buffer.alloc(1024); // 分配一个缓冲区

  fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
    if (err) throw err;

    console.log(`Read ${bytesRead} bytes: ${buffer.toString('utf8', 0, bytesRead)}`);

    fs.close(fd, (err) => {
      if (err) throw err;
      console.log('File closed.');
    });
  });
});
```

#### 2\. fs.readFile /readFileSync

![alt text](/images/image.png)

第二个参数是编码（如 'utf8'），如果省略则返回的是 Buffer 对象。

#### 3\. 使用 fs.promises.readFile 基于 Promise 的读取方法

![alt text](/images/image-1.png)

#### 4\. fs.createReadStream 流式读取大文件

![alt text](/images/image-2.png)

直接以文本形式读取 .docx 文件会导致乱码，因为这些文件不是纯文本文件。

#### 写入文件

##### fs.writeFile

是一个异步方法，它会覆盖目标文件的内容（如果文件已存在）或创建新文件（如果文件不存在），然后写入指定的数据。

![alt text](/images/image-3.png)

##### fs.appendFile 异步追加内容到文件

![alt text](/images/image-4.png)

##### fs.createWriteStream

流式写入适合处理大文件，因为它不会一次性占用大量内存。

![alt text](/images/image-5.png)

### 文件夹

Use fs.mkdir() or fs.mkdirSync() or fsPromises.mkdir() to create a new folder.

Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.

用于检查文件或目录是否存在。

- 使用**fs.existsSync**：同步方法，简单直接，适用于不需要复杂逻辑和性能要求不高的场景。
- 异步方法：如 fs.access() 和 fs.promises.access()，更适合高性能和并发处理场景，避免阻塞事件循环。
- 内置模块：Node.js 自带的 fs 模块和 fs.promises 提供了基本的文件系统操作。
- 第三方库：如 memfs、fs-extra 等扩展了文件系统功能，或提供了替代方案。
- 云存储集成：使用特定云服务的 SDK 来与远程文件系统交互。

#### 使用 memfs

memfs 是一个内存中的虚拟文件系统，适用于测试环境或需要临时存储而不涉及磁盘 I/O 的场景。它完全兼容 Node.js 的 fs API，因此你可以无缝切换到 memfs 而无需修改现有代码。

![alt text](/images/image-6.png)

## Script

#### #!/usr/bin/env node

1. **#!**：这是 Shebang 的开始标志，告诉操作系统这是一个可执行脚本文件。
2. **/usr/bin/env**：这是一个路径，指向系统的 env 命令。env 命令用于查找并执行指定的程序，通常从环境变量 PATH 中查找。
3. **node**：这是 env 命令要查找并执行的程序名称。在这个例子中，node 是 Node.js 的可执行文件

# !/usr/bin/env node 告诉操作系统使用 Node.js 来解释和执行这个脚本文件。

只有当脚本直接在 shell 中运行时，才有意义

#### 设置环境变量并运行脚本

set NODE_ENV=production & set PORT=3000 & node app.js

Powershell:

$env:NODE_ENV="production"; $env:PORT="3000"; node app.js

在脚本中访问环境变量：

console.log('Environment:', process.env.NODE_ENV);

#### 使用 REPL (Read-Eval-Print Loop)

如果你想快速测试一些代码片段而不创建文件，可以使用 Node.js 的交互式解释器（REPL）。只需在命令行中输入 node 即可启动 REPL。

(/images/image-7.png)

npx 是一个与 npm 一起安装的工具，它允许你执行本地或远程安装的 npm 包中的命令

### 使用 .env 文件（推荐）

为了更方便地管理环境变量，特别是对于开发环境，可以使用 .env 文件结合像 dotenv 这样的库来加载这些变量。

## HTTP

#### response

对象用于向客户端发送回复，它是一个可写流（Writable Stream）。你可以通过以下几种方式设置响应：

```
response.statusCode = 200; // 默认是 200 OK

response.setHeader('Content-Type', 'text/plain');

response.end(); // 或者 response.end('Some data');
```

response.write 方法用于向 HTTP 响应中写入一部分数据（chunk）

response.end 方法用于结束 HTTP 响应

![alt text](/images/image-8.png)

#### 创建 HTTP 服务器

![alt text](/images/image-9.png)

#### URL

提供了一个 url 模块与 querystring (查询字符串)模块

![alt text](/images/image-10.png)

![alt text](/images/image-11.png)

#### 向其他网站求数据

可以用 http.get(options\[, callback\])

request 方法的 options 参数，可以是一个对象，也可以是一个字符串。如果是字符串，就表示这是一个 URL，

![alt text](/images/image-12.png)

#### 特点

- 低级别 API：提供了更底层的 HTTP 客户端和服务器实现，适合需要高度定制化的情况。
- 事件驱动：采用事件驱动的方式处理请求和响应，对于流式数据处理非常友好。
- 无自动解析：不会自动解析响应体，需要自行处理响应流并解析内容。
- 完全控制：给予开发者对请求和响应的完全控制权，适用于构建自定义 HTTP 客户端或服务器。
- 性能优化：由于是 Node.js 的一部分，通常会有更好的性能表现，特别是在高并发场景下。

### 1. Axios

#### 特点

- 基于 Promise：所有请求都是基于 Promise 的，可以轻松地与 async/await 结合使用。
- 自动转换 JSON：默认情况下会自动解析 JSON 响应。
- 请求/响应拦截器：允许你在请求发送之前或响应接收之后执行逻辑。
- 取消请求：支持通过 CancelToken 或 AbortController 取消正在进行的请求。
- 全局配置：可以通过创建 Axios 实例来设置全局默认配置。
- 浏览器和 Node.js 兼容：可以在浏览器和服务器环境中使用。

### 2. node-fetch

#### 特点

- 遵循 Fetch API 标准：API 与浏览器中的 Fetch API 高度一致，使得跨环境开发更加容易。
- 轻量级：相比 Axios 更加精简，没有内置的请求/响应拦截功能。
- 不自动转换 JSON：不会自动解析 JSON 响应，需要手动调用 .json() 方法。
- 仅限于 HTTP 请求：主要用于发起 HTTP 请求，不像 Axios 提供那么多高级特性。

## mongoDB

NoSQL 可以大体上分为 4 个种类：**Key-value、Document-Oriented、Column-Family Databases 以及 Graph-Oriented Databases**

| **类型**                                  | **代表**   | **特点**                                                                                                                               |
| ----------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 键值（Key-Value）                         | MemcacheDB | 键值数据库就像在传统语言中使用的哈希表。你可以通过 key 来添加、查询或者删除数据，鉴于使用主键访问，所以会获得不错的性能及扩展性。      |
| 面向文档（Document-Oriented）             | MongoDB    | 文档存储一般用类似 json 的格式存储，存储的内容是文档型的。这样也就有有机会对某些字段建立索引，实现关系数据库的某些功能。               |
| 列存储（Wide Column Store/Column-Family） | Cassandra  | 顾名思义，是按列存储数据的。最大的特点是方便存储结构化和半结构化数据，方便做数据压缩，对针对某一列或者某几列的查询有非常大的 IO 优势。 |
| 图（Graph-Oriented）                      | Neo4J      | 图形关系的最佳存储。使用传统关系数据库来解决的话性能低下，而且设计使用不方便。                                                         |

MongoDB 是一个基于分布式文件存储的数据库

MongoDB 和 Node.js 特别配，因为 MongoDB 是基于文档的，文档是按 BSON（JSON 的轻量化二进制格式）存储的，增删改查等管理数据库的命令和 JavaScript 语法很像，这里我们选择 mongoose 来进行增删改查，mongoose 构建在 MongoDB 之上，提供了 Schema、Model 和 Document 对象，用起来很方便

| **SQL 术语/概念** | **MongoDB 术语/概念** | **解释/说明**                          |
| ----------------- | --------------------- | -------------------------------------- |
| database          | database              | 数据库                                 |
| table             | collection            | 数据库表/集合                          |
| row               | document              | 数据记录行/文档                        |
| column            | field                 | 数据字段/域                            |
| index             | index                 | 索引                                   |
| table joins       |                       | 表连接,MongoDB 不支持                  |
| primary key       | primary key           | 主键,MongoDB 自动将\_id 字段设置为主键 |

Schema ： 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力

Model ： 由 Schema 发布生成的模型，具有抽象属性和行为的数据库操作对

Entity ： 由 Model 创建的实体，他的操作也会影响数据库

Schema 生成 Model，Model 创造 Entity，Model 和 Entity 都可对数据库操作造成影响，但 Model 比 Entity 更具操作性

#### Schema

##### 1\. Schema

定义：Schema 是用来定义 MongoDB 集合中文档结构的对象。它描述了每个字段的数据类型、验证规则、默认值等属性。然而，Schema 本身并不直接与数据库交互；它只是一个蓝图或模板，用于创建模型。

![alt text](/images/image-13.png)

##### Schema.Type

Schema.Type 是由 Mongoose 内定的一些数据类型，基本数据类型都在其中，他也内置了一些 Mongoose 特有的 Schema.Type。当然，你也可以自定义 Schema.Type，只有满足 Schema.Type 的类型才能定义在 Schema 内

- String
- Number
- Date
- Buffer
- Boolean
- Mixed
- Objectid
- Array

#### Model

定义好了 Schema，接下就是生成 Model。 model 是由 schema 生成的模型，可以对数据库的操作

![alt text](/images/image-14.png)

#### Entity

用 Model 创建 Entity，Entity 可以对数据库操作

![alt text](/images/image-15.png)

#### 查询

model.find({},field,callback) // 参数 1 忽略,或为空对象则返回所有集合文档

model.find({},{'name':1, 'age':0},callback) //过滤查询,参数 2: {'name':1, 'age':0} 查询文档的返回结果包含 name , 不包含 age.(\_id 默认是 1)

model.find({},null,{limit:20}) // 游标操作 limit 限制返回结果数量为 20 个,如不足 20 个则返回所有

model.findOne({}, callback) // 查询找到的第一个文档

model.findById('obj.\_id', callback) // 查询找到的第一个文档, 只接受 \_id 的值查询

#### 创建

// 在集合中创建一个文档 Model.create(doc(s), \[callback\])

Entity.save(callback)

#### 删除

Model.remove(\[criteria\], \[callback\]) // 根据条件查找到并删除

Model.findByIdAndRemove(id, \[options\], \[callback\]) // 根据 id 查找到并删除

#### 修改

Model.update(conditions, update, \[options\], \[callback\]) // 根据参数找到并更新

Model.findByIdAndUpdate(id, \[update\], \[options\], \[callback\]) // 根据 id 查找到并更新

## Template engine

结合 Node.js 的 Express 框架与模板引擎（如 Nunjucks、EJS 或 Pug），你可以轻松地创建一个简单的 SSR 应用程序

#### EJS

npm install express ejs

![alt text](/images/image-16.png)

#### Nunjucks

我们配置了 Nunjucks 来查找位于 views 文件夹中的模板文件，并将 .njk 扩展名设置为默认的视图引擎。然后，我们在路由处理函数中传递数据给模板进行渲染。

![alt text](/images/image-17.png)

![alt text](/images/image-18.png)

#### 使用 Pug (以前称为 Jade)

![alt text](/images/image-19.png)

#### 对比

1\. Nunjucks

特点

语法：基于 Jinja2 模板语言，支持简洁的控制结构和表达式。

继承和包含：强大的模板继承和包含功能，有助于创建模块化的模板系统。

过滤器和宏：内置了许多有用的过滤器，并且可以定义宏来重用代码片段。

异步加载：支持异步加载模板，非常适合现代 Web 应用程序。

自动转义：默认启用自动转逃，以防止 XSS 攻击。

社区支持：由 Mozilla 维护，拥有活跃的社区和支持。

2\. EJS (Embedded JavaScript Templates)

特点

语法：基于 HTML，允许直接嵌入 JavaScript 表达式和控制结构。

学习曲线：对于已经有 HTML 和 JavaScript 基础的开发者来说非常容易上手。

灵活性：可以直接在模板中编写复杂的逻辑，适合需要高度定制的应用场景。

输出直观：生成的 HTML 更接近于原始模板，便于调试。

3\. Pug (以前称为 Jade)

特点

语法：采用缩进语法，语法更加紧凑，减少了冗余的标签和括号。

高效：编译速度快，生成的 HTML 文件通常较小。

简洁：模板看起来更整洁，适合喜欢简洁风格的开发者。

混合内容：可以在同一文件中混合使用文本和其他语言（如 Markdown）。

学习曲线：初学者可能觉得不直观，但对于熟悉其语法的人来说，编写和维护模板会更加高效。

## JWT

<https://www.simplilearn.com/tutorials/nodejs-tutorial/jwt-authentication>

#### **JWT 的结构**

一个 JWT 通常由三部分组成

- Header（头部）
- Payload（载荷）
- Signature（签名）

#### **Header**

头部通常包含两部分：令牌的类型（即 JWT）和所使用的签名算法（如 HMAC SHA256 或 RSA）。例如：

{ "alg": "HS256", "typ": "JWT"}

#### **Payload**

载荷就是存放实际想要传递的数据的地方。JWT 规范中定义了一些标准字段（称为声明），但你也可以添加自定义字段。例如：

{ "sub": "1234567890", "name": "John Doe", "iat": 1516239022}

#### **Signature**

签名是用于验证消息在传输过程中没有被篡改，并且，对于使用私钥签名的令牌来说，还可以验证发送者的身份。签名是由编码后的头部、编码后的载荷、一个秘钥以及头部中指定的算法生成的。例如，如果使用的是 HMAC SHA256 算法，则签名如下计算：

HMACSHA256( base64UrlEncode(header) + "." + base64UrlEncode(payload),secret)

#### 最终的 JWT 就看起来像这样

&lt;base64url-encoded-header&gt;.&lt;base64url-encoded-payload&gt;.&lt;signature&gt;

#### 使用场景

身份验证：这是 JWT 最常见的用途。一旦用户登录成功，每个后续请求都会包含 JWT，允许用户访问该令牌授权的路由、服务和资源。由于跨域资源共享（CORS）不是问题，因此可以很容易地进行跨域认证。

信息交换：JWT 可以用于安全地在各方之间传输信息。因为 JWT 可以被签名（例如使用公钥/私钥对），所以你可以确定发送者是谁。此外，由于签名是基于内容的，你可以确保内容未被篡改。

#### JWT 的优点

- 无状态：服务器不需要存储会话信息，因为所有必要的信息都在令牌中。
- 易于传递：可以通过 URL、POST 参数或 HTTP 头部传递。
- 跨域支持：不像 Cookies，JWT 不受同源策略限制。
- 安全性：通过数字签名确保数据完整性。

#### JWT 的缺点

- 大小问题：JWT 相对于 Session ID 更大，尤其是在载荷较大的时候。
- 无法撤销：由于 JWT 是无状态的，一旦发出就很难失效。除非实现黑名单机制或设定较短的有效期。
- 敏感信息暴露风险：虽然 JWT 支持加密，但是默认情况下只提供签名而不加密载荷。如果载荷中含有敏感信息，应该考虑加密。

#### 创建 JWT

![alt text](/images/image-20.png)

#### 验证 JWT

![alt text](/images/image-21.png)

## Passport.js

是一个非常流行的 Node.js 身份验证中间件，它简化了在应用程序中实现多种身份验证策略的过程。Passport 可以与 Express 或其他兼容 Connect 的框架一起使用，并支持本地认证（如用户名和密码）、OAuth、OpenID 等多种认证方式。

#### **主要特点**

- 模块化设计：Passport 本身只是一个核心库，具体的认证策略由单独的模块提供。这意味着你可以根据需要选择和组合不同的认证方法。
- 易于集成：Passport 集成了 Express 和 Connect 中间件系统，因此可以很方便地添加到现有的应用中。
- 丰富的插件生态：有大量现成的策略可供选择，涵盖了从社交媒体登录（如 Facebook、Twitter）到企业级身份提供商（如 LDAP、SAML）的各种需求。
- 灵活性：无论是简单的用户注册/登录功能还是复杂的多因素认证，Passport 都能灵活应对。

首先，你需要安装 Passport 和你想要使用的认证策略模块。例如，为了使用本地认证策略（基于用户名和密码），你可以这样安装：

npm install passport passport-local express-session --save

express-session 是用来管理会话的中间件，对于大多数情况下都是必需的，因为它帮助 Passport 在请求之间保持用户的身份信息。

除了本地认证，Passport 还支持 OAuth 认证。例如，如果你想让用户通过 GitHub 登录，你可以安装并配置 passport-github 策略。

npm install passport-github --save

#### 使用 passportlocal

![alt text](/images/image-22.png)

![alt text](/images/image-23.png)

![alt text](/images/image-24.png)

## OAuth

OAuth 允许服务提供商（如 Twitter、GitHub、Google 等）向第三方应用授予有限的访问权限，而不暴露用户的凭据。其核心思想是通过令牌（token）来代替用户名和密码进行身份验证。

#### OAuth 2.0 的典型流程

请求授权：客户端应用（第三方应用）引导用户到授权服务器（服务提供商），并请求用户的授权。

用户同意：用户登录到授权服务器，并决定是否授权客户端应用访问其受保护的资源。

接收授权码：如果用户同意，授权服务器会重定向回客户端应用，并附带一个授权码（authorization code）。

交换令牌：客户端应用使用授权码与授权服务器交换访问令牌（access token）。这个步骤通常需要客户端的应用程序 ID 和密钥。

获取资源：客户端应用使用访问令牌向资源服务器请求受保护的资源。资源服务器验证令牌的有效性，并返回请求的数据。

刷新令牌：访问令牌可能会有过期时间，为了防止频繁地让用户重新授权，OAuth 提供了刷新令牌（refresh token），用以在访问令牌过期时换取新的访问令牌。

## Node API retry

#### 1. 使用 Axios 的拦截器

Axios 提供了请求和响应拦截器，可以用来捕获失败的请求并在其中添加重试逻辑。

![alt text](/images/image-25.png)

#### 2. 使用第三方库 retry-axios

![alt text](/images/image-26.png)

#### 3. 手动实现重试逻辑

![alt text](/images/image-27.png)

## Others

#### 1 读取标准输入 (stdin)

读取一行输入

![alt text](/images/image-28.png)

持续读取多行输入

![alt text](/images/image-29.png)

#### 2 模块

模块（Module）是封装代码的基本单元，每个文件都可以被视为一个独立的模块。

模块之间通过 require 和 module.exports 进行导入和导出。

- 核心模块

Node.js 自带了一些核心模块，例如 fs、http、path 等。这些模块可以直接使用，无需安装。

- 用户模块

用户模块是你自己编写的模块或从 npm 安装的第三方模块。

Node.js 会按照一定的顺序查找模块路径：

核心模块：先查找核心模块。

文件模块：查找当前目录下的文件模块。

节点模块：查找 node_modules 目录下的模块。

#### 3 如何检查是否有需要处理的事件

一般过程：

检查各个阶段的队列：在每个 tick 开始时，事件循环会遍历各个阶段的队列，包括但不限于 timers, poll, check 等阶段。每个阶段都可能有一个或者多个队列，用来存放对应的事件。

执行就绪的事件：一旦发现某个阶段有可处理的事件，事件循环就会开始执行这些事件。例如，在 timers 阶段，如果有任何定时器到期，则会执行相关的回调函数。

空闲检测：在某些阶段，比如 poll 阶段，如果没有事件需要处理，事件循环可能会进入休眠状态，直到有新事件到来为止。这种机制允许 Node.js 在没有活动的情况下节省 CPU 资源。

继续下一轮循环：一旦所有的事件都被处理完毕，并且没有更多的事件需要处理，事件循环将结束这一轮的迭代，并开始新的一轮。

具体来说，Node.js 内部使用 libuv 库来实现事件循环。libuv 是一个多平台的库，负责处理底层的 I/O 操作和事件调度。libuv 维护了一个事件循环，它能够监听各种类型的事件，如文件描述符的变化、定时器到期等，并在适当的时机调用注册好的回调函数。

#### 4 buffer

Buffer 是 Node.js 中处理二进制数据的核心模块，提供了多种方法来创建、读取、写入、比较和操作二进制数据。

![alt text](/images/image-30.png)

##### Buffer.alloc 和 Buffer.allocUnsafe

Buffer.alloc(size\[, fill\[, encoding\]\]) 方法用于创建一个新的 Buffer 对象，并且会根据指定的大小预先填充内容。这个方法有两个可选参数：

- fill：用于填充 Buffer 的值，默认为空字符串 ' '。
- encoding：用于解析 fill 参数的编码，默认为 'utf8'。

![alt text](/images/image-31.png)

Buffer.allocUnsafe(size) 方法同样用于创建一个新的 Buffer 对象，但是不会预填充内容。这意味着创建出来的 Buffer 可能包含之前内存块的内容，这是不安全的，因为它可能暴露敏感信息。

![alt text](/images/image-32.png)

避免大 Buffer：

对于大 Buffer，尽量分批处理，避免一次性分配过多内存。可以使用流式处理（如 ReadableStream 和 WritableStream）来处理大数据。

- Buffer：Node.js 中用于处理二进制数据的核心模块。
- Base64：基于 64 个可打印字符表示二进制数据的编码方法，常用于网络传输。
- Blob：浏览器环境中的对象，用于表示不可变的原始数据，常用于处理文件和图像等二进制数据。

##### Buffer /Base64/Blob

- Buffer：Node.js 中用于处理二进制数据的核心模块。
- Base64：基于 64 个可打印字符表示二进制数据的编码方法，常用于网络传输。
- Blob：浏览器环境中的对象，用于表示不可变的原始数据，常用于处理文件和图像等二进制数据。

#### 5 Node 模块

Node.js 默认使用 CommonJS

使用 ES 模块

1 在 package.json 文件中添加 "type": "module" 字段，这会告诉 Node.js 项目中的所有文件默认使用 ES 模块语法。

2 可以将文件扩展名改为 .mjs，这样 Node.js 会将这些文件视为 ES 模块。

在 ES 模块中，可以使用动态 import() 函数来导入 CommonJS 模块

从 Node.js 内置的 module 模块中导入 createRequire 函数。createRequire 是一个工厂函数，用于创建一个 require 函数

![alt text](/images/image-33.png)
在 CommonJS 模块中，可以使用 import() 函数来动态导入 ES 模块

![alt text](/images/image-34.png)

如果你有一个现有的 CommonJS 项目，想要转换为 ES 模块，可以使用一些工具来帮助你：

- esm: 一个允许你在 Node.js 中使用 ES 模块的库。
- @babel/node: 使用 Babel 转换 ES 模块，使其在 Node.js 中运行。

#### 6 Koa awiat next()

洋葱模型

Koa 框架采用了洋葱模型（也称为中间件模型）来处理请求和响应。洋葱模型通过一系列中间件来处理请求，每个中间件都可以选择性地调用 await next() 来传递控制权给下一个中间件

如果没有调用 await next()，则后续的中间件将不会被执行

在 Koa 中，错误处理中间件通常放在最前面，以便捕获所有中间件抛出的错误。

![alt text](/images/image-35.png)

中间件的执行顺序

Koa 的中间件采用洋葱模型，每个中间件可以决定是否调用 await next() 来传递控制权给下一个中间件。当所有中间件都执行完毕后，控制权会按相反的顺序返回到之前的中间件。

![alt text](/images/image-36.png)

![alt text](/images/image-37.png)

#### 7 Bodyparse

body-parser 是一个非常流行的中间件，用于解析 HTTP 请求体。
qs 是一个强大的库，用于解析和字符串化 URL 查询字符串

body-parser 支持多种请求体格式：

- JSON：bodyParser.json() 用于解析 JSON 格式的请求体。
- Form Data：bodyParser.urlencoded({ extended: true }) 用于解析 application/x-www-form-urlencoded 格式的请求体。
- Raw Text：bodyParser.text() 用于解析纯文本格式的请求体。

配置

![alt text](/images/image-38.png)

解析请求体时可能出现的错误

![alt text](/images/image-39.png)

#### 8 Node 调试

1\. 使用内置的调试器

Node.js 内置了一个基于 V8 引擎的调试器，可以通过命令行启动。

![alt text](/images/image-40.png)

这会启动一个调试服务器，通常监听在 9229 端口。你可以使用 Chrome 浏览器或其他支持 V8 调试协议的工具连接到这个调试服务器。

使用 Chrome 浏览器调试

1. 打开 Chrome 浏览器。
2. 输入 chrome://inspect。
3. 点击 "Open dedicated DevTools for Node"。
4. 在 DevTools 中，选择你的脚本文件，设置断点，然后启动调试。

2 使用 Visual Studio Code

配置调试环境

1. 打开你的项目文件夹。
2. 在左侧活动栏中点击调试图标（或按 Ctrl+Shift+D）。
3. 点击 "创建 launch.json 文件"。
4. 选择 "Node.js" 环境。
5. VS Code 会自动生成一个 launch.json 文件，通常位于 .vscode 文件夹中。

启动调试

1. 在 VS Code 中打开你要调试的文件。
2. 在代码中设置断点。
3. 点击调试面板中的绿色播放按钮，或按 F5 启动调试。

#### 9 pm2

PM2 是一个非常强大的工具，可以帮助你在生产环境中管理和保持 Node.js 应用的持续运行。通过上述步骤，你可以轻松地使用 PM2 来启动、停止、重启、查看日志、配置多个应用，并实现自动重启和负载均衡。

启动应用

使用 PM2 启动你的 Node.js 应用非常简单。假设你的应用入口文件是 app.js，你可以使用以下命令启动应用

pm2 start app.js

日志管理

PM2 可以管理和查看应用的日志。你可以使用以下命令查看实时日志：

pm2 logs

监控和管理

PM2 提供了一个 Web 界面来监控和管理应用。你可以使用以下命令启动 PM2 的 Web 界面：

pm2 web

配置文件

PM2 支持使用配置文件来管理多个应用。你可以创建一个 ecosystem.config.js 文件来配置多个应用。

![alt text](/images/image-41.png)

使用配置文件启动应用

pm2 start ecosystem.config.js

负载均衡

PM2 支持多实例运行，可以用于负载均衡。你可以在启动命令中指定实例数：

pm2 start app.js -i 4

这将启动 4 个实例，并使用负载均衡来分配请求。

#### 10 node 性能和监控

1\. 内置的性能监控工具

1.1 使用 process 对象

![alt text](/images/image-42.png)

Node.js 提供了 process 对象，可以用来获取当前进程的各种信息，如内存使用、CPU 使用率等。

1.2 使用 perf_hooks 模块

![alt text](/images/image-43.png)

Node.js 10.0.0 及以上版本提供了 perf_hooks 模块，可以用来测量性能指标。

##### 第三方性能监控工具

1 Datadog 是另一个强大的性能监控工具，支持 Node.js 应用。它可以监控应用的性能、日志、指标和事件。

![alt text](/images/image-44.png)

2 PM2 不仅是一个进程管理工具，还提供了性能监控功能。你可以使用 PM2 的 pm2 monit 命令来监控应用的资源使用情况。

3 Node.js 内置了 V8 引擎的性能分析工具，可以通过 Chrome DevTools 进行性能分析。

##### NODE_ENV=production node --prof app.js

- **\--prof**：这是一个 Node.js 的命令行选项，用于启用 V8 引擎的 CPU 性能分析。它会在应用程序运行结束后生成一个 .cpuprofile 文件，该文件可以用于分析应用程序的性能。

使用 node --prof-process isolate-0xnnnnnnnnnnnn-v8.log > processed.txt

#### 11 中间件

在 Node.js 中，中间件（Middleware）是处理请求和响应周期的一部分函数。中间件函数可以执行各种任务，如解析请求体、设置响应头、处理错误等。中间件函数按顺序执行，可以决定是否将请求传递给下一个中间件或路由处理函数。

中间件的类型

1. 应用级中间件：由 app.use() 或 app.METHOD() 定义，应用于整个应用。
2. 路由级中间件：由 router.use() 或 router.METHOD() 定义，应用于特定的路由。
3. 错误处理中间件：专门用于处理错误的中间件，通常有四个参数（err, req, res, next）。
4. 内置中间件：Express 自带的一些中间件，如 express.static。
5. 第三方中间件：通过 npm 安装的中间件，如 body-parser、cors 等。

#### 12 EventEmitter

EventEmitter 是 Node.js 中处理事件驱动编程的核心模块。通过注册事件监听器和发射事件，可以构建灵活和响应式的应用程序。

默认情况下，EventEmitter 实例的最大监听器数量是 10。如果超过这个数量，Node.js 会发出警告。可以通过 setMaxListeners 方法更改最大监听器数量。

![alt text](/images/image-45.png)

#### 13 流（Streams）

流（Streams）是一种处理大量数据的有效方式。流可以用来读取和写入文件、处理网络请求和响应等。流的主要优点是它们可以处理超出内存限制的数据，而不需要一次性将所有数据加载到内存中。

Node.js 中主要有四种类型的流：

1. 可读流（Readable Streams）：用于读取数据。
2. 可写流（Writable Streams）：用于写入数据。
3. 双工流（Duplex Streams）：既可以读取也可以写入数据。
4. 转换流（Transform Streams）：一种特殊的双工流，可以在数据传输过程中对数据进行转换。

##### 基本概念

- 事件：流使用事件来通知数据的可用性和完成情况。
- 缓冲区：流在内部使用缓冲区来暂存数据，以确保数据的平滑流动。
- 高水位线（High Water Mark）：用于控制缓冲区的最大大小，防止内存溢出。

##### 常见的流操作

1. 创建流
2. 监听事件
3. 读取和写入数据
4. 管道（Piping）

###### 1\. 可读流和可写流

![alt text](/images/image-46.png)

###### 2\. 管道（Piping）

管道是一种将可读流的数据直接传递到可写流的方法，非常方便。

![alt text](/images/image-47.png)

###### 3\. 转换流

转换流可以在数据传输过程中对数据进行转换。

![alt text](/images/image-48.png)

##### 事件

流使用以下事件来通知数据的可用性和完成情况：

- **data**：当有新的数据可用时触发。
- **end**：当没有更多数据可读时触发。
- **error**：当发生错误时触发。
- **close**：当流关闭时触发。
- **finish**：当所有数据已写入底层系统时触发。

#### 方法

流提供了一些常用的方法来控制数据的流动：

- **read(\[size\])**：从可读流中读取数据。
- **write(chunk\[, encoding\]\[, callback\])**：向可写流中写入数据。
- **pipe(destination\[, options\])**：将可读流的数据传递到可写流。
- **unpipe(\[destination\])**：取消将可读流的数据传递到可写流。
- **pause()**：暂停从可读流中读取数据。
- **resume()**：恢复从可读流中读取数据。
- **destroy()**：销毁流并释放资源。

##### .反压是什么？

定义：反压描述了一种现象，即当接收端处理数据的速度跟不上发送端产生数据的速度时，在两者之间形成了数据积压。这种积压就像管道中的堵塞一样，如果不加以管理，会导致内存占用增加、性能下降甚至应用程序崩溃。

##### 1\. 如何实现反压？

Node.js 的流模块内置了反压机制，主要依赖于 .write() 方法的返回值来决定是否继续读取更多数据。具体来说：

- 当调用 Writable 流的 .write(chunk) 方法时，如果内部缓冲区未满，则该方法返回 true，表示可以继续发送数据；否则返回 false，指示上游暂停发送直到缓冲区有足够的空间为止。
- 如果 .write() 返回了 false，那么接下来应当监听 drain 事件，该事件会在缓冲区腾出足够空间后触发，告知上游恢复数据传输。

使用 .pipe() 方法

.pipe() 是一种简化版的流连接方式，它自动处理了反压问题。当你将一个可读流与一个可写流相连时，.pipe() 会设置必要的事件监听器以确保正确的反压行为。

对于更复杂的流链，推荐使用 pipeline API（自 Node.js 10.x 起可用），它可以更好地管理和清理错误，并提供完成回调功能。

![alt text](/images/image-49.png)

#### 14 process

process 是一个全局对象，提供了与当前 Node.js 进程相关的信息和控制方法。process 对象是一个 EventEmitter，可以监听和触发各种事件。

![alt text](/images/image-50.png)

#### process.nextTick()

定义：process.nextTick() 允许你在当前操作完成后立即执行一个回调函数。它将回调函数放入一个特殊的队列中，这个队列会在当前操作完成后、事件循环进入下一个阶段之前被处理。

用途：主要用于在当前操作完成后立即执行一些任务，而不需要等待事件循环的下一个周期。

使用场景：

清理资源：在某个操作完成后立即清理资源

在某个异步操作完成后立即处理其结果。

#### 15 **常见的执行模式**

##### 1 顺序执行

![alt text](/images/image-51.png)

利用 shift 一个个排序往下

##### 2 并发执行

![alt text](/images/image-52.png)

利用 for 循环， 不需要注意执行顺序

##### 3 有限并行

![alt text](/images/image-53.png)

#### 16 setImmediate

- 定义：setImmediate() 允许你在当前事件循环迭代的末尾执行一个回调函数。这意味着回调函数会在所有其他 I/O 操作、定时器和 process.nextTick() 回调完成后执行。
- 用途：主要用于将任务推迟到当前事件循环迭代的末尾，以确保这些任务不会阻塞其他高优先级的任务。

process.nextTick：将回调函数放入一个特殊的队列中，在当前操作完成后立即执行，优先级高于 setTimeout 和 setImmediate。

setImmediate：将回调函数放入待处理回调队列中，在当前事件循环迭代的末尾执行，优先级低于 process.nextTick 但高于 setTimeout。

#### 17 Nodemon

是一种工具，可在检测到目录中的文件更改时通过自动重新启动节点应用程序来帮助开发基于 node.js 的应用程序。

#### 18 典型的 npm 包结构

![alt text](/images/image-54.png)

##### package.json

- name：包名，需要在 NPM 上是唯一的，小写字母和数字组成可包含\_ - .但不能有空格
- description：包简介。通常会显示在一些列表中
- version：版本号。一个语义化的版本号（<http://semver.org/> ），通常为 x.y.z。该版本号十分重要，常常用于一些版本控制的场合
- keywords：关键字数组。用于 NPM 中的分类搜索
- maintainers：包维护者的数组。数组元素是一个包含 name、email、web 三个属性的 JSON 对象
- contributors：包贡献者的数组。第一个就是包的作者本人。在开源社区，如果提交的 patch 被 merge 进 master 分支的话，就应当加上这个贡献 patch 的人。格式包含 name 和 email
- bugs：一个可以提交 bug 的 URL 地址。可以是邮件地址（mailto:mailxx@domain），也可以是网页地址
- licenses：包所使用的许可证
- repositories：托管源代码的地址数组
- dependencies：当前包需要的依赖。这个属性十分重要，NPM 会通过这个属性，帮你自动加载依赖的包

除了前面提到的几个必选字段外，还有一些额外的字段，如 bin、scripts、engines、devDependencies、author

#### 19 socket

socket 是应用层与 TCP/IP 协议通信的中间软件抽象层，它是一组接口。在设计模式中，Socket 其实就是一个门面模式，它把复杂的 TCP/IP 协议族隐藏在 Socket 接口后面，对用户来说，一组简单的接口就是全部，让 Socket 去组织数据，以符合指定的协议。

```
// server.js
const net = require('net')
// 创建TCP服务器
const server = net.createServer((socket) => {
    console.log('客户端连接')
    // 监听客户端的数据
    socket.on('data', (data) => {
        console.log('监听客户端的数据: ', data.toString())
    });
    // 监听客户端断开连接事件
    socket.on('end', (data) => {
        console.log('客户端断开连接')
    });
    // 发送数据给客户端
    socket.write('哈哈哈，我是一个测试 \r\n')
})
// 启动服务
server.listen(8080, () => {
    console.log('服务创建')
})


// client.js
const net = require('net');
// 连接服务器
const client = net.connect({port: 8080}, () => {
    console.log('连接服务器');
    client.write('http://xingxin.me \r\n')
})
// 接收服务端的数据
client.on('data', (data) => {
    console.log('接收服务端的数据: ', data.toString())
    // 断开连接
    client.end()
})
// 断开连接
client.on('end', () => {
    console.log('断开连接')
})

聊天室
//Server.js

const net = require('net')
// 创建TCP服务器
const server = net.createServer()
// 存储所有客户端socket
let sockets = []
server.on('connection', function(socket) {
    console.log('Got a new connection')
    sockets.push(socket)
    socket.on('data', function(data) {
        console.log('Got data: ',  data.toString())
        sockets.forEach(function(otherSocket) {
            if (otherSocket !== socket) {
                console.log(1111);
                otherSocket.write(data)
            }
        })
    })
    socket.on('close', function() {
        console.log('A client connection closed')
        let index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    })
})
server.on('error', function(err) {
    console.log('Server error: ', err.message)
})
server.on('close', function() {
    console.log('Server closed')
})
server.listen(8080)

//Client.js
const net = require("net");
process.stdin.resume();
process.stdin.setEncoding("utf8");
const client = net.connect({ port: 8080 }, () => {
  console.log("Connected to server");
  // 获取输入的字符串
  console.log("input: ");
  process.stdin.on("data", (data) => {
    console.log("input:");
    client.write(data);
    // 输入 'close' 字符串时关闭连接
    if (data === "close\n") {
      client.end();
    }
  });
});
// 获取服务端发送过来的数据
client.on("data", (data) => {
  console.log("Other user's input", data.toString());
});
client.on("end", () => {
  console.log("Disconnected from server");
  // 退出客户端程序
  process.exit();
});

```

#### 20 文件 copy

```
const fs = require('fs');
const readline = require('readline');

function updateProgress(copiedSize, totalSize, startTime) {
    const percent = (copiedSize / totalSize * 100).toFixed(2);
    const size = (copiedSize / (1024 * 1024)).toFixed(6); // Convert to MB
    const elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds
    const speed = (copiedSize / (1024 * 1024) / elapsedTime).toFixed(2); // MB/s
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`已完成 ${size}MB, ${percent}% 速度：${speed}MB/s`);
}

function copyFileWithProgress(src, dest) {
    const totalSize = fs.statSync(src).size;
    let copiedSize = 0;
    const startTime = Date.now();
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);

    readStream.on('data', (chunk) => {
        copiedSize += chunk.length;
        updateProgress(copiedSize, totalSize, startTime);
    });

    readStream.pipe(writeStream);

    writeStream.on('finish', () => {
        console.log('\nCopy completed.');
    });

    writeStream.on('error', (err) => {
        console.error('Error during copy:', err);
    });
}

// Example usage
const srcFile = './README.md';
const destFile = './Test.md';
copyFileWithProgress(srcFile, destFile);
```

#### 21 文件夹 copy

```
onst fs = require('fs');
const path = require('path');
const readline = require('readline');

function updateProgress(copiedSize, totalSize, startTime) {
    const percent = (copiedSize / totalSize * 100).toFixed(2);
    const size = (copiedSize / (1024 * 1024)).toFixed(6); // Convert to MB
    const elapsedTime = (Date.now() - startTime) / 1000; // Convert to seconds
    const speed = (copiedSize / (1024 * 1024) / elapsedTime).toFixed(2); // MB/s
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`已完成 ${size}MB, ${percent}%, 速度：${speed}MB/s`);
}
function copyFile(src, dest, copiedSize, totalSize, startTime, callback) {
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    readStream.on('data', (chunk) => {
        copiedSize.size += chunk.length;
        updateProgress(copiedSize.size, totalSize.size, startTime);
    });
    readStream.pipe(writeStream);
    writeStream.on('finish', callback);
    writeStream.on('error', (err) => {
        console.error('Error during copy:', err);
    });
}
function copyDirectory(src, dest, copiedSize, totalSize, startTime, callback) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdir(src, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        let pending = files.length;
        if (!pending) return callback();
        files.forEach((file) => {
            const srcPath = path.join(src, file);
            const destPath = path.join(dest, file);
            console.log(destPath);
            fs.stat(srcPath, (err, stats) => {
                if (err) {
                    console.error('Error stating file:', err);
                    return;
                }
                if (stats.isDirectory()) {
                    copyDirectory(srcPath, destPath, copiedSize, totalSize, startTime, () => {
                        if (!--pending) callback();
                    });
                } else {
                    totalSize.size += stats.size;
                    copyFile(srcPath, destPath, copiedSize, totalSize, startTime, () => {
                        if (!--pending) callback();
                    });
                }
            });
        });
    });
}
function copyFolderWithProgress(src, dest) {
    const copiedSize = { size: 0 };
    const totalSize = { size: 0 };
    const startTime = Date.now();
    copyDirectory(src, dest, copiedSize, totalSize, startTime, () => {
        updateProgress(copiedSize.size, totalSize.size, startTime); // Final update
        console.log('\nCopy completed.');
    });
}
// Example usage
const srcFolder = './node_modules';
const destFolder = './test';
copyFolderWithProgress(srcFolder, destFolder);
```

#### 22 百度搜索

```
const https = require('https');
const readline = require('readline');
const cheerio = require('cheerio');
const zlib = require('zlib');

// 创建可交互命令行
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'search>>> '
});
rl.prompt(); // 提示用户输入
rl.on('line', async (line) => {
    console.log(`正在搜索 "${line.trim()}"`);
    try {
        await search(line.trim());
    } catch (error) {
        console.error('搜索过程中出错:', error.message);
    }
    rl.prompt();
}).on('close', () => {
    console.log('再见!');
    process.exit(0);
});
async function search(words) {
    return new Promise((resolve, reject) => {
        let options = {
            hostname: 'www.baidu.com',
            port: 443,
            path: `/s?wd=${encodeURIComponent(words)}`,
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Accept-Encoding': 'gzip, deflate, br'
            }
        };
        const req = https.request(options, (res) => {
            let body = [];
            const encoding = res.headers['content-encoding'];
            console.log(encoding);
            res.on('data', (chunk) => {
                body.push(chunk);
            });
            res.on('end', () => {
                body = Buffer.concat(body);
                if (encoding === 'gzip') {
                    zlib.gunzip(body, (err, decoded) => {
                        if (err) return reject(err);
                        processBody(decoded.toString());
                        resolve();
                    });
                } else if (encoding === 'br') {
                    zlib.brotliDecompress(body, (err, decoded) => {
                        if (err) return reject(err);
                        processBody(decoded.toString());
                        resolve();
                    });
                } else {
                    processBody(body.toString());
                    resolve();
                }
            });
        });
        req.on('error', (e) => {
            reject(e);
        });
        req.end();
    });
}
function processBody(body) {
    let $ = cheerio.load(body);
    $('.t a').each(function(i, el) {
        const title = $(this).text().trim();
        const href = $(this).attr('href');
        if (title && href) {
            console.log(`${title}\n${href}\n`);
        }
    });
}
```
