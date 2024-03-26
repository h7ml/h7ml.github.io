import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,d as n,e as i,a as c,f as o}from"./app-Cbix2SPG.js";const l={},r=o(`<h1 id="说说你对-typescript-中接口的理解-应用场景" tabindex="-1"><a class="header-anchor" href="#说说你对-typescript-中接口的理解-应用场景"><span>说说你对 TypeScript 中接口的理解？应用场景？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/193389b0-0b2b-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p><strong>接口</strong>是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的<strong>类</strong>去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法</p><p>简单来讲，一个接口所描述的是一个对象相关的属性和方法，但并不提供具体创建此对象实例的方法</p><p><code>typescript</code>的核心功能之一就是对类型做检测，虽然这种检测方式是“鸭式辨型法”，而接口的作用就是为为这些类型命名和为你的代码或第三方代码定义一个约定</p><h2 id="二、使用方式" tabindex="-1"><a class="header-anchor" href="#二、使用方式"><span>二、使用方式</span></a></h2><p>接口定义如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">interface_name</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如有一个函数，这个函数接受一个 <code>User</code> 对象，然后返回这个 <code>User</code> 对象的 <code>name</code> 属性:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUserName</span> <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，参数需要有一个<code>user</code>的<code>name</code>属性，可以通过接口描述<code>user</code>参数的结构</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getUserName</span> <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些属性并不一定全部实现，上述传入的对象必须拥有<code>name</code>和<code>age</code>属性，否则<code>typescript</code>在编译阶段会报错，如下图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/25d3a790-0b2b-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果不想要<code>age</code>属性的话，这时候可以采用<strong>可选属性</strong>，如下表示：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候<code>age</code>属性则可以是<code>number</code>类型或者<code>undefined</code>类型</p><p>有些时候，我们想要一个属性变成只读属性，在<code>typescript</code>只需要使用<code>readonly</code>声明，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> isMale<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们修改属性的时候，就会出现警告，如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/2f6d3c30-0b2b-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是属性中有一个函数，可以如下表示：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token keyword">readonly</span> isMale<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token function-variable function">say</span><span class="token operator">:</span> <span class="token punctuation">(</span>words<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传递的对象不仅仅是上述的属性，这时候可以使用：</p><ul><li>类型推断</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>interface User {
    name: string
    age: number
}

const getUserName = (user: User) =&gt; user.name
getUserName({color: &#39;yellow&#39;} as User)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>给接口添加字符串<strong>索引签名</strong></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口还能实现继承，如下图：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/38a41760-0b2b-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>也可以继承多个，父类通过逗号隔开，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Father</span> <span class="token punctuation">{</span>
  color<span class="token operator">:</span> String<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Mother</span> <span class="token punctuation">{</span>
  height<span class="token operator">:</span> Number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">,</span> Mother <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> Number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景"><span>三、应用场景</span></a></h2><p>例如在<code>javascript</code>中定义一个函数，用来获取用户的姓名和年龄：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">return</span> <span class="token literal-property property">name</span><span class="token operator">:</span> $<span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> $<span class="token punctuation">{</span>user<span class="token punctuation">.</span>age<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果多人开发的都需要用到这个函数的时候，如果没有注释，则可能出现各种运行时的错误，这时候就可以使用接口定义参数变量：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 先定义一个接口</span>
<span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> getUserInfo <span class="token operator">=</span> <span class="token punctuation">(</span>user<span class="token operator">:</span> IUser<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>user<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 正确的调用</span>
<span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;koala&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>包括后面讲到类的时候也会应用到接口</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,40),d={href:"https://www.tslang.cn/docs/handbook/interfaces.html",target:"_blank",rel:"noopener noreferrer"};function u(m,k){const s=e("ExternalLinkIcon");return t(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[i("https://www.tslang.cn/docs/handbook/interfaces.html"),c(s)])])])])}const b=a(l,[["render",u],["__file","interface.html.vue"]]),h=JSON.parse(`{"path":"/posts/interview/typescript/interface.html","title":"说说你对 TypeScript 中接口的理解？应用场景？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对 TypeScript 中接口的理解？应用场景？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说你对 TypeScript 中接口的理解？应用场景？","order":4,"star":4,"date":"2023-03-03T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","typescript"],"tag":["interview","typescript"],"shortTitle":"前端物语|面试物语-说说你对 TypeScript 中接口的理解？应用场景？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对 TypeScript 中接口的理解？应用场景？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/typescript/interface.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/typescript/interface.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对 TypeScript 中接口的理解？应用场景？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对 TypeScript 中接口的理解？应用场景？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对 TypeScript 中接口的理解？应用场景？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:published_time","content":"2023-03-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对 TypeScript 中接口的理解？应用场景？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/193389b0-0b2b-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/25d3a790-0b2b-11ec-a752-75723a64e8f5.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/2f6d3c30-0b2b-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/38a41760-0b2b-11ec-8e64-91fdec0f05a1.png\\"],\\"datePublished\\":\\"2023-03-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、使用方式","slug":"二、使用方式","link":"#二、使用方式","children":[]},{"level":2,"title":"三、应用场景","slug":"三、应用场景","link":"#三、应用场景","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"posts/interview/typescript/interface.md","localizedDate":"2023年3月3日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/193389b0-0b2b-11ec-8e64-91fdec0f05a1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p><strong>接口</strong>是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的<strong>类</strong>去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法</p>"}`);export{b as comp,h as data};
