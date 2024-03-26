import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,d as n,e as s,a as e,f as l}from"./app-Cbix2SPG.js";const i={},r=l(`<h1 id="与-webpack-类似的工具还有哪些-区别" tabindex="-1"><a class="header-anchor" href="#与-webpack-类似的工具还有哪些-区别"><span>与 webpack 类似的工具还有哪些？区别？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、模块化工具" tabindex="-1"><a class="header-anchor" href="#一、模块化工具"><span>一、模块化工具</span></a></h2><p>模块化是一种处理复杂系统分解为更好的可管理模块的方式</p><p>可以用来分割，组织和打包应用。每个模块完成一个特定的子功能，所有的模块按某种方法组装起来，成为一个整体(<code>bundle</code>)</p><p>在前端领域中，并非只有<code>webpack</code>这一款优秀的模块打包工具，还有其他类似的工具，例如<code>Rollup</code>、<code>Parcel</code>、<code>snowpack</code>，以及最近风头无两的<code>Vite</code></p><p>通过这些模块打包工具，能够提高我们的开发效率，减少开发成本</p><p>这里没有提及<code>gulp</code>、<code>grunt</code>是因为它们只是定义为构建工具，不能类比</p><h3 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span>Rollup</span></a></h3><p><code>Rollup</code> 是一款 <code>ES Modules</code> 打包器，从作用上来看，<code>Rollup</code> 与 <code>Webpack</code> 非常类似。不过相比于 <code>Webpack</code>，<code>Rollup</code>要小巧的多</p><p>现在很多我们熟知的库都都使用它进行打包，比如：<code>Vue</code>、<code>React</code>和<code>three.js</code>等</p><p>举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ./src/messages.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">hi</span><span class="token operator">:</span> <span class="token string">&#39;Hey Guys, I am zce~&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ./src/logger.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------- INFO ----------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--------------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;---------- ERROR ----------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;---------------------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// ./src/index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./logger&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> messages <span class="token keyword">from</span> <span class="token string">&#39;./messages&#39;</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span>messages<span class="token punctuation">.</span>hi<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过<code>rollup</code>进行打包</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npx rollup <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>index<span class="token punctuation">.</span>js <span class="token operator">--</span>file <span class="token punctuation">.</span><span class="token operator">/</span>dist<span class="token operator">/</span>bundle<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打包结果如下图<img src="https://static.h7ml.cn/vitepress/assets/images/interview/8fe07830-b143-11eb-85f6-6fac77c0c9b3.png" alt="" loading="lazy"></p><p>可以看到，代码非常简洁，完成不像<code>webpack</code>那样存在大量引导代码和模块函数</p><p>并且<code>error</code>方法由于没有被使用，输出的结果中并无<code>error</code>方法，可以看到，<code>rollup</code>默认开始<code>Tree-shaking</code> 优化输出结果</p><p>因此，可以看到<code>Rollup</code>的优点：</p><ul><li>代码效率更简洁、效率更高</li><li>默认支持 Tree-shaking</li></ul><p>但缺点也十分明显，加载其他类型的资源文件或者支持导入 <code>CommonJS</code> 模块，又或是编译 <code>ES</code> 新特性，这些额外的需求 <code>Rollup</code>需要使用插件去完成</p><p>综合来看，<code>rollup</code>并不适合开发应用使用，因为需要使用第三方模块，而目前第三方模块大多数使用<code>CommonJs</code>方式导出成员，并且<code>rollup</code>不支持<code>HMR</code>，使开发效率降低</p><p>但是在用于打包<code>JavaScript</code> 库时，<code>rollup</code>比 <code>webpack</code> 更有优势，因为其打包出来的代码更小、更快，其存在的缺点可以忽略</p><h3 id="parcel" tabindex="-1"><a class="header-anchor" href="#parcel"><span>Parcel</span></a></h3><p>Parcel ，是一款完全零配置的前端打包器，它提供了 “傻瓜式” 的使用体验，只需了解简单的命令，就能构建前端应用程序</p><p><code>Parcel</code> 跟 <code>Webpack</code> 一样都支持以任意类型文件作为打包入口，但建议使用<code>HTML</code>文件作为入口，该<code>HTML</code>文件像平时一样正常编写代码、引用资源。如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token punctuation">.</span><span class="token operator">/</span>src<span class="token operator">/</span>index<span class="token punctuation">.</span>html <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Parcel Tutorials<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;main.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js 文件通过<code>ES Moudle</code>方法导入其他模块成员</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// ./src/main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./logger&#39;</span><span class="token punctuation">;</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello parcel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ./src/logger.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;---------- INFO ----------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行之后，使用命令打包</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>npx parcel src/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行命令后，<code>Parcel</code>不仅打包了应用，同时也启动了一个开发服务器，跟<code>webpack Dev Server</code>一样</p><p>跟<code>webpack</code>类似，也支持模块热替换，但用法更简单</p><p>同时，<code>Parcel</code>有个十分好用的功能：支持自动安装依赖，像<code>webpack</code>开发阶段突然使用安装某个第三方依赖，必然会终止<code>dev server</code>然后安装再启动。而<code>Parcel</code>则免了这繁琐的工作流程</p><p>同时，<code>Parcel</code>能够零配置加载其他类型的资源文件，无须像<code>webpack</code>那样配置对应的<code>loader</code></p><p>打包命令如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>npx parcel src/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于打包过程是多进程同时工作，构建速度会比<code>Webpack</code> 快，输出文件也会被压缩，并且样式代码也会被单独提取到单个文件中</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/ec17e7a0-b1a2-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以感受到，<code>Parcel</code>给开发者一种很大的自由度，只管去实现业务代码，其他事情用<code>Parcel</code>解决</p><h3 id="snowpack" tabindex="-1"><a class="header-anchor" href="#snowpack"><span>Snowpack</span></a></h3><p>Snowpack，是一种闪电般快速的前端构建工具，专为现代<code>Web</code>设计，较复杂的打包工具（如<code>Webpack</code>或<code>Parcel</code>）的替代方案，利用<code>JavaScript</code>的本机模块系统，避免不必要的工作并保持流畅的开发体验</p><p>开发阶段，每次保存单个文件时，<code>Webpack</code>和<code>Parcel</code>都需要重新构建和重新打包应用程序的整个<code>bundle</code>。而<code>Snowpack</code>为你的应用程序每个文件构建一次，就可以永久缓存，文件更改时，<code>Snowpack</code>会重新构建该单个文件</p><p>下图给出<code>webpack</code>与<code>snowpack</code>打包区别：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/79197830-b1a3-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在重新构建每次变更时没有任何的时间浪费，只需要在浏览器中进行 HMR 更新</p><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h3><p>vite ，是一种新型前端构建工具，能够显著提升前端开发体验</p><p>它主要由两部分组成：</p><ul><li>一个开发服务器，它基于 原生 ES 模块 提供了丰富的内建功能，如速度快到惊人的 [模块热更新 HMR</li><li>一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可以输出用于生产环境的优化过的静态资源</li></ul><p>其作用类似<code>webpack</code>+ <code>webpack-dev-server</code>，其特点如下：</p><ul><li>快速的冷启动</li><li>即时的模块热更新</li><li>真正的按需编译</li></ul><p><code>vite</code>会直接启动开发服务器，不需要进行打包操作，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快</p><p>利用现代浏览器支持<code>ES Module</code>的特性，当浏览器请求某个模块的时候，再根据需要对模块的内容进行编译，这种方式大大缩短了编译时间</p><p>原理图如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/9f2eed30-b143-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在热模块<code>HMR</code>方面，当修改一个模块的时候，仅需让浏览器重新请求该模块即可，无须像<code>webpack</code>那样需要把该模块的相关依赖模块全部编译一次，效率更高</p><h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>webpack</span></a></h3><p>相比上述的模块化工具，<code>webpack</code>大而全，很多常用的功能做到开箱即用。有两大最核心的特点：<strong>一切皆模块</strong>和<strong>按需加载</strong></p><p>与其他构建工具相比，有如下优势：</p><ul><li>智能解析：对 CommonJS 、 AMD 、ES6 的语法做了兼容</li><li>万物模块：对 js、css、图片等资源文件都支持打包</li><li>开箱即用：HRM、Tree-shaking 等功能</li><li>代码分割：可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间</li><li>插件系统，具有强大的 Plugin 接口，具有更好的灵活性和扩展性</li><li>易于调试：支持 SourceUrls 和 SourceMaps</li><li>快速运行：webpack 使用异步 IO 并具有多级缓存，这使得 webpack 很快且在增量编译上更加快</li><li>生态环境好：社区更丰富，出现的问题更容易解决</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,62),d={href:"https://zhuanlan.zhihu.com/p/95684686",target:"_blank",rel:"noopener noreferrer"},u={href:"https://cn.vitejs.dev/guide/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://segmentfault.com/a/1190000039370642",target:"_blank",rel:"noopener noreferrer"};function m(g,v){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[s("https://zhuanlan.zhihu.com/p/95684686"),e(a)])]),n("li",null,[n("a",u,[s("https://cn.vitejs.dev/guide/"),e(a)])]),n("li",null,[n("a",k,[s("https://segmentfault.com/a/1190000039370642"),e(a)])])])])}const w=t(i,[["render",m],["__file","Rollup_Parcel_snowpack_Vite.html.vue"]]),f=JSON.parse('{"path":"/posts/interview/webpack/Rollup_Parcel_snowpack_Vite.html","title":"与 webpack 类似的工具还有哪些？区别？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-与 webpack 类似的工具还有哪些？区别？","footer":"与 webpack 类似的工具还有哪些？区别？","order":7,"star":7,"date":"2023-03-21T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","webpack"],"tag":["interview","webpack"],"shortTitle":"前端物语|面试物语-与 webpack 类似的工具还有哪些？区别？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"与 webpack 类似的工具还有哪些？区别？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/webpack/Rollup_Parcel_snowpack_Vite.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/webpack/Rollup_Parcel_snowpack_Vite.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"与 webpack 类似的工具还有哪些？区别？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-与 webpack 类似的工具还有哪些？区别？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"与 webpack 类似的工具还有哪些？区别？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"webpack"}],["meta",{"property":"article:published_time","content":"2023-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"与 webpack 类似的工具还有哪些？区别？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/8fe07830-b143-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/ec17e7a0-b1a2-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/79197830-b1a3-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/9f2eed30-b143-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、模块化工具","slug":"一、模块化工具","link":"#一、模块化工具","children":[{"level":3,"title":"Rollup","slug":"rollup","link":"#rollup","children":[]},{"level":3,"title":"Parcel","slug":"parcel","link":"#parcel","children":[]},{"level":3,"title":"Snowpack","slug":"snowpack","link":"#snowpack","children":[]},{"level":3,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":3,"title":"webpack","slug":"webpack","link":"#webpack","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":6.23,"words":1869},"filePathRelative":"posts/interview/webpack/Rollup_Parcel_snowpack_Vite.md","localizedDate":"2023年3月21日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/8ed8d520-b1a4-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、模块化工具</h2>\\n<p>模块化是一种处理复杂系统分解为更好的可管理模块的方式</p>\\n<p>可以用来分割，组织和打包应用。每个模块完成一个特定的子功能，所有的模块按某种方法组装起来，成为一个整体(<code>bundle</code>)</p>"}');export{w as comp,f as data};
