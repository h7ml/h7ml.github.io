import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-Cbix2SPG.js";const t={},p=e(`<h2 id="urllib" tabindex="-1"><a class="header-anchor" href="#urllib"><span>Urllib</span></a></h2><p>urllib 包 包含以下几个模块：</p><ul><li><strong>urllib.request</strong> - 打开和读取 URL。</li><li><strong>urllib.error</strong> - 包含 urllib.request 抛出的异常。</li><li><strong>urllib.parse</strong> - 解析 URL。</li><li><strong>urllib.robotparser</strong> - 解析 robots.txt 文件。</li></ul><figure><img src="https://picgo-any.oss-cn-shanghai.aliyuncs.com/img/202208142159875.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="urllib-request" tabindex="-1"><a class="header-anchor" href="#urllib-request"><span>urllib.request</span></a></h2><p>urllib.request 定义了一些打开 URL 的函数和类，包含授权验证、重定向、浏览器 cookies 等。</p><p>urllib.request 可以模拟浏览器的一个请求发起过程。</p><p>我们可以使用 urllib.request 的 urlopen 方法来打开一个 URL，语法格式如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>timeout<span class="token punctuation">,</span> <span class="token punctuation">]</span><span class="token operator">*</span><span class="token punctuation">,</span> cafile<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> capath<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> cadefault<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> context<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>url</strong>：url 地址。</li><li><strong>data</strong>：发送到服务器的其他数据对象，默认为 None。</li><li><strong>timeout</strong>：设置访问超时时间。</li><li><strong>cafile 和 capath</strong>：cafile 为 CA 证书， capath 为 CA 证书的路径，使用 HTTPS 需要用到。</li><li><strong>cadefault</strong>：已经被弃用。</li><li><strong>context</strong>：ssl.SSLContext 类型，用来指定 SSL 设置。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">as</span> req

url <span class="token operator">=</span> <span class="token string">&#39;https://ys.mihoyo.com/&#39;</span>
<span class="token comment"># 基本使用</span>

<span class="token comment"># 类型和方法</span>
<span class="token comment"># 模拟浏览器向服务器发送请求</span>
res1 <span class="token operator">=</span> req<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>url<span class="token punctuation">)</span>

<span class="token comment"># HTTPResponse 类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># read 方法 返回的是字节形式的二进制数据</span>
<span class="token comment"># 参数为空返回全部字节，传人数字就读取多个字节</span>
<span class="token comment"># decode 为解码，把二进制的数据转换为某个编码类型的数据</span>
context1 <span class="token operator">=</span> res1<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>context1<span class="token punctuation">)</span>

<span class="token comment"># 读取一行</span>
context2 <span class="token operator">=</span> res1<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>context2<span class="token punctuation">)</span>

<span class="token comment"># 一行一行读取直到结束</span>
context3 <span class="token operator">=</span> res1<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>context3<span class="token punctuation">)</span>

<span class="token comment"># 返回请求状态吗</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res1<span class="token punctuation">.</span>getcode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 返回url</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res1<span class="token punctuation">.</span>geturl<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># 返回状态信息</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res1<span class="token punctuation">.</span>getheaders<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 下载</span>
<span class="token comment"># 参数1url是要下载的路径，第二个参数是文件的名称filename</span>
urllib <span class="token operator">=</span> req<span class="token punctuation">.</span>urlretrieve<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟头部信息" tabindex="-1"><a class="header-anchor" href="#模拟头部信息"><span>模拟头部信息</span></a></h3><p>我们抓取网页一般需要对 headers（网页头信息）进行模拟，这时候需要使用到 urllib.request.Request 类：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">urllib</span><span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> origin_req_host<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> unverifiable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> method<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>url</strong>：url 地址。</li><li><strong>data</strong>：发送到服务器的其他数据对象，默认为 None。</li><li><strong>headers</strong>：HTTP 请求的头部信息，字典格式。</li><li><strong>origin_req_host</strong>：请求的主机地址，IP 或域名。</li><li><strong>unverifiable</strong>：很少用整个参数，用于设置网页是否需要验证，默认是 False。。</li><li><strong>method</strong>：请求方法， 如 GET、POST、DELETE、PUT 等。</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse

