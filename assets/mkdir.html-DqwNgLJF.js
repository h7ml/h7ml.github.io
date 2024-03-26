import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const e={},i=t(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><p>进入 Nginx 的主目录我们可以看到这些文件夹</p><div class="language-crystal line-numbers-mode" data-ext="crystal" data-title="crystal"><pre class="language-crystal"><code>├── client_body_temp
├── conf
│   ├── fastcgi<span class="token punctuation">.</span>conf
│   ├── fastcgi<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default
│   ├── fastcgi_params
│   ├── fastcgi_params<span class="token punctuation">.</span>default
│   ├── koi<span class="token operator">-</span>utf
│   ├── koi<span class="token operator">-</span>win
│   ├── mime<span class="token punctuation">.</span>types
│   ├── mime<span class="token punctuation">.</span>types<span class="token punctuation">.</span>default
│   ├── nginx<span class="token punctuation">.</span>conf
│   ├── nginx<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>default
│   ├── scgi_params
│   ├── scgi_params<span class="token punctuation">.</span>default
│   ├── uwsgi_params
│   ├── uwsgi_params<span class="token punctuation">.</span>default
│   └── win<span class="token operator">-</span>utf
├── fastcgi_temp
├── html
│   ├── 50x<span class="token punctuation">.</span>html
│   └── index<span class="token punctuation">.</span>html
├── logs
│   ├── access<span class="token punctuation">.</span>log
│   ├── error<span class="token punctuation">.</span>log
│   └── nginx<span class="token punctuation">.</span>pid
├── proxy_temp
├── sbin
│   └── nginx
├── scgi_temp
└── uwsgi_temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件</p><ul><li>client_body_temp</li><li>fastcgi_temp</li><li>proxy_temp</li><li>scgi_temp</li></ul><p><strong>conf</strong></p><ul><li>用来存放配置文件相关</li></ul><p><strong>html</strong></p><ul><li>用来存放静态文件的默认目录 html、css 等</li></ul><p><strong>sbin</strong></p><ul><li>nginx 的主程序</li></ul><h2 id="基本运行原理" tabindex="-1"><a class="header-anchor" href="#基本运行原理"><span>基本运行原理</span></a></h2><figure><img src="https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220907111607186.png" alt="image-20220907111607186" tabindex="0" loading="lazy"><figcaption>image-20220907111607186</figcaption></figure>`,14),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(e,[["render",p],["__file","mkdir.html.vue"]]),d=JSON.parse('{"path":"/posts/nginx/mkdir.html","title":"目录","lang":"zh-CN","frontmatter":{"icon":"nginx","order":2,"date":"2022-03-20T00:00:00.000Z","author":"h7ml","category":"nginx","tag":"nginx","title":"目录","description":"目录 目录结构 进入 Nginx 的主目录我们可以看到这些文件夹 其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件 client_body_temp fastcgi_temp proxy_temp scgi_temp conf 用来存放配置文件相关 html 用来存放静态文件的默认目录 html、css 等 sbin nginx 的...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/nginx/mkdir.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/nginx/mkdir.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"目录"}],["meta",{"property":"og:description","content":"目录 目录结构 进入 Nginx 的主目录我们可以看到这些文件夹 其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件 client_body_temp fastcgi_temp proxy_temp scgi_temp conf 用来存放配置文件相关 html 用来存放静态文件的默认目录 html、css 等 sbin nginx 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220907111607186.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2022-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220907111607186.png\\"],\\"datePublished\\":\\"2022-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"基本运行原理","slug":"基本运行原理","link":"#基本运行原理","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.52,"words":157},"filePathRelative":"posts/nginx/mkdir.md","localizedDate":"2022年3月20日","excerpt":"<h2>目录</h2>\\n<h2>目录结构</h2>\\n<p>进入 Nginx 的主目录我们可以看到这些文件夹</p>\\n<div class=\\"language-crystal\\" data-ext=\\"crystal\\" data-title=\\"crystal\\"><pre class=\\"language-crystal\\"><code>├── client_body_temp\\n├── conf\\n│   ├── fastcgi<span class=\\"token punctuation\\">.</span>conf\\n│   ├── fastcgi<span class=\\"token punctuation\\">.</span>conf<span class=\\"token punctuation\\">.</span>default\\n│   ├── fastcgi_params\\n│   ├── fastcgi_params<span class=\\"token punctuation\\">.</span>default\\n│   ├── koi<span class=\\"token operator\\">-</span>utf\\n│   ├── koi<span class=\\"token operator\\">-</span>win\\n│   ├── mime<span class=\\"token punctuation\\">.</span>types\\n│   ├── mime<span class=\\"token punctuation\\">.</span>types<span class=\\"token punctuation\\">.</span>default\\n│   ├── nginx<span class=\\"token punctuation\\">.</span>conf\\n│   ├── nginx<span class=\\"token punctuation\\">.</span>conf<span class=\\"token punctuation\\">.</span>default\\n│   ├── scgi_params\\n│   ├── scgi_params<span class=\\"token punctuation\\">.</span>default\\n│   ├── uwsgi_params\\n│   ├── uwsgi_params<span class=\\"token punctuation\\">.</span>default\\n│   └── win<span class=\\"token operator\\">-</span>utf\\n├── fastcgi_temp\\n├── html\\n│   ├── 50x<span class=\\"token punctuation\\">.</span>html\\n│   └── index<span class=\\"token punctuation\\">.</span>html\\n├── logs\\n│   ├── access<span class=\\"token punctuation\\">.</span>log\\n│   ├── error<span class=\\"token punctuation\\">.</span>log\\n│   └── nginx<span class=\\"token punctuation\\">.</span>pid\\n├── proxy_temp\\n├── sbin\\n│   └── nginx\\n├── scgi_temp\\n└── uwsgi_temp\\n</code></pre></div>","autoDesc":true}');export{u as comp,d as data};
