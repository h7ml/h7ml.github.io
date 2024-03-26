import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const p={},c=t(`<h1 id="javascript-math-数学对象-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-math-数学对象-数据类型"><span>JavaScript Math 数学对象-数据类型</span></a></h1><h2 id="最大最小值" tabindex="-1"><a class="header-anchor" href="#最大最小值"><span>最大最小值</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最大值</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最小值</span>
Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最大值</span>
Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>Math<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 最小值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="舍入" tabindex="-1"><a class="header-anchor" href="#舍入"><span>舍入</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">1.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向上舍入</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">1.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向下舍入</span>
Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.49</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 四舍五入（只看小数点后一位数）</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 随机一个 [A - B] 之间的随机数</span>
<span class="token keyword">function</span> <span class="token function">selectFrom</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">B</span> <span class="token operator">-</span> <span class="token constant">A</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">selectFrom</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 生成 2-9（包括 2 和 9）的随机数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法"><span>其他方法</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2.4</span><span class="token punctuation">;</span>
Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 绝对值</span>
Math<span class="token punctuation">.</span><span class="token function">exp</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 返回 Math.E 的 num 次幂</span>
Math<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 自然对数</span>
Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// num 的 p次幂</span>
Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// num的平方根</span>
Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 表示数学中的 π 代表的是 180 的弧度</span>
<span class="token number">1</span>弧度 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span>；
<span class="token operator">--</span><span class="token operator">--</span>下面的方法传入的值要是弧度，不能传数字<span class="token operator">--</span><span class="token operator">--</span>
Math<span class="token punctuation">.</span><span class="token function">acos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// x 的反余弦值</span>
Math<span class="token punctuation">.</span><span class="token function">asin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// x 的反正弦值</span>
Math<span class="token punctuation">.</span><span class="token function">atan</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 反正切值</span>
Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token comment">// y/x 的反正切值</span>
Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token comment">// x 的余弦值</span>
Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token comment">// x 的正弦值</span>
Math<span class="token punctuation">.</span><span class="token function">tan</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token comment">// x 的正切值</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1  计算一个数的立方根</span>
Math<span class="token punctuation">.</span><span class="token function">cbrt</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 会对非数值进行转换</span>
Math<span class="token punctuation">.</span><span class="token function">imul</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2 大多数情况下，与 a*b 相同</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="es6-扩展方法" tabindex="-1"><a class="header-anchor" href="#es6-扩展方法"><span>ES6 扩展方法</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// Math.trunc 方法用于去除一个数的小数部分，返回整数部分。</span>
<span class="token comment">// 隐式调用 Number 方法</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">4.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -4</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token string">&#39;123.456&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
<span class="token comment">// Math.sign 方法用来判断一个数到底是正数、负数、还是零。</span>
<span class="token comment">/* 参数为正数，返回 +1；
 * 参数为负数，返回 -1；
 * 参数为 0，返回 0；
 * 参数为 -0，返回 -0;
 * 其他值，返回 NaN。
 */</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +1</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -0</span>
Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[c];function e(u,l){return s(),a("div",null,o)}const r=n(p,[["render",e],["__file","Math.html.vue"]]),m=JSON.parse('{"path":"/posts/javascript/types/Math.html","title":"JavaScript Math 数学对象-数据类型","lang":"zh-CN","frontmatter":{"description":"JavaScript Math 数学对象-数据类型 最大最小值 舍入 其他方法 ES6 扩展方法","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/types/Math.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/types/Math.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript Math 数学对象-数据类型"}],["meta",{"property":"og:description","content":"JavaScript Math 数学对象-数据类型 最大最小值 舍入 其他方法 ES6 扩展方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript Math 数学对象-数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"最大最小值","slug":"最大最小值","link":"#最大最小值","children":[]},{"level":2,"title":"舍入","slug":"舍入","link":"#舍入","children":[]},{"level":2,"title":"其他方法","slug":"其他方法","link":"#其他方法","children":[]},{"level":2,"title":"ES6 扩展方法","slug":"es6-扩展方法","link":"#es6-扩展方法","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"posts/javascript/types/Math.md","localizedDate":"2023年5月3日","excerpt":"\\n<h2>最大最小值</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>Math<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">max</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 最大值</span>\\nMath<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">min</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 最小值</span>\\nMath<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">max</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span>Math<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 最大值</span>\\nMath<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">min</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">apply</span><span class=\\"token punctuation\\">(</span>Math<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 最小值</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,m as data};