url <span class="token operator">=</span> <span class="token string">&#39;https://www.runoob.com/?s=&#39;</span>  <span class="token comment"># 菜鸟教程搜索页面</span>
keyword <span class="token operator">=</span> <span class="token string">&#39;Python 教程&#39;</span>
key_code <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>quote<span class="token punctuation">(</span>keyword<span class="token punctuation">)</span>  <span class="token comment"># 对请求进行编码</span>
url_all <span class="token operator">=</span> url<span class="token operator">+</span>key_code
header <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;User-Agent&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36&#39;</span>
<span class="token punctuation">}</span>   <span class="token comment">#头部信息</span>
request <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url_all<span class="token punctuation">,</span>headers<span class="token operator">=</span>header<span class="token punctuation">)</span>
reponse <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>

fh <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;./urllib_test_runoob_search.html&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span>    <span class="token comment"># 将文件写入到当前目录中</span>
fh<span class="token punctuation">.</span>write<span class="token punctuation">(</span>reponse<span class="token punctuation">)</span>
fh<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请求对象的定制</strong></p><p>UA 介绍:User Agent 中文名为<strong>用户代理</strong>，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统</p><p>及版本、CPU 类型、浏览器及版本。浏览器内核、浏览器渲染引擎、浏览器语言、浏览器插件等</p><h2 id="urllib-parse" tabindex="-1"><a class="header-anchor" href="#urllib-parse"><span>urllib.parse</span></a></h2><p>urllib.parse 用于解析 URL，格式如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlparse<span class="token punctuation">(</span>urlstring<span class="token punctuation">,</span> scheme<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> allow_fragments<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>urlstring 为 字符串的 url 地址，scheme 为协议类型，</p><p>allow_fragments 参数为 false，则无法识别片段标识符。相反，它们被解析为路径，参数或查询组件的一部分，并 fragment 在返回值中设置为空字符串。</p><p>以上实例输出结果为：</p><p>完整内容如下：</p><table><thead><tr><th>属性</th><th>索引</th><th>值</th><th>值（如果不存在）</th></tr></thead><tbody><tr><td><code>scheme</code></td><td>0</td><td>URL 协议</td><td><em>scheme</em> 参数</td></tr><tr><td><code>netloc</code></td><td>1</td><td>网络位置部分</td><td>空字符串</td></tr><tr><td><code>path</code></td><td>2</td><td>分层路径</td><td>空字符串</td></tr><tr><td><code>params</code></td><td>3</td><td>最后路径元素的参数</td><td>空字符串</td></tr><tr><td><code>query</code></td><td>4</td><td>查询组件</td><td>空字符串</td></tr><tr><td><code>fragment</code></td><td>5</td><td>片段识别</td><td>空字符串</td></tr><tr><td><code>username</code></td><td></td><td>用户名</td><td><code>None</code></td></tr><tr><td><code>password</code></td><td></td><td>密码</td><td><code>None</code></td></tr><tr><td><code>hostname</code></td><td></td><td>主机名（小写）</td><td><code>None</code></td></tr><tr><td><code>port</code></td><td></td><td>端口号为整数（如果存在）</td><td><code>None</code></td></tr></tbody></table><h3 id="quote-方法" tabindex="-1"><a class="header-anchor" href="#quote-方法"><span>.quote()方法</span></a></h3><p>将中文字符转换成 Unicode 编码格式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kwd = urllib.parse.quote(&#39;原神&#39;)
print(kwd) # %E5%8E%9F%E7%A5%9E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="urlencode-方法" tabindex="-1"><a class="header-anchor" href="#urlencode-方法"><span>.urlencode()方法</span></a></h3><p>可以将字典转化成 query 穿惨格式</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;wd&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;原神&#39;</span>
<span class="token punctuation">}</span>
data <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment"># wd=%E5%8E%9F%E7%A5%9E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="urllib-error" tabindex="-1"><a class="header-anchor" href="#urllib-error"><span>urllib.error</span></a></h2><p>urllib.error 模块为 urllib.request 所引发的异常定义了异常类，基础异常类是 URLError。</p><p>urllib.error 包含了两个方法，URLError 和 HTTPError。</p><p>URLError 是 OSError 的一个子类，用于处理程序在遇到问题时会引发此异常（或其派生的异常），包含的属性 reason 为引发异常的原因。</p><p>HTTPError 是 URLError 的一个子类，用于处理特殊 HTTP 错误例如作为认证请求的时候，包含的属性 <strong>code</strong> 为 HTTP 的状态码， <strong>reason</strong> 为引发异常的原因，<strong>headers</strong> 为导致 HTTPError 的特定 HTTP 请求的 HTTP 响应头。</p><p>对不存在的网页抓取并处理异常:</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>error

myURL1 <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span><span class="token string">&quot;https://www.runoob.com/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>myURL1<span class="token punctuation">.</span>getcode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 200</span>

<span class="token keyword">try</span><span class="token punctuation">:</span>
    myURL2 <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span><span class="token string">&quot;https://www.runoob.com/no.html&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> urllib<span class="token punctuation">.</span>error<span class="token punctuation">.</span>HTTPError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">if</span> e<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">404</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">)</span>   <span class="token comment"># 404</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="encode-方法" tabindex="-1"><a class="header-anchor" href="#encode-方法"><span>encode()方法</span></a></h2><p><strong>描述</strong></p><p>encode() 方法以 <em>encoding</em> <strong>指定的编码格式编码字符串</strong>。errors 参数可以指定不同的错误处理方案。</p><p><strong>语法</strong></p><p>encode()方法语法：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">,</span>errors<span class="token operator">=</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li>encoding -- 要使用的编码，如&quot;UTF-8&quot;。</li><li>errors -- 设置不同错误的处理方案。默认为 &#39;strict&#39;,意为编码错误引起一个 UnicodeError。 其他可能得值有 &#39;ignore&#39;, &#39;replace&#39;, &#39;xmlcharrefreplace&#39;, &#39;backslashreplace&#39; 以及通过 codecs.register_error() 注册的任何值。</li></ul><p><strong>返回值</strong></p><p>该方法返回编码后的字符串。</p><h2 id="decode-方法" tabindex="-1"><a class="header-anchor" href="#decode-方法"><span>decode()方法</span></a></h2><p><strong>描述</strong></p><p>decode() 方法以 <em>encoding</em> <strong>指定的编码格式解码字符串</strong>。默认编码为字符串编码。</p><p><strong>语法</strong></p><p>decode()方法语法：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token builtin">str</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span>encoding<span class="token operator">=</span><span class="token string">&#39;UTF-8&#39;</span><span class="token punctuation">,</span>errors<span class="token operator">=</span><span class="token string">&#39;strict&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数</strong></p><ul><li>encoding -- 要使用的编码，如&quot;UTF-8&quot;。</li><li>errors -- 设置不同错误的处理方案。默认为 &#39;strict&#39;,意为编码错误引起一个 UnicodeError。 其他可能得值有 &#39;ignore&#39;, &#39;replace&#39;, &#39;xmlcharrefreplace&#39;, &#39;backslashreplace&#39; 以及通过 codecs.register_error() 注册的任何值。</li></ul><p><strong>返回值</strong></p><p>该方法返回解码后的字符串。</p><h2 id="post-请求案例百度翻译" tabindex="-1"><a class="header-anchor" href="#post-请求案例百度翻译"><span>post 请求案例百度翻译</span></a></h2><ul><li>Post 请求的参数必须编码，先通过<code>urlencode</code>转换为二进制形式，在通过<code>encode</code>转换为<code>utf-8</code></li><li>响应回来的数据是 json 需要进行反序列（loads）</li></ul><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">as</span> request
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">as</span> parse

url <span class="token operator">=</span> <span class="token string">&#39;https://fanyi.baidu.com/sug&#39;</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36&quot;</span>
<span class="token punctuation">}</span>

