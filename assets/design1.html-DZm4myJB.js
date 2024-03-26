import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as o,d as n,e as s,a as t,f as l}from"./app-Cbix2SPG.js";const c={},r=l(`<h1 id="说说你对分而治之、动态规划的理解-区别" tabindex="-1"><a class="header-anchor" href="#说说你对分而治之、动态规划的理解-区别"><span>说说你对分而治之、动态规划的理解？区别？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/298437b0-29d0-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、分而治之" tabindex="-1"><a class="header-anchor" href="#一、分而治之"><span>一、分而治之</span></a></h2><p>分而治之是算法设计中的一种方法，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并</p><p>关于分而治之的实现，都会经历三个步骤：</p><ul><li>分解：将原问题分解为若干个规模较小，相对独立，与原问题形式相同的子问题</li><li>解决：若子问题规模较小且易于解决时，则直接解。否则，递归地解决各子问题</li><li>合并：将各子问题的解合并为原问题的解</li></ul><p>实际上，关于分而治之的思想，我们在前面已经使用，例如归并排序的实现，同样经历了实现分而治之的三个步骤：</p><ul><li><p>分解：把数组从中间一分为二</p></li><li><p>解决：递归地对两个子数组进行归并排序</p></li><li><p>合并：将两个字数组合并称有序数组</p></li></ul><p>同样关于快速排序的实现，亦如此：</p><ul><li>分：选基准，按基准把数组分成两个字数组</li><li>解：递归地对两个字数组进行快速排序</li><li>合：对两个字数组进行合并</li></ul><p>同样二分搜索也能使用分而治之的思想去实现，代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> l<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、动态规划" tabindex="-1"><a class="header-anchor" href="#二、动态规划"><span>二、动态规划</span></a></h2><p>动态规划，同样是算法设计中的一种方法，是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法</p><p>常常适用于有重叠子问题和最优子结构性质的问题</p><p>简单来说，动态规划其实就是，给定一个问题，我们把它拆成一个个子问题，直到子问题可以直接解决</p><p>然后呢，把子问题答案保存起来，以减少重复计算。再根据子问题答案反推，得出原问题解的一种方法。</p><p>一般这些子问题很相似，可以通过函数关系式递推出来，例如斐波那契数列，我们可以得到公式：当 n 大于 2 的时候，F(n) = F(n-1) + F(n-2) ，</p><p>f(10)= f(9)+f(8),f(9) = f(8) + f(7)...是重叠子问题，当 n = 1、2 的时候，对应的值为 2，这时候就通过可以使用一个数组记录每一步计算的结果，以此类推，减少不必要的重复计算</p><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h3><p>如果一个问题，可以把所有可能的答案穷举出来，并且穷举出来后，发现存在重叠子问题，就可以考虑使用动态规划</p><p>比如一些求最值的场景，如最长递增子序列、最小编辑距离、背包问题、凑零钱问题等等，都是动态规划的经典应用场景</p><p>关于动态规划题目解决的步骤，一般如下：</p><ul><li>描述最优解的结构</li><li>递归定义最优解的值</li><li>按自底向上的方式计算最优解的值</li><li>由计算出的结果构造一个最优解</li></ul><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别"><span>三、区别</span></a></h2><p>动态规划算法与分治法类似，其基本思想也是将待求解问题分解成若干个子问题，先求解子问题，然后从这些子问题的解得到原问题的解</p><p>与分治法不同的是，适合于用动态规划求解的问题，经分解得到子问题往往<strong>不是互相独立</strong>的，而分而治之的子问题是相互独立的</p><p>若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次</p><p>如果我们能够保存已解决的子问题的答案，而在需要时再找出已求得的答案，这样就可以避免大量的重复计算，节省时间</p><p>综上，可得：</p><ul><li><p>动态规划：有最优子结构和重叠子问题</p></li><li><p>分而治之：各子问题独立</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>`,32),u={href:"https://baike.baidu.com/item/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/529408",target:"_blank",rel:"noopener noreferrer"},d={href:"https://juejin.cn/post/6951922898638471181",target:"_blank",rel:"noopener noreferrer"};function m(h,k){const a=p("ExternalLinkIcon");return i(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("https://baike.baidu.com/item/动态规划/529408"),t(a)])]),n("li",null,[n("a",d,[s("https://juejin.cn/post/6951922898638471181"),t(a)])])])])}const f=e(c,[["render",m],["__file","design1.html.vue"]]),w=JSON.parse('{"path":"/posts/interview/algorithm/design1.html","title":"说说你对分而治之、动态规划的理解？区别？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对分而治之、动态规划的理解？区别？","footer":"说说你对分而治之、动态规划的理解？区别？","order":12,"star":12,"date":"2023-03-30T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","algorithm"],"tag":["interview","algorithm"],"shortTitle":"前端物语|面试物语-说说你对分而治之、动态规划的理解？区别？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对分而治之、动态规划的理解？区别？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/algorithm/design1.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/algorithm/design1.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对分而治之、动态规划的理解？区别？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对分而治之、动态规划的理解？区别？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对分而治之、动态规划的理解？区别？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"algorithm"}],["meta",{"property":"article:published_time","content":"2023-03-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对分而治之、动态规划的理解？区别？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/298437b0-29d0-11ec-a752-75723a64e8f5.png\\"],\\"datePublished\\":\\"2023-03-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、分而治之","slug":"一、分而治之","link":"#一、分而治之","children":[]},{"level":2,"title":"二、动态规划","slug":"二、动态规划","link":"#二、动态规划","children":[{"level":3,"title":"适用场景","slug":"适用场景","link":"#适用场景","children":[]}]},{"level":2,"title":"三、区别","slug":"三、区别","link":"#三、区别","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1254},"filePathRelative":"posts/interview/algorithm/design1.md","localizedDate":"2023年3月30日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/298437b0-29d0-11ec-a752-75723a64e8f5.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、分而治之</h2>\\n<p>分而治之是算法设计中的一种方法，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并</p>\\n<p>关于分而治之的实现，都会经历三个步骤：</p>"}');export{f as comp,w as data};
