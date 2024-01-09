import{_ as n,o as s,c as i,f as a}from"./app-Q-AMctCt.js";const e={},l=a(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h2><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><p>进入 Nginx 的主目录我们可以看到这些文件夹</p><div class="language-crystal line-numbers-mode" data-ext="crystal"><pre class="language-crystal"><code>├── client_body_temp
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件</p><ul><li>client_body_temp</li><li>fastcgi_temp</li><li>proxy_temp</li><li>scgi_temp</li></ul><p><strong>conf</strong></p><ul><li>用来存放配置文件相关</li></ul><p><strong>html</strong></p><ul><li>用来存放静态文件的默认目录 html、css 等</li></ul><p><strong>sbin</strong></p><ul><li>nginx 的主程序</li></ul><h2 id="基本运行原理" tabindex="-1"><a class="header-anchor" href="#基本运行原理" aria-hidden="true">#</a> 基本运行原理</h2><figure><img src="https://static.h7ml.cn/vitepress/assets/images/nginx/image-20220907111607186.png" alt="image-20220907111607186" tabindex="0" loading="lazy"><figcaption>image-20220907111607186</figcaption></figure>`,14),t=[l];function c(d,p){return s(),i("div",null,t)}const r=n(e,[["render",c],["__file","mkdir.html.vue"]]);export{r as default};
