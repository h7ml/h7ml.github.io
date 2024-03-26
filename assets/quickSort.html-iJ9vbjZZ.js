import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as c,c as i,d as n,e as s,a as t,f as e}from"./app-Cbix2SPG.js";const l={},r=e('<h1 id="说说你对快速排序的理解-如何实现-应用场景" tabindex="-1"><a class="header-anchor" href="#说说你对快速排序的理解-如何实现-应用场景"><span>说说你对快速排序的理解？如何实现？应用场景？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/bafae570-268a-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>快速排序（Quick Sort）算法是在冒泡排序的基础上进行改进的一种算法，从名字上看就知道该排序算法的特点是快、效率高，是处理大数据最快的排序算法之一</p><p>实现的基本思想是：通过一次排序将整个无序表分成相互独立的两部分，其中一部分中的数据都比另一部分中包含的数据的值小</p><p>然后继续沿用此方法分别对两部分进行同样的操作，直到每一个小部分不可再分，所得到的整个序列就变成有序序列</p><p>例如，对无序表 49，38，65，97，76，13，27，49 进行快速排序，大致过程为：</p>',7),u=n("ul",null,[n("li",null,[n("p",null,"首先从表中选取一个记录的关键字作为分割点（称为“枢轴”或者支点，一般选择第一个关键字），例如选取 49")]),n("li",{"27，38，13，49，65，97，76，49":""},[n("p",null,"将表格中大于 49 个放置于 49 的右侧，小于 49 的放置于 49 的左侧，假设完成后的无序表为：")]),n("li",null,[n("p",null,"以 49 为支点，将整个无序表分割成了两个部分，分别为{27，38，13}和{65，97，76，49}，继续采用此种方法分别对两个子表进行排序")]),n("li",{"49，65，97，76":""},[n("p",null,"前部分子表以 27 为支点，排序后的子表为{13，27，38}，此部分已经有序；后部分子表以 65 为支点，排序后的子表为")]),n("li",{"76，":"",97:""},[n("p",null,"此时前半部分子表中的数据已完成排序；后部分子表继续以 65 为支点，将其分割为{49}和{97，76}，前者不需排序，后者排序后的结果为")]),n("li",{"13，27，38，49，49，65，76，97":""},[n("p",null,"通过以上几步的排序，最后由子表{13，27，38}、{49}、{49}、{65}、{76，97}构成有序表：")])],-1),d=e(`<h2 id="二、如何实现" tabindex="-1"><a class="header-anchor" href="#二、如何实现"><span>二、如何实现</span></a></h2><p>可以分成以下步骤：</p><ul><li>分区：从数组中选择任意一个基准，所有比基准小的元素放在基准的左边，比基准大的元素放到基准的右边</li><li>递归：递归地对基准前后的子数组进行分区</li></ul><figure><img src="https://www.runoob.com/wp-content/uploads/2019/03/quickSort.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>用代码表示则如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">quickSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mid <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 基准元素</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> mid<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速排序是冒泡排序的升级版，最坏情况下每一次基准元素都是数组中最小或者最大的元素，则快速排序就是冒泡排序</p><p>这种情况时间复杂度就是冒泡排序的时间复杂度：<code>T[n] = n * (n-1) = n^2 + n</code>，也就是<code>O(n^2)</code></p><p>最好情况下是<code>O(nlogn)</code>，其中递归算法的时间复杂度公式：<code>T[n] = aT[n/b] + f(n)</code>，推导如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/b6019540-2b5e-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>关于上述代码实现的快速排序，可以看到是稳定的</p><h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景"><span>三、应用场景</span></a></h2><p>快速排序时间复杂度为<code>O(nlogn)</code>，是目前基于比较的内部排序中被认为最好的方法，当数据过大且数据杂乱无章时，则适合采用快速排序</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,14),k={href:"https://baike.baidu.com/item/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/369842",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.cnblogs.com/l199616j/p/10597245.html",target:"_blank",rel:"noopener noreferrer"};function h(g,f){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,u,d,n("ul",null,[n("li",null,[n("a",k,[s("https://baike.baidu.com/item/快速排序算法/369842"),t(a)])]),n("li",null,[n("a",m,[s("https://www.cnblogs.com/l199616j/p/10597245.html"),t(a)])])])])}const b=p(l,[["render",h],["__file","quickSort.html.vue"]]),y=JSON.parse('{"path":"/posts/interview/algorithm/quickSort.html","title":"说说你对快速排序的理解？如何实现？应用场景？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对快速排序的理解？如何实现？应用场景？","footer":"说说你对快速排序的理解？如何实现？应用场景？","order":12,"star":12,"date":"2023-03-31T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","algorithm"],"tag":["interview","algorithm"],"shortTitle":"前端物语|面试物语-说说你对快速排序的理解？如何实现？应用场景？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对快速排序的理解？如何实现？应用场景？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/algorithm/quickSort.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/algorithm/quickSort.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对快速排序的理解？如何实现？应用场景？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对快速排序的理解？如何实现？应用场景？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对快速排序的理解？如何实现？应用场景？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"algorithm"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对快速排序的理解？如何实现？应用场景？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/bafae570-268a-11ec-8e64-91fdec0f05a1.png\\",\\"https://www.runoob.com/wp-content/uploads/2019/03/quickSort.gif\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/b6019540-2b5e-11ec-8e64-91fdec0f05a1.png\\"],\\"datePublished\\":\\"2023-03-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、如何实现","slug":"二、如何实现","link":"#二、如何实现","children":[]},{"level":2,"title":"三、应用场景","slug":"三、应用场景","link":"#三、应用场景","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.3,"words":990},"filePathRelative":"posts/interview/algorithm/quickSort.md","localizedDate":"2023年3月31日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/bafae570-268a-11ec-8e64-91fdec0f05a1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>快速排序（Quick Sort）算法是在冒泡排序的基础上进行改进的一种算法，从名字上看就知道该排序算法的特点是快、效率高，是处理大数据最快的排序算法之一</p>\\n<p>实现的基本思想是：通过一次排序将整个无序表分成相互独立的两部分，其中一部分中的数据都比另一部分中包含的数据的值小</p>"}');export{b as comp,y as data};