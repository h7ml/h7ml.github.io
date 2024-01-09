import{_ as e,o as d,c as i,f as o}from"./app-Q-AMctCt.js";const c={},l=o(`<p>配置此文件可以让 git 对某些特定文件不追踪变化</p><h2 id="gitignore-语法规则" tabindex="-1"><a class="header-anchor" href="#gitignore-语法规则" aria-hidden="true">#</a> gitignore 语法规则</h2><ul><li>空行不匹配任何文件，可以作为分隔符来提高可读性</li><li><code>#</code> 为开头的行作为注释，若真的需要 <code>#</code>，则需要使用 <code>\\#</code></li><li><code>/</code> 作为目录分割</li><li><code>!</code> 用于排除已忽略目录中的某个子文件/目录（即再次追踪）</li><li>如果在某个模式的开头或者中间（或者两者都有）存在 <code>/</code>，那么就是 <code>gitignore</code> 文件所在的根目录</li><li>如果末尾存在 <code>/</code>，那么只匹配目录，不再匹配文件</li><li><code>*</code> 匹配除了 <code>/</code> 之外的任何，<code>?</code> 匹配除 <code>/</code> 之外的<strong>一个字符</strong>，范围符号例如 [a-zA-Z] 匹配范围中的一个字符</li><li><code>**</code> 的意义就比较多了 <ul><li>例如 <code>**/foo</code> 匹配所有地方的 <code>foo</code> 文件或文件夹，与 <code>foo</code> 的模式相同</li><li><code>**/foo/bar</code> 匹配任何地方的 <code>foo</code> 目录下的 <code>bar</code> 文件或文件夹</li><li>后面的 <code>/**</code> 则匹配所有的子目录或者子文件，例如 <code>a/**</code> 匹配 a 下的所有目录和文件</li><li>中间的 <code>**</code> 则表示无限深度的子目录，例如 <code>a/**/b</code> 匹配 a 下的所有子目录下的 b 文件或文件夹</li></ul></li></ul><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.cache
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),n=[l];function a(s,r){return d(),i("div",null,n)}const v=e(c,[["render",a],["__file","gitignore.html.vue"]]);export{v as default};
