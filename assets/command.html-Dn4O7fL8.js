import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as s,c,d as t,e,a as l,f as a}from"./app-Cbix2SPG.js";const o={},p=a('<h1 id="说说-git-常用的命令有哪些" tabindex="-1"><a class="header-anchor" href="#说说-git-常用的命令有哪些"><span>说说 Git 常用的命令有哪些？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/f66b3290-f7af-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h2><p><code>git</code>的操作可以通过命令的形式如执行，日常使用就如下图 6 个命令即可</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/fe150520-f7af-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>实际上，如果想要熟练使用，超过 60 多个命令需要了解，下面则介绍下常见的的<code>git</code>命令</p><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些"><span>二、有哪些</span></a></h2><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p><code>Git</code>自带一个 <code>git config</code> 的工具来帮助设置控制 <code>Git</code>外观和行为的配置变量，在我们安装完<code>git</code>之后，第一件事就是设置你的用户名和邮件地址</p><p>后续每一个提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改</p><p>设置提交代码时的用户信息命令如下：</p>',11),g={href:"http://user.name",target:"_blank",rel:"noopener noreferrer"},h=t("li",null,'git config [--global] user.email "[email address]"',-1),m=a('<h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动"><span>启动</span></a></h3><p>一个<code>git</code>项目的初始有两个途径，分别是：</p><ul><li>git init [project-name]：创建或在当前目录初始化一个 git 代码库</li><li>git clone url：下载一个项目和它的整个代码历史</li></ul><h3 id="日常基本操作" tabindex="-1"><a class="header-anchor" href="#日常基本操作"><span>日常基本操作</span></a></h3><p>在日常工作中，代码常用的基本操作如下：</p><ul><li>git init 初始化仓库，默认为 master 分支</li><li>git add . 提交全部文件修改到缓存区</li><li>git add &lt;具体某个文件路径+全名&gt; 提交某些文件到缓存区</li><li>git diff 查看当前代码 add 后，会 add 哪些内容</li><li>git diff --staged 查看现在 commit 提交后，会提交哪些内容</li><li>git status 查看当前分支状态</li><li>git pull &lt;远程仓库名&gt; &lt;远程分支名&gt; 拉取远程仓库的分支与本地当前分支合并</li><li>git pull &lt;远程仓库名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt; 拉取远程仓库的分支与本地某个分支合并</li><li>git commit -m &quot;&lt;注释&gt;&quot; 提交代码到本地仓库，并写提交注释</li><li>git commit -v 提交时显示所有 diff 信息</li><li>git commit --amend [file1] [file2] 重做上一次 commit，并包括指定文件的新变化</li></ul><p>关于提交信息的格式，可以遵循以下的规则：</p><ul><li>feat: 新特性，添加功能</li><li>fix: 修改 bug</li><li>refactor: 代码重构</li><li>docs: 文档修改</li><li>style: 代码格式修改, 注意不是 css 修改</li><li>test: 测试用例修改</li><li>chore: 其他修改, 比如构建流程, 依赖管理</li></ul><h3 id="分支操作" tabindex="-1"><a class="header-anchor" href="#分支操作"><span>分支操作</span></a></h3><ul><li>git branch 查看本地所有分支</li><li>git branch -r 查看远程所有分支</li><li>git branch -a 查看本地和远程所有分支</li><li>git merge &lt;分支名&gt; 合并分支</li><li>git merge --abort 合并分支出现冲突时，取消合并，一切回到合并前的状态</li><li>git branch &lt;新分支名&gt; 基于当前分支，新建一个分支</li><li>git checkout --orphan &lt;新分支名&gt; 新建一个空分支（会保留之前分支的所有文件）</li><li>git branch -D &lt;分支名&gt; 删除本地某个分支</li><li>git push &lt;远程库名&gt; :&lt;分支名&gt; 删除远程某个分支</li><li>git branch &lt;新分支名称&gt; &lt;提交 ID&gt; 从提交历史恢复某个删掉的某个分支</li><li>git branch -m &lt;原分支名&gt; &lt;新分支名&gt; 分支更名</li><li>git checkout &lt;分支名&gt; 切换到本地某个分支</li><li>git checkout &lt;远程库名&gt;/&lt;分支名&gt; 切换到线上某个分支</li><li>git checkout -b &lt;新分支名&gt; 把基于当前分支新建分支，并切换为这个分支</li></ul><h3 id="远程同步" tabindex="-1"><a class="header-anchor" href="#远程同步"><span>远程同步</span></a></h3><p>远程操作常见的命令：</p><ul><li>git fetch [remote] 下载远程仓库的所有变动</li><li>git remote -v 显示所有远程仓库</li><li>git pull [remote] [branch] 拉取远程仓库的分支与本地当前分支合并</li><li>git fetch 获取线上最新版信息记录，不合并</li><li>git push [remote] [branch] 上传本地指定分支到远程仓库</li><li>git push [remote] --force 强行推送当前分支到远程仓库，即使有冲突</li><li>git push [remote] --all 推送所有分支到远程仓库</li></ul><h3 id="撤销" tabindex="-1"><a class="header-anchor" href="#撤销"><span>撤销</span></a></h3><ul><li><p>git checkout [file] 恢复暂存区的指定文件到工作区</p></li><li><p>git checkout [commit] [file] 恢复某个 commit 的指定文件到暂存区和工作区</p></li><li><p>git checkout . 恢复暂存区的所有文件到工作区</p></li><li><p>git reset [commit] 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不变</p></li><li><p>git reset --hard 重置暂存区与工作区，与上一次 commit 保持一致</p></li><li><p>git reset [file] 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变</p></li><li><p>git revert [commit] 后者的所有变化都将被前者抵消，并且应用到当前分支</p></li></ul><blockquote><p><code>reset</code>：真实硬性回滚，目标版本后面的提交记录全部丢失了</p><p><code>revert</code>：同样回滚，这个回滚操作相当于一个提价，目标版本后面的提交记录也全部都有</p></blockquote><h3 id="存储操作" tabindex="-1"><a class="header-anchor" href="#存储操作"><span>存储操作</span></a></h3><p>你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作，但又不想提交这些杂乱的代码，这时候可以将代码进行存储</p><ul><li><p>git stash 暂时将未提交的变化移除</p></li><li><p>git stash pop 取出储藏中最后存入的工作状态进行恢复，会删除储藏</p></li><li><p>git stash list 查看所有储藏中的工作</p></li><li><p>git stash apply &lt;储藏的名称&gt; 取出储藏中对应的工作状态进行恢复，不会删除储藏</p></li><li><p>git stash clear 清空所有储藏中的工作</p></li><li><p>git stash drop &lt;储藏的名称&gt; 删除对应的某个储藏</p></li></ul><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结"><span>三、总结</span></a></h2><p><code>git</code>常用命令速查表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',23),d={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://segmentfault.com/a/1190000017875714",target:"_blank",rel:"noopener noreferrer"};function u(b,w){const i=r("ExternalLinkIcon");return s(),c("div",null,[p,t("ul",null,[t("li",null,[e("git config [--global] "),t("a",g,[e("user.name"),l(i)]),e(' "[name]"')]),h]),m,t("ul",null,[t("li",null,[t("p",null,[t("a",d,[e("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),l(i)])])]),t("li",null,[t("p",null,[t("a",f,[e("https://segmentfault.com/a/1190000017875714"),l(i)])])])])])}const k=n(o,[["render",u],["__file","command.html.vue"]]),y=JSON.parse(`{"path":"/posts/interview/git/command.html","title":"说说 Git 常用的命令有哪些？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说 Git 常用的命令有哪些？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说 Git 常用的命令有哪些？","order":1,"star":1,"date":"2023-02-25T02:16:04.564Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","git"],"tag":["interview","git"],"shortTitle":"前端物语|面试物语-说说 Git 常用的命令有哪些？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说 Git 常用的命令有哪些？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/git/command.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/git/command.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说 Git 常用的命令有哪些？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说 Git 常用的命令有哪些？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说 Git 常用的命令有哪些？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2023-02-25T02:16:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说 Git 常用的命令有哪些？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/f66b3290-f7af-11eb-bc6f-3f06e1491664.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/fe150520-f7af-11eb-991d-334fd31f0201.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/0a10f3c0-f7b0-11eb-991d-334fd31f0201.png\\"],\\"datePublished\\":\\"2023-02-25T02:16:04.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、前言","slug":"一、前言","link":"#一、前言","children":[]},{"level":2,"title":"二、有哪些","slug":"二、有哪些","link":"#二、有哪些","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"启动","slug":"启动","link":"#启动","children":[]},{"level":3,"title":"日常基本操作","slug":"日常基本操作","link":"#日常基本操作","children":[]},{"level":3,"title":"分支操作","slug":"分支操作","link":"#分支操作","children":[]},{"level":3,"title":"远程同步","slug":"远程同步","link":"#远程同步","children":[]},{"level":3,"title":"撤销","slug":"撤销","link":"#撤销","children":[]},{"level":3,"title":"存储操作","slug":"存储操作","link":"#存储操作","children":[]}]},{"level":2,"title":"三、总结","slug":"三、总结","link":"#三、总结","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"posts/interview/git/command.md","localizedDate":"2023年2月25日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/f66b3290-f7af-11eb-bc6f-3f06e1491664.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、前言</h2>\\n<p><code>git</code>的操作可以通过命令的形式如执行，日常使用就如下图 6 个命令即可</p>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/fe150520-f7af-11eb-991d-334fd31f0201.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}`);export{k as comp,y as data};