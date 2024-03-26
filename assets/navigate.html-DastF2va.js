import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as n,d as e,e as s,a as r,f as p}from"./app-Cbix2SPG.js";const o={},l=p('<h1 id="说说微信小程序中路由跳转的方式有哪些-区别" tabindex="-1"><a class="header-anchor" href="#说说微信小程序中路由跳转的方式有哪些-区别"><span>说说微信小程序中路由跳转的方式有哪些？区别？</span></a></h1><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/52bd3820-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么"><span>一、是什么</span></a></h2><p>微信小程序拥有<code>web</code>网页和<code>Application</code>共同的特征，我们的页面都不是孤立存在的，而是通过和其他页面进行交互，来共同完成系统的功能</p><p>在微信小程序中，每个页面可以看成是一个<code>pageModel</code>，<code>pageModel</code>全部以栈的形式进行管理</p><h2 id="二、有哪些" tabindex="-1"><a class="header-anchor" href="#二、有哪些"><span>二、有哪些</span></a></h2><p>常见的微信小程序页面跳转方式有如下：</p><ul><li>wx.navigateTo(Object)</li><li>wx.redirectTo(Object)</li><li>wx.switchTab(Object)</li><li>wx.navigateBack(Object)</li><li>wx.reLaunch(Object)</li></ul><h3 id="wx-navigateto-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateto-object"><span>wx.navigateTo(Object)</span></a></h3><p><code>wx.navigateTo()</code>用于保留当前页面、跳转到应用内的某个页面，使用 <code>wx.navigateBack</code>可以返回到原页面</p><p>对于页面不是特别多的小程序，通常推荐使用 <code>wx.navigateTo</code>进行跳转， 以便返回原页面，以提高加载速度。当页面特别多时，则不推荐使用</p><p>参数表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/5e524ea0-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>流程图如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/68f033e0-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="wx-redirectto-object" tabindex="-1"><a class="header-anchor" href="#wx-redirectto-object"><span>wx.redirectTo(Object)</span></a></h3><p>重定向，当页面过多时，被保留页面会挤占微信分配给小程序的内存，或是达到微信所限制的 10 层页面栈的情况下，我们应该考虑选择 <code>wx.redirectTo</code></p><p><code>wx.redirectTo()</code>用于关闭当前页面，跳转到应用内的某个页面</p><p>这样的跳转，可以避免跳转前页面占据运行内存，但返回时页面需要重新加载，增加了返回页面的显示时间</p><p>参数表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/76066c20-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>流程图如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/828c4b40-31a5-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="wx-switchtab-object" tabindex="-1"><a class="header-anchor" href="#wx-switchtab-object"><span>wx.switchTab(Object)</span></a></h3><p>跳转到 <code>tabBar</code>页面，并关闭其他所有非 <code>tabBar</code> 页面</p><p>参数表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/968869d0-31a5-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="wx-navigateback-object" tabindex="-1"><a class="header-anchor" href="#wx-navigateback-object"><span>wx.navigateBack(Object)</span></a></h3><p><code>wx.navigateBack()</code> 用于关闭当前页面，并返回上一页面或多级页面，开发者可通过 <code>getCurrentPages()</code> 获取当前的页面栈，决定需要返回几层则设置对象的<code>delta</code>属性即可</p><p>参数表如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/a28d8030-31a5-11ec-a752-75723a64e8f5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="wx-relaunch-object" tabindex="-1"><a class="header-anchor" href="#wx-relaunch-object"><span>wx.reLaunch(Object)</span></a></h3><p>关闭所有页面，打开到应用内的某个页面，返回的时候跳到首页</p><p>流程图如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/accca3a0-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>参数表如下所示：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/interview/b98c7e80-31a5-11ec-8e64-91fdec0f05a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结"><span>三、总结</span></a></h2><p>关于上述五种跳转方式，做下总结：</p><ul><li>navigateTo 保留当前页面，跳转到应用内的某个页面，使用 wx.navigateBack 可以返回到原页</li><li>redirectTo 关闭当前页面，跳转到应用内的某个页面</li><li>switchTab 跳转到 tabBar 页面，同时关闭其他非 tabBar 页面</li><li>navigateBack 返回上一页面</li><li>reLanch 关闭所有页面，打开到应用内的某个页面</li></ul><p>其中关于它们的页面栈的关系如下：</p><ul><li><p>avigateTo 新页面入栈</p></li><li><p>redirectTo 当前页面出栈，新页面入栈</p></li><li><p>navigateBack 页面不断出栈，直到目标返回页，新页面入栈</p></li><li><p>switchTab 页面全部出栈，只留下新的 Tab 页面</p></li><li><p>reLanch 页面全部出栈，只留下新的页面</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献"><span>参考文献</span></a></h2>',43),g={href:"https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html",target:"_blank",rel:"noopener noreferrer"};function d(h,m){const t=i("ExternalLinkIcon");return c(),n("div",null,[l,e("ul",null,[e("li",null,[e("a",g,[s("https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html"),r(t)])])])])}const v=a(o,[["render",d],["__file","navigate.html.vue"]]),b=JSON.parse(`{"path":"/posts/interview/applet/navigate.html","title":"说说微信小程序中路由跳转的方式有哪些？区别？","lang":"zh-CN","frontmatter":{"icon":"question","description":"前端物语|面试物语-说说微信小程序中路由跳转的方式有哪些？区别？","footer":"<a href='https://beian.mit.gov.cn/' target='blank'>浙ICP备2021037683号-2</a>说说微信小程序中路由跳转的方式有哪些？区别？","order":1,"star":1,"date":"2023-02-25T05:08:15.341Z","author":"h7ml","image":"https://www.h7ml.cn/logo.png","banner":"https://www.h7ml.cn/logo.png","category":["interview","applet"],"tag":["interview","applet"],"shortTitle":"前端物语|面试物语-说说微信小程序中路由跳转的方式有哪些？区别？","isOriginal":false,"head":[["meta",{"name":"keywords","content":"说说微信小程序中路由跳转的方式有哪些？区别？"}],["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/interview/applet/navigate.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/interview/applet/navigate.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"说说微信小程序中路由跳转的方式有哪些？区别？"}],["meta",{"property":"og:description","content":"前端物语|面试物语-说说微信小程序中路由跳转的方式有哪些？区别？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.h7ml.cn/logo.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://www.h7ml.cn/logo.png"}],["meta",{"name":"twitter:image:alt","content":"说说微信小程序中路由跳转的方式有哪些？区别？"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"interview"}],["meta",{"property":"article:tag","content":"applet"}],["meta",{"property":"article:published_time","content":"2023-02-25T05:08:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"说说微信小程序中路由跳转的方式有哪些？区别？\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/interview/52bd3820-31a5-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/5e524ea0-31a5-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/68f033e0-31a5-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/76066c20-31a5-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/828c4b40-31a5-11ec-a752-75723a64e8f5.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/968869d0-31a5-11ec-a752-75723a64e8f5.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/a28d8030-31a5-11ec-a752-75723a64e8f5.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/accca3a0-31a5-11ec-8e64-91fdec0f05a1.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/interview/b98c7e80-31a5-11ec-8e64-91fdec0f05a1.png\\"],\\"datePublished\\":\\"2023-02-25T05:08:15.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"一、是什么","slug":"一、是什么","link":"#一、是什么","children":[]},{"level":2,"title":"二、有哪些","slug":"二、有哪些","link":"#二、有哪些","children":[{"level":3,"title":"wx.navigateTo(Object)","slug":"wx-navigateto-object","link":"#wx-navigateto-object","children":[]},{"level":3,"title":"wx.redirectTo(Object)","slug":"wx-redirectto-object","link":"#wx-redirectto-object","children":[]},{"level":3,"title":"wx.switchTab(Object)","slug":"wx-switchtab-object","link":"#wx-switchtab-object","children":[]},{"level":3,"title":"wx.navigateBack(Object)","slug":"wx-navigateback-object","link":"#wx-navigateback-object","children":[]},{"level":3,"title":"wx.reLaunch(Object)","slug":"wx-relaunch-object","link":"#wx-relaunch-object","children":[]}]},{"level":2,"title":"三、总结","slug":"三、总结","link":"#三、总结","children":[]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.97,"words":892},"filePathRelative":"posts/interview/applet/navigate.md","localizedDate":"2023年2月25日","excerpt":"\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/interview/52bd3820-31a5-11ec-8e64-91fdec0f05a1.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2>一、是什么</h2>\\n<p>微信小程序拥有<code>web</code>网页和<code>Application</code>共同的特征，我们的页面都不是孤立存在的，而是通过和其他页面进行交互，来共同完成系统的功能</p>"}`);export{v as comp,b as data};
