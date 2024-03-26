import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,f as t}from"./app-Cbix2SPG.js";const e={},p=t(`<h1 id="javascript-字符串的常用方法有哪些" tabindex="-1"><a class="header-anchor" href="#javascript-字符串的常用方法有哪些"><span>JavaScript 字符串的常用方法有哪些？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/ceb6ebc0-65c1-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、操作方法" tabindex="-1"><a class="header-anchor" href="#一、操作方法"><span>一、操作方法</span></a></h2><p>我们也可将字符串常用的操作方法归纳为增、删、改、查，需要知道字符串的特点是一旦创建了，就不可变</p><h3 id="增" tabindex="-1"><a class="header-anchor" href="#增"><span>增</span></a></h3><p>这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作</p><p>除了常用<code>+</code>以及<code>\${}</code>进行字符串拼接之外，还可通过<code>concat</code></p><h4 id="concat" tabindex="-1"><a class="header-anchor" href="#concat"><span>concat</span></a></h4><p>用于将一个或多个字符串拼接成一个新字符串</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;hello &#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> stringValue<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删" tabindex="-1"><a class="header-anchor" href="#删"><span>删</span></a></h3><p>这里的删的意思并不是说删除原字符串的内容，而是创建字符串的一个副本，再进行操作</p><p>常见的有：</p><ul><li>slice()</li><li>substr()</li><li>substring()</li></ul><p>这三个方法都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo w&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo w&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;lo worl&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改" tabindex="-1"><a class="header-anchor" href="#改"><span>改</span></a></h3><p>这里改的意思也不是改变原字符串，而是创建字符串的一个副本，再进行操作</p><p>常见的有：</p><ul><li><p>trim()、trimLeft()、trimRight()</p></li><li><p>repeat()</p></li><li><p>padStart()、padEnd()</p></li><li><p>toLowerCase()、 toUpperCase()</p></li></ul><h4 id="trim-、trimleft-、trimright" tabindex="-1"><a class="header-anchor" href="#trim-、trimleft-、trimright"><span>trim()、trimLeft()、trimRight()</span></a></h4><p>删除前、后或前后所有空格符，再返回新的字符串</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39; hello world &#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> trimmedStringValue <span class="token operator">=</span> stringValue<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot; hello world &quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>trimmedStringValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat"><span>repeat()</span></a></h4><p>接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;na &#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> copyResult <span class="token operator">=</span> stringValue<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// na na</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="padend" tabindex="-1"><a class="header-anchor" href="#padend"><span>padEnd()</span></a></h4><p>复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot; foo&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;......foo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tolowercase-、-touppercase" tabindex="-1"><a class="header-anchor" href="#tolowercase-、-touppercase"><span>toLowerCase()、 toUpperCase()</span></a></h3><p>大小写转化</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;HELLO WORLD&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查" tabindex="-1"><a class="header-anchor" href="#查"><span>查</span></a></h3><p>除了通过索引的方式获取字符串的值，还可通过：</p><ul><li><p>chatAt()</p></li><li><p>indexOf()</p></li><li><p>startWith()</p></li><li><p>includes()</p></li></ul><h4 id="charat" tabindex="-1"><a class="header-anchor" href="#charat"><span>charAt()</span></a></h4><p>返回给定索引位置的字符，由传给方法的整数参数指定</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;abcde&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;c&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof"><span>indexOf()</span></a></h4><p>从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> stringValue <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stringValue<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="startwith-、includes" tabindex="-1"><a class="header-anchor" href="#startwith-、includes"><span>startWith()、includes()</span></a></h4><p>从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;foobarbaz&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;qux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、转换方法" tabindex="-1"><a class="header-anchor" href="#二、转换方法"><span>二、转换方法</span></a></h2><h3 id="split" tabindex="-1"><a class="header-anchor" href="#split"><span>split</span></a></h3><p>把字符串按照指定的分割符，拆分成数组中的每一项</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;12+23+34&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [12,23,34]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、模板匹配方法" tabindex="-1"><a class="header-anchor" href="#三、模板匹配方法"><span>三、模板匹配方法</span></a></h2><p>针对正则表达式，字符串设计了几个方法：</p><ul><li>match()</li><li>search()</li><li>replace()</li></ul><h3 id="match" tabindex="-1"><a class="header-anchor" href="#match"><span>match()</span></a></h3><p>接收一个参数，可以是一个正则表达式字符串，也可以是一个<code>RegExp</code>对象，返回数组</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">&#39;cat, bat, sat, fat&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> pattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.at</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> matches <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>matches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;cat&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>search()</span></a></h3><p>接收一个参数，可以是一个正则表达式字符串，也可以是一个<code>RegExp</code>对象，找到则返回匹配索引，否则返回 -1</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">&#39;cat, bat, sat, fat&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> pos <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">at</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replace" tabindex="-1"><a class="header-anchor" href="#replace"><span>replace()</span></a></h3><p>接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">&#39;cat, bat, sat, fat&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;at&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ond&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;cond, bat, sat, fat&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","string_api.html.vue"]]),k=JSON.parse('{"path":"/posts/interview/JavaScript/string_api.html","title":"JavaScript 字符串的常用方法有哪些？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-JavaScript 字符串的常用方法有哪些？","footer":"JavaScript 字符串的常用方法有哪些？","order":25,"star":25,"date":"2023-04-20T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","JavaScript"],"tag":["interview","JavaScript"],"shortTitle":"前端物语|面试物语-JavaScript 字符串的常用方法有哪些？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"JavaScript 字符串的常用方法有哪些？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/JavaScript/string_api.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/JavaScript/string_api.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript 字符串的常用方法有哪些？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-JavaScript 字符串的常用方法有哪些？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"JavaScript 字符串的常用方法有哪些？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 字符串的常用方法有哪些？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/ceb6ebc0-65c1-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、操作方法","slug":"一、操作方法","link":"#一、操作方法","children":[{"level":3,"title":"增","slug":"增","link":"#增","children":[]},{"level":3,"title":"删","slug":"删","link":"#删","children":[]},{"level":3,"title":"改","slug":"改","link":"#改","children":[]},{"level":3,"title":"toLowerCase()、 toUpperCase()","slug":"tolowercase-、-touppercase","link":"#tolowercase-、-touppercase","children":[]},{"level":3,"title":"查","slug":"查","link":"#查","children":[]}]},{"level":2,"title":"二、转换方法","slug":"二、转换方法","link":"#二、转换方法","children":[{"level":3,"title":"split","slug":"split","link":"#split","children":[]}]},{"level":2,"title":"三、模板匹配方法","slug":"三、模板匹配方法","link":"#三、模板匹配方法","children":[{"level":3,"title":"match()","slug":"match","link":"#match","children":[]},{"level":3,"title":"search()","slug":"search","link":"#search","children":[]},{"level":3,"title":"replace()","slug":"replace","link":"#replace","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.2,"words":961},"filePathRelative":"posts/interview/JavaScript/string_api.md","localizedDate":"2023年4月20日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/ceb6ebc0-65c1-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、操作方法</h2>\\n<p>我们也可将字符串常用的操作方法归纳为增、删、改、查，需要知道字符串的特点是一旦创建了，就不可变</p>\\n<h3>增</h3>\\n<p>这里增的意思并不是说直接增添内容，而是创建字符串的一个副本，再进行操作</p>"}');export{d as comp,k as data};