data <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;kw&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;spider&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment"># post 请求参数必须进行编码</span>
<span class="token comment"># urlencode 是讲对象转化为query路径参数的形式（kw=spider）,如果用post请则必须通过encode(&#39;utf-8&#39;)在将其转化为二进制形式</span>
data <span class="token operator">=</span> parse<span class="token punctuation">.</span>urlencode<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 请求对象定制</span>
UrlALl <span class="token operator">=</span> request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

<span class="token comment"># 发送请求</span>
response <span class="token operator">=</span> request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>UrlALl<span class="token punctuation">)</span>

<span class="token comment"># 请求响应数据</span>
context <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>

obj <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>context<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookie-反爬" tabindex="-1"><a class="header-anchor" href="#cookie-反爬"><span>Cookie 反爬</span></a></h2><p>有的加密接口会携带 cookie 或者其他令牌，这个不是固定的每个接口安全方式不一样，所有需要去分析，一般 cookie 是最常见的，在 headers 中添加</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>headers = <span class="token punctuation">{</span>
    &#39;Cookie&#39;<span class="token operator">:</span> &#39;BAIDUID=A78C83243EC370D64EB9127421CDCD80<span class="token operator">:</span>FG=<span class="token number">1</span>; BAIDUID_BFESS=A78C83243EC370D64EB9127421CDCD80<span class="token operator">:</span>FG=<span class="token number">1</span>; BDUSS=duU0hBbzJhflBMQVZRMzB1Q0xRcHVKendKdnhRVjhiZkN1RzRwd0duQmc1eHRqSVFBQUFBJCQAAAAAAAAAAAEAAACWCc5fZ3bXytS0aG91c2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBa9GJgWvRiNV; BDUSS_BFESS=duU0hBbzJhflBMQVZRMzB1Q0xRcHVKendKdnhRVjhiZkN1RzRwd0duQmc1eHRqSVFBQUFBJCQAAAAAAAAAAAEAAACWCc5fZ3bXytS0aG91c2UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBa9GJgWvRiNV; BIDUPSID=A78C83243EC370D64EB9127421CDCD80; PSTM=<span class="token number">1660276134</span>; ZFY=lTybp1mqT34VXA1zk3GnQ7ZEuvOwOkTsrZ5peYD5HLk<span class="token operator">:</span>C; APPGUIDE_10_0_2=<span class="token number">1</span>; REALTIME_TRANS_SWITCH=<span class="token number">1</span>; FANYI_WORD_SWITCH=<span class="token number">1</span>; HISTORY_SWITCH=<span class="token number">1</span>; SOUND_SPD_SWITCH=<span class="token number">1</span>; SOUND_PREFER_SWITCH=<span class="token number">1</span>; Hm_lvt_64ecd82404c51e03dc91cb9e8c025574=<span class="token number">1660527759</span>; Hm_lpvt_64ecd82404c51e03dc91cb9e8c025574=<span class="token number">1660527759</span>; ab_sr=<span class="token number">1.0</span>.1_Y2RiYmNlYzA0MTQ1ZjA4Y2UzYWVjMDRmZWQxZjIwOTAyMGY3MDdmOThhYjIyZDk3ZTg2ZWE0OGE2YmIxYTBkNjIxYWI2ZGY3NjMzYmZiMTUwYjZkYTVkMWFhMzgzZWNlZjk4ZjYzYjRlODI1OTE5NjNhNDk1YTNmYzA2YTZjZDc1OGM2M2ZiMDkyM2JhMWU2MDExNWQwMWNmZWMyNTA3ZWViNmQzZjlmNGFjZWUwOGNmYmFkZDhhNDQxYjFlNTZi&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handler-代理" tabindex="-1"><a class="header-anchor" href="#handler-代理"><span>handler 代理</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>xxxxx

