import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,d as n,e as s,a as t,f as i}from"./app-Cbix2SPG.js";const l={},r=n("h1",{id:"场景",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#场景"},[n("span",null,"场景")])],-1),u=n("p",null,[n("code",null,"for...of...."),s(" 的原理是？")],-1),d=n("h1",{id:"迭代器模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#迭代器模式"},[n("span",null,"迭代器模式")])],-1),k={href:"https://en.wikipedia.org/wiki/Iterator_pattern",target:"_blank",rel:"noopener noreferrer"},v={href:"https://en.wikipedia.org/wiki/Object-oriented_programming",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"iterator pattern",-1),b={href:"https://en.wikipedia.org/wiki/Design_pattern_(computer_science)",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/Iterator",target:"_blank",rel:"noopener noreferrer"},h={href:"https://en.wikipedia.org/wiki/Container_(data_structure)",target:"_blank",rel:"noopener noreferrer"},w={href:"https://en.wikipedia.org/wiki/Algorithm",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>说白了就是有个容器类，有一个迭代器类，容器类持有一个迭代器类的对象，然后我们不需要知道容器中元素的具体结构，通过迭代器对象就能够进行遍历。</p><figure><img src="http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220226101825545.png" alt="image-20220226101825545" tabindex="0" loading="lazy"><figcaption>image-20220226101825545</figcaption></figure><p>不妨可以看下 <code>java</code> 的具体实现：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">E</span> <span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 迭代器类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> cursor<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> arrayList<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">ArrayIterator</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> arrayList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cursor <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arrayList <span class="token operator">=</span> arrayList<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cursor <span class="token operator">!=</span> arrayList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cursor<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Override</span>
  <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor <span class="token operator">&gt;=</span> arrayList<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchElementException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arrayList<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> names <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    names<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;wind&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    names<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;liang&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    names<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;2022&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> iterator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayIterator</span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">currentItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器类使用 <code>java</code> 自带的 <code>ArrayList</code> 类，然后我们手动实现一个迭代器类 <code>ArrayIterator</code>。</p><h1 id="js-的迭代器模式" tabindex="-1"><a class="header-anchor" href="#js-的迭代器模式"><span>js 的迭代器模式</span></a></h1><p><code>js</code> 中我们不需要专门定义迭代器的类了，我们可以让容器包含一个 <code>Symbol.iterator</code> 方法，该方法返回一个迭代器对象。</p><p>迭代器对象包含一个 <code>next</code> 方法用来获取元素，同时获取到的元素除了本身的 <code>value</code> 外，还返回一个布尔型变量代表是否有下一个元素。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">container</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> nextIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> nextIndex <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length
            <span class="token operator">?</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> arr<span class="token punctuation">[</span>nextIndex<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span>
            <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
                <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">container</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;wind&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;liang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;亮&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> iterator <span class="token operator">=</span> list<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，数组已经为我们提前实现了迭代器，我们直接通过 <code>Symbol.iterator</code> 方法拿到，不需要自己再实现了。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;wind&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;liang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;亮&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> iteratorArray <span class="token operator">=</span> array<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> iteratorArray<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有字符串也为我们内置了迭代器。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> string <span class="token operator">=</span> <span class="token string">&#39;windliang&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> iteratorString <span class="token operator">=</span> string<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> iteratorString<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>done<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同理，<code>Map</code>、<code>Set</code> 都帮我们内置了 <code>Symbol.iterator</code> 方法，可以返回一个迭代器。</p><p>此外，我们也不需要每次都去 <code>while</code> 循环、然后判断是否结束循环了，直接使用 <code>for...of...</code> 即可。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;wind&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;liang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;亮&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> a <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> string <span class="token operator">=</span> <span class="token string">&#39;windliang&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> s <span class="token keyword">of</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h1><p>因为数组是通过 <code>index</code> 来获取元素的，如果在遍历过程中删除元素，可能会产生非预期内的事情。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;wind&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;liang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;亮&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> a <span class="token keyword">of</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token string">&#39;wind&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以先思考下会怎么输出，然后看下结果：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>wind<span class="token punctuation">;</span>
亮<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">&#39;liang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;亮&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们是成功删除了 <code>wind</code> ，但是原数组中 <code>liang</code> 就不会遍历到了，也比较好理解。</p><p>开始的时候，指针 <code>index</code> 指向 <code>wind</code>，进行了输出 <code>console.log(a); // wind</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code> <span class="token number">0</span>     <span class="token number">1</span>   <span class="token number">2</span>
wind liang 亮
 <span class="token operator">^</span>
index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时删除了 <code>wind</code> ，<code>array.splice(0, 1);</code> 数组整体前移。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code> <span class="token number">0</span>    <span class="token number">1</span>
liang 亮
 <span class="token operator">^</span>
index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后指针后移，遍历下个元素。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">0</span>     <span class="token number">1</span>
liang 亮
      <span class="token operator">^</span>
     index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就直接走到 <code>亮</code> 了，而没有遍历 <code>liang</code> 。</p><p>原因就是 <code>liang</code> 的位置之前是 <code>wind</code> ，<code>wind</code> 之前已经遍历过了，指针后移就把 <code>liang</code> 跳过了。</p><h1 id="总" tabindex="-1"><a class="header-anchor" href="#总"><span>总</span></a></h1><p>迭代器模式的好处就是可以不知道容器中元素的结构就可以遍历，一般由容器提供一个迭代器供我们使用。为了实现不同的遍历顺序，只需要提供新的迭代器即可。</p><p>一般编程语言中都内置了迭代器，<code>js</code> 也不例外，在 <code>Array</code>、<code>String</code>、<code>Map</code>、<code>Set</code> 中都内置了<code>Symbol.iterator</code> 方法返回一个迭代器对象，同时提供了<code>for...of...</code> 语法统一了各个对象的遍历方式。</p>`,33);function f(_,j){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,u,d,n("p",null,[s("看下 "),n("a",k,[s("维基百科"),t(a)]),s(" 给的定义：")]),n("blockquote",null,[n("p",null,[s("In "),n("a",v,[s("object-oriented programming"),t(a)]),s(", the "),m,s(" is a "),n("a",b,[s("design pattern"),t(a)]),s(" in which an "),n("a",g,[s("iterator"),t(a)]),s(" is used to traverse a "),n("a",h,[s("container"),t(a)]),s(" and access the container's elements. The iterator pattern decouples "),n("a",w,[s("algorithms"),t(a)]),s(" from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.")])]),y])}const S=e(l,[["render",f],["__file","iteratorPattern.html.vue"]]),A=JSON.parse(`{"path":"/posts/designPattern/iteratorPattern.html","title":"迭代器模式","lang":"zh-CN","frontmatter":{"title":"迭代器模式","category":["设计模式","frontend"],"tag":["设计模式","frontend"],"author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","date":"2022-02-26T09:09:00.000Z","description":"场景 for...of.... 的原理是？ 迭代器模式 看下 维基百科 给的定义： In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and acces...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/designPattern/iteratorPattern.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/designPattern/iteratorPattern.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"迭代器模式"}],["meta",{"property":"og:description","content":"场景 for...of.... 的原理是？ 迭代器模式 看下 维基百科 给的定义： In object-oriented programming, the iterator pattern is a design pattern in which an iterator is used to traverse a container and acces..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"迭代器模式"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"frontend"}],["meta",{"property":"article:published_time","content":"2022-02-26T09:09:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迭代器模式\\",\\"image\\":[\\"http://static.h7ml.cn/vitepress/assets/images/designPattern/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220226101825545.png\\"],\\"datePublished\\":\\"2022-02-26T09:09:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.31,"words":994},"filePathRelative":"posts/designPattern/iteratorPattern.md","localizedDate":"2022年2月26日","excerpt":"\\n<p><code>for...of....</code> 的原理是？</p>\\n<h1>迭代器模式</h1>\\n<p>看下 <a href=\\"https://en.wikipedia.org/wiki/Iterator_pattern\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">维基百科</a> 给的定义：</p>\\n<blockquote>\\n<p>In <a href=\\"https://en.wikipedia.org/wiki/Object-oriented_programming\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">object-oriented programming</a>, the <strong>iterator pattern</strong> is a <a href=\\"https://en.wikipedia.org/wiki/Design_pattern_(computer_science)\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">design pattern</a> in which an <a href=\\"https://en.wikipedia.org/wiki/Iterator\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">iterator</a> is used to traverse a <a href=\\"https://en.wikipedia.org/wiki/Container_(data_structure)\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">container</a> and access the container's elements. The iterator pattern decouples <a href=\\"https://en.wikipedia.org/wiki/Algorithm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">algorithms</a> from containers; in some cases, algorithms are necessarily container-specific and thus cannot be decoupled.</p>\\n</blockquote>","autoDesc":true}`);export{S as comp,A as data};