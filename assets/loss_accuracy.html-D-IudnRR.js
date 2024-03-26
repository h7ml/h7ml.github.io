import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as i,d as a,e as s,a as e,f as o}from"./app-Cbix2SPG.js";const l={},r=o(`<h1 id="说说-javascript-数字精度丢失的问题-如何解决" tabindex="-1"><a class="header-anchor" href="#说说-javascript-数字精度丢失的问题-如何解决"><span>说说 Javascript 数字精度丢失的问题，如何解决？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、场景复现" tabindex="-1"><a class="header-anchor" href="#一、场景复现"><span>一、场景复现</span></a></h2><p>一个经典的面试题</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为什么是<code>false</code>呢?</p><p>先看下面这个比喻</p><p>比如一个数 1÷3=0.33333333......</p><p>3 会一直无限循环，数学可以表示，但是计算机要存储，方便下次取出来再使用，但 0.333333...... 这个数无限循环，再大的内存它也存不下，所以不能存储一个相对于数学来说的值，只能存储一个近似值，当计算机存储后再取出时就会出现精度丢失问题</p><h2 id="二、浮点数" tabindex="-1"><a class="header-anchor" href="#二、浮点数"><span>二、浮点数</span></a></h2><p>“浮点数”是一种表示数字的标准，整数也可以用浮点数的格式来存储</p><p>我们也可以理解成，浮点数就是小数</p><p>在<code>JavaScript</code>中，现在主流的数值类型是<code>Number</code>，而<code>Number</code>采用的是<code>IEEE754</code>规范中 64 位双精度浮点数编码</p><p>这样的存储结构优点是可以归一化处理整数和小数，节省存储空间</p><p>对于一个整数，可以很轻易转化成十进制或者二进制。但是对于一个浮点数来说，因为小数点的存在，小数点的位置不是固定的。解决思路就是使用科学计数法，这样小数点位置就固定了</p><p>而计算机只能用二进制（0 或 1）表示，二进制转换为科学记数法的公式如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中，<code>a</code>的值为 0 或者 1，e 为小数点移动的位置</p><p>举个例子：</p><p>27.0 转化成二进制为 11011.0 ，科学计数法表示为：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/37007090-86f4-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>前面讲到，<code>javaScript</code>存储方式是双精度浮点数，其长度为 8 个字节，即 64 位比特</p><p>64 位比特又可分为三个部分：</p><ul><li>符号位 S：第 1 位是正负数符号位（sign），0 代表正数，1 代表负数</li><li>指数位 E：中间的 11 位存储指数（exponent），用来表示次方数，可以为正负数。在双精度浮点数中，指数的固定偏移量为 1023</li><li>尾数位 M：最后的 52 位是尾数（mantissa），超出的部分自动进一舍零</li></ul><p>如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>举个例子：</p><p>27.5 转换为二进制 11011.1</p><p>11011.1 转换为科学记数法 <img src="https://www.zhihu.com/equation?tex=1.10111*2^4" alt="[公式]" loading="lazy"></p><p>符号位为 1(正数)，指数位为 4+，1023+4，即 1027</p><p>因为它是十进制的需要转换为二进制，即 <code>10000000011</code>，小数部分为<code>10111</code>，补够 52 位即： 1011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><p>所以 27.5 存储为计算机的二进制标准形式（符号位+指数位+小数部分 (阶数)），既下面所示</p><p>0+10000000011+011 1000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000\`</p><h2 id="二、问题分析" tabindex="-1"><a class="header-anchor" href="#二、问题分析"><span>二、问题分析</span></a></h2><p>再回到问题上</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上面的学习，我们知道，在<code>javascript</code>语言中，0.1 和 0.2 都转化成二进制后再进行运算</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 0.1 和 0.2 都转化成二进制后再进行运算</span>
<span class="token number">0.00011001100110011001100110011001100110011001100110011010</span> <span class="token operator">+</span>
<span class="token number">0.0011001100110011001100110011001100110011001100110011010</span> <span class="token operator">=</span>
<span class="token number">0.0100110011001100110011001100110011001100110011001100111</span>

<span class="token comment">// 转成十进制正好是 0.30000000000000004</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以输出<code>false</code></p><p>再来一个问题，那么为什么<code>x=0.1</code>得到<code>0.1</code>？</p><p>主要是存储二进制时小数点的偏移量最大为 52 位，最多可以表达的位数是<code>2^53=9007199254740992</code>，对应科学计数尾数是 <code>9.007199254740992</code>，这也是 JS 最多能表示的精度</p><p>它的长度是 16，所以可以使用 <code>toPrecision(16)</code> 来做精度运算，超过的精度会自动做凑整处理</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token number">0.10000000000000000555</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 返回 0.1000000000000000，去掉末尾的零后正好为 0.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但看到的 <code>0.1</code> 实际上并不是 <code>0.1</code>。不信你可用更高的精度试试：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token number">0.1</span><span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0.100000000000000005551</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果整数大于 <code>9007199254740992</code> 会出现什么情况呢？</p><p>由于指数位最大值是 1023，所以最大可以表示的整数是 <code>2^1024 - 1</code>，这就是能表示的最大整数。但你并不能这样计算这个数字，因为从 <code>2^1024</code> 开始就变成了 <code>Infinity</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; Math.pow(2, 1023)
8.98846567431158e+307

&gt; Math.pow(2, 1024)
Infinity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么对于 <code>(2^53, 2^63)</code> 之间的数会出现什么情况呢？</p><ul><li><code>(2^53, 2^54)</code> 之间的数会两个选一个，只能精确表示偶数</li><li><code>(2^54, 2^55)</code> 之间的数会四个选一个，只能精确表示 4 个倍数</li><li>... 依次跳过更多 2 的倍数</li></ul><p>要想解决大数的问题你可以引用第三方库 <code>bignumber.js</code>，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生差很多</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法</p><p>因为存储时有位数限制（64 位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0 舍 1 入)，当再转换为十进制时就造成了计算误差</p><h2 id="三、解决方案" tabindex="-1"><a class="header-anchor" href="#三、解决方案"><span>三、解决方案</span></a></h2><p>理论上用有限的空间来存储无限的小数是不可能保证精确的，但我们可以处理一下得到我们期望的结果</p><p>当你拿到 <code>1.4000000000000001</code> 这样的数据要展示时，建议使用 <code>toPrecision</code> 凑整并 <code>parseFloat</code> 转成数字后再显示，如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>parseFloat(1.4000000000000001.toPrecision(12)) === 1.4  // True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>封装成方法就是：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strip</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> precision <span class="token operator">=</span> <span class="token number">12</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">+</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toPrecision</span><span class="token punctuation">(</span>precision<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于运算类操作，如 <code>+-*/</code>，就不能使用 <code>toPrecision</code> 了。正确的做法是把小数转成整数后再运算。以加法为例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 精确加法
 */</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num1Digits <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> num2Digits <span class="token operator">=</span> <span class="token punctuation">(</span>num2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">const</span> baseNum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>num1Digits<span class="token punctuation">,</span> num2Digits<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>num1 <span class="token operator">*</span> baseNum <span class="token operator">+</span> num2 <span class="token operator">*</span> baseNum<span class="token punctuation">)</span> <span class="token operator">/</span> baseNum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后还可以使用第三方库，如<code>Math.js</code>、<code>BigDecimal.js</code></p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,64),d={href:"https://zhuanlan.zhihu.com/p/100353781",target:"_blank",rel:"noopener noreferrer"},u={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"};function m(v,k){const n=p("ExternalLinkIcon");return c(),i("div",null,[r,a("ul",null,[a("li",null,[a("a",d,[s("https://zhuanlan.zhihu.com/p/100353781"),e(n)])]),a("li",null,[a("a",u,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt"),e(n)])])])])}const b=t(l,[["render",m],["__file","loss_accuracy.html.vue"]]),f=JSON.parse('{"path":"/posts/interview/JavaScript/loss_accuracy.html","title":"说说 Javascript 数字精度丢失的问题，如何解决？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说 Javascript 数字精度丢失的问题，如何解决？","footer":"说说 Javascript 数字精度丢失的问题，如何解决？","order":23,"star":23,"date":"2023-04-19T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","JavaScript"],"tag":["interview","JavaScript"],"shortTitle":"前端物语|面试物语-说说 Javascript 数字精度丢失的问题，如何解决？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说 Javascript 数字精度丢失的问题，如何解决？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/JavaScript/loss_accuracy.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/JavaScript/loss_accuracy.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说 Javascript 数字精度丢失的问题，如何解决？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说 Javascript 数字精度丢失的问题，如何解决？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说 Javascript 数字精度丢失的问题，如何解决？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说 Javascript 数字精度丢失的问题，如何解决？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/1b4b1620-86f4-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/37007090-86f4-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/430d0100-86f4-11eb-85f6-6fac77c0c9b3.png\\",\\"https://www.zhihu.com/equation?tex=1.10111%2A2%5E4\\"],\\"datePublished\\":\\"2023-04-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、场景复现","slug":"一、场景复现","link":"#一、场景复现","children":[]},{"level":2,"title":"二、浮点数","slug":"二、浮点数","link":"#二、浮点数","children":[]},{"level":2,"title":"二、问题分析","slug":"二、问题分析","link":"#二、问题分析","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"三、解决方案","slug":"三、解决方案","link":"#三、解决方案","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.43,"words":1629},"filePathRelative":"posts/interview/JavaScript/loss_accuracy.md","localizedDate":"2023年4月19日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/09646a10-86f4-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、场景复现</h2>\\n<p>一个经典的面试题</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token number\\">0.1</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">0.2</span> <span class=\\"token operator\\">===</span> <span class=\\"token number\\">0.3</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// false</span>\\n</code></pre></div>"}');export{b as comp,f as data};