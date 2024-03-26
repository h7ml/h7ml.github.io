import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,f as t}from"./app-Cbix2SPG.js";const r={},a=t(`<h3 id="调度器" tabindex="-1"><a class="header-anchor" href="#调度器"><span>调度器</span></a></h3><p>用于线程调度</p><h4 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例"><span>使用案例</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.create(new Observable.OnSubscribe&lt;String&gt;() {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调度类型" tabindex="-1"><a class="header-anchor" href="#调度类型"><span>调度类型</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Schedulers.immediate(): 直接在当前线程运行，相当于不指定线程。这是默认的 Scheduler

Schedulers.newThread(): 总是启用新线程，并在新线程执行操作

Schedulers.io(): I/O 操作（读写文件、读写数据库、网络信息交互等）所使用的 Scheduler。行为模式和 newThread() 差不多，区别在于 io() 的内部实现是是用一个无数量上限的线程池，可以重用空闲的线程，因此多数情况下 io() 比 newThread() 更有效率。不要把计算工作放在 io() 中，可以避免创建不必要的线程

Schedulers.computation(): 计算所使用的 Scheduler。这个计算指的是 CPU 密集型计算，即不会被 I/O 等操作限制性能的操作，例如图形的计算。这个 Scheduler 使用的固定的线程池，大小为 CPU 核数。不要把 I/O 操作放在 computation() 中，否则 I/O 操作的等待时间会浪费 CPU

AndroidSchedulers.mainThread(): 它指定的操作将在 Android 主线程运行

有了这几个Scheduler，就可以使用 subscribeOn() 和 observeOn() 两个方法来对线程进行控制了。observeOn() 执行时的当前 Observable 所对应的 Subscriber ，即它的直接下级 Subscriber 。换句话说，observeOn() 指定的是它之后的操作所在的线程。因此如果有多次切换线程的需求，只要在每个想要切换线程的位置调用一次 observeOn() 即可。 observeOn() 的多次调用，程序实现了线程的多次切换。不过，不同于 observeOn() ， subscribeOn() 的位置放在哪里都可以，但它是只能调用一次

subscribeOn()：可执行多次，指定事件源或操作符执行的线程，叫做事件产生的线程。代码一般放在之前，除了事件源

observeOn()：只执行一次，指定事件的接收者所运行在的线程。叫做事件消费的线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),s=[a];function d(l,c){return n(),i("div",null,s)}const v=e(r,[["render",d],["__file","thread-scheduling.html.vue"]]),b=JSON.parse('{"path":"/posts/rxjava/thread-scheduling.html","title":"Rxjava的线程调度","lang":"zh-CN","frontmatter":{"title":"Rxjava的线程调度","icon":"creative","date":"2019-03-29T00:00:00.000Z","author":"h7ml","category":"android","tag":"rxjava","description":"调度器 用于线程调度 使用案例 调度类型","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/rxjava/thread-scheduling.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/rxjava/thread-scheduling.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"Rxjava的线程调度"}],["meta",{"property":"og:description","content":"调度器 用于线程调度 使用案例 调度类型"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"rxjava"}],["meta",{"property":"article:published_time","content":"2019-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rxjava的线程调度\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":3,"title":"调度器","slug":"调度器","link":"#调度器","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.87,"words":562},"filePathRelative":"posts/rxjava/thread-scheduling.md","localizedDate":"2019年3月29日","excerpt":"<h3>调度器</h3>\\n<p>用于线程调度</p>\\n<h4>使用案例</h4>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>Observable.create(new Observable.OnSubscribe&lt;String&gt;() {\\n\\n @Override\\n public void call(Subscriber&lt;? super String&gt; subscriber) {\\n  System.out.println(\\"正在进行耗时操作\\");\\n  subscriber.onNext(\\"执行耗时操作后的结果\\");\\n  subscriber.onCompleted();\\n }\\n})\\n.subscribeOn(Schedulers.io())    //让被观察者执行在IO线程\\n.observeOn(AndroidSchedulers.mainThread()) //让观察者执行在主线程\\n.subscribe(...);\\n</code></pre></div>","autoDesc":true}');export{v as comp,b as data};
