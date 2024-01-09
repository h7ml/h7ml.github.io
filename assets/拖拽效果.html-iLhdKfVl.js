import{_ as n,o as s,c as a,f as t}from"./app-Q-AMctCt.js";const e={},p=t(`<h1 id="javascript-拖拽效果-动画" tabindex="-1"><a class="header-anchor" href="#javascript-拖拽效果-动画" aria-hidden="true">#</a> JavaScript 拖拽效果-动画</h1><p>鼠标按下 onmousedown，onmousedown 里边鼠标移动 onmousemove，鼠标释放 onmouseup</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> oDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> disX <span class="token operator">=</span> <span class="token punctuation">(</span>disY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

oDiv<span class="token punctuation">.</span><span class="token function-variable function">onmousedown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ev <span class="token operator">=</span> ev <span class="token operator">||</span> event<span class="token punctuation">;</span>
  disX <span class="token operator">=</span> ev<span class="token punctuation">.</span>offsetX<span class="token punctuation">;</span>
  disY <span class="token operator">=</span> ev<span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function-variable function">onmousemove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ev <span class="token operator">=</span> ev <span class="token operator">||</span> event<span class="token punctuation">;</span>
    <span class="token keyword">var</span> l <span class="token operator">=</span> ev<span class="token punctuation">.</span>clientX <span class="token operator">-</span> disX<span class="token punctuation">;</span>
    <span class="token keyword">var</span> t <span class="token operator">=</span> ev<span class="token punctuation">.</span>clientY <span class="token operator">-</span> disY<span class="token punctuation">;</span>

    <span class="token comment">// 边界限定</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">&gt;=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> oDiv<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      l <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth <span class="token operator">-</span> oDiv<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      t <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&gt;=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> oDiv<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      t <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight <span class="token operator">-</span> oDiv<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 吸附效果</span>
    <span class="token comment">/* if(l &lt;= 100){
    l = 0;
    }else if(l &gt;= document.documentElement.clientWidth - oDiv.offsetWidth - 100){
    l = document.documentElement.clientWidth - oDiv.offsetWidth;
    }

    if(t &lt;= 0){
    t = 0;
    }else if(t &gt;= document.documentElement.clientHeight - oDiv.offsetHeight){
    t = document.documentElement.clientHeight - oDiv.offsetHeight;
    } */</span>

    oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    oDiv<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> t <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  document<span class="token punctuation">.</span><span class="token function-variable function">onmouseup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>onmousemove <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>onmouseup <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","拖拽效果.html.vue"]]);export{r as default};
