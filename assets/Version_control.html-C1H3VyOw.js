import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as r,d as e,e as i,a,f as c}from"./app-Cbix2SPG.js";const o={},p=c('<h1 id="说说你对版本管理的理解-常用的版本管理工具有哪些" tabindex="-1"><a class="header-anchor" href="#说说你对版本管理的理解-常用的版本管理工具有哪些"><span>说说你对版本管理的理解？常用的版本管理工具有哪些？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/f0e8a2d0-f5ac-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>版本控制（Version control），是维护工程蓝图的标准作法，能追踪工程蓝图从诞生一直到定案的过程。此外，版本控制也是一种软件工程技巧，借此能在软件开发的过程中，确保由不同人所编辑的同一程序文件都得到同步</p><p>透过文档控制，能记录任何工程项目内各个模块的改动历程，并为每次改动编上序号</p><p>一种简单的版本控制形式如下：赋给图的初版一个版本等级“A”。当做了第一次改变后，版本等级改为“B”，以此类推</p><p>版本控制能提供项目的设计者，将设计恢复到之前任一状态的选择权</p><p>简言之，你的修改只要提到到版本控制系统，基本都可以找回，版本控制系统就像一台时光机器，可以让你回到任何一个时间点</p><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些"><span>二、有哪些</span></a></h2><p>版本控制系统在当今的软件开发中，被认为是理所当然的配备工具之一，根据类别可以分成：</p><ul><li>本地版本控制系统</li><li>集中式版本控制系统</li><li>分布式版本控制系统</li></ul><h3 id="本地版本控制系统" tabindex="-1"><a class="header-anchor" href="#本地版本控制系统"><span>本地版本控制系统</span></a></h3><p>结构如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/c545ded0-f5ad-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优点：</p><ul><li>简单，很多系统中都有内置</li><li>适合管理文本，如系统配置</li></ul><p>缺点：</p><ul><li>其不支持远程操作，因此并不适合多人版本开发</li></ul><h3 id="集中式版本控制系统" tabindex="-1"><a class="header-anchor" href="#集中式版本控制系统"><span>集中式版本控制系统</span></a></h3><p>结构如下图所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/8b4b3040-f5ad-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优点：</p><ul><li>适合多人团队协作开发</li><li>代码集中化管理</li></ul><p>缺点：</p><ul><li>单点故障</li><li>必须联网，无法单机工作</li></ul><p>代表工具有<code>SVN</code>、<code>CVS</code>：</p><h3 id="svn" tabindex="-1"><a class="header-anchor" href="#svn"><span>SVN</span></a></h3><p><code>TortoiseSVN</code>是一款非常易于使用的跨平台的 版本控制/版本控制/源代码控制软件</p><h3 id="cvs" tabindex="-1"><a class="header-anchor" href="#cvs"><span>CVS</span></a></h3><p><code>CVS</code>是版本控制系统，是源配置管理（SCM）的重要组成部分。使用它，您可以记录源文件和文档的历史记录</p><p>老牌的版本控制系统，它是基于客户端/服务器的行为使得其可容纳多用户，构成网络也很方便</p><p>这一特性使得<code>CVS</code>成为位于不同地点的人同时处理数据文件（特别是程序的源代码）时的首选</p><h4 id="分布式版本控制系统" tabindex="-1"><a class="header-anchor" href="#分布式版本控制系统"><span>分布式版本控制系统</span></a></h4><p>结构如下图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/4301a260-f5ad-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>优点：</p><ul><li>适合多人团队协作开发</li><li>代码集中化管理</li><li>可以离线工作</li><li>每个计算机都是一个完整仓库</li></ul><p>分布式版本管理系统每个计算机都有一个完整的仓库，可本地提交，可以做到离线工作，则不用像集中管理那样因为断网情况而无法工作</p><p>代表工具为<code>Git</code>、<code>HG</code>：</p><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h3><p><code>Git</code>是目前世界上最先进的分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务</p><p>特性：易于学习，占用内存小，具有闪电般快速的性能</p><p>使用<code>Git</code>和<code>Gitlab</code>搭建版本控制环境是现在互联网公司最流行的版本控制方式</p><h3 id="hg" tabindex="-1"><a class="header-anchor" href="#hg"><span>HG</span></a></h3><p><code>Mercurial</code>是一个免费的分布式源代码管理工具。它可以有效地处理任何规模的项目，并提供简单直观的界面</p><p><code>Mercurial</code>是一种轻量级分布式版本控制系统，采用 <code>Python</code>语言实现，易于学习和使用，扩展性强</p><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结"><span>三、总结</span></a></h2><p>版本控制系统的优点如下：</p><ul><li>记录文件所有历史变化，这是版本控制系统的基本能力</li><li>随时恢复到任意时间点，历史记录功能使我们不怕改错代码了</li><li>支持多功能并行开发，通常版本控制系统都支持分支，保证了并行开发的可行</li><li>多人协作并行开发，对于多人协作项目，支持多人协作开发的版本管理将事半功倍</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',50),d={href:"https://pm.readthedocs.io/vcs/understanding.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zh.wikipedia.org/wiki/%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6",target:"_blank",rel:"noopener noreferrer"};function g(m,f){const t=l("ExternalLinkIcon");return s(),r("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[i("https://pm.readthedocs.io/vcs/understanding.html"),a(t)])]),e("li",null,[e("a",h,[i("https://zh.wikipedia.org/wiki/版本控制"),a(t)])])])])}const v=n(o,[["render",g],["__file","Version_control.html.vue"]]),w=JSON.parse(`{"path":"/posts/interview/git/Version_control.html","title":"说说你对版本管理的理解？常用的版本管理工具有哪些？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对版本管理的理解？常用的版本管理工具有哪些？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说你对版本管理的理解？常用的版本管理工具有哪些？","order":3,"star":3,"date":"2023-02-28T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","git"],"tag":["interview","git"],"shortTitle":"前端物语|面试物语-说说你对版本管理的理解？常用的版本管理工具有哪些？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对版本管理的理解？常用的版本管理工具有哪些？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/git/Version_control.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/git/Version_control.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对版本管理的理解？常用的版本管理工具有哪些？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对版本管理的理解？常用的版本管理工具有哪些？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对版本管理的理解？常用的版本管理工具有哪些？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对版本管理的理解？常用的版本管理工具有哪些？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/f0e8a2d0-f5ac-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/c545ded0-f5ad-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/8b4b3040-f5ad-11eb-85f6-6fac77c0c9b3.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/4301a260-f5ad-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、有哪些","slug":"二、有哪些","link":"#二、有哪些","children":[{"level":3,"title":"本地版本控制系统","slug":"本地版本控制系统","link":"#本地版本控制系统","children":[]},{"level":3,"title":"集中式版本控制系统","slug":"集中式版本控制系统","link":"#集中式版本控制系统","children":[]},{"level":3,"title":"SVN","slug":"svn","link":"#svn","children":[]},{"level":3,"title":"CVS","slug":"cvs","link":"#cvs","children":[]},{"level":3,"title":"Git","slug":"git","link":"#git","children":[]},{"level":3,"title":"HG","slug":"hg","link":"#hg","children":[]}]},{"level":2,"title":"三、总结","slug":"三、总结","link":"#三、总结","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1230},"filePathRelative":"posts/interview/git/Version_control.md","localizedDate":"2023年2月28日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/f0e8a2d0-f5ac-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>版本控制（Version control），是维护工程蓝图的标准作法，能追踪工程蓝图从诞生一直到定案的过程。此外，版本控制也是一种软件工程技巧，借此能在软件开发的过程中，确保由不同人所编辑的同一程序文件都得到同步</p>"}`);export{v as comp,w as data};