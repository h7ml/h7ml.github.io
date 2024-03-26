import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-Cbix2SPG.js";const t={},l=e(`<h1 id="javascript-regexp-正则表达式对象-数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-regexp-正则表达式对象-数据类型"><span>JavaScript RegExp 正则表达式对象-数据类型</span></a></h1><p>修饰符</p><ul><li>g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。</li><li>i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。</li><li>m：多行模式，表示查找到一行文本末尾时会继续查找。</li><li>y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。</li><li>u：Unicode 模式，启用 Unicode 匹配。</li><li>s：dotAll 模式，表示元字符,匹配任何字符（包括\\n 或\\r）。</li></ul><h2 id="实例属性" tabindex="-1"><a class="header-anchor" href="#实例属性"><span>实例属性</span></a></h2><ul><li>global：布尔值，表示是否设置了 g 标记。</li><li>ignoreCase：布尔值，表示是否设置了 i 标记。</li><li>unicode：布尔值，表示是否设置了 u 标记。</li><li>sticky：布尔值，表示是否设置了 y 标记。</li><li>lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始。</li><li>multiline：布尔值，表示是否设置了 m 标记。</li><li>dotAll：布尔值，表示是否设置了 s 标记。</li><li>source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。</li><li>flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）。</li></ul><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法"><span>方法</span></a></h2><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test"><span>test()</span></a></h3><ul><li>test：检测字符串是否匹配正则 如果匹配 返回 true 不匹配返回 false 表单验证的返回值</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;my name is joth&#39;</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token operator">/</span>is<span class="token operator">/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;you are a ediot&#39;</span><span class="token punctuation">)</span> <span class="token comment">// false</span>

RegExp<span class="token punctuation">.</span>input    <span class="token comment">// 查询的字符串</span>
RegExp<span class="token punctuation">.</span>leftContext <span class="token comment">// 返回表达式之前的字符串</span>
RegExp<span class="token punctuation">.</span>rightContext <span class="token comment">// 返回表达式之后的字符串</span>
RegExp<span class="token punctuation">.</span>lastMatch  <span class="token comment">// 返回与表达式匹配的字符串</span>
RegExp<span class="token punctuation">.</span>lastParen  <span class="token comment">// 返回(.)匹配的捕捉组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macth" tabindex="-1"><a class="header-anchor" href="#macth"><span>macth()</span></a></h3><ul><li>全局 返回所有匹配字符串组成的一个数组。</li><li>非全局 返回匹配到的第一个字符串数组，且会返回该字符串的下标及相关信息。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;my name is mark, my age is 18, my sex is male&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, index: 8, input: &quot;my name is mark, my age is 18, my sex is male&quot;, groups: undefined]</span>

<span class="token comment">// 全局模式</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, &quot;is&quot;, &quot;is&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="exec" tabindex="-1"><a class="header-anchor" href="#exec"><span>exec()</span></a></h3><ul><li>全局模式 有一个自己的 lastIndex 值 引导下次进行 exec 匹配的起始位置。</li><li>非全局模式下进行字符串的匹配 结果和 macth 一样</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;my name is mark, my age is 18, my sex is male&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>

<span class="token comment">// 非全局</span>
reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, index: 8, input: &quot;my name is mark, my age is 18, my sex is male&quot;, groups: undefined]</span>

<span class="token comment">// 全局</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">is</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 0</span>
reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, index: 8, input: &quot;my name is mark, my age is 18, my sex is male&quot;, groups: undefined]</span>
reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 10</span>

reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, index: 24, input: &quot;my name is mark, my age is 18, my sex is male&quot;, groups: undefined]</span>
reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 26</span>

reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;is&quot;, index: 38, input: &quot;my name is mark, my age is 18, my sex is male&quot;, groups: undefined]</span>
reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 40</span>

reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
reg<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则预查询" tabindex="-1"><a class="header-anchor" href="#正则预查询"><span>正则预查询</span></a></h3><p>判断括号内表达式</p><p>返回 ---&gt; 括号外表达式</p><ul><li>正向肯定</li></ul><p>(?=):</p><p>表达式 1(?= 表达式 2)</p><p>返回 --&gt; 前面是表达式 1</p><p>后面是表达式 2</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> path1 <span class="token operator">=</span> <span class="token string">&#39;path/hello.html&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w+(?=.html)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// 前面是数字字母_  后面是 .html</span>
path1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>正向否定</li></ul><p>(?!):</p><p>表达式 1(?!表达式 2)</p><p>返回 ---&gt; 前面是表达式 1</p><p>后面不是表达式 2</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;a,1,b,2,c,3,&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">,(?![a-z]|$)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span> <span class="token comment">// 前面是, 后面不是字母</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a=1,b=2,c=3,&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>反向肯定</li></ul><p>(?&lt;=):</p><p>(?&lt;=表达式 2)表达式 1</p><p>前面是表达式 2</p><p>返回 ---&gt; 后面是表达式 1</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> path1 <span class="token operator">=</span> <span class="token string">&#39;path/hello.html&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=path\\/)\\w+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span> <span class="token comment">// 前面是 path/ 后面是数字字母_</span>
path1<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>反向否定</li></ul><p>(?&lt;!):</p><p>(?&lt;!表达式 2)表达式 1</p><p>前面不是表达式 2</p><p>返回 ----&gt; 表达式 1</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;a,1,b,2,c,3,&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;!\\d),</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span> <span class="token comment">// 前面不是, 后面是,</span>
str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg1<span class="token punctuation">,</span> <span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;a=1,b=2,c=3,&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符"><span>元字符</span></a></h2><ul><li><p>单个字符</p><ul><li>. 匹配除换行外单个的任意字符</li><li>[范围] 匹配单个范围内的字符</li><li>[0-9] 匹配单个 数字</li><li>[^范围] 匹配单个范围内除括号内的字符</li><li>[^0-9] 匹配单个 非数字</li><li>[a-zA-Z0-9_] 匹配单个 数字、字母、下划线_</li><li>\\w 匹配单个 数字、字母、下划线 等价于 [a-zA-Z0-9_]</li><li>\\W 匹配单个 非数字、字母、下划线</li><li>\\d 匹配单个 数字 等价于 [0-9]</li><li>\\D 匹配单个 非数字 等价于 [^0-9]</li></ul></li><li><p>重复字符</p><ul><li>x 代表任意的单个字符</li><li>x? 匹配 0 个或 1 个 x /goog?le/ 要么是 google 要么是 goole</li><li>x+ 匹配最少 1 个字符</li><li>x* 匹配任意个 x 字符</li><li>x{m,n} 匹配至少 m 个，最多 n 个（包括 n</li><li>x{n} 必须匹配 n 个字符</li><li>(xyz)+ 小括号括起来的部分是当做单个字符处理</li></ul></li><li><p>空白字符</p><ul><li>\\s 匹配任意单个空白字符（空格 制表 回车</li><li>\\S 匹配任意单个非空白字符</li><li>\\b 单词边界</li><li>\\B 非单词边界</li></ul></li><li><p>锚字符</p><ul><li>^ 行首匹配/^google/</li><li>$ 行尾匹配/google$/</li></ul></li><li><p>替代字符</p><ul><li>| 或 /google|baidu|bing/</li></ul></li><li><p>转义字符</p><ul><li>\\.</li><li>\\*</li></ul></li><li><p>验证字符串是否存中文</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\u4e00-\\u9fa5]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul>`,44),p=[l];function i(c,o){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","RegExp.html.vue"]]),m=JSON.parse('{"path":"/posts/javascript/types/RegExp.html","title":"JavaScript RegExp 正则表达式对象-数据类型","lang":"zh-CN","frontmatter":{"description":"JavaScript RegExp 正则表达式对象-数据类型 修饰符 g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。 i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。 m：多行模式，表示查找到一行文本末尾时会继续查找。 y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。 u：Uni...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/javascript/types/RegExp.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/javascript/types/RegExp.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"JavaScript RegExp 正则表达式对象-数据类型"}],["meta",{"property":"og:description","content":"JavaScript RegExp 正则表达式对象-数据类型 修饰符 g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。 i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。 m：多行模式，表示查找到一行文本末尾时会继续查找。 y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。 u：Uni..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript RegExp 正则表达式对象-数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\",\\"url\\":\\"https://www.h7ml.cn\\"}]}"]]},"headers":[{"level":2,"title":"实例属性","slug":"实例属性","link":"#实例属性","children":[]},{"level":2,"title":"方法","slug":"方法","link":"#方法","children":[{"level":3,"title":"test()","slug":"test","link":"#test","children":[]},{"level":3,"title":"macth()","slug":"macth","link":"#macth","children":[]},{"level":3,"title":"exec()","slug":"exec","link":"#exec","children":[]},{"level":3,"title":"正则预查询","slug":"正则预查询","link":"#正则预查询","children":[]}]},{"level":2,"title":"元字符","slug":"元字符","link":"#元字符","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.36,"words":1308},"filePathRelative":"posts/javascript/types/RegExp.md","localizedDate":"2023年5月3日","excerpt":"\\n<p>修饰符</p>\\n<ul>\\n<li>g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。</li>\\n<li>i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。</li>\\n<li>m：多行模式，表示查找到一行文本末尾时会继续查找。</li>\\n<li>y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。</li>\\n<li>u：Unicode 模式，启用 Unicode 匹配。</li>\\n<li>s：dotAll 模式，表示元字符,匹配任何字符（包括\\\\n 或\\\\r）。</li>\\n</ul>\\n<h2>实例属性</h2>\\n<ul>\\n<li>global：布尔值，表示是否设置了 g 标记。</li>\\n<li>ignoreCase：布尔值，表示是否设置了 i 标记。</li>\\n<li>unicode：布尔值，表示是否设置了 u 标记。</li>\\n<li>sticky：布尔值，表示是否设置了 y 标记。</li>\\n<li>lastIndex：整数，表示在源字符串中下一次搜索的开始位置，始终从 0 开始。</li>\\n<li>multiline：布尔值，表示是否设置了 m 标记。</li>\\n<li>dotAll：布尔值，表示是否设置了 s 标记。</li>\\n<li>source：正则表达式的字面量字符串（不是传给构造函数的模式字符串），没有开头和结尾的斜杠。</li>\\n<li>flags：正则表达式的标记字符串。始终以字面量而非传入构造函数的字符串模式形式返回（没有前后斜杠）。</li>\\n</ul>","autoDesc":true}');export{d as comp,m as data};