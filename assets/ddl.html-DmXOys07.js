import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,f as t}from"./app-Cbix2SPG.js";const n={},l=t(`<h2 id="ddl-操作数据库" tabindex="-1"><a class="header-anchor" href="#ddl-操作数据库"><span>DDL:操作数据库</span></a></h2><p>我们先来学习 DDL 来操作数据库。而操作数据库主要就是对数据库的增删查操作。</p><h2 id="查询" tabindex="-1"><a class="header-anchor" href="#查询"><span>查询</span></a></h2><p>查询所有的数据库</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行上面语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908686.png" alt="image-20220910090812642" tabindex="0" loading="lazy"><figcaption>image-20220910090812642</figcaption></figure><p>上述查询到的是的这些数据库是 mysql 安装好自带的数据库，我们以后不要操作这些数据库。</p><h2 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库"><span>创建数据库</span></a></h2><ul><li><strong>创建数据库</strong>：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908036.png" alt="image-20220910090808988" tabindex="0" loading="lazy"><figcaption>image-20220910090808988</figcaption></figure><p>而在创建数据库的时候，我并不知道 db1 数据库有没有创建，直接再次创建名为 db1 的数据库就会出现错误。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908835.png" alt="image-20220910090806785" tabindex="0" loading="lazy"><figcaption>image-20220910090806785</figcaption></figure><p>为了避免上面的错误，在创建数据库的时候先做判断，如果不存在再创建。</p><ul><li><strong>创建数据库(判断，如果不存在则创建)</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908394.png" alt="image-20220910090801352" tabindex="0" loading="lazy"><figcaption>image-20220910090801352</figcaption></figure><p>从上面的效果可以看到虽然 db1 数据库已经存在，再创建 db1 也没有报错，而创建 db2 数据库则创建成功。</p><h2 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库"><span>删除数据库</span></a></h2><ul><li><strong>删除数据库</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>删除数据库(判断，如果存在则删除)</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907863.png" alt="image-20220910090758815" tabindex="0" loading="lazy"><figcaption>image-20220910090758815</figcaption></figure><h2 id="使用数据库" tabindex="-1"><a class="header-anchor" href="#使用数据库"><span>使用数据库</span></a></h2><p>数据库创建好了，要在数据库中创建表，得先明确在哪儿个数据库中操作，此时就需要使用数据库。</p><ul><li><strong>使用数据库</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">USE</span> 数据库名称<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>查看当前使用的数据库</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907430.png" alt="image-20220910090753385" tabindex="0" loading="lazy"><figcaption>image-20220910090753385</figcaption></figure>`,36),i=[l];function p(d,r){return e(),a("div",null,i)}const m=s(n,[["render",p],["__file","ddl.html.vue"]]),g=JSON.parse('{"path":"/posts/mysql/ddl.html","title":"DDL:操作数据库","lang":"zh-CN","frontmatter":{"icon":"mysql","order":4,"date":"2022-03-20T00:00:00.000Z","author":"h7ml","category":"mysql","tag":"mysql","title":"DDL:操作数据库","description":"DDL:操作数据库 我们先来学习 DDL 来操作数据库。而操作数据库主要就是对数据库的增删查操作。 查询 查询所有的数据库 运行上面语句效果如下： image-20220910090812642image-20220910090812642 上述查询到的是的这些数据库是 mysql 安装好自带的数据库，我们以后不要操作这些数据库。 创建数据库 创建数据...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/mysql/ddl.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/mysql/ddl.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"DDL:操作数据库"}],["meta",{"property":"og:description","content":"DDL:操作数据库 我们先来学习 DDL 来操作数据库。而操作数据库主要就是对数据库的增删查操作。 查询 查询所有的数据库 运行上面语句效果如下： image-20220910090812642image-20220910090812642 上述查询到的是的这些数据库是 mysql 安装好自带的数据库，我们以后不要操作这些数据库。 创建数据库 创建数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908686.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2022-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DDL:操作数据库\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908686.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908036.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908835.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100908394.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907863.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907430.png\\"],\\"datePublished\\":\\"2022-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"DDL:操作数据库","slug":"ddl-操作数据库","link":"#ddl-操作数据库","children":[]},{"level":2,"title":"查询","slug":"查询","link":"#查询","children":[]},{"level":2,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":2,"title":"删除数据库","slug":"删除数据库","link":"#删除数据库","children":[]},{"level":2,"title":"使用数据库","slug":"使用数据库","link":"#使用数据库","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.49,"words":446},"filePathRelative":"posts/mysql/ddl.md","localizedDate":"2022年3月20日","excerpt":"<h2>DDL:操作数据库</h2>\\n<p>我们先来学习 DDL 来操作数据库。而操作数据库主要就是对数据库的增删查操作。</p>\\n<h2>查询</h2>\\n<p>查询所有的数据库</p>\\n<div class=\\"language-sql\\" data-ext=\\"sql\\" data-title=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">SHOW</span> <span class=\\"token keyword\\">DATABASES</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}');export{m as comp,g as data};