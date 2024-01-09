import{_ as s,r as i,o as l,c as d,a as n,b as r,d as t,f as e}from"./app-Q-AMctCt.js";const c={},o=e('<h2 id="高可用配置" tabindex="-1"><a class="header-anchor" href="#高可用配置" aria-hidden="true">#</a> 高可用配置</h2><h2 id="安装-keepalived" tabindex="-1"><a class="header-anchor" href="#安装-keepalived" aria-hidden="true">#</a> 安装 Keepalived</h2><h3 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h3>',3),u={href:"https://www.keepalived.org/download.html#",target:"_blank",rel:"noopener noreferrer"},p=e(`<p>使用 <code>./configure</code> 编译安装</p><p>如遇报错提示</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>configure: error:
!!! OpenSSL is not properly installed on your system. !!!
!!! Can not include OpenSSL headers files. !!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装依赖</p><div class="language-crystal line-numbers-mode" data-ext="crystal"><pre class="language-crystal"><code>yum install openssl<span class="token operator">-</span>devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yum-安装" tabindex="-1"><a class="header-anchor" href="#yum-安装" aria-hidden="true">#</a> yum 安装</h3><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>使用 yum 安装后配置文件在:<code>/etc/keepalived/keepalived.conf</code></p><h3 id="最小配置" tabindex="-1"><a class="header-anchor" href="#最小配置" aria-hidden="true">#</a> 最小配置</h3><ul><li>第一台机器</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>! <span class="token directive"><span class="token keyword">Configuration</span> File for keepalived
global_defs</span> <span class="token punctuation">{</span>
 router_id lb111
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">vrrp_instance</span> atguigu</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">state</span> MASTER
    interface ens33
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">100</span>
    advert_int <span class="token number">1</span>
    authentication</span> <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass 1111
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">virtual_ipaddress</span></span> <span class="token punctuation">{</span>
        192.168.44.200
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二台机器</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>! <span class="token directive"><span class="token keyword">Configuration</span> File for keepalived
global_defs</span> <span class="token punctuation">{</span>
    router_id lb110
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">vrrp_instance</span> atguigu</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">state</span> BACKUP
    interface ens33
    virtual_router_id <span class="token number">51</span>
    priority <span class="token number">50</span>
    advert_int <span class="token number">1</span>
    authentication</span> <span class="token punctuation">{</span>
        auth_type PASS
        auth_pass 1111
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">virtual_ipaddress</span></span> <span class="token punctuation">{</span>
        192.168.44.200
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动服务</li></ul><div class="language-crystal line-numbers-mode" data-ext="crystal"><pre class="language-crystal"><code>systemctl start keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function v(m,b){const a=i("ExternalLinkIcon");return l(),d("div",null,[o,n("p",null,[n("a",u,[r("下载地址 open in new window"),t(a)])]),p])}const h=s(c,[["render",v],["__file","Keepalived.html.vue"]]);export{h as default};
