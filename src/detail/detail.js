import React, { useState, useEffect } from 'react';
import Markdown from '../common/markdown/Markdown.js';
import Banner from '../common/banner/Banner';
import { Link, useParams } from 'react-router-dom';
import leftArrow from './left_arrow.svg';
import Request from '../tools/fetch_api';

function Detail() {
  // const [lession, setLession] = useState({
  //   title: '',
  //   poster: '',
  //   subTitle: '',
  //   difficulty: '',
  //   duration: '',
  //   learningNumbers: 12345,
  //   author: '',
  //   score: 9.9,
  //   previous: '',
  //   behind: '',
  //   content: '',
  // });
  // const { id } = useParams();
  // useEffect(() => {
  //   const request = new Request('/lessions/' + id);
  //   request.get().then((data) => {
  //     setLession(data);
  //   });
  // }, [id]);
  const content = `# 响应式概述

  ![reactive system](https://s1.locimg.com/2023/09/05/d28b32aaabef9.jpeg)
  
  说起响应式，就不得不先说下响应式宣言[Reactive Manifesto](https://www.reactivemanifesto.org/).
  
  如果你觉得该渲染阅读有困难，友情奉上中文版的宣言[响应式宣言中文版](https://www.reactivemanifesto.org/zh-CN).
  
  阅读该宣言之后，大家有啥想法么？
  
  我估计大多数人和我一样，可能觉得有点“头大”，因为读完之后，也不知道啥是响应式！
  
  其实，该宣言并没有给响应式下定义，而是描述了一种系统设计的要求范式，如果你的系统设计(包括架构设计)具备以下特质：**即时响应性（Responsive）**、**回弹性（Resilient）**、**弹性（Elastic）**以及**消息驱动（Message Driven）**。 我们称这样的系统为反应式系统（Reactive System）。
  
  ![reactive-features](https://s1.locimg.com/2023/09/05/b2f5d778caabe.png)
  
  上面的图片可以看得出，从上到下分为三个层级，最顶层是我们需要追求的**价值**，是响应式系统设计的目的，包括**及时响应性**， **可维护性**, **可扩展性**等，其中最重要的是**及时响应性**，该特性要求系统只要有可能，就尽量及时作出响应。也就是说一个响应式的系统，需要具备在服务正常或者异常的情况下，都需要及时的对外部请求做出响应，响应可以是正常内容也可以是异常情况下的快速失败。
  
  中间层表示的是实现该价值的形式，包括**弹性**和**回弹性**。
  
  * **回弹性:** 系统在出现失败时依然保持即时响应性，当某个模块出现问题时，需要将这个问题控制在一定范围内，这便需要使用隔绝的技术，避免连锁性问题的发生。
  * **弹性:** 系统在不断变化的工作负载之下依然保持即时响应性。也就是能够根据系统的负载频率，动态调整系统的吞吐量，来满足即时响应性。
  
  最底层描述的就是实现该价值的手段啦，最主要的方式是通过消息驱动的方式。消息驱动是实现上述三项的技术支撑，反应式系统依赖异步的消息传递，从而确保了松耦合、隔离、位置透明的组件之间有着明确边界。
  
  所以，我们总结如下：
  
  ***响应式宣言并不是一种编程范式，而是一组原则和指导方针，用于构建具有响应式特性的软件系统，进而指导系统架构的设计！***
  
  ## 响应式编程
  
  响应式编程是一种声明式编程范式。要理解这种范式，我们先了解一下命令式编程范式。
  
  在命令式编程环境中，**a = b + c** 表示将表达式的结果赋给**a**，而之后改变**b** 或 **c** 的值不会影响**a**。但在响应式编程中，**a**的值会随着**b**或**c**的更新而更新。电子表格程序就是响应式编程的一个例子。单元格可以包含字面值或类似"=B1+C1"的公式，而包含公式的单元格的值会依据其他单元格的值的变化而变化。
  
  所以，***响应式编程是一种基于数据流的，非阻塞的异步编程范式！***
  
  这里需要明白的一个点是，响应式编程是一种数据流编程，关注于数据流而不是控制流。数据流偏向于消息驱动，而事件流侧重于事件驱动：
  1. 消息驱动有确定的目标，一定会有消息的接受者，而事件驱动是一件事情希望被观察到，观察者是谁无关紧要。消息驱动系统关注消息的接受者，事件驱动系统关注事件源。
  2. 在一个使用响应式编程实现的响应式系统中，消息擅长于通讯，事件擅长于反应事实。
  
  ## 背压(回压)
  
  在数据流的处理方式上，一般有两种方式，**推和拉**，拉模式是消费者主动从生产者拉取数据; 推模式是生产者主动推送数据给消费者，相较于拉模式，数据处理的资源利用率会更好，但是如果当生产者和消费者速度不一致时，那么就需要一种反馈机制达到流控的目的，背压就是这样的一种下游能够向上游反馈流量请求的一种机制。
  
  ![back-pressure](https://s1.locimg.com/2023/09/05/7ba06964bce1e.webp)
  
  反应式流中第一个重要概念是背压（backpressure）。在基本的消息推送模式中，当消息发布者产生数据的速度过快时，会使得消息订阅者的处理速度无法跟上产生的速度，从而给订阅者造成很大的压力。当压力过大时，有可能造成订阅者本身的奔溃，所产生的级联效应甚至可能造成整个系统的瘫痪。负压的作用在于提供一种从订阅者到生产者的反馈渠道。订阅者可以通过**request()**方法来声明其一次所能处理的消息数量，而生产者就只会产生相应数量的消息，直到下一次**request()**方法调用。这实际上变成了推拉结合的模式。
  
  背压是响应式编程中核心特质，一般是出现在有**buffer**上限的系统中，当出现 Buffer 溢出的时候，也就是下游消费跟不上，数据就会在传输管道中积压，就会对上游形成压力，也就是产生了Backpressure。
  
  ### 响应式发展历史
  
  ![reactive-hiostory](https://s1.locimg.com/2023/09/05/f9e2aa1aa12a0.jpg)
  
  **1. 第一代：Java.util.Observable**
  
  这个时代的响应式概念还没有成型，所以可能就是一个设计模式--观察者模式的应用，所以Java为此提供了其标准实现库**Java.util.Observable**, 本质上就是一个接口，需要自己来实现。
  
  **2. 第二代： Reactive Extensions (Rx)**
  
  反应式编程最早由 .NET 平台上的 Reactive Extensions (Rx) 库来实现。
  
  后来迁移到 Java 平台之后就产生了著名的 RxJava 库，并产生了很多其他编程语言上的对应实现。在这些实现的基础上产生了后来的反应式流（Reactive Streams）规范。
  
  **3. 第三代： RxJava**
  
  RxJava 库是 JVM 上反应式编程的先驱，也是反应式流规范的基础。
  
  不过 RxJava 库也有其不足的地方。RxJava 产生于反应式流规范之前，虽然可以和反应式流的接口进行转换，但是由于底层实现的原因，使用起来并不是很直观。
  
  在 RxJava 1 里，只有少部分操作支持回压，RxJava 1 的 Observable 并没有实现 RS 里的任何类型，不过它有一些 RS 类型的适配器。可以说，RxJava 1 实际上比 RS 规范出现得更早，而且在 RS 规范设计期间，RxJava 1 充当了函数式工作者的角色。
  
  RxJava 2 在 RxJava 的基础上做了很多的更新。
  
  RxJava 2 在设计和实现时考虑到了与规范的整合，不过为了保持与 RxJava 的兼容性，很多地方在使用时也并不直观。
  
  **4. 第四代：Reactive Streams**
  
  Reactive Streams （简称为 RS）是“一种规范，它为基于非阻塞回压的异步流处理提供了标准”。它是一组包含了 TCK 工具套件和四个简单接口（Publisher、Subscriber、Subscription 和 Processor）的规范，这些接口将被集成到 Java 9.
  
  Reactor 则是完全基于反应式流(RS)规范设计和实现的库，没有 RxJava 那样的历史包袱，在使用上更加的直观易懂。Reactor 设计的原则之一是要保持 API 的精简，而对这两种响应式类型的分离，是表现力与 API 易用性之间的折中。
  
  **5. 第五代：Spring 5 Reactor**
  
  Reactor 也是 Spring 5 中反应式编程的基础。学习和掌握 Reactor 可以更好地理解 Spring 5 中的相关概念。
  
  Reactor 是 Spring 整个生态系统的基础，特别是 Spring 5（通过 Spring Web Reactive）和 Spring Data “kay”（跟 spring-data-commons 2.0 相对应的）。
  
  Reactor 将被用于未来 Spring 应用的内部响应式核心组件，以及这些 Spring 组件暴露出来的 API。一般情况下，它们可以处理 RS Publisher，不过大多数时候它们要面对的是 Flux/Mono，需要用到 Reactor 的丰富特性。当然，你也可以自行选择其它响应式框架，Reactor 提供了可以用来适配其它 Reactor 类型和 RxJava 类型甚至简单的 RS 类型的钩子接口。`;
  return (
    <section className="col col-sm-9 opacity-9 mb-4">
      <div className="card bg-white shadow">
        {/* <Banner course={lession}></Banner> */}
        <div className="card-body p-4">
          <Markdown source={content}></Markdown>
        </div>
        {/* <div className="card-footer text-right">
          {lession.behind !== '' && lession.behind !== undefined ? (
            <Link to="/detail" className="text-dark mr-sm-4">
              {lession.behind}
              <img src={leftArrow} alt="" className="ml-1 img-mt-2"></img>
            </Link>
          ) : (
            ''
          )}
        </div> */}
      </div>
    </section>
  );
}

export default Detail;
