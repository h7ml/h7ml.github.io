import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as s,d as e,e as a,a as i,f as p}from"./app-Cbix2SPG.js";const o={},c=p('<h1 id="说说你对数据结构的理解-有哪些-区别" tabindex="-1"><a class="header-anchor" href="#说说你对数据结构的理解-有哪些-区别"><span>说说你对数据结构的理解？有哪些？区别？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/3d87b540-1aa6-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>数据结构是计算机存储、组织数据的方式，是指相互之间存在一种或多种特定关系的数据元素的集合</p><p>前面讲到，一个程序 = 算法 + 数据结构，数据结构是实现算法的基础，选择合适的数据结构可以带来更高的运行或者存储效率</p><p>数据元素相互之间的关系称为结构，根据数据元素之间关系的不同特性，通常有如下四类基本的结构：</p><ul><li>集合结构：该结构的数据元素间的关系是“属于同一个集合”</li><li>线性结构：该结构的数据元素之间存在着一对一的关系</li><li>树型结构：该结构的数据元素之间存在着一对多的关系</li><li>图形结构：该结构的数据元素之间存在着多对多的关系，也称网状结构</li></ul><p>由于数据结构种类太多，逻辑结构可以再分成为：</p><ul><li>线性结构：有序数据元素的集合，其中数据元素之间的关系是一对一的关系，除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的</li><li>非线性结构：各个数据元素不再保持在一个线性序列中，每个数据元素可能与零个或者多个其他数据元素发生关联</li></ul><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/9aedc5d0-1aa6-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些"><span>二、有哪些</span></a></h2><p>常见的数据结构有如下：</p><ul><li>数组</li><li>栈</li><li>队列</li><li>链表</li><li>树</li><li>图</li><li>堆</li><li>散列表</li></ul><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3><p>在程序设计中，为了处理方便， 一般情况把具有相同类型的若干变量按有序的形式组织起来，这些按序排列的同类数据元素的集合称为数组</p><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h3><p>一种特殊的线性表，只能在某一端插入和删除的特殊线性表，按照先进后出的特性存储数据</p><p>先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据</p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h3><p>跟栈基本一致，也是一种特殊的线性表，其特性是先进先出，只允许在表的前端进行删除操作，而在表的后端进行插入操作</p><h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表"><span>链表</span></a></h3><p>是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的</p><p>链表由一系列结点（链表中每一个元素称为结点）组成，结点可以在运行时动态生成</p><p>一般情况，每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域</p><h3 id="树" tabindex="-1"><a class="header-anchor" href="#树"><span>树</span></a></h3><p>树是典型的非线性结构，在树的结构中，有且仅有一个根结点，该结点没有前驱结点。在树结构中的其他结点都有且仅有一个前驱结点，而且可以有两个以上的后继结点</p><h3 id="图" tabindex="-1"><a class="header-anchor" href="#图"><span>图</span></a></h3><p>一种非线性结构。在图结结构中，数据结点一般称为顶点，而边是顶点的有序偶对。如果两个顶点之间存在一条边，那么就表示这两个顶点具有相邻关系</p><h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h3><p>堆是一种特殊的树形数据结构，每个结点都有一个值，特点是根结点的值最小（或最大），且根结点的两个子树也是一个堆</p><h3 id="散列表" tabindex="-1"><a class="header-anchor" href="#散列表"><span>散列表</span></a></h3><p>若结构中存在关键字和<code>K</code>相等的记录，则必定在<code>f(K)</code>的存储位置上，不需比较便可直接取得所查记录</p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别"><span>三、区别</span></a></h2><p>上述的数据结构，之前的区别可以分成线性结构和非线性结构：</p><ul><li>线性结构有：数组、栈、队列、链表等</li><li>非线性结构有：树、图、堆等</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',36),h={href:"https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/1450",target:"_blank",rel:"noopener noreferrer"};function m(g,u){const t=l("ExternalLinkIcon");return r(),s("div",null,[c,e("ul",null,[e("li",null,[e("a",h,[a("https://zh.wikipedia.org/wiki/数据结构"),i(t)])]),e("li",null,[e("a",d,[a("https://baike.baidu.com/item/数据结构/1450"),i(t)])])])])}const v=n(o,[["render",m],["__file","structure.html.vue"]]),b=JSON.parse(`{"path":"/posts/interview/algorithm/structure.html","title":"说说你对数据结构的理解？有哪些？区别？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说你对数据结构的理解？有哪些？区别？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说你对数据结构的理解？有哪些？区别？","order":1,"star":1,"date":"2023-02-24T00:00:00.000Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","algorithm"],"tag":["interview","algorithm"],"shortTitle":"前端物语|面试物语-说说你对数据结构的理解？有哪些？区别？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说你对数据结构的理解？有哪些？区别？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/algorithm/structure.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/algorithm/structure.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说你对数据结构的理解？有哪些？区别？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说你对数据结构的理解？有哪些？区别？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说你对数据结构的理解？有哪些？区别？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"algorithm"}],["meta",{"property":"article:published_time","content":"2023-02-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说你对数据结构的理解？有哪些？区别？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/3d87b540-1aa6-11ec-a752-75723a64e8f5.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/9aedc5d0-1aa6-11ec-8e64-91fdec0f05a1.png\\"],\\"datePublished\\":\\"2023-02-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、有哪些","slug":"二、有哪些","link":"#二、有哪些","children":[{"level":3,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]},{"level":3,"title":"队列","slug":"队列","link":"#队列","children":[]},{"level":3,"title":"链表","slug":"链表","link":"#链表","children":[]},{"level":3,"title":"树","slug":"树","link":"#树","children":[]},{"level":3,"title":"图","slug":"图","link":"#图","children":[]},{"level":3,"title":"堆","slug":"堆","link":"#堆","children":[]},{"level":3,"title":"散列表","slug":"散列表","link":"#散列表","children":[]}]},{"level":2,"title":"三、区别","slug":"三、区别","link":"#三、区别","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":3.88,"words":1165},"filePathRelative":"posts/interview/algorithm/structure.md","localizedDate":"2023年2月24日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/3d87b540-1aa6-11ec-a752-75723a64e8f5.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>数据结构是计算机存储、组织数据的方式，是指相互之间存在一种或多种特定关系的数据元素的集合</p>\\n<p>前面讲到，一个程序 = 算法 + 数据结构，数据结构是实现算法的基础，选择合适的数据结构可以带来更高的运行或者存储效率</p>"}`);export{v as comp,b as data};
