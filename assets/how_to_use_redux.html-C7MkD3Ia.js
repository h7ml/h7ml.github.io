import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,d as n,e as a,a as e,f as i}from"./app-Cbix2SPG.js";const l={},r=i(`<h1 id="你在-react-项目中是如何使用-redux-的-项目结构是如何划分的" tabindex="-1"><a class="header-anchor" href="#你在-react-项目中是如何使用-redux-的-项目结构是如何划分的"><span>你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景"><span>一、背景</span></a></h2><p>在前面文章了解中，我们了解到<code>redux</code>是用于数据状态管理，而<code>react</code>是一个视图层面的库</p><p>如果将两者连接在一起，可以使用官方推荐<code>react-redux</code>库，其具有高效且灵活的特性</p><p><code>react-redux</code>将组件分成：</p><ul><li>容器组件：存在逻辑处理</li><li>UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制</li></ul><p>通过<code>redux</code>将整个应用状态存储到<code>store</code>中，组件可以派发<code>dispatch</code>行为<code>action</code>给<code>store</code></p><p>其他组件通过订阅<code>store</code>中的状态<code>state</code>来更新自身的视图</p><h2 id="二、如何做" tabindex="-1"><a class="header-anchor" href="#二、如何做"><span>二、如何做</span></a></h2><p>使用<code>react-redux</code>分成了两大核心：</p><ul><li>Provider</li><li>connection</li></ul><h3 id="provider" tabindex="-1"><a class="header-anchor" href="#provider"><span>Provider</span></a></h3><p>在<code>redux</code>中存在一个<code>store</code>用于存储<code>state</code>，如果将这个<code>store</code>存放在顶层元素中，其他组件都被包裹在顶层元素之上</p><p>那么所有的组件都能够受到<code>redux</code>的控制，都能够获取到<code>redux</code>中的数据</p><p>使用方式如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>Provider store <span class="token operator">=</span> <span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Provider<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connection" tabindex="-1"><a class="header-anchor" href="#connection"><span>connection</span></a></h3><p><code>connect</code>方法将<code>store</code>上的<code>getState</code>和 <code>dispatch</code>包装成组件的<code>props</code></p><p>导入<code>conect</code>如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以传递两个参数：</p><ul><li><p>mapStateToProps</p></li><li><p>mapDispatchToProps</p></li></ul><h3 id="mapstatetoprops" tabindex="-1"><a class="header-anchor" href="#mapstatetoprops"><span>mapStateToProps</span></a></h3><p>把<code>redux</code>中的数据映射到<code>react</code>中的<code>props</code>中去</p><p>如下：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">// prop : state.xxx  | 意思是将state中的某个数据映射到props中</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> state<span class="token punctuation">.</span>bar<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内部就能够通过<code>props</code>获取到<code>store</code>中的数据</p><div class="language-cons line-numbers-mode" data-ext="cons" data-title="cons"><pre class="language-cons"><code>class Foo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
         // 这样子渲染的其实就是state.bar的数据了
            &lt;div&gt;this.props.foo&lt;/div&gt;
        )
    }
}
Foo = connect()(Foo)
export default Foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mapdispatchtoprops" tabindex="-1"><a class="header-anchor" href="#mapdispatchtoprops"><span>mapDispatchToProps</span></a></h3><p>将<code>redux</code>中的<code>dispatch</code>映射到组件内部的<code>props</code>中</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认传递参数就是dispatch</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increatment&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>点击increase<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Foo <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3><p>整体流程图大致如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、项目结构" tabindex="-1"><a class="header-anchor" href="#三、项目结构"><span>三、项目结构</span></a></h2><p>可以根据项目具体情况进行选择，以下列出两种常见的组织结构</p><h4 id="按角色组织-mvc" tabindex="-1"><a class="header-anchor" href="#按角色组织-mvc"><span>按角色组织（MVC）</span></a></h4><p>角色如下：</p><ul><li>reducers</li><li>actions</li><li>components</li><li>containers</li></ul><p>参考如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>reducers <span class="token operator">/</span> todoReducer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
filterReducer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
actions <span class="token operator">/</span> todoAction<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
filterActions<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
components <span class="token operator">/</span> todoList<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
todoItem<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
filter<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
containers <span class="token operator">/</span> todoListContainer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
todoItemContainer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
filterContainer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="按功能组织" tabindex="-1"><a class="header-anchor" href="#按功能组织"><span>按功能组织</span></a></h4><p>使用<code>redux</code>使用功能组织项目，也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码</p><p><code>Redux</code>中，不同的角色就是<code>reducer</code>、<code>actions</code>和视图，而应用功能对应的就是用户界面的交互模块</p><p>参考如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>todoList <span class="token operator">/</span> actions<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
actionTypes<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
index<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
reducer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
views <span class="token operator">/</span> components<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
containers<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
filter <span class="token operator">/</span> actions<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
actionTypes<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
index<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
reducer<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
views <span class="token operator">/</span> components<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
container<span class="token punctuation">.</span>js<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个功能模块对应一个目录，每个目录下包含同样的角色文件：</p><ul><li>actionTypes.js 定义 action 类型</li><li>actions.js 定义 action 构造函数</li><li>reducer.js 定义这个功能模块如果响应 actions.js 定义的动作</li><li>views 包含功能模块中所有的 React 组件，包括展示组件和容器组件</li><li>index.js 把所有的角色导入，统一导出</li></ul><p>其中<code>index</code>模块用于导出对外的接口</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> actions <span class="token keyword">from</span> <span class="token string">&#39;./actions.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">&#39;./reducer.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> view <span class="token keyword">from</span> <span class="token string">&#39;./views/container.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入方法如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> actions<span class="token punctuation">,</span> reducer<span class="token punctuation">,</span> view <span class="token keyword">as</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./xxxx&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,57),d={href:"https://www.redux.org.cn/docs/basics/UsageWithReact.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://segmentfault.com/a/1190000010384268",target:"_blank",rel:"noopener noreferrer"};function v(m,k){const s=p("ExternalLinkIcon");return o(),c("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("https://www.redux.org.cn/docs/basics/UsageWithReact.html"),e(s)])]),n("li",null,[n("a",u,[a("https://segmentfault.com/a/1190000010384268"),e(s)])])])])}const g=t(l,[["render",v],["__file","how_to_use_redux.html.vue"]]),x=JSON.parse(`{"path":"/posts/interview/React/how_to_use_redux.html","title":"你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？","order":1,"star":1,"date":"2023-02-28T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","React"],"tag":["interview","React"],"shortTitle":"前端物语|面试物语-你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/React/how_to_use_redux.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/React/how_to_use_redux.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"React"}],["meta",{"property":"article:published_time","content":"2023-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你在 React 项目中是如何使用 Redux 的? 项目结构是如何划分的？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/3e47db10-e7dc-11eb-85f6-6fac77c0c9b3.png\\"],\\"datePublished\\":\\"2023-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、背景","slug":"一、背景","link":"#一、背景","children":[]},{"level":2,"title":"二、如何做","slug":"二、如何做","link":"#二、如何做","children":[{"level":3,"title":"Provider","slug":"provider","link":"#provider","children":[]},{"level":3,"title":"connection","slug":"connection","link":"#connection","children":[]},{"level":3,"title":"mapStateToProps","slug":"mapstatetoprops","link":"#mapstatetoprops","children":[]},{"level":3,"title":"mapDispatchToProps","slug":"mapdispatchtoprops","link":"#mapdispatchtoprops","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"三、项目结构","slug":"三、项目结构","link":"#三、项目结构","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"posts/interview/React/how_to_use_redux.md","localizedDate":"2023年2月28日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/31a4aff0-e7dc-11eb-ab90-d9ae814b240d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、背景</h2>\\n<p>在前面文章了解中，我们了解到<code>redux</code>是用于数据状态管理，而<code>react</code>是一个视图层面的库</p>\\n<p>如果将两者连接在一起，可以使用官方推荐<code>react-redux</code>库，其具有高效且灵活的特性</p>"}`);export{g as comp,x as data};