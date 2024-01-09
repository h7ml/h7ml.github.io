import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,f as l}from"./app-Q-AMctCt.js";const u={},i=n("p",null,"命令模式主要应用在需要延迟执行请求、支持撤回的场景中，可能在文本编辑器中有应用，我目前没有使用过，这里就留坑了。",-1),k=n("p",null,"命令模式本质上就是将数据和操作封装为一个对象，实现操作的撤回、延迟等。",-1),r=n("code",null,"Youtube",-1),d={href:"https://www.youtube.com/watch?v=GQzfF5EMD7o&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=6",target:"_blank",rel:"noopener noreferrer"},v=l(`<p>首先是一个支持加减乘除的计算器：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">valueToAdd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">+</span> valueToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">valueToSubtract</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">-</span> valueToSubtract<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">valueToMultiply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">*</span> valueToMultiply<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">valueToDivide</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">/</span> valueToDivide<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
calculator<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要给计算器增加撤回的功能，就可以使用命令模式了。</p><p>我们把每一步操作都封装为一个类作为命令对象，类中包含了操作数和操作方法，然后用一个数组记录所有的命令对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> command <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> command<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">valueToAdd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">+</span> valueToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token parameter">valueToSubtract</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">-</span> valueToSubtract<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token parameter">valueToMultiply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">*</span> valueToMultiply<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">divide</span><span class="token punctuation">(</span><span class="token parameter">valueToDivide</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">/</span> valueToDivide<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AddCommand</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">valueToAdd</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>valueToAdd <span class="token operator">=</span> valueToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToAdd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubtractCommand</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">valueToSubtract</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>valueToSubtract <span class="token operator">=</span> valueToSubtract<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToSubtract<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToSubtract<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MultiplyCommand</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">valueToMultiply</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>valueToMultiply <span class="token operator">=</span> valueToMultiply<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToMultiply<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToMultiply<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DivideCommand</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">valueToDivide</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>valueToDivide <span class="token operator">=</span> valueToDivide<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToDivide<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">undo</span><span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> currentValue <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>valueToDivide<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

calculator<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AddCommand</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
calculator<span class="token punctuation">.</span><span class="token function">executeCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MultiplyCommand</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
calculator<span class="token punctuation">.</span><span class="token function">undo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>calculator<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="总" tabindex="-1"><a class="header-anchor" href="#总" aria-hidden="true">#</a> 总</h1><p>命令模式的思想比较有意思，将数据和操作封装，实现上在 <code>js</code> 中很简单，我们甚至也不需要 <code>class</code> ，直接通过字面量对象传递也可以。</p><p>但实际开发中目前还没用到过，此处留坑。</p>`,8);function m(b,y){const a=p("ExternalLinkIcon");return e(),o("div",null,[i,k,n("p",null,[s("这里贴一下 "),r,s(" 一个博主举的 "),n("a",d,[s("计算器例子"),c(a)]),s("。")]),v])}const h=t(u,[["render",m],["__file","command.html.vue"]]);export{h as default};
