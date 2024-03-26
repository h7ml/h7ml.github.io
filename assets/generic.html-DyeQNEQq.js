import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,d as n,e as c,a as o,f as i}from"./app-Cbix2SPG.js";const l={},r=i(`<h1 id="说说你对-typescript-中泛型的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#说说你对-typescript-中泛型的理解-应用场景"><span>说说你对 TypeScript 中泛型的理解？应用场景？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/5bb5f1d0-0e17-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>泛型程序设计（generic programming）是程序设计语言的一种风格或范式</p><p>泛型允许我们在强类型程序设计语言中编写代码时使用一些以后才指定的类型，在实例化时作为参数指明这些类型在<code>typescript</code>中，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性</p><p>假设我们用一个函数，它可接受一个 <code>number</code> 参数并返回一个<code>number</code> 参数，如下写法：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">returnItem</span><span class="token punctuation">(</span>para<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> para<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们打算接受一个 <code>string</code> 类型，然后再返回 <code>string</code>类型，则如下写法：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">returnItem</span><span class="token punctuation">(</span>para<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> para<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两种编写方式，存在一个最明显的问题在于，代码重复度比较高</p><p>虽然可以使用 <code>any</code>类型去替代，但这也并不是很好的方案，因为我们的目的是接收什么类型的参数返回什么类型的参数，即在运行时传入参数我们才能确定类型</p><p>这种情况就可以使用泛型，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">returnItem</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>para<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> para<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，泛型给予开发者创造灵活、可重用代码的能力</p><h2 id="二、使用方式" tabindex="-1"><a class="header-anchor" href="#二、使用方式"><span>二、使用方式</span></a></h2><p>泛型通过<code>&lt;&gt;</code>的形式进行表述，可以声明：</p><ul><li><p>函数</p></li><li><p>接口</p></li><li><p>类</p></li></ul><h3 id="函数声明" tabindex="-1"><a class="header-anchor" href="#函数声明"><span>函数声明</span></a></h3><p>声明函数的形式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">returnItem</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>para<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> para<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义泛型的时候，可以一次定义<strong>多个类型参数</strong>，比如我们可以同时定义泛型 <code>T</code> 和 泛型 <code>U</code>：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">swap</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>tuple<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">U</span><span class="token punctuation">,</span> <span class="token constant">T</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>tuple<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> tuple<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">swap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;seven&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&#39;seven&#39;, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口声明" tabindex="-1"><a class="header-anchor" href="#接口声明"><span>接口声明</span></a></h3><p>声明接口的形式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ReturnItemFn<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>para<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么当我们想传入一个 number 作为参数的时候，就可以这样声明函数:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> returnItem<span class="token operator">:</span> ReturnItemFn<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span>para<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> para<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><h3 id="类声明" tabindex="-1"><a class="header-anchor" href="#类声明"><span>类声明</span></a></h3><p>使用泛型声明类的时候，既可以作用于类本身，也可以作用与类的成员函数</p><p>下面简单实现一个元素同类型的栈结构，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Stack<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">push</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stacn<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果上述只能传递 <code>string</code> 和 <code>number</code> 类型，这时候就可以使用 <code>&lt;T extends xx&gt;</code> 的方式猜实现<strong>约束泛型</strong>，如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/67d212a0-0e17-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>除了上述的形式，泛型更高级的使用如下：</p><p>例如要设计一个函数，这个函数接受两个参数，一个参数为对象，另一个参数为对象上的属性，我们通过这两个参数返回这个属性的值</p><p>这时候就设计到泛型的索引类型和约束类型共同实现</p><h3 id="索引类型、约束类型" tabindex="-1"><a class="header-anchor" href="#索引类型、约束类型"><span>索引类型、约束类型</span></a></h3><p>索引类型 <code>keyof T</code> 把传入的对象的属性类型取出生成一个联合类型，这里的泛型 U 被约束在这个联合类型中，如下所示：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getValue</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述为什么需要使用泛型约束，而不是直接定义第一个参数为 <code>object</code>类型，是因为默认情况 <code>object</code> 指的是<code>{}</code>，而我们接收的对象是各种各样的，一个泛型来表示传入的对象类型，比如 <code>T extends object</code></p><p>使用如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/74fcbd40-0e17-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="多类型约束" tabindex="-1"><a class="header-anchor" href="#多类型约束"><span>多类型约束</span></a></h3><p>例如如下需要实现两个接口的类型约束：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FirstInterface</span> <span class="token punctuation">{</span>
  <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SecondInterface</span> <span class="token punctuation">{</span>
  <span class="token function">doSomethingElse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以创建一个接口继承上述两个接口，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ChildInterface</span> <span class="token keyword">extends</span> <span class="token class-name">FirstInterface</span><span class="token punctuation">,</span> SecondInterface <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正确使用如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Demo<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> ChildInterface<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> genericProperty<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>genericProperty<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>genericProperty <span class="token operator">=</span> genericProperty<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">useT</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>genericProperty<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>genericProperty<span class="token punctuation">.</span><span class="token function">doSomethingElse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过泛型约束就可以达到多类型约束的目的</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景"><span>三、应用场景</span></a></h2><p>通过上面初步的了解，后述在编写 <code>typescript</code> 的时候，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性的时候，这种情况下就可以使用泛型</p><p>灵活的使用泛型定义类型，是掌握<code>typescript</code> 必经之路</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,57),u={href:"https://www.tslang.cn/docs/handbook/generics.html",target:"_blank",rel:"noopener noreferrer"};function d(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[c("https://www.tslang.cn/docs/handbook/generics.html"),o(s)])])])])}const h=a(l,[["render",d],["__file","generic.html.vue"]]),b=JSON.parse('{"path":"/posts/interview/typescript/generic.html","title":"说说你对 TypeScript 中泛型的理解？应用场景？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对 TypeScript 中泛型的理解？应用场景？","footer":"说说你对 TypeScript 中泛型的理解？应用场景？","order":8,"star":8,"date":"2023-03-27T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","typescript"],"tag":["interview","typescript"],"shortTitle":"前端物语|面试物语-说说你对 TypeScript 中泛型的理解？应用场景？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对 TypeScript 中泛型的理解？应用场景？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/typescript/generic.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/typescript/generic.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对 TypeScript 中泛型的理解？应用场景？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对 TypeScript 中泛型的理解？应用场景？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对 TypeScript 中泛型的理解？应用场景？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:published_time","content":"2023-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对 TypeScript 中泛型的理解？应用场景？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/5bb5f1d0-0e17-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/67d212a0-0e17-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/74fcbd40-0e17-11ec-a752-75723a64e8f5.png\\"],\\"datePublished\\":\\"2023-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、使用方式","slug":"二、使用方式","link":"#二、使用方式","children":[{"level":3,"title":"函数声明","slug":"函数声明","link":"#函数声明","children":[]},{"level":3,"title":"接口声明","slug":"接口声明","link":"#接口声明","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]},{"level":3,"title":"类声明","slug":"类声明","link":"#类声明","children":[]},{"level":3,"title":"索引类型、约束类型","slug":"索引类型、约束类型","link":"#索引类型、约束类型","children":[]},{"level":3,"title":"多类型约束","slug":"多类型约束","link":"#多类型约束","children":[]}]},{"level":2,"title":"三、应用场景","slug":"三、应用场景","link":"#三、应用场景","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1204},"filePathRelative":"posts/interview/typescript/generic.md","localizedDate":"2023年3月27日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/5bb5f1d0-0e17-11ec-8e64-91fdec0f05a1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>泛型程序设计（generic programming）是程序设计语言的一种风格或范式</p>\\n<p>泛型允许我们在强类型程序设计语言中编写代码时使用一些以后才指定的类型，在实例化时作为参数指明这些类型在<code>typescript</code>中，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性</p>"}');export{h as comp,b as data};
