import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as d,o as n,c as i,d as e,e as o,a,f as r}from"./app-Cbix2SPG.js";const l={},s=r(`<h1 id="说一下-get-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#说一下-get-和-post-的区别"><span>说一下 GET 和 POST 的区别？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p><code>GET</code>和<code>POST</code>，两者是<code>HTTP</code>协议中发送请求的方法</p><h4 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>GET</span></a></h4><p><code>GET</code>方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据</p><h4 id="post" tabindex="-1"><a class="header-anchor" href="#post"><span>POST</span></a></h4><p><code>POST</code>方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或<strong>副作用</strong></p><p>本质上都是<code>TCP</code>链接，并无差别</p><p>但是由于<code>HTTP</code>的规定和浏览器/服务器的限制，导致他们在应用过程中会体现出一些区别</p><h2 id="二、区别" tabindex="-1"><a class="header-anchor" href="#二、区别"><span>二、区别</span></a></h2><p>从<code>w3schools</code>得到的标准答案的区别如下：</p><ul><li>GET 在浏览器回退时是无害的，而 POST 会再次提交请求。</li><li>GET 产生的 URL 地址可以被 Bookmark，而 POST 不可以。</li><li>GET 请求会被浏览器主动 cache，而 POST 不会，除非手动设置。</li><li>GET 请求只能进行 url 编码，而 POST 支持多种编码方式。</li><li>GET 请求参数会被完整保留在浏览器历史记录里，而 POST 中的参数不会被保留。</li><li>GET 请求在 URL 中传送的参数是有长度限制的，而 POST 没有。</li><li>对参数的数据类型，GET 只接受 ASCII 字符，而 POST 没有限制。</li><li>GET 比 POST 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息。</li><li>GET 参数通过 URL 传递，POST 放在 Request body 中</li></ul><h3 id="参数位置" tabindex="-1"><a class="header-anchor" href="#参数位置"><span>参数位置</span></a></h3><p>貌似从上面看到<code>GET</code>与<code>POST</code>请求区别非常大，但两者实质并没有区别</p><p>无论 <code>GET</code>还是 <code>POST</code>，用的都是同一个传输层协议，所以在传输上没有区别</p><p>当不携带参数的时候，两者最大的区别为第一行方法名不同</p><blockquote><p>POST /uri HTTP/1.1 \\r\\n</p><p>GET /uri HTTP/1.1 \\r\\n</p></blockquote><p>当携带参数的时候，我们都知道<code>GET</code>请求是放在<code>url</code>中，<code>POST</code>则放在<code>body</code>中</p><p><code>GET</code> 方法简约版报文是这样的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GET /index.html?name=qiming.c&amp;age=22 HTTP/1.1
Host: localhost
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>POST</code>方法简约版报文是这样的</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>POST /index.html HTTP/1.1
Host: localhost
Content-Type: application/x-www-form-urlencoded

name=qiming.c&amp;age=22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这里只是约定，并不属于<code>HTTP</code>规范，相反的，我们可以在<code>POST</code>请求中<code>url</code>中写入参数，或者<code>GET</code>请求中的<code>body</code>携带参数</p><h3 id="参数长度" tabindex="-1"><a class="header-anchor" href="#参数长度"><span>参数长度</span></a></h3><p><code>HTTP</code>协议没有<code>Body</code>和 <code>URL</code> 的长度限制，对 <code>URL</code>限制的大多是浏览器和服务器的原因</p><p><code>IE</code>对<code>URL</code>长度的限制是 2083 字节(2K+35)。对于其他浏览器，如 Netscape、FireFox 等，理论上没有长度限制，其限制取决于操作系统的支持</p><p>这里限制的是整个<code>URL</code>长度，而不仅仅是参数值的长度</p><p>服务器处理长<code>URL</code> 要消耗比较多的资源，为了性能和安全考虑，会给 <code>URL</code> 长度加限制</p><h3 id="安全" tabindex="-1"><a class="header-anchor" href="#安全"><span>安全</span></a></h3><p><code>POST</code>比<code>GET</code> 安全，因为数据在地址栏上不可见</p><p>然而，从传输的角度来说，他们都是不安全的，因为<code>HTTP</code> 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文</p><p>只有使用<code>HTTPS</code>才能加密安全</p><h3 id="数据包" tabindex="-1"><a class="header-anchor" href="#数据包"><span>数据包</span></a></h3><p>对于<code>GET</code>方式的请求，浏览器会把<code>http header</code>和<code>data</code>一并发送出去，服务器响应 200（返回数据）</p><p>对于<code>POST</code>，浏览器先发送<code>header</code>，服务器响应 100 <code>continue</code>，浏览器再发送<code>data</code>，服务器响应 200 ok</p><p>并不是所有浏览器都会在<code>POST</code>中发送两次包，<code>Firefox</code>就只发送一次</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,38),p={href:"https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.w3school.com.cn/tags/html_ref_httpmethods.asp",target:"_blank",rel:"noopener noreferrer"};function T(g,u){const t=d("ExternalLinkIcon");return n(),i("div",null,[s,e("ul",null,[e("li",null,[e("a",p,[o("https://mp.weixin.qq.com/s?__biz=MzI3NzIzMzg3Mw==&mid=100000054&idx=1&sn=71f6c214f3833d9ca20b9f7dcd9d33e4#rd"),a(t)])]),e("li",null,[e("a",h,[o("https://blog.fundebug.com/2019/02/22/compare-http-method-get-and-post/"),a(t)])]),e("li",null,[e("a",m,[o("https://www.w3school.com.cn/tags/html_ref_httpmethods.asp"),a(t)])])])])}const f=c(l,[["render",T],["__file","GET_POST.html.vue"]]),w=JSON.parse('{"path":"/posts/interview/http/GET_POST.html","title":"说一下 GET 和 POST 的区别？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说一下 GET 和 POST 的区别？","footer":"说一下 GET 和 POST 的区别？","order":11,"star":11,"date":"2023-04-02T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","http"],"tag":["interview","http"],"shortTitle":"前端物语|面试物语-说一下 GET 和 POST 的区别？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说一下 GET 和 POST 的区别？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/http/GET_POST.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/http/GET_POST.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说一下 GET 和 POST 的区别？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说一下 GET 和 POST 的区别？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说一下 GET 和 POST 的区别？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"http"}],["meta",{"property":"article:published_time","content":"2023-04-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说一下 GET 和 POST 的区别？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png\\"],\\"datePublished\\":\\"2023-04-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、区别","slug":"二、区别","link":"#二、区别","children":[{"level":3,"title":"参数位置","slug":"参数位置","link":"#参数位置","children":[]},{"level":3,"title":"参数长度","slug":"参数长度","link":"#参数长度","children":[]},{"level":3,"title":"安全","slug":"安全","link":"#安全","children":[]},{"level":3,"title":"数据包","slug":"数据包","link":"#数据包","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"posts/interview/http/GET_POST.md","localizedDate":"2023年4月2日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/6e8d19e0-bc3d-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p><code>GET</code>和<code>POST</code>，两者是<code>HTTP</code>协议中发送请求的方法</p>\\n<h4>GET</h4>\\n<p><code>GET</code>方法请求一个指定资源的表示形式，使用 GET 的请求应该只被用于获取数据</p>"}');export{f as comp,w as data};