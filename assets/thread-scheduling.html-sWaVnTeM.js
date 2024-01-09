import{_ as e,o as i,c as n,f as s}from"./app-Q-AMctCt.js";const d={},r=s(`<h3 id="调度器" tabindex="-1"><a class="header-anchor" href="#调度器" aria-hidden="true">#</a> 调度器</h3><p>用于线程调度</p><h4 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Observable.create(new Observable.OnSubscribe&lt;String&gt;() {

 @Override
 public void call(Subscriber&lt;? super String&gt; subscriber) {
  System.out.println(&quot;正在进行耗时操作&quot;);
  subscriber.onNext(&quot;执行耗时操作后的结果&quot;);
  subscriber.onCompleted();
 }
})
.subscribeOn(Schedulers.io())    //让被观察者执行在IO线程
.observeOn(AndroidSchedulers.mainThread()) //让观察者执行在主线程
.subscribe(...);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调度类型" tabindex="-1"><a class="header-anchor" href="#调度类型" aria-hidden="true">#</a> 调度类型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Schedulers.immediate(): 直接在当前线程运行，相当于不指定线程。这是默认的 Scheduler

Schedulers.newThread(): 总是启用新线程，并在新线程执行操作

Schedulers.io(): I/O 操作（读写文件、读写数据库、网络信息交互等）所使用的 Scheduler。行为模式和 newThread() 差不多，区别在于 io() 的内部实现是是用一个无数量上限的线程池，可以重用空闲的线程，因此多数情况下 io() 比 newThread() 更有效率。不要把计算工作放在 io() 中，可以避免创建不必要的线程

Schedulers.computation(): 计算所使用的 Scheduler。这个计算指的是 CPU 密集型计算，即不会被 I/O 等操作限制性能的操作，例如图形的计算。这个 Scheduler 使用的固定的线程池，大小为 CPU 核数。不要把 I/O 操作放在 computation() 中，否则 I/O 操作的等待时间会浪费 CPU

AndroidSchedulers.mainThread(): 它指定的操作将在 Android 主线程运行

有了这几个Scheduler，就可以使用 subscribeOn() 和 observeOn() 两个方法来对线程进行控制了。observeOn() 执行时的当前 Observable 所对应的 Subscriber ，即它的直接下级 Subscriber 。换句话说，observeOn() 指定的是它之后的操作所在的线程。因此如果有多次切换线程的需求，只要在每个想要切换线程的位置调用一次 observeOn() 即可。 observeOn() 的多次调用，程序实现了线程的多次切换。不过，不同于 observeOn() ， subscribeOn() 的位置放在哪里都可以，但它是只能调用一次

subscribeOn()：可执行多次，指定事件源或操作符执行的线程，叫做事件产生的线程。代码一般放在之前，除了事件源

observeOn()：只执行一次，指定事件的接收者所运行在的线程。叫做事件消费的线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[r];function a(c,u){return i(),n("div",null,l)}const b=e(d,[["render",a],["__file","thread-scheduling.html.vue"]]);export{b as default};
