import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as t,d as e,a as n,w as a,f as v,e as s}from"./app-Cbix2SPG.js";const c={},u=v(`<h2 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖"><span>添加依赖</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>compile &#39;io.reactivex.rxjava2:rxandroid:2.0.1&#39;
compile &#39;io.reactivex.rxjava2:rxjava:2.0.1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建数据源-被观察者-可观察者" tabindex="-1"><a class="header-anchor" href="#创建数据源-被观察者-可观察者"><span>创建数据源（被观察者/可观察者）</span></a></h2><p>返回一个可观察对象，该对象发出给定(常量引用)项的信号，然后完成</p><h3 id="just-方法" tabindex="-1"><a class="header-anchor" href="#just-方法"><span>just 方法</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.just(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
.subscribe(new Consumer&lt;Integer&gt;() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println(&quot;just：&quot; + integer);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>just：1
just：2
just：4
just：5
just：6
just：7
just：8
just：9
just：10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fromarray-方法" tabindex="-1"><a class="header-anchor" href="#fromarray-方法"><span>fromArray 方法</span></a></h3><p>fromArray 和 Just 几乎是一样的效果，只不过 Just 限制 10 个以内，而 fromArray 并没有限制，查看得知 单个参数 Just 是自行创建 ObservableJust，而多个参数 Just 最终还是回调了 fromArray，这里不再过多演示</p><h3 id="create-方法" tabindex="-1"><a class="header-anchor" href="#create-方法"><span>create 方法</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.create(new ObservableOnSubscribe&lt;Integer&gt;() {

    @Override
    public void subscribe(ObservableEmitter&lt;Integer&gt; emitter) throws Exception {
        //执行多次
        emitter.onNext(1);
        emitter.onNext(2);
        emitter.onNext(3);
        //标记事件结束
        emitter.onComplete();
        //标记事件发送错误
        //emitter.onError(new NullPointerException(&quot;不能为空&quot;));
    }
}).subscribe(new Consumer&lt;Integer&gt;() {

    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println(&quot;create：&quot; + integer);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>create：1
create：2
create：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="range-方法" tabindex="-1"><a class="header-anchor" href="#range-方法"><span>range 方法</span></a></h3><p>使用范围数据，指定输出数据的范围（1-40 的数值）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.range(3, 5)
.subscribe(new Consumer&lt;Integer&gt;() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println(&quot;range：&quot; + integer);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>range：3
range：4
range：5
range：6
range：7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interval-方法" tabindex="-1"><a class="header-anchor" href="#interval-方法"><span>interval 方法</span></a></h3><p>指定某一时刻进行数据发送</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.interval(10, 1, TimeUnit.SECONDS) // 先等待 10 秒，之后再每一秒发送一次，10 秒这个参数也可以不填，默认用间隔时间参数替代（这里示例 1 秒）
.subscribe(new Consumer&lt;Long&gt;() {
    @Override
    public void accept(Long l) throws Exception {
    System.out.println(&quot;interval：&quot; + l);
    }
    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>2019-03-20 15:30:33.331 interval：0
2019-03-20 15:30:34.331 interval：1
2019-03-20 15:30:35.331 interval：2
2019-03-20 15:30:36.331 interval：3
2019-03-20 15:30:37.331 interval：4
2019-03-20 15:30:38.331 interval：5
..................................
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建事件的接收者-观察者-订阅者-onnext-方法中的数据类型必须被观察者指定的泛型" tabindex="-1"><a class="header-anchor" href="#创建事件的接收者-观察者-订阅者-onnext-方法中的数据类型必须被观察者指定的泛型"><span>创建事件的接收者（观察者|订阅者），onNext 方法中的数据类型必须被观察者指定的泛型</span></a></h2><p>表示观察者不对被观察者发送的事件作出任何响应（但被观察者还是可以继续发送事件）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final Disposable subscribe() {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示观察者只对被观察者发送的 Next 事件作出响应</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final Disposable subscribe(Consumer&lt;? super T&gt; onNext) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示观察者只对被观察者发送的 Next 事件 &amp; Error 事件作出响应</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final Disposable subscribe(Consumer&lt;? super T&gt; onNext, Consumer&lt;? super Throwable&gt; onError) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示观察者只对被观察者发送的 Next 事件、Error 事件 &amp; Complete 事件作出响应</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final Disposable subscribe(Consumer&lt;? super T&gt; onNext, Consumer&lt;? super Throwable&gt; onError, Action onComplete) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示观察者只对被观察者发送的 Next 事件、Error 事件 、Complete 事件 &amp; onSubscribe 事件作出响应</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final Disposable subscribe(Consumer&lt;? super T&gt; onNext, Consumer&lt;? super Throwable&gt; onError, Action onComplete, Consumer&lt;? super Disposable&gt; onSubscribe) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示观察者对被观察者所有的事件做出响应</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public final void subscribe(Observer&lt;? super T&gt; observer) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="observer-类用法" tabindex="-1"><a class="header-anchor" href="#observer-类用法"><span>Observer 类用法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onSubscribe：订阅的时候被调用，方法参数有 Disposable，可用于取消订阅
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onNext(T item)：Observable调用这个方法发射数据，方法的参数就是Observable发射的数据，这个方法可能会被调用多次，取决于业务逻辑
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onCompleted()：正常终止，在没有遇到错误的情况下，Observable在最后一次调用onNext之后调用此方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onError(Throwable e)：当Observable遇到错误或者无法返回期望的数据时会调用这个方法，这个调用会终止Observable，后续不会再调用onNext和onCompleted，onError方法的参数是抛出异常
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>观察者</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.just(1, 2, 3)
.subscribe(new Observer&lt;Integer&gt;() {

    @Override
    public void onSubscribe(Disposable d) {
        System.out.println(&quot;onSubscribe&quot;);
    }

    @Override
    public void onNext(Integer integer) {
        System.out.println(&quot;onNext：&quot; + integer);
    }

    @Override
    public void onError(Throwable e) {
        System.out.println(&quot;onError：&quot; + e.toString());
    }

    @Override
    public void onComplete() {
        System.out.println(&quot;onComplete&quot;);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>onSubscribe
onNext：1
onNext：2
onNext：3
onComplete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consumer-类用法" tabindex="-1"><a class="header-anchor" href="#consumer-类用法"><span>Consumer 类用法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Observable.just(1, 2, 3)
.subscribe(new Consumer&lt;Integer&gt;() {
    @Override
    public void accept(Integer integer) throws Exception {
        System.out.println(&quot;accept：&quot; + integer);
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>accept：1
accept：2
accept：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="订阅" tabindex="-1"><a class="header-anchor" href="#订阅"><span>订阅</span></a></h2><p>订阅事件，被观察者必须指定了事件的接收者（观察者），整个事件流程才可以被启动</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Disposable disposable = observable.subscribe(observer);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="是否被订阅" tabindex="-1"><a class="header-anchor" href="#是否被订阅"><span>是否被订阅</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>disposable.isDisposed();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="取消订阅" tabindex="-1"><a class="header-anchor" href="#取消订阅"><span>取消订阅</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>disposable.dispose();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用步骤" tabindex="-1"><a class="header-anchor" href="#使用步骤"><span>使用步骤</span></a></h2><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>build.gradle引入依赖

compile &#39;io.reactivex:rxjava:1.0.14&#39;
compile &#39;io.reactivex:rxandroid:1.0.1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建数据源-被观察者-可观察者-泛型必须是-object-的子类" tabindex="-1"><a class="header-anchor" href="#创建数据源-被观察者-可观察者-泛型必须是-object-的子类"><span>创建数据源（被观察者/可观察者），泛型必须是 Object 的子类</span></a></h2><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>Observable observable = Observable.create(new Observable.OnSubscribe&lt;String&gt;() {

 //事件源，可以指定
 @Override
 public void call(Subscriber&lt;? super String&gt; subscriber) {
  //执行多次
  subscriber.onNext(&quot;第一次执行&quot;);
  subscriber.onNext(&quot;第二次执行&quot;);
  //标记事件结束
  subscriber.onCompleted();
  //标记事件发送错误
  //subscriber.onError();
 }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//from(T[])，返回的对象一般都是数值类型
Integer[] items = {1, 2, 3, 4, 5, 6, 7, 8, 9};
Observable observable = Observable.from(items);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//指定某一时刻进行数据发送
Observable observable = Observable.interval(1, 1, TimeUnit.SECONDS);//每隔一秒发送数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//just(T...)，处理任意类型的数组集合或数值，参数上限10个，参数类型必须一致
Integer[] items1 = {1, 2, 3, 4, 5, 6};
Integer[] items2 = {3, 5, 6, 8, 3, 8};
Observable observable = Observable.just(items1, items2);
//使用范围数据，指定输出数据的范围（1-40的数值）
Observable observable = Observable.range(1, 40);
####创建事件的接收者（观察者|订阅者），onNext方法中的数据类型必须被观察者指定的泛型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>onNext(T item)：Observable调用这个方法发射数据，方法的参数就是Observable发射的数据，这个方法可能会被调用多次，取决于业务逻辑

onCompleted()：正常终止，在没有遇到错误的情况下，Observable在最后一次调用onNext之后调用此方法

onError(Throwable e)：当Observable遇到错误或者无法返回期望的数据时会调用这个方法，这个调用会终止Observable，后续不会再调用onNext和onCompleted，onError方法的参数是抛出异常

Observer&lt;String&gt; observer = new Observer&lt;String&gt;() {

 @Override
 public void onNext(String s) {
  System.out.println(&quot;onNext&quot; + s);
 }

 @Override
 public void onCompleted() {
  System.out.println(&quot;onCompleted&quot;);
 }

 @Override
 public void onError(Throwable e) {
  System.out.println(&quot;onError&quot; + e.getMessage());
 }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//订阅者
Subscriber&lt;String&gt; subscriber = new Subscriber&lt;String&gt;() {

 @Override
 public void onStart(String s) {
  System.out.println(&quot;事件开始了&quot;);
 }

 @Override
 public void onNext(String s) {
  System.out.println(&quot;onNext&quot; + s);
 }

 @Override
 public void onCompleted() {
  System.out.println(&quot;onCompleted&quot;);
 }

 @Override
 public void onError(Throwable e) {
  System.out.println(&quot;onError&quot; + e.getMessage());
 }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//对订阅者进行简化，更简单
Action1&lt;String&gt; action1 = new Action1&lt;String&gt;() {

 @Override
 public void call(String s) {
  System.out.println(&quot;call&quot; + s);
 }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code># 订阅事件，被观察者必须指定了事件的接收者（观察者|订阅者），整个事件流程才可以被启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>observable.subscribe(observer);
observable.subscribe(subscriber);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>//选择性参数方法，可对onNext，onCompleted，onError选择性使用，一般只需要onNext方法就足够
observable.subscribe(action1);

//自动创建 Subscriber ，并使用 onNextAction 来定义 onNext()
observable.subscribe(onNextAction);
//自动创建 Subscriber ，并使用 onNextAction 和 onErrorAction 来定义 onNext() 和 onError()
observable.subscribe(onNextAction, onErrorAction);
//自动创建 Subscriber ，并使用 onNextAction、 onErrorAction 和 onCompletedAction 来定义 onNext()、 onError() 和 onCompleted()
observable.subscribe(onNextAction, onErrorAction, onCompletedAction);

简单解释一下这段代码中出现的 Action1 和 Action0。
Action0 是 RxJava 的一个接口，它只有一个方法 call()，这个方法是无参无返回值的；
由于 onCompleted() 方法也是无参无返回值的，因此 Action0 可以被当成一个包装对象，将 onCompleted() 的内容打包起来将自己作为一个参数传入 subscribe() 以实现不完整定义的回调。
这样其实也可以看做将 onCompleted() 方法作为参数传进了 subscribe()，相当于其他某些语言中的『闭包』。
Action1 也是一个接口，它同样只有一个方法 call(T param)，这个方法也无返回值，但有一个参数；
与 Action0 同理，由于 onNext(T obj) 和 onError(Throwable error) 也是单参数无返回值的，因此 Action1 可以将 onNext(obj) 和 onError(error) 打包起来传入 subscribe() 以实现不完整定义的回调。
事实上，虽然 Action0 和 Action1 在 API 中使用最广泛，但 RxJava 是提供了多个 ActionX 形式的接口 (例如 Action2, Action3) 的，它们可以被用以包装不同的无返回值的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>订阅者是观察者的子类，区别在于订阅者可以取消订阅（在程序销毁后）</p><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>if(subscriber != null &amp;&amp; !subscriber.isUnsubscribed()) {
subscriber.unsubscribe();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66);function o(b,m){const i=l("RouteLink");return r(),t("div",null,[u,e("ul",null,[e("li",null,[e("p",null,[n(i,{to:"/posts/rxjava/thread-scheduling.html"},{default:a(()=>[s("Rxjava 的线程调度")]),_:1})])]),e("li",null,[e("p",null,[n(i,{to:"/posts/rxjava/superiority.html"},{default:a(()=>[s("RxJava 的优势")]),_:1})])])])])}const x=d(c,[["render",o],["__file","note.html.vue"]]),h=JSON.parse(`{"path":"/posts/rxjava/note.html","title":"依赖","lang":"zh-CN","frontmatter":{"title":"依赖","icon":"java","order":1,"date":"2019-03-21T00:00:00.000Z","author":"h7ml","category":"android","tag":"rxjava","description":"添加依赖 创建数据源（被观察者/可观察者） 返回一个可观察对象，该对象发出给定(常量引用)项的信号，然后完成 just 方法 fromArray 方法 fromArray 和 Just 几乎是一样的效果，只不过 Just 限制 10 个以内，而 fromArray 并没有限制，查看得知 单个参数 Just 是自行创建 ObservableJust，而多...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/rxjava/note.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/rxjava/note.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"依赖"}],["meta",{"property":"og:description","content":"添加依赖 创建数据源（被观察者/可观察者） 返回一个可观察对象，该对象发出给定(常量引用)项的信号，然后完成 just 方法 fromArray 方法 fromArray 和 Just 几乎是一样的效果，只不过 Just 限制 10 个以内，而 fromArray 并没有限制，查看得知 单个参数 Just 是自行创建 ObservableJust，而多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"rxjava"}],["meta",{"property":"article:published_time","content":"2019-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"依赖\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"添加依赖","slug":"添加依赖","link":"#添加依赖","children":[]},{"level":2,"title":"创建数据源（被观察者/可观察者）","slug":"创建数据源-被观察者-可观察者","link":"#创建数据源-被观察者-可观察者","children":[{"level":3,"title":"just 方法","slug":"just-方法","link":"#just-方法","children":[]},{"level":3,"title":"fromArray 方法","slug":"fromarray-方法","link":"#fromarray-方法","children":[]},{"level":3,"title":"create 方法","slug":"create-方法","link":"#create-方法","children":[]},{"level":3,"title":"range 方法","slug":"range-方法","link":"#range-方法","children":[]},{"level":3,"title":"interval 方法","slug":"interval-方法","link":"#interval-方法","children":[]}]},{"level":2,"title":"创建事件的接收者（观察者|订阅者），onNext 方法中的数据类型必须被观察者指定的泛型","slug":"创建事件的接收者-观察者-订阅者-onnext-方法中的数据类型必须被观察者指定的泛型","link":"#创建事件的接收者-观察者-订阅者-onnext-方法中的数据类型必须被观察者指定的泛型","children":[]},{"level":2,"title":"Observer 类用法","slug":"observer-类用法","link":"#observer-类用法","children":[]},{"level":2,"title":"Consumer 类用法","slug":"consumer-类用法","link":"#consumer-类用法","children":[]},{"level":2,"title":"订阅","slug":"订阅","link":"#订阅","children":[]},{"level":2,"title":"是否被订阅","slug":"是否被订阅","link":"#是否被订阅","children":[]},{"level":2,"title":"取消订阅","slug":"取消订阅","link":"#取消订阅","children":[]},{"level":2,"title":"使用步骤","slug":"使用步骤","link":"#使用步骤","children":[]},{"level":2,"title":"创建数据源（被观察者/可观察者），泛型必须是 Object 的子类","slug":"创建数据源-被观察者-可观察者-泛型必须是-object-的子类","link":"#创建数据源-被观察者-可观察者-泛型必须是-object-的子类","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":6.53,"words":1959},"filePathRelative":"posts/rxjava/note.md","localizedDate":"2019年3月21日","excerpt":"<h2>添加依赖</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>compile 'io.reactivex.rxjava2:rxandroid:2.0.1'\\ncompile 'io.reactivex.rxjava2:rxjava:2.0.1'\\n</code></pre></div><h2>创建数据源（被观察者/可观察者）</h2>\\n<p>返回一个可观察对象，该对象发出给定(常量引用)项的信号，然后完成</p>\\n<h3>just 方法</h3>","autoDesc":true}`);export{x as comp,h as data};