request <span class="token operator">=</span> request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> headers<span class="token punctuation">)</span>

proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token string">&#39;http&#39;</span><span class="token punctuation">:</span>xxxxx
<span class="token punctuation">}</span>

<span class="token comment"># hander build_opener open</span>
handler <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_<span class="token punctuation">.</span>ProxyHandler<span class="token punctuation">(</span>proxies <span class="token operator">=</span> proxies<span class="token punctuation">)</span>

openr <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>build_opener<span class="token punctuation">(</span>handler<span class="token punctuation">)</span>

response <span class="token operator">=</span> openr<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span>

xxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68),o=[p];function l(i,c){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","urllib.html.vue"]]),k=JSON.parse('{"path":"/posts/Python/urllib.html","title":"urllib","lang":"zh-CN","frontmatter":{"icon":"python","order":4,"date":"2022-05-20T00:00:00.000Z","author":"h7ml","category":"python","tag":"python","title":"urllib","description":"Urllib urllib 包 包含以下几个模块： urllib.request - 打开和读取 URL。 urllib.error - 包含 urllib.request 抛出的异常。 urllib.parse - 解析 URL。 urllib.robotparser - 解析 robots.txt 文件。 urllib.request urllib...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/Python/urllib.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/Python/urllib.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"urllib"}],["meta",{"property":"og:description","content":"Urllib urllib 包 包含以下几个模块： urllib.request - 打开和读取 URL。 urllib.error - 包含 urllib.request 抛出的异常。 urllib.parse - 解析 URL。 urllib.robotparser - 解析 robots.txt 文件。 urllib.request urllib..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://picgo-any.oss-cn-shanghai.aliyuncs.com/img/202208142159875.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:published_time","content":"2022-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"urllib\\",\\"image\\":[\\"https://picgo-any.oss-cn-shanghai.aliyuncs.com/img/202208142159875.svg\\"],\\"datePublished\\":\\"2022-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"Urllib","slug":"urllib","link":"#urllib","children":[]},{"level":2,"title":"urllib.request","slug":"urllib-request","link":"#urllib-request","children":[{"level":3,"title":"模拟头部信息","slug":"模拟头部信息","link":"#模拟头部信息","children":[]}]},{"level":2,"title":"urllib.parse","slug":"urllib-parse","link":"#urllib-parse","children":[{"level":3,"title":".quote()方法","slug":"quote-方法","link":"#quote-方法","children":[]},{"level":3,"title":".urlencode()方法","slug":"urlencode-方法","link":"#urlencode-方法","children":[]}]},{"level":2,"title":"urllib.error","slug":"urllib-error","link":"#urllib-error","children":[]},{"level":2,"title":"encode()方法","slug":"encode-方法","link":"#encode-方法","children":[]},{"level":2,"title":"decode()方法","slug":"decode-方法","link":"#decode-方法","children":[]},{"level":2,"title":"post 请求案例百度翻译","slug":"post-请求案例百度翻译","link":"#post-请求案例百度翻译","children":[]},{"level":2,"title":"Cookie 反爬","slug":"cookie-反爬","link":"#cookie-反爬","children":[]},{"level":2,"title":"handler 代理","slug":"handler-代理","link":"#handler-代理","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":5.65,"words":1694},"filePathRelative":"posts/Python/urllib.md","localizedDate":"2022年5月20日","excerpt":"<h2>Urllib</h2>\\n<p>urllib 包 包含以下几个模块：</p>\\n<ul>\\n<li><strong>urllib.request</strong> - 打开和读取 URL。</li>\\n<li><strong>urllib.error</strong> - 包含 urllib.request 抛出的异常。</li>\\n<li><strong>urllib.parse</strong> - 解析 URL。</li>\\n<li><strong>urllib.robotparser</strong> - 解析 robots.txt 文件。</li>\\n</ul>\\n<figure><img src=\\"https://picgo-any.oss-cn-shanghai.aliyuncs.com/img/202208142159875.svg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{d as comp,k as data};