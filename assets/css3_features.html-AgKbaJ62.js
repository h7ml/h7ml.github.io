import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as s,c as l,d as e,e as n,a as i,f as r}from"./app-Cbix2SPG.js";const c={},d=r(`<h1 id="css3-新增了哪些新特性" tabindex="-1"><a class="header-anchor" href="#css3-新增了哪些新特性"><span>CSS3 新增了哪些新特性？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/d58f6df0-9b5e-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p><code>css</code>，即层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观</p><p><code>css3</code>是<code>css</code>的最新标准，是向后兼容的，<code>CSS1/2</code>的特性在<code>CSS3</code> 里都是可以使用的</p><p>而<code>CSS3</code> 也增加了很多新特性，为开发带来了更佳的开发体验</p><h2 id="二、选择器" tabindex="-1"><a class="header-anchor" href="#二、选择器"><span>二、选择器</span></a></h2><p><code>css3</code>中新增了一些选择器，主要为如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/e368cf20-9b5e-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、新样式" tabindex="-1"><a class="header-anchor" href="#三、新样式"><span>三、新样式</span></a></h2><h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h3><p><code>css3</code>新增了三个边框属性，分别是：</p><ul><li><p>border-radius：创建圆角边框</p></li><li><p>box-shadow：为元素添加阴影</p></li><li><p>border-image：使用图片来绘制边框</p></li></ul><h4 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow"><span>box-shadow</span></a></h4><p>设置元素阴影，设置属性如下：</p><ul><li>水平阴影</li><li>垂直阴影</li><li>模糊距离(虚实)</li><li>阴影尺寸(影子大小)</li><li>阴影颜色</li><li>内/外阴影</li></ul><p>其中水平阴影和垂直阴影是必须设置的</p><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>新增了几个关于背景的属性，分别是<code>background-clip</code>、<code>background-origin</code>、<code>background-size</code>和<code>background-break</code></p><h4 id="background-clip" tabindex="-1"><a class="header-anchor" href="#background-clip"><span>background-clip</span></a></h4><p>用于确定背景画区，有以下几种可能的属性：</p><ul><li>background-clip: border-box; 背景从 border 开始显示</li><li>background-clip: padding-box; 背景从 padding 开始显示</li><li>background-clip: content-box; 背景显 content 区域开始显示</li><li>background-clip: no-clip; 默认属性，等同于 border-box</li></ul><p>通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围</p><h4 id="background-origin" tabindex="-1"><a class="header-anchor" href="#background-origin"><span>background-origin</span></a></h4><p>当我们设置背景图片时，图片是会以左上角对齐，但是是以<code>border</code>的左上角对齐还是以<code>padding</code>的左上角或者<code>content</code>的左上角对齐? <code>border-origin</code>正是用来设置这个的</p><ul><li>background-origin: border-box; 从 border 开始计算 background-position</li><li>background-origin: padding-box; 从 padding 开始计算 background-position</li><li>background-origin: content-box; 从 content 开始计算 background-position</li></ul><p>默认情况是<code>padding-box</code>，即以<code>padding</code>的左上角为原点</p><h4 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size"><span>background-size</span></a></h4><p>background-size 属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：</p><ul><li>background-size: contain; 缩小图片以适合元素（维持像素长宽比）</li><li>background-size: cover; 扩展元素以填补元素（维持像素长宽比）</li><li>background-size: 100px 100px; 缩小图片至指定的大小</li><li>background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸</li></ul><h3 id="background-break" tabindex="-1"><a class="header-anchor" href="#background-break"><span>background-break</span></a></h3><p>元素可以被分成几个独立的盒子（如使内联元素 span 跨越多行），<code>background-break</code> 属性用来控制背景怎样在这些不同的盒子中显示</p><ul><li>background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）</li><li>background-break: bounding-box; 把盒之间的距离计算在内；</li><li>background-break: each-box; 为每个盒子单独重绘背景</li></ul><h3 id="文字" tabindex="-1"><a class="header-anchor" href="#文字"><span>文字</span></a></h3><h3 id="word-wrap" tabindex="-1"><a class="header-anchor" href="#word-wrap"><span>word-wrap</span></a></h3><p>语法：<code>word-wrap: normal|break-word</code></p><ul><li>normal：使用浏览器默认的换行</li><li>break-all：允许在单词内换行</li></ul><h3 id="text-overflow" tabindex="-1"><a class="header-anchor" href="#text-overflow"><span>text-overflow</span></a></h3><p><code>text-overflow</code>设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：</p><ul><li>clip：修剪文本</li><li>ellipsis：显示省略符号来代表被修剪的文本</li></ul><h3 id="text-shadow" tabindex="-1"><a class="header-anchor" href="#text-shadow"><span>text-shadow</span></a></h3><p><code>text-shadow</code>可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色</p><h3 id="text-decoration" tabindex="-1"><a class="header-anchor" href="#text-decoration"><span>text-decoration</span></a></h3><p>CSS3 里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：</p><ul><li><p>text-fill-color: 设置文字内部填充颜色</p></li><li><p>text-stroke-color: 设置文字边界填充颜色</p></li><li><p>text-stroke-width: 设置文字边界宽度</p></li></ul><h3 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h3><p><code>css3</code>新增了新的颜色表示方式<code>rgba</code>与<code>hsla</code></p><ul><li>rgba 分为两部分，rgb 为颜色值，a 为透明度</li><li>hala 分为四部分，h 为色相，s 为饱和度，l 为亮度，a 为透明度</li></ul><h2 id="四、transition-过渡" tabindex="-1"><a class="header-anchor" href="#四、transition-过渡"><span>四、transition 过渡</span></a></h2><p><code>transition</code>属性可以被指定为一个或多个<code>CSS</code>属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：</p><ul><li>过度效果</li><li>持续时间</li></ul><p>语法如下：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code>transition： CSS属性，花费时间，效果曲线<span class="token punctuation">(</span>默认ease<span class="token punctuation">)</span>，延迟时间<span class="token punctuation">(</span>默认0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面为简写模式，也可以分开写各个属性</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">transition-property</span><span class="token punctuation">:</span> width<span class="token punctuation">;</span>
<span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>
<span class="token property">transition-delay</span><span class="token punctuation">:</span> 2s<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、transform-转换" tabindex="-1"><a class="header-anchor" href="#五、transform-转换"><span>五、transform 转换</span></a></h3><p><code>transform</code>属性允许你旋转，缩放，倾斜或平移给定元素</p><p><code>transform-origin</code>：转换元素的位置（围绕那个点进行转换），默认值为<code>(x,y,z):(50%,50%,0)</code></p><p>使用方式：</p><ul><li>transform: translate(120px, 50%)：位移</li><li>transform: scale(2, 0.5)：缩放</li><li>transform: rotate(0.5turn)：旋转</li><li>transform: skew(30deg, 20deg)：倾斜</li></ul><h3 id="六、animation-动画" tabindex="-1"><a class="header-anchor" href="#六、animation-动画"><span>六、animation 动画</span></a></h3><p>动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬</p><p>animation 也有很多的属性</p><ul><li>animation-name：动画名称</li><li>animation-duration：动画持续时间</li><li>animation-timing-function：动画时间函数</li><li>animation-delay：动画延迟时间</li><li>animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为 infinite，意思是无限循环</li><li>animation-direction：动画执行方向</li><li>animation-paly-state：动画播放状态</li><li>animation-fill-mode：动画填充模式</li></ul><h2 id="七、渐变" tabindex="-1"><a class="header-anchor" href="#七、渐变"><span>七、渐变</span></a></h2><p>颜色渐变是指在两个颜色之间平稳的过渡，<code>css3</code>渐变包括</p><ul><li>linear-gradient：线性渐变</li></ul><blockquote><p>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</p></blockquote><ul><li>radial-gradient：径向渐变</li></ul><blockquote><p>linear-gradient(0deg, red, green);</p></blockquote><h2 id="八、其他" tabindex="-1"><a class="header-anchor" href="#八、其他"><span>八、其他</span></a></h2><p>关于<code>css3</code>其他的新特性还包括<code>flex</code>弹性布局、<code>Grid</code>栅格布局，这两个布局在以前就已经讲过，这里就不再展示</p><p>除此之外，还包括多列布局、媒体查询、混合模式等等......</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,74),p={href:"https://juejin.cn/post/6844903518520901639#heading-1",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.w3school.com.cn/css/index.asp",target:"_blank",rel:"noopener noreferrer"};function u(g,b){const a=o("ExternalLinkIcon");return s(),l("div",null,[d,e("ul",null,[e("li",null,[e("p",null,[e("a",p,[n("https://juejin.cn/post/6844903518520901639#heading-1"),i(a)])])]),e("li",null,[e("p",null,[e("a",h,[n("https://www.w3school.com.cn/css/index.asp"),i(a)])])])])])}const f=t(c,[["render",u],["__file","css3_features.html.vue"]]),x=JSON.parse(`{"path":"/posts/interview/css/css3_features.html","title":"CSS3 新增了哪些新特性？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-CSS3 新增了哪些新特性？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>CSS3 新增了哪些新特性？","order":4,"star":4,"date":"2023-02-26T05:07:54.428Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","css"],"tag":["interview","css"],"shortTitle":"前端物语|面试物语-CSS3 新增了哪些新特性？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"CSS3 新增了哪些新特性？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/css/css3_features.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/css/css3_features.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"CSS3 新增了哪些新特性？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-CSS3 新增了哪些新特性？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"CSS3 新增了哪些新特性？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:published_time","content":"2023-02-26T05:07:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS3 新增了哪些新特性？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/d58f6df0-9b5e-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/e368cf20-9b5e-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-02-26T05:07:54.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、选择器","slug":"二、选择器","link":"#二、选择器","children":[]},{"level":2,"title":"三、新样式","slug":"三、新样式","link":"#三、新样式","children":[{"level":3,"title":"边框","slug":"边框","link":"#边框","children":[]},{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"background-break","slug":"background-break","link":"#background-break","children":[]},{"level":3,"title":"文字","slug":"文字","link":"#文字","children":[]},{"level":3,"title":"word-wrap","slug":"word-wrap","link":"#word-wrap","children":[]},{"level":3,"title":"text-overflow","slug":"text-overflow","link":"#text-overflow","children":[]},{"level":3,"title":"text-shadow","slug":"text-shadow","link":"#text-shadow","children":[]},{"level":3,"title":"text-decoration","slug":"text-decoration","link":"#text-decoration","children":[]},{"level":3,"title":"颜色","slug":"颜色","link":"#颜色","children":[]}]},{"level":2,"title":"四、transition 过渡","slug":"四、transition-过渡","link":"#四、transition-过渡","children":[{"level":3,"title":"五、transform 转换","slug":"五、transform-转换","link":"#五、transform-转换","children":[]},{"level":3,"title":"六、animation 动画","slug":"六、animation-动画","link":"#六、animation-动画","children":[]}]},{"level":2,"title":"七、渐变","slug":"七、渐变","link":"#七、渐变","children":[]},{"level":2,"title":"八、其他","slug":"八、其他","link":"#八、其他","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.16,"words":1549},"filePathRelative":"posts/interview/css/css3_features.md","localizedDate":"2023年2月26日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/d58f6df0-9b5e-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p><code>css</code>，即层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观</p>\\n<p><code>css3</code>是<code>css</code>的最新标准，是向后兼容的，<code>CSS1/2</code>的特性在<code>CSS3</code> 里都是可以使用的</p>"}`);export{f as comp,x as data};
