import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as i,f as t}from"./app-Cbix2SPG.js";const c={},n=t(`<p>配置此文件可以让 git 对某些特定文件不追踪变化</p><h2 id="gitignore-语法规则" tabindex="-1"><a class="header-anchor" href="#gitignore-语法规则"><span>gitignore 语法规则</span></a></h2><ul><li>空行不匹配任何文件，可以作为分隔符来提高可读性</li><li><code>#</code> 为开头的行作为注释，若真的需要 <code>#</code>，则需要使用 <code>\\#</code></li><li><code>/</code> 作为目录分割</li><li><code>!</code> 用于排除已忽略目录中的某个子文件/目录（即再次追踪）</li><li>如果在某个模式的开头或者中间（或者两者都有）存在 <code>/</code>，那么就是 <code>gitignore</code> 文件所在的根目录</li><li>如果末尾存在 <code>/</code>，那么只匹配目录，不再匹配文件</li><li><code>*</code> 匹配除了 <code>/</code> 之外的任何，<code>?</code> 匹配除 <code>/</code> 之外的<strong>一个字符</strong>，范围符号例如 [a-zA-Z] 匹配范围中的一个字符</li><li><code>**</code> 的意义就比较多了 <ul><li>例如 <code>**/foo</code> 匹配所有地方的 <code>foo</code> 文件或文件夹，与 <code>foo</code> 的模式相同</li><li><code>**/foo/bar</code> 匹配任何地方的 <code>foo</code> 目录下的 <code>bar</code> 文件或文件夹</li><li>后面的 <code>/**</code> 则匹配所有的子目录或者子文件，例如 <code>a/**</code> 匹配 a 下的所有目录和文件</li><li>中间的 <code>**</code> 则表示无限深度的子目录，例如 <code>a/**/b</code> 匹配 a 下的所有子目录下的 b 文件或文件夹</li></ul></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.cache
.DS_Store
.idea
*.log
*.tgz
coverage
dist
lib-cov
logs
node_modules
temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[n];function l(r,a){return o(),i("div",null,d)}const m=e(c,[["render",l],["__file","gitignore.html.vue"]]),p=JSON.parse('{"path":"/posts/engineering/gitignore.html","title":"gitignore","lang":"zh-CN","frontmatter":{"icon":"git","order":4,"date":"2021-05-27T00:00:00.000Z","author":"h7ml","title":"gitignore","category":"engineering","tag":"git","star":true,"description":"配置此文件可以让 git 对某些特定文件不追踪变化 gitignore 语法规则 空行不匹配任何文件，可以作为分隔符来提高可读性 # 为开头的行作为注释，若真的需要 #，则需要使用 \\\\# / 作为目录分割 ! 用于排除已忽略目录中的某个子文件/目录（即再次追踪） 如果在某个模式的开头或者中间（或者两者都有）存在 /，那么就是 gitignore 文件所...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/engineering/gitignore.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/engineering/gitignore.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"gitignore"}],["meta",{"property":"og:description","content":"配置此文件可以让 git 对某些特定文件不追踪变化 gitignore 语法规则 空行不匹配任何文件，可以作为分隔符来提高可读性 # 为开头的行作为注释，若真的需要 #，则需要使用 \\\\# / 作为目录分割 ! 用于排除已忽略目录中的某个子文件/目录（即再次追踪） 如果在某个模式的开头或者中间（或者两者都有）存在 /，那么就是 gitignore 文件所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:published_time","content":"2021-05-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gitignore\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"gitignore 语法规则","slug":"gitignore-语法规则","link":"#gitignore-语法规则","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.16,"words":348},"filePathRelative":"posts/engineering/gitignore.md","localizedDate":"2021年5月27日","excerpt":"<p>配置此文件可以让 git 对某些特定文件不追踪变化</p>\\n<h2>gitignore 语法规则</h2>\\n<ul>\\n<li>空行不匹配任何文件，可以作为分隔符来提高可读性</li>\\n<li><code>#</code> 为开头的行作为注释，若真的需要 <code>#</code>，则需要使用 <code>\\\\#</code></li>\\n<li><code>/</code> 作为目录分割</li>\\n<li><code>!</code> 用于排除已忽略目录中的某个子文件/目录（即再次追踪）</li>\\n<li>如果在某个模式的开头或者中间（或者两者都有）存在 <code>/</code>，那么就是 <code>gitignore</code> 文件所在的根目录</li>\\n<li>如果末尾存在 <code>/</code>，那么只匹配目录，不再匹配文件</li>\\n<li><code>*</code> 匹配除了 <code>/</code> 之外的任何，<code>?</code> 匹配除 <code>/</code> 之外的<strong>一个字符</strong>，范围符号例如 [a-zA-Z] 匹配范围中的一个字符</li>\\n<li><code>**</code> 的意义就比较多了\\n<ul>\\n<li>例如 <code>**/foo</code> 匹配所有地方的 <code>foo</code> 文件或文件夹，与 <code>foo</code> 的模式相同</li>\\n<li><code>**/foo/bar</code> 匹配任何地方的 <code>foo</code> 目录下的 <code>bar</code> 文件或文件夹</li>\\n<li>后面的 <code>/**</code> 则匹配所有的子目录或者子文件，例如 <code>a/**</code> 匹配 a 下的所有目录和文件</li>\\n<li>中间的 <code>**</code> 则表示无限深度的子目录，例如 <code>a/**/b</code> 匹配 a 下的所有子目录下的 b 文件或文件夹</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{m as comp,p as data};
