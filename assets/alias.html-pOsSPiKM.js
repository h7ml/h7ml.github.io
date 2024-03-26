import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-Cbix2SPG.js";const e={},p=t(`<h2 id="vite-别名配置注意事项" tabindex="-1"><a class="header-anchor" href="#vite-别名配置注意事项"><span>vite 别名配置注意事项</span></a></h2><ol><li>Vite config</li></ol><figure><img src="https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vt7vddmj20hc0er0tj.jpg" alt="image-20220411165325332" tabindex="0" loading="lazy"><figcaption>image-20220411165325332</figcaption></figure><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    port<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> <span class="token string">&#39;http://xuanyuan.jinuo.fun:8080/&#39;</span><span class="token punctuation">,</span>
        changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Tsconfig.json</li></ol><p>​ <img src="https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vv3ksz3j20fj0i4q3r.jpg" alt="image-20220411165514379" loading="lazy"></p><p>告诉 TS 解析如何解析某些路径</p><p>注意<code>./src/* 后边这个*</code>一定要加</p>`,8),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","alias.html.vue"]]),d=JSON.parse(`{"path":"/posts/vite/alias.html","title":"vite 别名配置注意事项","lang":"zh-CN","frontmatter":{"icon":"vue","order":3,"date":"2021-05-30T00:00:00.000Z","author":"h7ml","title":"vite 别名配置注意事项","category":"vite","tag":"vite","star":true,"description":"vite 别名配置注意事项 Vite config image-20220411165325332image-20220411165325332 Tsconfig.json ​ image-20220411165514379 告诉 TS 解析如何解析某些路径 注意./src/* 后边这个*一定要加","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/vite/alias.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/vite/alias.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"vite 别名配置注意事项"}],["meta",{"property":"og:description","content":"vite 别名配置注意事项 Vite config image-20220411165325332image-20220411165325332 Tsconfig.json ​ image-20220411165514379 告诉 TS 解析如何解析某些路径 注意./src/* 后边这个*一定要加"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vt7vddmj20hc0er0tj.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"vite"}],["meta",{"property":"article:published_time","content":"2021-05-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vite 别名配置注意事项\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vt7vddmj20hc0er0tj.jpg\\",\\"https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vv3ksz3j20fj0i4q3r.jpg\\"],\\"datePublished\\":\\"2021-05-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"vite 别名配置注意事项","slug":"vite-别名配置注意事项","link":"#vite-别名配置注意事项","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"posts/vite/alias.md","localizedDate":"2021年5月30日","excerpt":"<h2>vite 别名配置注意事项</h2>\\n<ol>\\n<li>Vite config</li>\\n</ol>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/vite/e6c9d24ely1h15vt7vddmj20hc0er0tj.jpg\\" alt=\\"image-20220411165325332\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220411165325332</figcaption></figure>\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineConfig <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vite'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> react <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@vitejs/plugin-react'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">as</span> path <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'path'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// https://vitejs.dev/config/</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">defineConfig</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  plugins<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token function\\">react</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n  resolve<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    alias<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token string-property property\\">'@'</span><span class=\\"token operator\\">:</span> path<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">resolve</span><span class=\\"token punctuation\\">(</span>__dirname<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'./src'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  server<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    port<span class=\\"token operator\\">:</span> <span class=\\"token number\\">3000</span><span class=\\"token punctuation\\">,</span>\\n    proxy<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token string-property property\\">'/api'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        target<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'http://xuanyuan.jinuo.fun:8080/'</span><span class=\\"token punctuation\\">,</span>\\n        changeOrigin<span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token function-variable function\\">rewrite</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span>path<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> path<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">replace</span><span class=\\"token punctuation\\">(</span><span class=\\"token regex\\"><span class=\\"token regex-delimiter\\">/</span><span class=\\"token regex-source language-regex\\">^\\\\/api</span><span class=\\"token regex-delimiter\\">/</span></span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">''</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}`);export{k as comp,d as data};