import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as i,d as e,e as s,a as n,f as l}from"./app-Cbix2SPG.js";const p={},r=l(`<h1 id="javascript-本地存储的方式有哪些-区别及应用场景" tabindex="-1"><a class="header-anchor" href="#javascript-本地存储的方式有哪些-区别及应用场景"><span>Javascript 本地存储的方式有哪些？区别及应用场景？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/68dccf20-849f-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、方式" tabindex="-1"><a class="header-anchor" href="#一、方式"><span>一、方式</span></a></h2><p><code>javaScript</code>本地缓存的方法我们主要讲述以下四种：</p><ul><li>cookie</li><li>sessionStorage</li><li>localStorage</li><li>indexedDB</li></ul><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie</span></a></h3><p><code>Cookie</code>，类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。是为了解决 <code>HTTP</code>无状态导致的问题</p><p>作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 <code>cookie</code>有效期、安全性、使用范围的可选属性组成</p><p>但是<code>cookie</code>在每次请求中都会被发送，如果不使用 <code>HTTPS</code>并对其加密，其保存的信息很容易被窃取，导致安全风险。举个例子，在一些使用 <code>cookie</code>保持登录态的网站上，如果 <code>cookie</code>被窃取，他人很容易利用你的 <code>cookie</code>来假扮成你登录网站</p><p>关于<code>cookie</code>常用的属性如下：</p><ul><li>Expires 用于设置 Cookie 的过期时间</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Expires<span class="token operator">=</span>Wed<span class="token punctuation">,</span> <span class="token number">21</span> Oct <span class="token number">2015</span> <span class="token number">07</span><span class="token operator">:</span><span class="token number">28</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">GMT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Max-Age 用于设置在 Cookie 失效之前需要经过的秒数（优先级比<code>Expires</code>高）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Max<span class="token operator">-</span>Age<span class="token operator">=</span><span class="token number">604800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>Domain</code>指定了 <code>Cookie</code> 可以送达的主机名</li><li><code>Path</code>指定了一个 <code>URL</code>路径，这个路径必须出现在要请求的资源的路径中才可以发送 <code>Cookie</code> 首部</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Path<span class="token operator">=</span><span class="token operator">/</span>docs   # <span class="token operator">/</span>docs<span class="token operator">/</span>Web<span class="token operator">/</span> 下的资源会带 Cookie 首部
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>标记为 <code>Secure</code>的 <code>Cookie</code>只应通过被<code>HTTPS</code>协议加密过的请求发送给服务端</li></ul><p>通过上述，我们可以看到<code>cookie</code>又开始的作用并不是为了缓存而设计出来，只是借用了<code>cookie</code>的特性实现缓存</p><p>关于<code>cookie</code>的使用如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&#39;名字=值&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>关于<code>cookie</code>的修改，首先要确定<code>domain</code>和<code>path</code>属性都是相同的才可以，其中有一个不同得时候都会创建出一个新的<code>cookie</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Set<span class="token operator">-</span>Cookie<span class="token operator">:</span>name<span class="token operator">=</span>aa<span class="token punctuation">;</span> domain<span class="token operator">=</span>aa<span class="token punctuation">.</span>net<span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span>  # 服务端设置
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span>name<span class="token operator">=</span>bb<span class="token punctuation">;</span> domain<span class="token operator">=</span>aa<span class="token punctuation">.</span>net<span class="token punctuation">;</span> path<span class="token operator">=</span><span class="token operator">/</span>  # 客户端设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>最后<code>cookie</code>的删除，最常用的方法就是给<code>cookie</code>设置一个过期的事件，这样<code>cookie</code>过期后会被浏览器删除</p><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>localStorage</span></a></h3><p><code>HTML5</code>新方法，IE8 及以上浏览器都兼容</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ul><li>生命周期：持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的</li><li>存储的信息在同一域中是共享的</li><li>当本页操作（新增、修改、删除）了<code>localStorage</code>的时候，本页面不会触发<code>storage</code>事件,但是别的页面会触发<code>storage</code>事件。</li><li>大小：5M（跟浏览器厂商有关系）</li><li><code>localStorage</code>本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡</li><li>受同源策略的限制</li></ul><p>下面再看看关于<code>localStorage</code>的使用</p><p>设置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cfangxu&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取键名</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取第一个键名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;username&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一次性清除所有存储</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>localStorage</code> 也不是完美的，它有两个缺点：</p><ul><li>无法像<code>Cookie</code>一样设置过期时间</li><li>只能存入字符串，无法直接存对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;[object, Object]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage"><span>sessionStorage</span></a></h3><p><code>sessionStorage</code>和 <code>localStorage</code>使用方法基本一致，唯一不同的是生命周期，一旦页面（会话）关闭，<code>sessionStorage</code> 将会删除数据</p><h3 id="扩展的前端存储方式" tabindex="-1"><a class="header-anchor" href="#扩展的前端存储方式"><span>扩展的前端存储方式</span></a></h3><p><code>indexedDB</code>是一种低级 API，用于客户端存储大量结构化数据(包括, 文件/ blobs)。该 API 使用索引来实现对该数据的高性能搜索</p><p>虽然 <code>Web Storage</code>对于存储较少量的数据很有用，但对于存储更大量的结构化数据来说，这种方法不太有用。<code>IndexedDB</code>提供了一个解决方案</p><h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h4><ul><li>储存量理论上没有上限</li><li>所有操作都是异步的，相比 <code>LocalStorage</code> 同步操作性能更高，尤其是数据量较大时</li><li>原生支持储存<code>JS</code>的对象</li><li>是个正经的数据库，意味着数据库能干的事它都能干</li></ul><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h4><ul><li>操作非常繁琐</li><li>本身有一定门槛</li></ul><p>关于<code>indexedDB</code>的使用基本使用步骤如下：</p><ul><li><p>打开数据库并且开始一个事务</p></li><li><p>创建一个 <code>object store</code></p></li><li><p>构建一个请求来执行一些数据库操作，像增加或提取数据等。</p></li><li><p>通过监听正确类型的 <code>DOM</code> 事件以等待操作完成。</p></li><li><p>在操作结果上进行一些操作（可以在 <code>request</code>对象中找到）</p></li></ul><p>关于使用<code>indexdb</code>的使用会比较繁琐，大家可以通过使用<code>Godb.js</code>库进行缓存，最大化的降低操作难度</p><h2 id="二、区别" tabindex="-1"><a class="header-anchor" href="#二、区别"><span>二、区别</span></a></h2><p>关于<code>cookie</code>、<code>sessionStorage</code>、<code>localStorage</code>三者的区别主要如下：</p><ul><li><p>存储大小：<code>cookie</code>数据大小不能超过<code>4k</code>，<code>sessionStorage</code>和<code>localStorage</code>虽然也有存储大小的限制，但比<code>cookie</code>大得多，可以达到 5M 或更大</p></li><li><p>有效时间：<code>localStorage</code>存储持久数据，浏览器关闭后数据不丢失除非主动删除数据； <code>sessionStorage</code>数据在当前浏览器窗口关闭后自动删除；<code>cookie</code>设置的<code>cookie</code>过期时间之前一直有效，即使窗口或浏览器关闭</p></li><li><p>数据与服务器之间的交互方式，<code>cookie</code>的数据会自动的传递到服务器，服务器端也可以写<code>cookie</code>到客户端； <code>sessionStorage</code>和<code>localStorage</code>不会自动把数据发给服务器，仅在本地保存</p></li></ul><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景"><span>三、应用场景</span></a></h2><p>在了解了上述的前端的缓存方式后，我们可以看看针对不对场景的使用选择：</p><ul><li>标记用户与跟踪用户行为的情况，推荐使用<code>cookie</code></li><li>适合长期保存在本地的数据（令牌），推荐使用<code>localStorage</code></li><li>敏感账号一次性登录，推荐使用<code>sessionStorage</code></li><li>存储大量数据的情况、在线文档（富文本编辑器）保存编辑历史的情况，推荐使用<code>indexedDB</code></li></ul><h2 id="相关连接" tabindex="-1"><a class="header-anchor" href="#相关连接"><span>相关连接</span></a></h2>`,60),d={href:"https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/chenstarx/GoDB.js",target:"_blank",rel:"noopener noreferrer"};function g(m,k){const a=t("ExternalLinkIcon");return c(),i("div",null,[r,e("ul",null,[e("li",null,[e("a",d,[s("https://mp.weixin.qq.com/s/mROjtpoXarN--UDfEMqwhQ"),n(a)])]),e("li",null,[e("a",u,[s("https://github.com/chenstarx/GoDB.js"),n(a)])])])])}const b=o(p,[["render",g],["__file","cache.html.vue"]]),j=JSON.parse('{"path":"/posts/interview/JavaScript/cache.html","title":"Javascript 本地存储的方式有哪些？区别及应用场景？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-Javascript 本地存储的方式有哪些？区别及应用场景？","footer":"Javascript 本地存储的方式有哪些？区别及应用场景？","order":7,"star":7,"date":"2023-03-14T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","JavaScript"],"tag":["interview","JavaScript"],"shortTitle":"前端物语|面试物语-Javascript 本地存储的方式有哪些？区别及应用场景？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"Javascript 本地存储的方式有哪些？区别及应用场景？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/JavaScript/cache.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/JavaScript/cache.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"Javascript 本地存储的方式有哪些？区别及应用场景？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-Javascript 本地存储的方式有哪些？区别及应用场景？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"Javascript 本地存储的方式有哪些？区别及应用场景？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2023-03-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Javascript 本地存储的方式有哪些？区别及应用场景？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/68dccf20-849f-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-03-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、方式","slug":"一、方式","link":"#一、方式","children":[{"level":3,"title":"cookie","slug":"cookie","link":"#cookie","children":[]},{"level":3,"title":"localStorage","slug":"localstorage","link":"#localstorage","children":[]},{"level":3,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":3,"title":"sessionStorage","slug":"sessionstorage","link":"#sessionstorage","children":[]},{"level":3,"title":"扩展的前端存储方式","slug":"扩展的前端存储方式","link":"#扩展的前端存储方式","children":[]}]},{"level":2,"title":"二、区别","slug":"二、区别","link":"#二、区别","children":[]},{"level":2,"title":"三、应用场景","slug":"三、应用场景","link":"#三、应用场景","children":[]},{"level":2,"title":"相关连接","slug":"相关连接","link":"#相关连接","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.42,"words":1625},"filePathRelative":"posts/interview/JavaScript/cache.md","localizedDate":"2023年3月14日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/68dccf20-849f-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、方式</h2>\\n<p><code>javaScript</code>本地缓存的方法我们主要讲述以下四种：</p>\\n<ul>\\n<li>cookie</li>\\n<li>sessionStorage</li>\\n<li>localStorage</li>\\n<li>indexedDB</li>\\n</ul>"}');export{b as comp,j as data};
