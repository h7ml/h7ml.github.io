import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-Cbix2SPG.js";const t={},p=e(`<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h2><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><blockquote><p>数据库的事务（Transaction）是一种机制、一个操作序列，包含了<mark>一组数据库操作命令</mark>。</p><p>事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令<mark>要么同时成功，要么同时失败</mark>。</p><p>事务是一个不可分割的工作逻辑单元。</p></blockquote><p>这些概念不好理解，接下来举例说明，如下图有一张表</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100957062.png" alt="image-20220910095758027" tabindex="0" loading="lazy"><figcaption>image-20220910095758027</figcaption></figure><p>张三和李四账户中各有 100 块钱，现李四需要转换 500 块钱给张三，具体的转账操作为</p><ul><li>第一步：查询李四账户余额</li><li>第二步：从李四账户金额 -500</li><li>第三步：给张三账户金额 +500</li></ul><p>现在假设在转账过程中第二步完成后出现了异常第三步没有执行，就会造成李四账户金额少了 500，而张三金额并没有多 500；这样的系统是有问题的。如果解决呢？使用事务可以解决上述问题</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100958661.png" alt="image-20220910095800626" tabindex="0" loading="lazy"><figcaption>image-20220910095800626</figcaption></figure><p>从上图可以看到在转账前开启事务，如果出现了异常回滚事务，三步正常执行就提交事务，这样就可以完美解决问题。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><ul><li><p>开启事务</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
或者
<span class="token keyword">BEGIN</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>提交事务</p></li><li><p>回滚事务</p></li></ul><h2 id="代码验证" tabindex="-1"><a class="header-anchor" href="#代码验证"><span>代码验证</span></a></h2><ul><li><p>环境准备</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> account<span class="token punctuation">;</span>

<span class="token comment">-- 创建账户表</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> account<span class="token punctuation">(</span>
 id <span class="token keyword">int</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>
 name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 money <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 添加数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> account<span class="token punctuation">(</span>name<span class="token punctuation">,</span>money<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>不加事务演示问题</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 转账操作</span>
<span class="token comment">-- 1. 查询李四账户金额是否大于500</span>

<span class="token comment">-- 2. 李四账户 -500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">500</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

出现异常了<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  <span class="token comment">-- 此处不是注释，在整体执行时会出问题，后面的sql则不执行</span>
<span class="token comment">-- 3. 张三账户 +500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">500</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整体执行结果肯定会出问题，我们查询账户表中数据，发现李四账户少了 500。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100958711.png" alt="image-20220910095804689" tabindex="0" loading="lazy"><figcaption>image-20220910095804689</figcaption></figure></li><li><p>添加事务 sql 如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 开启事务</span>
<span class="token keyword">BEGIN</span><span class="token punctuation">;</span>
<span class="token comment">-- 转账操作</span>
<span class="token comment">-- 1. 查询李四账户金额是否大于500</span>

<span class="token comment">-- 2. 李四账户 -500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">-</span> <span class="token number">500</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">;</span>

出现异常了<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  <span class="token comment">-- 此处不是注释，在整体执行时会出问题，后面的sql则不执行</span>
<span class="token comment">-- 3. 张三账户 +500</span>
<span class="token keyword">UPDATE</span> account <span class="token keyword">set</span> money <span class="token operator">=</span> money <span class="token operator">+</span> <span class="token number">500</span> <span class="token keyword">where</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 提交事务</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>

<span class="token comment">-- 回滚事务</span>
<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面 sql 中的执行成功进选择执行提交事务，而出现问题则执行回滚事务的语句。以后我们肯定不可能这样操作，而是在 java 中进行操作，在 java 中可以抓取异常，没出现异常提交事务，出现异常回滚事务。</p></li></ul><h2 id="事务的四大特征" tabindex="-1"><a class="header-anchor" href="#事务的四大特征"><span>事务的四大特征</span></a></h2><ul><li><p>原子性（Atomicity）: 事务是不可分割的最小操作单位，要么同时成功，要么同时失败</p></li><li><p>一致性（Consistency） :事务完成时，必须使所有的数据都保持一致状态</p></li><li><p>隔离性（Isolation） :多个事务之间，操作的可见性</p></li><li><p>持久性（Durability） :事务一旦提交或回滚，它对数据库中的数据的改变就是永久的</p></li></ul><blockquote><p>==说明：==</p><p>mysql 中事务是自动提交的。</p><p>也就是说我们不添加事务执行 sql 语句，语句执行完毕会自动的提交事务。</p><p>可以通过下面语句查询默认提交方式：</p><p>查询到的结果是 1 则表示自动提交，结果是 0 表示手动提交。当然也可以通过下面语句修改提交方式</p></blockquote>`,17),l=[p];function i(o,c){return s(),a("div",null,l)}const m=n(t,[["render",i],["__file","affair.html.vue"]]),u=JSON.parse('{"path":"/posts/mysql/affair.html","title":"事物","lang":"zh-CN","frontmatter":{"icon":"mysql","order":10,"date":"2022-03-20T00:00:00.000Z","author":"h7ml","category":"mysql","tag":"mysql","title":"事物","description":"事务 概述 数据库的事务（Transaction）是一种机制、一个操作序列，包含了一组数据库操作命令。 事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么同时成功，要么同时失败。 事务是一个不可分割的工作逻辑单元。 这些概念不好理解，接下来举例说明，如下图有一张表 image-20220910095758027image-...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/mysql/affair.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/mysql/affair.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"事物"}],["meta",{"property":"og:description","content":"事务 概述 数据库的事务（Transaction）是一种机制、一个操作序列，包含了一组数据库操作命令。 事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么同时成功，要么同时失败。 事务是一个不可分割的工作逻辑单元。 这些概念不好理解，接下来举例说明，如下图有一张表 image-20220910095758027image-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100957062.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2022-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"事物\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100957062.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100958661.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100958711.png\\"],\\"datePublished\\":\\"2022-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"代码验证","slug":"代码验证","link":"#代码验证","children":[]},{"level":2,"title":"事务的四大特征","slug":"事务的四大特征","link":"#事务的四大特征","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.08,"words":924},"filePathRelative":"posts/mysql/affair.md","localizedDate":"2022年3月20日","excerpt":"<h2>事务</h2>\\n<h2>概述</h2>\\n<blockquote>\\n<p>数据库的事务（Transaction）是一种机制、一个操作序列，包含了<mark>一组数据库操作命令</mark>。</p>\\n<p>事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令<mark>要么同时成功，要么同时失败</mark>。</p>\\n<p>事务是一个不可分割的工作逻辑单元。</p>\\n</blockquote>\\n<p>这些概念不好理解，接下来举例说明，如下图有一张表</p>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100957062.png\\" alt=\\"image-20220910095758027\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220910095758027</figcaption></figure>","autoDesc":true}');export{m as comp,u as data};