import{_ as l,r as i,o as c,c as r,d as e,w as o,f as u,a as n,b as s}from"./app-Q-AMctCt.js";const p={},d=u(`<h1 id="transition-使用姿势" tabindex="-1"><a class="header-anchor" href="#transition-使用姿势" aria-hidden="true">#</a> Transition 使用姿势</h1><p>Transition 是 react18 引入的新概念，用来区分紧急和非紧急的更新。</p><ul><li>紧急的更新，指的是一些直接的用户交互，如输入、点击等；</li><li>非紧急的更新，指的是 UI 界面从一个样子过渡到另一个样子；</li></ul><p>react 官方的 demo 如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {startTransition} from &#39;react&#39;;

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() =&gt; {
  // Transition: Show the results
  setSearchQuery(input);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有 2 个 API：</p><ul><li>useTransition：hook，用在 function 组件或其他 hooks 中，能返回 isPending；</li><li>startTransition：用在不能使用 hooks 的场景，如 class 组件中，相比 useTransition 不能获取 isPending 状态；</li></ul><p>2 个 API 还有一个差别：当进行连续快速输入时，使用  startTransition  是无法触发类似 throttle 的效果的。</p><h1 id="transition-vs-throttle、debounce" tabindex="-1"><a class="header-anchor" href="#transition-vs-throttle、debounce" aria-hidden="true">#</a> Transition VS throttle、debounce</h1>`,9),k=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" useCallback"),n("span",{class:"token punctuation"},","),s(" useState"),n("span",{class:"token punctuation"},","),s(" useTransition"),n("span",{class:"token punctuation"},","),s(" Suspense "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" React"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" currentValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},","),s(" setValue"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("isPending"),n("span",{class:"token punctuation"},","),s(" startTransition"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTransition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" newVal "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// startTransition(() => setValue(newVal));"),s(`
    `),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),s("newVal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("input onChange"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("_"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"throttle"),n("span",{class:"token punctuation"},"("),s("handleChange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"leading"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div className"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("isPending "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'loading'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("div key"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("index"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".loading"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0.5"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,"存在的问题：",-1),v=n("ul",null,[n("li",null,"到达指定时间后，更新开始处理，渲染引擎会被长时间阻塞，页面交互会出现卡顿；"),n("li",null,"throttle 的最佳时间不易掌握，是由开发者设置的时间。而这个预设的时间，在不同性能的设备上不一定能带来最佳的体验；")],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" useCallback"),n("span",{class:"token punctuation"},","),s(" useState"),n("span",{class:"token punctuation"},","),s(" useTransition"),n("span",{class:"token punctuation"},","),s(" Suspense "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" React"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" currentValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},","),s(" setValue"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("isPending"),n("span",{class:"token punctuation"},","),s(" startTransition"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTransition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" newVal "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// startTransition(() => setValue(newVal));"),s(`
    `),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),s("newVal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("input onChange"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("_"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),s("handleChange"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div className"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("isPending "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'loading'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("div key"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("index"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".loading"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0.5"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,"存在的问题：",-1),f=n("ul",null,[n("li",null,"会出现用户输入长时间得不到响应的情况，如上例中虽然输入框中内容一直在变但下面区域内一直不变；"),n("li",null,"更新操作正式开始以后，渲染引擎仍然会被长时间阻塞，依旧会存在页面卡死的情况；")],-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" useCallback"),n("span",{class:"token punctuation"},","),s(" useState"),n("span",{class:"token punctuation"},","),s(" useTransition"),n("span",{class:"token punctuation"},","),s(" Suspense "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" React"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" currentValue "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("value"),n("span",{class:"token punctuation"},","),s(" setValue"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useState"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("isPending"),n("span",{class:"token punctuation"},","),s(" startTransition"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useTransition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"handleChange"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" newVal "),n("span",{class:"token operator"},"="),s(" e"),n("span",{class:"token punctuation"},"."),s("target"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"startTransition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"setValue"),n("span",{class:"token punctuation"},"("),s("newVal"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// setValue(newVal);"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("input onChange"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("handleChange"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div className"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("isPending "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'loading'"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"50000"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"<"),s("div key"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s("index"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".loading"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"opacity"),n("span",{class:"token punctuation"},":"),s(" 0.5"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,"::: 用 transition 机制的效果：",-1),T=n("ul",null,[n("li",null,"用户可以及时看到输入内容，交互也较流畅；"),n("li",null,"用户连续输入时，不会一直得不到响应(最迟 5s 必会开始更新渲染列表)；"),n("li",null,"开始更新渲染后，协调过程是可中断的，不会长时间阻塞渲染引擎（进入浏览器渲染阶段依然会卡住）；")],-1),P=n("p",null,"transition 相比前两种方案的优势：",-1),C=n("ul",null,[n("li",null,"更新协调过程是可中断的，渲染引擎不会长时间被阻塞，用户可以及时得到响应；"),n("li",null,"不需要开发人员去做额外的考虑，整个优化过程交给 react 和浏览器即可；")],-1),L=n("h1",{id:"transition-实现原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transition-实现原理","aria-hidden":"true"},"#"),s(" transition 实现原理")],-1),S=n("h2",{id:"ispending-实现原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ispending-实现原理","aria-hidden":"true"},"#"),s(" isPending 实现原理")],-1),j=n("p",null,"我们看到页面首先进入了 pending 状态，然后才显示为 transition 更新后的结果。这里发生了 2 次 react 更新。但我们只写了一个 setState。",-1),V=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`function App() {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const newVal = e.target.value;
    startTransition(() => setValue(newVal));
  };

  return (
    <div>
      <input onChange={handleChange} />
      <div className={isPending ? 'loading' : ''}>
      {
        Array(50000).fill("a").map((item, index) => {
          return <div key={index}>{value}</div>;
        })
      }
      </div>
    </div>
  );
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,"我们看一下 useTransition 源码：",-1),R=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`useTransition(): [boolean, (() => void) => void] {
  currentHookNameInDev = 'useTransition';
  mountHookTypesDev();
  return mountTransition();
},

function mountTransition(): [boolean, (callback: () => void, options?: StartTransitionOptions) => void] {
  const [isPending, setPending] = mountState(false);
  // The \`start\` method never changes.
  const start = startTransition.bind(null, setPending);
  const hook = mountWorkInProgressHook();
  hook.memoizedState = start;
  return [isPending, start];
}

function startTransition(setPending, callback, options) {
  const previousPriority = getCurrentUpdatePriority();
  setCurrentUpdatePriority(
    higherEventPriority(previousPriority, ContinuousEventPriority),
  );

  setPending(true);

  const prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  ...
  try {
    setPending(false);
    callback();
  } finally {
    setCurrentUpdatePriority(previousPriority);

    ReactCurrentBatchConfig.transition = prevTransition;
    ...
  }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("p",null,"当调用 startTransition 时，会先通过 setPending 将 isPending 改为 true，然后再通过 setPending 将 isPending 改为 false，并在 callback 中触发我们自己定义的更新。这里有一个奇怪的地方，3 次 setState 并没有合并在一起，而是触发了 2 次 react 更新，setPending(true) 为 1 次，setPending(false) 和 callback() 为第二次。这是因为",-1),N=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`ReactCurrentBatchConfig.transition = {}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),U=n("p",null,"这句语句将更新的上下文变更为了 transition。使得 setPending(true) 和 后面的 2 次更新的上下文不同了。",-1),E=n("p",null,"为什么更新的上下文变化会影响 setState 的合并呢，下面简单展开讲一讲 setState 时 react 在干什么。",-1),z=n("h2",{id:"workloop",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#workloop","aria-hidden":"true"},"#"),s(" WorkLoop")],-1),A=n("p",null,"一次 react 更新，主核心的过程是 fiber tree 的协调（reconcile），协调的作用是找到 fiber tree 中发生变化的 fiber node，最小程度地对页面的 dom tree 结构进行调整。",-1),D=n("p",null,"在进行协调时，react 提供了两种模式：Legacy mode - 同步阻塞模式和 Concurrent mode - 并行模式。这两种模式，区别在于 fiber tree 的协调过程是否可中断。 Legacy mode，协调过程不可中断；Concurrent mode，协调过程可中断。 Legacy mode：",-1),K=n("figure",null,[n("img",{src:"https://static.h7ml.cn/vitepress/assets/images/MicroFrontend/legacy-mode.jpeg",alt:"Legacy mode",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Legacy mode")],-1),W=n("p",null,"Concurrent mode：",-1),M=n("figure",null,[n("img",{src:"https://static.h7ml.cn/vitepress/assets/images/MicroFrontend/concurrent-mode.jpeg",alt:"Concurrent mode",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Concurrent mode")],-1),X=n("p",null,"Concurrent mode 的意义在于：",-1),q=n("ul",null,[n("li",null,"协调不会长时间阻塞浏览器渲染；"),n("li",null,"高优先级更新可以中断低优先级更新，优先渲染；")],-1),F=n("p",null,"react 的调度机制是 workLoop 机制。伪代码实现如下：",-1),Q=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`let taskQueue = [];   // 任务列表
let shouldTimeEnd = 5ms;   // 一个时间片定义为 5ms
let channel = new MessageChannel();  // 创建一个 MessageChannel 实例

function workLoop() {
    let beginTime = performance.now();  // 记录开始时间
    while(true) { // 循环处理 taskQueue 中的任务
        let currentTime = performance.now();  // 记录下一个任务开始时的时间
        if (currentTime - beginTime >= shouldTimeEnd) break;  // 时间片已经到期，结束任务处理
        processTask();  // 时间片没有到期，继续处理任务
    }
    if (taskQueue.length) { // 时间片到期，通过调用 postMessage，请求下一个时间片
        channel.port2.postMessage(null);
    }
}

channel.port1.onmessage = workLoop;  // 在下一个时间片内继续处理任务
workLoop();
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("p",null,"这里借用《漫谈 react 系列(三): 三层 loop 弄懂 Concurrent 模式》这篇文章中的图来说明 loop 和 task 的关系，文章链接见最下方的参考资料",-1),O=n("figure",null,[n("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af6b5a32c73e43c0bfbb97813d1aba55~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?",alt:"3种loop",tabindex:"0",loading:"lazy"}),n("figcaption",null,"3种loop")],-1),H=n("p",null,"workLoop 有 2 种，Legacy 模式下，是 workLoopSync；Concurrent 模式下，是 workLoopConcurrent。workLoopSync 中每个任务都要完成后才会释放主进程，workLoopConcurrent 中每个任务在时间片耗尽后会释放主进程等待下一个时间片继续执行任务。",-1),Y=n("p",null,"workLoopSync 对应 Legacy 模式。如果是在 event、setTimeout、network request 的 callback 中触发更新，那么协调时会启动 workLoopSync。在协调过程中，需要对 fiber tree 做深度优先遍历，处理每一个 fiber node。workLoopSync 开始工作以后，要等到 stack 中收集的所有 fiber node 都处理完毕以后，才会结束工作，也就是 fiber tree 的协调过程不可中断。",-1),G=n("p",null,"workLoopConcurrent 对应 Concurrent 模式。如果更新与 Suspense、useTransition、OffScreen 相关，那么协调时会启动 workLoopConcurrent。 workLoopConcurrent 开始工作以后，每次协调 fiber node 时，都会判断当前时间片是否到期。如果时间片到期，会停止当前 workLoopConcurrent、workLoop，让出主线程，然后请求下一个时间片继续协调。",-1),Z=n("p",null,"相关源码如下：",-1),$=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`function workLoopSync() {
  // Already timed out, so perform work without checking if we need to yield.
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

function workLoopConcurrent() {
  // Perform work until Scheduler asks us to yield
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),nn=n("h2",{id:"任务优先级",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#任务优先级","aria-hidden":"true"},"#"),s(" 任务优先级")],-1),sn=n("p",null,"react 有 3 套优先级机制：",-1),en=n("ul",null,[n("li",null,"React 事件优先级"),n("li",null,"Scheduler 优先级"),n("li",null,"Lane 优先级")],-1),an=n("p",null,"React 事件优先级如下：",-1),tn=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`// 离散事件优先级，例如：点击事件，input输入等触发的更新任务，优先级最高
export const DiscreteEventPriority: EventPriority = SyncLane;
// 连续事件优先级，例如：滚动事件，拖动事件等，连续触发的事件
export const ContinuousEventPriority: EventPriority = InputContinuousLane;
// 默认事件优先级，例如：setTimeout触发的更新任务
export const DefaultEventPriority: EventPriority = DefaultLane;
// 闲置事件优先级，优先级最低
export const IdleEventPriority: EventPriority = IdleLane;
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=n("p",null,"react 在内部定义了 5 种类型的调度（Scheduler）优先级：",-1),ln=n("ul",null,[n("li",null,"ImmediatePriority, 直接优先级，对应用户的 click、input、focus 等操作；"),n("li",null,"UserBlockingPriority，用户阻塞优先级，对应用户的 mouseMove、scroll 等操作；"),n("li",null,"NormalPriority，普通优先级，对应网络请求、useTransition 等操作；"),n("li",null,"LowPriority，低优先级(未找到应用场景)；"),n("li",null,"IdlePriority，空闲优先级，如 OffScreen;")],-1),cn=n("p",null,"5 种优先级的顺序为: ImmediatePriority > UserBlockingPriority > NormalPriority > LowPriority > IdlePriority。",-1),rn=n("p",null,[s("react 内部定义了 31 条 lane，lane 可以理解为每个任务所处的赛道。用二进制表示，按优先级从低到高依次为: "),n("img",{src:"https://static.h7ml.cn/vitepress/assets/images/MicroFrontend//lanes.png",alt:"Lane优先级",loading:"lazy"})],-1),un=n("p",null,"lane 对应的位数越小，优先级最高。如 SyncLane 为 1，优先级最高； OffscreenLane 为 31， 优先级最低。",-1),pn=n("p",null,"react 先将 lane 的优先级转换为 React 事件的优先级，然后再根据 React 事件的优先级转换为 Scheduler 的优先级。",-1),dn=n("p",null,"当通过 startTransition 的方式触发更新时，更新对应的优先级等级为 NormalPriority。而在 NormalPriority 之上，还存在 ImmediatePriority 、UserBlockingPriority 这两种级别更高的更新。通常，高优先级的更新会优先级处理，这就使得尽管 transition 更新先触发，但并不会在第一时间处理，而是处于 pending - 等待状态。只有没有比 transition 更新优先级更高的更新存在时，它才会被处理。",-1),kn=n("p",null,"Concurrent 模式下，如果在低优先级更新的协调过程中，有高优先级更新进来，那么高优先级更新会中断低优先级更新的协调过程。",-1),mn=n("p",null,[s("每次拿到新的时间片以后，workLoopConcurrent 都会判断本次协调对应的优先级和上一次时间片到期中断的协调的优先级是否一样。如果一样，说明没有更高优先级的更新产生，可以继续上次未完成的协调；如果不一样，说明有更高优先级的更新进来，"),n("strong",null,"此时要清空之前已开始的协调过程，从根节点开始重新协调"),s("。等高优先级更新处理完成以后，"),n("strong",null,"再次从根节点开始处理低优先级更新"),s("。")],-1),bn=n("h2",{id:"setstate-机制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setstate-机制","aria-hidden":"true"},"#"),s(" setState 机制")],-1),vn=n("p",null,"调用 setState，并不会立即更新组件 state。state 的更新，其实是发生在 fiber tree 的协调过程中，这个过程如下：",-1),hn=n("ol",null,[n("li",null,"调用 setState"),n("li",null,"生成 update 对象：调用 setState 时传入的 new state 会存储在 update 对象的 payload 属性上"),n("li",null,"将 update 对象收集到 组件的 Fiber node 内部的 updateQueue 中"),n("li",null,"为更新创建 task：新建的 task 会添加到 taskQueue 堆顶"),n("li",null,"workLoop 处理 task"),n("li",null,"协调 fiber tree"),n("li",null,"协调组件 fiber node"),n("li",null,"生成 new state：遍历 updateQueue 中所有的 update 对象，读取 payload 属性"),n("li",null,"执行组件 render"),n("li",null,"fiber tree 协调完成"),n("li",null,"浏览器渲染")],-1),gn=n("p",null,"上面 useTransition 的例子中，连续 3 次 setState，会生成 3 个 update 对象 - update1（setPending(true)），update2（setPending(false)），update3（callback 里的 setState 调用）。这三个 update 对象会按照创建的先后顺序依次添加到 updateQueue 中。",-1),_n=n("p",null,"update 对象结构：",-1),fn=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`export function createUpdate(eventTime: number, lane: Lane): Update<*> {
  const update: Update<*> = {
    eventTime,
    lane, // 这里为 update 绑定了优先级

    tag: UpdateState,
    payload: null,
    callback: null,

    next: null,
  };
  return update;
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),yn=n("p",null,"由于创建 update 对象的上下文不相同，导致 update 对象处理的时机不相同。第一次协调时，处理 update1；第二次协调时，处理 update2 和 update3。之所以这样，是因为不同的上下文，为 update 对象绑定了的不同的 lane。",-1),xn=n("p",null,"lane 决定了 update 对象的处理时机。",-1),wn=n("p",null,"所以如上，update1 被分配的 lane 为 InputContinuousLane，而 update2、update3 被分配的 lane 为 TransitionLane。为每个 update 生成 lane 的源码如下：",-1),Tn=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`export function requestUpdateLane(fiber: Fiber): Lane {
  ...
  const isTransition = requestCurrentTransition() !== NoTransition;
  if (isTransition) {
    if (currentEventTransitionLane === NoLane) {
      // All transitions within the same event are assigned the same lane.
      currentEventTransitionLane = claimNextTransitionLane();
    }
    return currentEventTransitionLane;
  }
  ...
}

export function requestCurrentTransition(): Transition | null {
  return ReactCurrentBatchConfig.transition;
}

`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Pn=n("p",null,"至此，已经可以看到，update2 和 update3 被分配了较低的优先级，因此 3 次 setState 被分开成了 2 次更新。",-1),Cn=n("p",null,"了解了上面的原理，就可以来回答这几个问题了：",-1),Ln=n("p",null,[n("strong",null,"useTransition 为何能表现出 debounce 效果")],-1),Sn=n("p",null,"高优先级更新会中断低优先级更新，优先处理。",-1),jn=n("p",null,"startTransition 方法执行过程中， setPending(true) 触发的更新优先级较高，而 setPending(false)、callback 触发的更新优先级较低。当 callback 触发的更新进入协调阶段以后，由于协调过程可中断，并且用户一直在输入导致一直触发 setPending(true)，使得 callback 触发的更新一直被中断，直到用户停止输入以后才能被完整处理。",-1),Vn=n("p",null,[n("strong",null,"useTransition 为何能表现出 throttle 效果")],-1),In=n("p",null,"如果你一直输入，最多 5s，长列表必然会渲染，和 防抖 - throttle 效果一样。这是因为为了防止低优先级更新一直被高优先级更新中断而得不到处理，react 为每种类型的更新定义了最迟必须处理时间 - timeout。如果在 timeout 时间内更新未被处理，那么更新的优先级就会被提升到最高 - ImmediatePriority，优先处理。",-1),Rn=n("p",null,"transition 更新的优先级为 NormalPriority，timeout 为 5000ms 即 5s。如果超过 5s， transition 更新还因为一直被高优先级更新中断而没有处理，它的优先级就会被提升为 ImmediatePriority，优先处理。这样就实现了 throttle 的效果。",-1),Bn=n("p",null,[n("strong",null,"useTransition 和 startTransition 区别")],-1),Nn=n("p",null,"用户连续输入时，使用 useTransition 会出现 debounce 的效果，而直接使用 startTransition 则不会。",-1),Un=n("p",null,"因为 startTransition 的源码：",-1),En=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`function startTransition(scope) {
    var prevTransition = ReactCurrentBatchConfig.transition;
    ReactCurrentBatchConfig.transition = 1;  // 修改更新上下文
    try {
      scope();   // 触发更新
    } finally {
      ...
    }
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),zn=n("p",null,"对比 useTransition 的 startTransition， 我们会发现 startTransition 中少了 setPending(true) 的过程。",-1),An=n("p",null,"使用 useTransition 时，transition 更新会一直被连续的 setPending(true) 中断，每次中断时都会被重置为未开始状态，导致 transition 更新只有在用户停止输入(或者超过 5s)时才能得到有效处理，也就出现了类似 debounce 的效果。",-1),Dn=n("p",null,"而直接使用 startTransition 时， 尽管协调过程会每隔 5ms 中断一次，但由于没有 setPending(true) 的中断， 连续的输入并不会重置 transition 更新。当 transition 更新结束协调时，自然而然地就会开始浏览器渲染过程，不会出现类似 debounce 的效果。",-1),Kn=n("h1",{id:"transition-api-由来",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transition-api-由来","aria-hidden":"true"},"#"),s(" Transition API 由来")],-1),Wn=n("h2",{id:"react-如何优化性能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-如何优化性能","aria-hidden":"true"},"#"),s(" React 如何优化性能")],-1),Mn=n("p",null,"React ，它本身的思路是纯 JS 写法，这种方式非常灵活，但是，这也使它在编译时很难做太多的事情，像上面这样的编译时优化是很难实现的。所以，我们可以看到 React 几个大版本的的优化主要都在运行时。进行运行时优化，关注的主要问题就是 CPU 和 IO。",-1),Xn=n("ul",null,[n("li",null,"首先，就是 CPU 的问题，主流浏览器的刷新频率一般是 60Hz，也就是每秒刷新 60 次，大概 16.6ms 浏览器刷新一次。由于 GUI 渲染线程和 JS 线程是互斥的，所以 JS 脚本执行和浏览器布局、绘制不能同时执行。在这 16.6ms 的时间里，浏览器既需要完成 JS 的执行，也需要完成样式的重排和重绘，如果 JS 执行的时间过长，超出了 16.6ms，这次刷新就没有时间执行样式布局和样式绘制了，于是在页面上就会表现为卡顿。"),n("li",null,"IO 的问题就比较好理解了，很多组件需要等待一些网络延迟，那么怎么样才能在网络延迟存在的情况下，减少用户对网络延迟的感知呢？就是 react 需要解决的问题。 React 引入 fiber 机制，可中断协调阶段，就是在 CPU 角度优化运行时性能。而 Suspense API 则是 IO 角度的优化，让新内容替换成旧内容的过程不闪屏，内容切换更流畅。")],-1),qn=n("h2",{id:"transition-api-登场",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#transition-api-登场","aria-hidden":"true"},"#"),s(" Transition API 登场")],-1),Fn=n("p",null,"Suspense 的作用，主要是 react 优化切换内容效果。而 Transition API 的最初提出，是为了配合 Suspense API 进行 IO 角度的优化。",-1),Qn={href:"https://17.reactjs.org/docs/concurrent-mode-patterns.html",target:"_blank",rel:"noopener noreferrer"},Jn=n("p",null,"useTransition 的前身是 withSuspenseConfig。Sebmarkbage 在 19 年五月份提的一个 PR 中引进了它。在 19 年 11 月更名为 useTransition。",-1),On=n("p",null,"Transition Hook 的作用是告诉 React，延迟更新 State 也没关系。",-1),Hn=n("p",null,"初版的 useTransition 的实现源码如下：",-1),Yn=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`function updateTransition(
  config: SuspenseConfig | void | null,
): [(() => void) => void, boolean] {
  const [isPending, setPending] = updateState(false); // 相当于useState
  const startTransition = updateCallback(             // 相当于useCallback
    callback => {
      setPending(true); // 设置 pending 为 true
      // 以低优先级调度执行
      Scheduler.unstable_next(() => {
        // ⚛️ 设置suspenseConfig
        const previousConfig = ReactCurrentBatchConfig.suspense;
        ReactCurrentBatchConfig.suspense = config === undefined ? null : config;
        try {
          // 还原 pending
          setPending(false);

          // 执行你的回调
          callback();

        } finally {
          // ⚛️ 还原suspenseConfig
          ReactCurrentBatchConfig.suspense = previousConfig;
        }
      });
    },
    [config, isPending],
  );
  return [startTransition, isPending];
}
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Gn=n("p",null,"划重点，虽然跟现在的版本有一些差别，但主要的思想依然是：以较低的优先级运行后 2 次 setState。",-1),Zn=n("p",null,"一路以来，主要的修改包含：在做兼容数据流状态库如 redux，修改优先级的实现方案。",-1),$n={href:"https://github.com/facebook/react/issues/13206",target:"_blank",rel:"noopener noreferrer"},ns=n("h1",{id:"参考资料",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考资料","aria-hidden":"true"},"#"),s(" 参考资料")],-1),ss={href:"https://juejin.cn/post/7022992730343079966#1",target:"_blank",rel:"noopener noreferrer"},es={href:"https://juejin.cn/post/7037765018313555982#1-1",target:"_blank",rel:"noopener noreferrer"},as={href:"https://juejin.cn/post/7008802041602506765",target:"_blank",rel:"noopener noreferrer"},ts={href:"https://juejin.cn/post/6844903986420514823%E3%80%8B%EF%BC%9Ahttps://juejin.cn/post/6844903986420514823",target:"_blank",rel:"noopener noreferrer"},os={href:"https://juejin.cn/post/7010539227284766751",target:"_blank",rel:"noopener noreferrer"};function is(ls,cs){const t=i("CodeDemo"),a=i("ExternalLinkIcon");return c(),r("div",null,[d,e(t,{id:"code-demo-43",type:"react",title:"%5Breact%5D%20throttle%20demo",code:"eJxlUk1vpDAM/SsWF4KEGPbQy2xnVqveV6vtqpdOVbngmabNBJSYtiPEf69DGOhHLiT2e/bzM33y5JN1UjXWM/TQebpCYx6wes7D45qRabz9d2i9Zt3YHK4735L1BANs4B9hxT93dmcNMVSdc2T5Bk1HkkxTydBb2ziGmvbYGQaVwWYL/c4CxLa3LwGdg6fIuxPiubdK00xKzFDt/5KttT0InNHxImtiLQEViAv1EW1t6Eo+h6BM0SLjDLH0KgIkSYXUPhAXo7KxP8Bq9bWliqOcdavIz6Jg+BYfw8MkyhF3zoKK0Mtav2zjVR7ath1DY6PYTX9f8KNrmA2pj1Pk8KMsy1zWZgiDJ2vYowlryQZYLeWkNlQGvf+DR6k2Wwi/IDXNyExhLbsaZg5A/9s5PKkL6VBmSxig2GtjVIrp5+gRW6U00zEHbWt6++ju+Uwzj4Ke6SRSAnLY9qPNw+UquDCZF49MMo8xZie75nswNVia5Enlw59cTBPF3k2LlebTGsriIiAFOLwDI6/vmg=="},{default:o(()=>[k,m]),_:1}),b,v,e(t,{id:"code-demo-62",type:"react",title:"%5Breact%5D%20debounce%20demo",code:"eJxlUsFOwzAM/RWrl6ZS1ZUDl7ENod0RYogLQyhrvRGWuVWSjk1V/p2k6doBudSx37OfX9NGXzqaRkVF2kALjcYll3LDi33qLyvDDXbRi+KkhREVpbBqdI2kESzM4Rl5Ye7WtCaJBopGKSTzymWDrhjHroKnulIGStzyRhpgCcwX0K4JIIx9O3p0ChoD790RL7NZHCeuxQAV+gmpFLRzcMOVGWX1rDHBPHGkfnIqJS7dZ+eVMRxlXCCE306AK2Lmeu/QZJ2ybj7AZPJ3JAurXHSzwE+CYPiX79K2F6XQNIqABeisFMdFCN1FUN0YqCiInbcfWYmbqqEC2fUWKdzkeZ5YmIxU1wcKybV+5AfHHOyCe4hlxX0Yw9T9FztwANoHpfiZ3bpueTKmAbKtkJLFPP6dPfCaMWHwkIKgEk/XTl5Ov18naI9nJ8Uj7aLtLLWzid+4Nyocm9hhja7aWzPE3kBvX5RGhfavNus3CrOrmhfCnKeQZ7ce6YD2B0jU6Kw="},{default:o(()=>[h,g]),_:1}),_,f,e(t,{id:"code-demo-81",type:"react",title:"%5Breact%5D%20useTransition%20demo",code:"eJyNVE1v00AQ/SujXOxIltNLL2lTBLkjRBGXpEJbe5OabteWvQ6Ngk+ABBIqBy5VK/FxgN4qjlUg8F9QQnrjLzDr3bU3qRD44rXnzezbN2920nicNdqNIOaZgAnkGe0SxvZJcOjJj11BBC1XD1LCs0hEMfdgN88SyjMKBXTgPiWB2OrzPmdUQJCnKeXiIWE5xaDjYIQeJ3EqIKQDkjMBbhM6OzDpcwC1bW8k0R5kVOXtYaLZ23WcJpaooFF2j/Iw4kOEC5KKmpbOqn+4MrFOPSA8ZLSLr6Fk5tKahoFw+gQJYJD6WHtIhV8yK/eH9f1cdQ5D2lXJTcUWoNW6ESojhSaVUpGnHFyF3g6j0Y5a4kfEk1xAzBXZzsSmXkCrBmIWBIxk2V1yhLhKHLgFDouJXDrQxi4UVQ7A5HaakrG7uYFPs/4N4A8ixlyHOKt/j0jiupGgRx5EPKTHtm7m0acpCR3SMVKRyGJnUgpYbLfk+bQy6imaRXWMMqqFqNZSLilWw2sEmfSor0+k9o4TEkRi3IYNf1MiSyCiBjkPZHsgT0L0j9UvbYVBNGxXDu6W3/AURnEU4ovnjHl93mxDT/dXBqqFB/txzChBs9n+tU1JhV6Xfiw5KCMPCMtoc0saY3l+tZi9nU9PjMvrWmsmq2qYqXRt1ddrGZD2tP5aaVfNzxVprvlcX35fzi4BFSn1nV9NQQZNDiLmXz/NZyfzb6eLFy+X04vrL88W08+/Xl1cf3xtULvBAQ1zRlM/x4OQfUYf4eQLLaPlFyz38+z899UbvW+20osapwRJUjqK4jzTndL3TVddM3eICA5UxDdlLJf9C4rVlCGg00Gh0bKDiNMQp0f6AAdHRa2KIh2vWl+q9+N0cfLeqGcHLbF199XsW8lKw/nsw/Ls+eL8HQprA0wLq6tMzw4gTwzd5GKELSn9Tdj/EmZVd0uCamwLc9UVODHy3VNy4TVh5mGvjCicviJ6aw630XqOiz9MWj7N"},{default:o(()=>[y,x,w,T,P,C,L,S,j,V,I,R,B,N,U,E,z,A,D,K,W,M,X,q,F,Q,J,O,H,Y,G,Z,$,nn,sn,en,an,tn,on,ln,cn,rn,un,pn,dn,kn,mn,bn,vn,hn,gn,_n,fn,yn,xn,wn,Tn,Pn,Cn,Ln,Sn,jn,Vn,In,Rn,Bn,Nn,Un,En,zn,An,Dn,Kn,Wn,Mn,Xn,qn,Fn,n("p",null,[s("官方文档："),n("a",Qn,[s("https://17.reactjs.org/docs/concurrent-mode-patterns.html"),e(a)])]),Jn,On,Hn,Yn,Gn,Zn,n("p",null,[s("react 关于 Suspense 的讨论帖："),n("a",$n,[s("https://github.com/facebook/react/issues/13206"),e(a)])]),ns,n("ul",null,[n("li",null,[s("《漫谈 react 系列(三): 三层 loop 弄懂 Concurrent 模式》："),n("a",ss,[s("https://juejin.cn/post/7022992730343079966#1"),e(a)])]),n("li",null,[s("《漫谈 React 系列(四): React18 自己的防抖节流 - useTransition》："),n("a",es,[s("https://juejin.cn/post/7037765018313555982#1-1"),e(a)])]),n("li",null,[s("《React 源码解析之优先级 Lane 模型上》："),n("a",as,[s("https://juejin.cn/post/7008802041602506765"),e(a)])]),n("li",null,[s("《"),n("a",ts,[s("https://juejin.cn/post/6844903986420514823》：https://juejin.cn/post/6844903986420514823"),e(a)])]),n("li",null,[s("《React 运行时优化方案的演进》："),n("a",os,[s("https://juejin.cn/post/7010539227284766751"),e(a)])])])]),_:1})])}const us=l(p,[["render",is],["__file","UnderstandingReactTransitionImplementation.html.vue"]]);export{us as default};
