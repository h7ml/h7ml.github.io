import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as l,d as n,e as a,a as t,f as i}from"./app-Cbix2SPG.js";const o={},u=i(`<h1 id="谈谈你对-bfc-的理解" tabindex="-1"><a class="header-anchor" href="#谈谈你对-bfc-的理解"><span>谈谈你对 BFC 的理解？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/c3d68290-9511-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>我们在页面布局的时候，经常出现以下情况：</p><ul><li>这个元素高度怎么没了？</li><li>这两栏布局怎么没法自适应？</li><li>这两个元素的间距怎么有点奇怪的样子？</li><li>......</li></ul><p>原因是元素之间相互的影响，导致了意料之外的情况，这里就涉及到<code>BFC</code>概念</p><p><code>BFC</code>（Block Formatting Context），即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：</p><ul><li>内部的盒子会在垂直方向上一个接一个的放置</li><li>对于同一个 BFC 的俩个相邻的盒子的 margin 会发生重叠，与方向无关。</li><li>每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此</li><li>BFC 的区域不会与 float 的元素区域重叠</li><li>计算 BFC 的高度时，浮动子元素也参与计算</li><li>BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然</li></ul><p><code>BFC</code>目的是形成一个相对于外界完全独立的空间，让内部的子元素不会影响到外部的元素</p><h2 id="二、触发条件" tabindex="-1"><a class="header-anchor" href="#二、触发条件"><span>二、触发条件</span></a></h2><p>触发<code>BFC</code>的条件包含不限于：</p><ul><li>根元素，即 HTML 元素</li><li>浮动元素：float 值为 left、right</li><li>overflow 值不为 visible，为 auto、scroll、hidden</li><li>display 的值为 inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid</li><li>position 的值为 absolute 或 fixed</li></ul><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景"><span>三、应用场景</span></a></h2><p>利用<code>BFC</code>的特性，我们将<code>BFC</code>应用在以下场景：</p><h4 id="防止-margin-重叠-塌陷" tabindex="-1"><a class="header-anchor" href="#防止-margin-重叠-塌陷"><span>防止 margin 重叠（塌陷）</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hehe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面显示如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/d0ce3650-9511-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>两个<code>p</code>元素之间的距离为<code>100px</code>，发生了<code>margin</code>重叠（塌陷），以最大的为准，如果第一个 P 的<code>margin</code>为 80 的话，两个 P 之间的距离还是 100，以最大的为准。</p><p>前面讲到，同一个<code>BFC</code>的俩个相邻的盒子的<code>margin</code>会发生重叠</p><p>可以在<code>p</code>外面包裹一层容器，并触发这个容器生成一个<code>BFC</code>，那么两个<code>p</code>就不属于同一个<code>BFC</code>，则不会出现<code>margin</code>重叠</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span> // 新的BFC
  <span class="token punctuation">}</span>
  <span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Haha<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Hehe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，边距则不会重叠：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/dec44740-9511-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="清除内部浮动" tabindex="-1"><a class="header-anchor" href="#清除内部浮动"><span>清除内部浮动</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.par</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #fcc<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 5px solid #f66<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>par<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>child<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面显示如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/ec5d4410-9511-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而<code>BFC</code>在计算高度时，浮动元素也会参与，所以我们可以触发<code>.par</code>元素生成<code>BFC</code>，则内部浮动元素计算高度时候也会计算</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.par</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/f6487b20-9511-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="自适应多栏布局" tabindex="-1"><a class="header-anchor" href="#自适应多栏布局"><span>自适应多栏布局</span></a></h4><p>这里举个两栏的布局</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.aside</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #f66<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.main</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> #fcc<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aside<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/ffb95210-9511-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>前面讲到，每个元素的左外边距与包含块的左边界相接触</p><p>因此，虽然<code>.aslide</code>为浮动元素，但是<code>main</code>的左边依然会与包含块的左边相接触</p><p>而<code>BFC</code>的区域不会与浮动盒子重叠</p><p>所以我们可以通过触发<code>main</code>生成<code>BFC</code>，以此适应两栏布局</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，新的<code>BFC</code>不会与浮动的<code>.aside</code>元素重叠。因此会根据包含块的宽度，和<code>.aside</code>的宽度，自动变窄</p><p>效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/0a5f2690-9512-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>可以看到上面几个案例，都体现了<code>BFC</code>实际就是页面一个独立的容器，里面的子元素不影响外面的元素</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,48),d={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md",target:"_blank",rel:"noopener noreferrer"};function k(g,m){const s=p("ExternalLinkIcon");return c(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context"),t(s)])]),n("li",null,[n("a",r,[a("https://github.com/zuopf769/notebook/blob/master/fe/BFC原理剖析/README.md"),t(s)])])])])}const h=e(o,[["render",k],["__file","BFC.html.vue"]]),f=JSON.parse('{"path":"/posts/interview/css/BFC.html","title":"谈谈你对 BFC 的理解？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-谈谈你对 BFC 的理解？","footer":"谈谈你对 BFC 的理解？","order":18,"star":18,"date":"2023-04-03T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","css"],"tag":["interview","css"],"shortTitle":"前端物语|面试物语-谈谈你对 BFC 的理解？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"谈谈你对 BFC 的理解？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/css/BFC.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/css/BFC.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"谈谈你对 BFC 的理解？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-谈谈你对 BFC 的理解？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"谈谈你对 BFC 的理解？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2023-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谈谈你对 BFC 的理解？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/c3d68290-9511-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/d0ce3650-9511-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/dec44740-9511-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/ec5d4410-9511-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/f6487b20-9511-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/ffb95210-9511-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/0a5f2690-9512-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、触发条件","slug":"二、触发条件","link":"#二、触发条件","children":[]},{"level":2,"title":"三、应用场景","slug":"三、应用场景","link":"#三、应用场景","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.68,"words":1105},"filePathRelative":"posts/interview/css/BFC.md","localizedDate":"2023年4月3日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/c3d68290-9511-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>我们在页面布局的时候，经常出现以下情况：</p>\\n<ul>\\n<li>这个元素高度怎么没了？</li>\\n<li>这两栏布局怎么没法自适应？</li>\\n<li>这两个元素的间距怎么有点奇怪的样子？</li>\\n<li>......</li>\\n</ul>"}');export{h as comp,f as data};