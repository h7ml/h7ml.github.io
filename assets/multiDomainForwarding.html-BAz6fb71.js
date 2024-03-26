import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as r,c as d,d as n,e,a,f as l}from"./app-Cbix2SPG.js";const c={},o=n("p",null,"Nginx 是一个高性能的 Web 服务器和反向代理服务器。它可以用来配置多个域名和路由规则，将请求转发到不同的后端服务器或者处理请求本身。在这篇文章中，我们将讨论如何使用 Nginx 配置多域名转发。",-1),m={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},p={href:"http://example.net",target:"_blank",rel:"noopener noreferrer"},v=l(`<h3 id="_1-安装-nginx" tabindex="-1"><a class="header-anchor" href="#_1-安装-nginx"><span>1. 安装 Nginx</span></a></h3><p>首先，我们需要在服务器上安装 Nginx。在 Linux 系统中，可以使用 apt-get 或 yum 等包管理器进行安装。安装完成后，我们可以使用以下命令来检查 Nginx 是否已经启动：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-配置-nginx" tabindex="-1"><a class="header-anchor" href="#_2-配置-nginx"><span>2. 配置 Nginx</span></a></h3><p>接下来，我们需要配置 Nginx，让它能够转发请求。打开 Nginx 的配置文件，一般在/etc/nginx/nginx.conf 中。在 http 块中添加以下代码：</p><div class="language-nginx.conf line-numbers-mode" data-ext="nginx.conf" data-title="nginx.conf"><pre class="language-nginx.conf"><code>    http {
        # 配置example.com转发规则
        server {
            listen 80;
            server_name example.com;
            location / {
            proxy_pass http://backend1;
        }
    }

    # 配置example.net转发规则
    server {
        listen 80;
        server_name example.net;
        location / {
            proxy_pass http://backend2;
        }
    }

    # 配置后端服务器
    upstream backend1 {
        server 192.168.0.1;
    }

    upstream backend2 {
        server 192.168.0.2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们需要配置 Nginx，让它能够转发请求。打开 Nginx 的配置文件，一般在/etc/nginx/nginx.conf 中。在 http 块中添加以下代码：</p><div class="language-nginx.conf line-numbers-mode" data-ext="nginx.conf" data-title="nginx.conf"><pre class="language-nginx.conf"><code>    http {
        # 配置example.com转发规则
        server {
            listen 80;
            server_name example.com;
            location / {
            proxy_pass http://backend1;
        }
    }

    # 配置example.net转发规则
    server {
        listen 80;
        server_name example.net;
        location / {
            proxy_pass http://backend2;
        }
    }

    # 配置后端服务器
    upstream backend1 {
        server 192.168.0.1;
    }

    upstream backend2 {
        server 192.168.0.2;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},g={href:"http://example.net",target:"_blank",rel:"noopener noreferrer"},x=l(`<p>在最后的 upstream 块中，我们定义了两个后端服务器的地址。这些地址可以是 IP 地址或者域名。</p><h3 id="_3-重启-nginx" tabindex="-1"><a class="header-anchor" href="#_3-重启-nginx"><span>3. 重启 Nginx</span></a></h3><p>修改完成配置文件后，我们需要重启 Nginx，使配置生效。使用以下命令重启 Nginx：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-测试转发" tabindex="-1"><a class="header-anchor" href="#_4-测试转发"><span>4. 测试转发</span></a></h3>`,5),h={href:"http://example.com",target:"_blank",rel:"noopener noreferrer"},b={href:"http://example.net",target:"_blank",rel:"noopener noreferrer"},_=n("h3",{id:"总结",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#总结"},[n("span",null,"总结")])],-1),f=n("p",null,"在本文中，我们介绍了如何使用 Nginx 配置多域名转发。通过配置 Nginx 的 server 块和 upstream 块，我们可以将请求转发到不同的后端服务器上。如果您需要更复杂的路由规则，可以参考 Nginx 官方文档和在线社区的资源。",-1);function N(k,y){const i=t("ExternalLinkIcon");return r(),d("div",null,[o,n("p",null,[e("假设我们有两个域名，分别是 "),n("a",m,[e("example.com"),a(i)]),e(" 和 "),n("a",p,[e("example.net"),a(i)]),e("。我们希望将这两个域名分别转发到不同的后端服务器上。我们需要进行以下步骤：")]),v,n("p",null,[e("在上面的代码中，我们定义了两个 server 块，分别对应 "),n("a",u,[e("example.com"),a(i)]),e(" 和 "),n("a",g,[e("example.net"),a(i)]),e(" 的请求。其中 listen 80 表示监听 80 端口，server_name 表示该 server 块所对应的域名，location /表示处理根路径下的请求。在 location 块中，我们使用了 proxy_pass 指令将请求转发到对应的后端服务器。")]),x,n("p",null,[e("现在，我们可以使用浏览器访问 "),n("a",h,[e("example.com"),a(i)]),e(" 和 "),n("a",b,[e("example.net"),a(i)]),e(" 来测试转发是否生效。如果一切顺利，请求应该会被转发到对应的后端服务器上。")]),_,f])}const D=s(c,[["render",N],["__file","multiDomainForwarding.html.vue"]]),F=JSON.parse('{"path":"/posts/nginx/multiDomainForwarding.html","title":"nginx多域名转发配置","lang":"zh-CN","frontmatter":{"icon":"nginx","order":7,"date":"2023-03-04T00:00:00.000Z","author":"h7ml","category":"nginx","tag":"nginx","title":"nginx多域名转发配置","description":"Nginx 是一个高性能的 Web 服务器和反向代理服务器。它可以用来配置多个域名和路由规则，将请求转发到不同的后端服务器或者处理请求本身。在这篇文章中，我们将讨论如何使用 Nginx 配置多域名转发。 假设我们有两个域名，分别是 example.com 和 example.net。我们希望将这两个域名分别转发到不同的后端服务器上。我们需要进行以下步骤...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/nginx/multiDomainForwarding.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/nginx/multiDomainForwarding.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"nginx多域名转发配置"}],["meta",{"property":"og:description","content":"Nginx 是一个高性能的 Web 服务器和反向代理服务器。它可以用来配置多个域名和路由规则，将请求转发到不同的后端服务器或者处理请求本身。在这篇文章中，我们将讨论如何使用 Nginx 配置多域名转发。 假设我们有两个域名，分别是 example.com 和 example.net。我们希望将这两个域名分别转发到不同的后端服务器上。我们需要进行以下步骤..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:published_time","content":"2023-03-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx多域名转发配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":3,"title":"1. 安装 Nginx","slug":"_1-安装-nginx","link":"#_1-安装-nginx","children":[]},{"level":3,"title":"2. 配置 Nginx","slug":"_2-配置-nginx","link":"#_2-配置-nginx","children":[]},{"level":3,"title":"3. 重启 Nginx","slug":"_3-重启-nginx","link":"#_3-重启-nginx","children":[]},{"level":3,"title":"4. 测试转发","slug":"_4-测试转发","link":"#_4-测试转发","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":2.37,"words":711},"filePathRelative":"posts/nginx/multiDomainForwarding.md","localizedDate":"2023年3月4日","excerpt":"<p>Nginx 是一个高性能的 Web 服务器和反向代理服务器。它可以用来配置多个域名和路由规则，将请求转发到不同的后端服务器或者处理请求本身。在这篇文章中，我们将讨论如何使用 Nginx 配置多域名转发。</p>\\n<p>假设我们有两个域名，分别是 <a href=\\"http://example.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">example.com</a> 和 <a href=\\"http://example.net\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">example.net</a>。我们希望将这两个域名分别转发到不同的后端服务器上。我们需要进行以下步骤：</p>","autoDesc":true}');export{D as comp,F as data};
