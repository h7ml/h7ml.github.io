import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,f as e}from"./app-Cbix2SPG.js";const t={},p=e(`<h1 id="和-区别-分别在什么情况使用" tabindex="-1"><a class="header-anchor" href="#和-区别-分别在什么情况使用"><span>== 和 ===区别，分别在什么情况使用</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/51b208f0-68df-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、等于操作符" tabindex="-1"><a class="header-anchor" href="#一、等于操作符"><span>一、等于操作符</span></a></h2><p>等于操作符用两个等于号（ == ）表示，如果操作数相等，则会返回 <code>true</code></p><p>前面文章，我们提到在<code>JavaScript</code>中存在隐式转换。等于操作符（==）在比较中会先进行类型转换，再确定操作数是否相等</p><p>遵循以下规则：</p><p>如果任一操作数是布尔值，则将其转换为数值再比较是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">==</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个操作数是对象，另一个操作数不是，则调用对象的 <code>valueOf()</code>方法取得其原始值，再根据前面的规则进行比较</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result1 <span class="token operator">=</span> obj <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>null</code>和<code>undefined</code>相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有任一操作数是 <code>NaN</code> ，则相等操作符返回 <code>false</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">NaN</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象，则相等操作符返回<code>true</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>let obj1 = {name:&quot;xxx&quot;}
let obj2 = {name:&quot;xxx&quot;}
let result1 = (obj1 == obj2 ); // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面进一步做个小结：</p><ul><li><p>两个都为简单类型，字符串和布尔值都会转换成数值，再比较</p></li><li><p>简单类型与引用类型比较，对象转化成其原始类型的值，再比较</p></li><li><p>两个都为引用类型，则比较它们是否指向同一个对象</p></li><li><p>null 和 undefined 相等</p></li><li><p>存在 NaN 则返回 false</p></li></ul><h2 id="二、全等操作符" tabindex="-1"><a class="header-anchor" href="#二、全等操作符"><span>二、全等操作符</span></a></h2><p>全等操作符由 3 个等于号（ === ）表示，只有两个操作数在不转换的前提下相等才返回 <code>true</code>。即类型相同，值也需相同</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// false，不相等，因为数据类型不同</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true，相等，因为数据类型相同值也相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>undefined</code> 和 <code>null</code> 与自身严格相等</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别"><span>三、区别</span></a></h2><p>相等操作符（==）会做类型转换，再进行值的比较，全等运算符不会做类型转换</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token string">&#39;55&#39;</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// false，不相等，因为数据类型不同</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token number">55</span> <span class="token operator">===</span> <span class="token number">55</span><span class="token punctuation">;</span> <span class="token comment">// true，相等，因为数据类型相同值也相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>null</code> 和 <code>undefined</code> 比较，相等操作符（==）为<code>true</code>，全等为<code>false</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>相等运算符隐藏的类型转换，会带来一些违反直觉的结果</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&#39;&#39;</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token number">0</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token boolean">false</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token string">&#39; \\t\\r\\n&#39;</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在比较<code>null</code>的情况的时候，我们一般使用相等操作符<code>==</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等同于下面写法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> obj<span class="token punctuation">.</span>x <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用相等操作符（==）的写法明显更加简洁了</p><p>所以，除了在比较对象属性为<code>null</code>或者<code>undefined</code>的情况下，我们可以使用相等操作符（<mark>），其他情况建议一律使用全等操作符（</mark>=）</p>`,39),o=[p];function l(c,i){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file"," ____.html.vue"]]),k=JSON.parse('{"path":"/posts/interview/JavaScript/%20____.html","title":"== 和 ===区别，分别在什么情况使用","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-== 和 ===区别，分别在什么情况使用","footer":"== 和 ===区别，分别在什么情况使用","order":17,"star":17,"date":"2023-04-17T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","JavaScript"],"tag":["interview","JavaScript"],"shortTitle":"前端物语|面试物语-== 和 ===区别，分别在什么情况使用","isOriginal":false,"head":[["meta",{"name":"keywords","content":"== 和 ===区别，分别在什么情况使用"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/JavaScript/%20____.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/JavaScript/%20____.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"== 和 ===区别，分别在什么情况使用"}],["meta",{"property":"og:description","content":"前端物语|面试物语-== 和 ===区别，分别在什么情况使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"== 和 ===区别，分别在什么情况使用"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"== 和 ===区别，分别在什么情况使用\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/51b208f0-68df-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、等于操作符","slug":"一、等于操作符","link":"#一、等于操作符","children":[]},{"level":2,"title":"二、全等操作符","slug":"二、全等操作符","link":"#二、全等操作符","children":[]},{"level":2,"title":"三、区别","slug":"三、区别","link":"#三、区别","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.03,"words":910},"filePathRelative":"posts/interview/JavaScript/== _===.md","localizedDate":"2023年4月17日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/51b208f0-68df-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、等于操作符</h2>\\n<p>等于操作符用两个等于号（ == ）表示，如果操作数相等，则会返回 <code>true</code></p>\\n<p>前面文章，我们提到在<code>JavaScript</code>中存在隐式转换。等于操作符（==）在比较中会先进行类型转换，再确定操作数是否相等</p>"}');export{u as comp,k as data};