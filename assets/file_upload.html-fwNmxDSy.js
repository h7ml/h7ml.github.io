import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,d as n,e as s,a as t,f as l}from"./app-Cbix2SPG.js";const i={},u=l(`<h1 id="如何实现文件上传-说说你的思路" tabindex="-1"><a class="header-anchor" href="#如何实现文件上传-说说你的思路"><span>如何实现文件上传？说说你的思路</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/248a5580-ce60-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>文件上传在日常开发中应用很广泛，我们发微博、发微信朋友圈都会用到了图片上传功能</p><p>因为浏览器限制，浏览器不能直接操作文件系统的，需要通过浏览器所暴露出来的统一接口，由用户主动授权发起来访问文件动作，然后读取文件内容进指定内存里，最后执行提交请求操作，将内存里的文件内容数据上传到服务端，服务端解析前端传来的数据信息后存入文件里</p><p>对于文件上传，我们需要设置请求头为<code>content-type:multipart/form-data</code></p><blockquote><p>multipart 互联网上的混合资源，就是资源由多种元素组成，form-data 表示可以使用 HTML Forms 和 POST 方法上传文件</p></blockquote><p>结构如下：</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/t2/upload.do</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">User-Agent</span><span class="token punctuation">:</span> <span class="token header-value">SOHUWapRebot</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Language</span><span class="token punctuation">:</span> <span class="token header-value">zh-cn,zh;q=0.5</span></span>
<span class="token header"><span class="token header-name keyword">Accept-Charset</span><span class="token punctuation">:</span> <span class="token header-value">GBK,utf-8;q=0.7,*;q=0.7</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">60408</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span><span class="token header-value">multipart/form-data; boundary=ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span> <span class="token header-value">w.sohu.com</span></span>

--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;city&quot;</span></span>

Santa colo
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data;name=&quot;desc&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/plain; charset=UTF-8</span></span>
<span class="token header"><span class="token header-name keyword">Content-Transfer-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">8bit</span></span>

...
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data;name=&quot;pic&quot;; filename=&quot;photo.jpg&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/octet-stream</span></span>
<span class="token header"><span class="token header-name keyword">Content-Transfer-Encoding</span><span class="token punctuation">:</span> <span class="token header-value">binary</span></span>

... binary data of the jpg ...
--ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>boundary</code>表示分隔符，如果要上传多个表单项，就要使用<code>boundary</code>分割，每个表单项由<code>———XXX</code>开始，以<code>———XXX</code>结尾</p><p>而<code>xxx</code>是即时生成的字符串，用以确保整个分隔符不会在文件或表单项的内容中出现</p><p>每个表单项必须包含一个 <code>Content-Disposition</code> 头，其他的头信息则为可选项， 比如 <code>Content-Type</code></p><p><code>Content-Disposition</code> 包含了 <code>type</code>和 一个名字为<code>name</code>的 <code>parameter</code>，<code>type</code> 是 <code>form-data</code>，<code>name</code>参数的值则为表单控件（也即 field）的名字，如果是文件，那么还有一个 <code>filename</code>参数，值就是文件名</p><div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre class="language-kotlin"><code>Content<span class="token operator">-</span>Disposition<span class="token operator">:</span> form<span class="token operator">-</span><span class="token keyword">data</span><span class="token punctuation">;</span> name<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;user&quot;</span></span><span class="token punctuation">;</span> filename<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot;logo.png&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至于使用<code>multipart/form-data</code>，是因为文件是以二进制的形式存在，其作用是专门用于传输大型二进制数据，效率高</p><h3 id="二、如何实现" tabindex="-1"><a class="header-anchor" href="#二、如何实现"><span>二、如何实现</span></a></h3><p>关于文件的上传的上传，我们可以分成两步骤：</p><ul><li>文件的上传</li><li>文件的解析</li></ul><h3 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传"><span>文件上传</span></a></h3><p>传统前端文件上传的表单结构如下：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://localhost:8080/api/upload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span> <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multipart/form-data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>file<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>multiple<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>提交<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>action</code> 就是我们的提交到的接口，<code>enctype=&quot;multipart/form-data&quot;</code> 就是指定上传文件格式，<code>input</code> 的 <code>name</code> 属性一定要等于<code>file</code></p><h3 id="文件解析" tabindex="-1"><a class="header-anchor" href="#文件解析"><span>文件解析</span></a></h3><p>在服务器中，这里采用<code>koa2</code>中间件的形式解析上传的文件数据，分别有下面两种形式：</p><ul><li>koa-body</li><li>koa-multer</li></ul><h4 id="koa-body" tabindex="-1"><a class="header-anchor" href="#koa-body"><span>koa-body</span></a></h4><p>安装依赖</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>npm install koa-body
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入<code>koa-body</code>中间件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> koaBody <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa-body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">koaBody</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">multipart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formidable</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">maxFileSize</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 设置上传文件大小最大限制，默认2M</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取上传的文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> file <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>files<span class="token punctuation">.</span>file<span class="token punctuation">;</span> <span class="token comment">// 获取上传文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取文件数据后，可以通过<code>fs</code>模块将文件保存到指定目录</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/uploadfile&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 上传单个文件</span>
  <span class="token keyword">const</span> file <span class="token operator">=</span> ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>files<span class="token punctuation">.</span>file<span class="token punctuation">;</span> <span class="token comment">// 获取上传文件</span>
  <span class="token comment">// 创建可读流</span>
  <span class="token keyword">const</span> reader <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;public/upload/&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>file<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 创建可写流</span>
  <span class="token keyword">const</span> upStream <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 可读流通过管道写入可写流</span>
  reader<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>upStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;上传成功！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="koa-multer" tabindex="-1"><a class="header-anchor" href="#koa-multer"><span>koa-multer</span></a></h4><p>安装依赖：</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>npm install koa-multer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 <code>multer</code> 中间件实现文件上传</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> storage <span class="token operator">=</span> multer<span class="token punctuation">.</span><span class="token function">diskStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">destination</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;./upload/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">filename</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> file<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">cb</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>originalname<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  storage<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fileRouter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fileRouter<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>req<span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取文件</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>fileRouter<span class="token punctuation">.</span><span class="token function">routes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,40),r={href:"https://segmentfault.com/a/1190000037411957",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.jianshu.com/p/29e38bcc8a1d",target:"_blank",rel:"noopener noreferrer"};function k(m,v){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("https://segmentfault.com/a/1190000037411957"),t(a)])]),n("li",null,[n("a",d,[s("https://www.jianshu.com/p/29e38bcc8a1d"),t(a)])])])])}const g=e(i,[["render",k],["__file","file_upload.html.vue"]]),f=JSON.parse(`{"path":"/posts/interview/NodeJS/file_upload.html","title":"如何实现文件上传？说说你的思路","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-如何实现文件上传？说说你的思路","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>如何实现文件上传？说说你的思路","order":4,"star":4,"date":"2023-03-10T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","NodeJS"],"tag":["interview","NodeJS"],"shortTitle":"前端物语|面试物语-如何实现文件上传？说说你的思路","isOriginal":false,"head":[["meta",{"name":"keywords","content":"如何实现文件上传？说说你的思路"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/NodeJS/file_upload.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/NodeJS/file_upload.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"如何实现文件上传？说说你的思路"}],["meta",{"property":"og:description","content":"前端物语|面试物语-如何实现文件上传？说说你的思路"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"如何实现文件上传？说说你的思路"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"NodeJS"}],["meta",{"property":"article:published_time","content":"2023-03-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何实现文件上传？说说你的思路\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/248a5580-ce60-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-03-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[{"level":3,"title":"二、如何实现","slug":"二、如何实现","link":"#二、如何实现","children":[]},{"level":3,"title":"文件上传","slug":"文件上传","link":"#文件上传","children":[]},{"level":3,"title":"文件解析","slug":"文件解析","link":"#文件解析","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1050},"filePathRelative":"posts/interview/NodeJS/file_upload.md","localizedDate":"2023年3月10日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/248a5580-ce60-11eb-85f6-6fac77c0c9b3.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>文件上传在日常开发中应用很广泛，我们发微博、发微信朋友圈都会用到了图片上传功能</p>\\n<p>因为浏览器限制，浏览器不能直接操作文件系统的，需要通过浏览器所暴露出来的统一接口，由用户主动授权发起来访问文件动作，然后读取文件内容进指定内存里，最后执行提交请求操作，将内存里的文件内容数据上传到服务端，服务端解析前端传来的数据信息后存入文件里</p>"}`);export{g as comp,f as data};