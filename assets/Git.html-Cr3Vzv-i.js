import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as l,d as e,e as i,a,f as r}from"./app-Cbix2SPG.js";const s={},p=r(`<h1 id="说说你对-git-的理解" tabindex="-1"><a class="header-anchor" href="#说说你对-git-的理解"><span>说说你对 Git 的理解？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/213eba50-f79c-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>git，是一个分布式版本控制软件，最初目的是为更好地管理<code>Linux</code>内核开发而设计</p><p>分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/29240f40-f79c-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>项目开始，只有一个原始版仓库，别的机器可以<code>clone</code>这个原始版本库，那么所有<code>clone</code>的机器，它们的版本库其实都是一样的，并没有主次之分</p><p>所以在实现团队协作的时候，只要有一台电脑充当服务器的角色，其他每个人都从这个“服务器”仓库<code>clone</code>一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交</p><p><code>github</code>实际就可以充当这个服务器角色，其是一个开源协作社区，提供<code>Git</code>仓库托管服务，既可以让别人参与你的开源项目，也可以参与别人的开源项目</p><h2 id="二、工作原理" tabindex="-1"><a class="header-anchor" href="#二、工作原理"><span>二、工作原理</span></a></h2><p>当我们通过<code>git init</code>创建或者<code>git clone</code>一个项目的时候，项目目录会隐藏一个<code>.git</code>子目录，其作用是用来跟踪管理版本库的</p><p><code>Git</code> 中所有数据在存储前都计算校验和，然后以校验和来引用，所以在我们修改或者删除文件的时候，<code>git</code>能够知道</p><p><code>Git</code>用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）， 这是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git 中文件的内容或目录结构计算出来，如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>24b9da6552252987aa493b52f8696cd6d3b00373
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们修改文件的时候，<code>git</code>就会修改文件的状态，可以通过<code>git status</code>进行查询，状态情况如下：</p><ul><li>已修改（modified）：表示修改了文件，但还没保存到数据库中。</li><li>已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</li><li>已提交（committed）：表示数据已经安全的保存在本地数据库中。</li></ul><p>文件状态对应的，不同状态的文件在<code>Git</code>中处于不同的工作区域，主要分成了四部分：</p><ul><li>工作区：相当于本地写代码的区域，如 git clone 一个项目到本地，相当于本地克隆了远程仓库项目的一个副本</li><li>暂存区：暂存区是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中</li><li>本地仓库：提交更新，找到暂存区域的文件，将快照永久性存储到 Git 本地仓库</li><li>远程仓库：远程的仓库，如 github</li></ul><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/3273c9a0-f79c-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、命令" tabindex="-1"><a class="header-anchor" href="#三、命令"><span>三、命令</span></a></h2><p>从上图可以看到，<code>git</code>日常简单的使用就只有上图 6 个命令：</p><ul><li>add</li><li>commit</li><li>push</li><li>pull</li><li>clone</li><li>checkout</li></ul><p>但实际上还有很多命令，如果想要熟练使用，还有 60 个多命令，通过这些命令的配合使用，能够提高个人工作效率和团队协助能力</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,24),d={href:"https://zh.wikipedia.org/wiki/Git",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"};function h(m,f){const t=o("ExternalLinkIcon");return c(),l("div",null,[p,e("ul",null,[e("li",null,[e("a",d,[i("https://zh.wikipedia.org/wiki/Git"),a(t)])]),e("li",null,[e("a",g,[i("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),a(t)])])])])}const b=n(s,[["render",h],["__file","Git.html.vue"]]),v=JSON.parse(`{"path":"/posts/interview/git/Git.html","title":"说说你对 Git 的理解？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对 Git 的理解？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说你对 Git 的理解？","order":4,"star":4,"date":"2023-02-28T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","git"],"tag":["interview","git"],"shortTitle":"前端物语|面试物语-说说你对 Git 的理解？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对 Git 的理解？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/git/Git.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/git/Git.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对 Git 的理解？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对 Git 的理解？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对 Git 的理解？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对 Git 的理解？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/213eba50-f79c-11eb-bc6f-3f06e1491664.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/29240f40-f79c-11eb-991d-334fd31f0201.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/3273c9a0-f79c-11eb-bc6f-3f06e1491664.png\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、工作原理","slug":"二、工作原理","link":"#二、工作原理","children":[]},{"level":2,"title":"三、命令","slug":"三、命令","link":"#三、命令","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.23,"words":968},"filePathRelative":"posts/interview/git/Git.md","localizedDate":"2023年2月28日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/213eba50-f79c-11eb-bc6f-3f06e1491664.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>git，是一个分布式版本控制软件，最初目的是为更好地管理<code>Linux</code>内核开发而设计</p>\\n<p>分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复</p>"}`);export{b as comp,v as data};
