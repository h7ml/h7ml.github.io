import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as a,c as s,d as e,e as n,a as o,f as r}from"./app-Cbix2SPG.js";const c={},d=r('<p>NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：</p><ul><li>选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。</li><li>选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。</li><li>SSD 缓存对家用的 NAS 性能提升不大，没必要加。</li><li>DS/Transmission 套件：用于 PT 下载 (禁用 DHT，半小时停止做种)。</li><li>Synology Drive Server 套件：电脑文件备份。</li><li>Hyper Backup：本地多硬盘备份，防止一个硬盘丢失后重要文件损坏，比如 docker 容器的本地配置文件夹。</li><li>群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？</li></ul><h2 id="nas-docker" tabindex="-1"><a class="header-anchor" href="#nas-docker"><span>NAS Docker</span></a></h2><p>NAS Docker 建议指定本地端口，否则重启容器会让端口发生改变，重启不会不影响 docker 配置。升级容器镜像，不影响内部数据库。群晖的「Docker 导出」只会导出安装镜像和配置，但不包括容器内部使用的数据库，用处不大。</p><p><strong>Docker 容器安装</strong>：</p>',5),h=e("code",null,"docker-compose.yml",-1),p={href:"http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},u=r('<ol><li>选择「控制面板」&gt;「终端机和 SNMP」，启动 SSH 功能。</li><li>putty 连接群晖 SSH，进入 <code>docker-compose.yml</code> 所在路径，比如 <code>cd /volume3/storage</code>。</li><li>通过终端在同目录下运行 <code>sudo docker-compose up -d</code> 后等待部署完成。</li><li>关闭 SSH 功能。</li></ol><p>注意：root 用户需在命令前添加 <code>sudo</code>，否则会提示 <code>Permission denied</code>。</p><h2 id="docker-容器" tabindex="-1"><a class="header-anchor" href="#docker-容器"><span>Docker 容器</span></a></h2><h3 id="常用" tabindex="-1"><a class="header-anchor" href="#常用"><span>常用</span></a></h3>',4),_={href:"https://registry.hub.docker.com/r/linuxserver/qbittorrent/",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"BitTorrent - DHT",-1),m={href:"https://blog.csdn.net/weixin_45120915/article/details/114691473",target:"_blank",rel:"noopener noreferrer"},w={href:"https://docs.photoprism.app/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/AragonSnow/qiandao",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/ckx000/get-cookies",target:"_blank",rel:"noopener noreferrer"},f={href:"https://containrrr.dev/watchtower/",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,[n("监控指定名称的镜像："),e("code",null,"docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower --cleanup --run-once nginx redis"),n("。本案例只更新名为「nginx」和「redis」的容器，其他容器将被忽略。")]),e("li",null,[n("指定容器的 compose 命令中添加 lable "),e("code",null,"com.centurylinklabs.watchtower.enable=false"),n("，可禁止该容器的监控和更新。")])],-1),v=e("h3",{id:"资讯",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#资讯"},[e("span",null,"资讯")])],-1),y=e("li",null,"RSSHub：无需保存数据，pubData 为 GMT 时区，普通用户无法更改，Docker Timezone 设置也不会有改变。",-1),N=e("li",null,"Huginn：定期备份抓取脚本，数据库保存在本地。",-1),A={href:"https://registry.hub.docker.com/r/wangqiru/mercury-parser-api",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/easychen/checkchan-dist",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/dgtlmoon/changedetection.io",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"娱乐",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#娱乐"},[e("span",null,"娱乐")])],-1),B={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/Difegue/LANraragi",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/Difegue/LANraragi/blob/32cc991e8c5bae3bbd57d163278048c50159ae9f/tools/Documentation/advanced-usage/external-readers.md",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/Suwayomi/docker-tachidesk",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/hectorqin/reader",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/talebook/talebook",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/zzcabc/Docker_Buildx_Danmuji",target:"_blank",rel:"noopener noreferrer"},$=e("h3",{id:"自动化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自动化"},[e("span",null,"自动化")])],-1),R={href:"https://blog.csdn.net/alex_yangchuansheng/article/details/122295193",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/monicahq/monica",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/monicahq/docker",target:"_blank",rel:"noopener noreferrer"},L={href:"https://supermanito.github.io/Helloworld/#/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://registry.hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc",target:"_blank",rel:"noopener noreferrer"},Z=e("h3",{id:"待了解",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#待了解"},[e("span",null,"待了解")])],-1),F={href:"https://github.com/lsky-org/lsky-pro",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/EstrellaXD/Auto_Bangumi",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/jxxghp/nas-tools/wiki/%E5%AE%89%E8%A3%85%E6%95%99%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},U=e("li",null,"Emby、Plex：流媒体方案，暂不考虑。",-1),G=e("li",null,"Clash：代理服务器。",-1),J=e("h2",{id:"影视整理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#影视整理"},[e("span",null,"影视整理")])],-1),X=e("p",null,"下载文件后，用 tinyMediaManager 重命名并下载 NFO 和影视封面，最后放置于分类文件夹。",-1),K={href:"https://www.tinymediamanager.org/download/",target:"_blank",rel:"noopener noreferrer"},Q=e("a",{href:"#footnote1"},"[1]",-1),W=r('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 电视节目重命名规则</span>\n季文件夹名：Season <span class="token variable">${seasonNr}</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - S<span class="token variable">${seasonNr2}</span>E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n\n<span class="token comment"># 当只有一季时，则更改重命名规则</span>\n季文件夹名：为空时，会自动调用默认值\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span>\n\n<span class="token comment"># 多季，有标题时</span>\n剧集档案名：<span class="token variable">${showTitle}</span> - E<span class="token variable">${episodeNr2}</span> - <span class="token variable">${title}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nas-硬盘" tabindex="-1"><a class="header-anchor" href="#nas-硬盘"><span>NAS 硬盘</span></a></h2><p>插入新硬盘，新建储存空间，使用 Btrfs 或 Basic 格式。SHR 是群晖的智能 RAID 格式，不适用于硬盘容量不同的情况。</p><table><thead><tr><th>硬盘</th><th>容量</th><th>到期时间（5 年）</th></tr></thead><tbody><tr><td>硬盘 1</td><td>10T</td><td>2025-06-18</td></tr><tr><td>硬盘 2</td><td>4T</td><td>2023-01-24</td></tr><tr><td>硬盘 3</td><td>14T</td><td>2027-02-11</td></tr><tr><td>硬盘 4</td><td>8T</td><td>2026-01-06</td></tr><tr><td>冷备份</td><td>2T</td><td>2014-10</td></tr></tbody></table><p>换下的机械硬盘做冷备份，存储照片等长期数据。</p><p>硬盘临期后，用大容量硬盘替换。选择「存储池」&gt;「更改 RAID 类型」，无损转换 basic 到 Raid1。不过，不同容量硬盘组 RAID，只能以最小磁盘容量计使用空间。</p><p>更换硬盘后，注意将数据连同文件夹用 file station 复制过去 (按住 Shift 选中所有你要的文件点右键 移动到...)，关机卸载旧盘。如果该硬盘涉及套件位置，注意检查设置。<a href="#footnote2">[2]</a></p><p>共享文件迁移：选择「控制面板」&gt;「共享文件夹」，把你的共享文件夹位置修改到新储存空间。<a href="#footnote3">[3]</a></p><hr>',9),Y={href:"https://post.smzdm.com/p/a0d67m2z/",target:"_blank",rel:"noopener noreferrer"},ee=e("a",{href:"#footnote-ref1"},"↩︎",-1),ne={href:"https://www.bigzhang.com/3264.html",target:"_blank",rel:"noopener noreferrer"},te=e("a",{href:"#footnote-ref2"},"↩︎",-1),oe={href:"https://blog.csdn.net/hilaryfrank/article/details/109722319",target:"_blank",rel:"noopener noreferrer"},re=e("a",{href:"#footnote-ref3"},"↩︎",-1);function le(ie,ae){const t=i("ExternalLinkIcon");return a(),s("div",null,[d,e("p",null,[n("推荐用 "),h,n(" 安装 Docker，镜像会自动同步到 NAS 的容器列表中。docker-compose 使用参考 "),e("a",p,[n("TTRSS docker-composeopen in new window"),o(t)]),n("。")]),u,e("ul",null,[e("li",null,[e("a",_,[n("qbittorrentopen in new window"),o(t)]),n("：需修改所有默认端口，否则容易报错。PT 下载关闭 "),g,n(" 和其他隐私选项，半小时停止做种，将下载文件添加 Everyone 权限，其他设置参考 "),e("a",m,[n("群晖使用 qbittorrentopen in new window"),o(t)]),n("。")]),e("li",null,[e("a",w,[n("PhotoPrismopen in new window"),o(t)]),n("：基于 ai 私有化部署的个人相册。如果部署时出错，则尝试删除数据库文件夹下的内容。地点标记功能非常强大，类似本地版 Google Photos。")]),e("li",null,[e("a",b,[n("qiandaoopen in new window"),o(t)]),n("：自动签到开源框架，需搭配浏览器扩展 "),e("a",k,[n("get-cookiesopen in new window"),o(t)]),n(" 使用，可导出配置。")]),e("li",null,[e("a",f,[n("watchtoweropen in new window"),o(t)]),n("：监控并更新 Docker 容器。 "),S])]),v,e("ul",null,[y,N,e("li",null,[n("Tiny Tiny RSS：定期备份订阅源和设置，自动更新，可配置全文插件 "),e("a",A,[n("mercury-parser-apiopen in new window"),o(t)]),n("。")]),e("li",null,[e("a",x,[n("Check 酱 open in new window"),o(t)]),n("：监测网页内容变化，并发送异动到微信。亦支持 http status、json 和 rss 监测。配合自架云端，关电脑后也能运行。同类工具有 "),e("a",D,[n("changedetection.ioopen in new window"),o(t)]),n("。")])]),T,e("ul",null,[e("li",null,[e("a",B,[n("AListopen in new window"),o(t)]),n("：开源的网盘管理工具，还支持对象存储，本地存储，FTP 等等。")]),e("li",null,[e("a",M,[n("LANraragiopen in new window"),o(t)]),n("：免费开源的漫画管理器，支持 zip/rar/targz/lzma/7z/xz/cbz/cbr/pdf 多种格式，可从网页和 "),e("a",E,[n("第三方客户端 open in new window"),o(t)]),n(" 浏览。")]),e("li",null,[e("a",z,[n("Tachiyomiopen in new window"),o(t)]),n("：开源的漫画阅读应用，通过安装扩展插件，可以方便地订阅并聚合漫画源。使用前，需进入 Extensions，点右上角的 Enabled Languages 按钮，设置为中文源，然后会在页面底部发现中文漫画源。安装源后，进入 Souces 中点击进入对应源。")]),e("li",null,[e("a",P,[n("readeropen in new window"),o(t)]),n("：阅读 3 的服务器版，摆脱客户端，网页版即可查看。自定义替换进入文章页面左侧的「设置」-「过滤规则管理」。")]),e("li",null,[e("a",H,[n("Tale Bookopen in new window"),o(t)]),n("：基于 Calibre 的简单的个人图书管理系统，支持在线阅读，但阅读体验不强且 Bug 较多，个人更喜欢直接用 PC 端查看。")]),e("li",null,[e("a",q,[n("Bilibili_Danmujiopen in new window"),o(t)]),n("：B 站直播礼物答谢、定时广告、关注感谢，自动回复工具，房管工具，自动打卡，Bilibili 直播弹幕姬 (使用 websocket 协议)，java 版 B 站弹幕姬。部署 Docker 时需更新 jdr release 文件。")])]),$,e("ul",null,[e("li",null,[e("a",R,[n("n8nopen in new window"),o(t)]),n("：开源 IFTTT 工具，偏重于云服务。")]),e("li",null,[e("a",C,[n("Monicaopen in new window"),o(t)]),n("：Monica 允许人们记录所有关于朋友和家人的重要事情。喜欢和他们一起的活动。你最后一次打电话给某人的时候，你们谈了些什么。它会帮助你记住他们孩子的名字和年龄。它还能提醒你打电话给一个很久没联系的人。Monica 的容器设置查看 "),e("a",j,[n("Monica Dockeropen in new window"),o(t)]),n("。")]),e("li",null,[e("a",L,[n("supermanito/Helloworldopen in new window"),o(t)]),n("：京东签到等脚本，功能很强大，没怎么研究。")]),e("li",null,[e("a",I,[n("ubuntu-desktop-lxde-vncopen in new window"),o(t)]),n("：能在 Docker 上运行的 Ubuntu 桌面版，适合挂载要长期运行的程序。测试 OBS 时，对内存要求不高，但 CPU 直冲 100%，fps 只有 7。")])]),Z,e("ul",null,[e("li",null,[e("a",F,[n("兰空图床 open in new window"),o(t)]),n("：图床已经部署在七牛云，用 Picgo 上传，没感觉有必要用它。")]),e("li",null,[e("a",V,[n("AutoBangumiopen in new window"),o(t)]),n("：自动追番器，用以替代自我审查的 Bilibili。")]),e("li",null,[e("a",O,[n("nas-toolsopen in new window"),o(t)]),n("：号称能自动整理文件，但测试识别中很容易出错，暂不考虑。")]),U,G]),J,X,e("p",null,[e("a",K,[n("tinyMediaManageropen in new window"),o(t)]),n(" v4 免费版足够个人使用，v3 作偶尔补充使用，搜索首选语言改为「大陆简体」更精准。"),Q]),W,e("ol",null,[e("li",null,[e("p",null,[e("a",Y,[n("群晖 NAS 使用 Emby+tMM 打造全平台观影畅爽体验（附下载地址）open in new window"),o(t)]),n(),ee])]),e("li",null,[e("p",null,[e("a",ne,[n("如何把群晖 NAS 上的套件搬到另外个硬盘上 open in new window"),o(t)]),n(),te])]),e("li",null,[e("p",null,[e("a",oe,[n("群晖 NAS 跨存储空间移动共享文件夹 (NAS 新增磁盘)open in new window"),o(t)]),n(),re])])])])}const de=l(c,[["render",le],["__file","nas.html.vue"]]),he=JSON.parse('{"path":"/posts/linux/nas.html","title":"NAS","lang":"zh-CN","frontmatter":{"icon":"process","order":4,"date":"2023-01-19T00:00:00.000Z","author":"h7ml","title":"NAS","category":"linux","tag":"linux","star":true,"lastUpdated":false,"description":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/linux/nas.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/linux/nas.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"NAS"}],["meta",{"property":"og:description","content":"NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点： 选择「控制面板」>「文件服务」>「SMB」>「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。 选择「控制面板」>「任务计划」>「新增」>「计划的任务」>「用户定义的脚本」，给 NAS 建立定时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2023-01-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NAS\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"NAS Docker","slug":"nas-docker","link":"#nas-docker","children":[]},{"level":2,"title":"Docker 容器","slug":"docker-容器","link":"#docker-容器","children":[{"level":3,"title":"常用","slug":"常用","link":"#常用","children":[]},{"level":3,"title":"资讯","slug":"资讯","link":"#资讯","children":[]},{"level":3,"title":"娱乐","slug":"娱乐","link":"#娱乐","children":[]},{"level":3,"title":"自动化","slug":"自动化","link":"#自动化","children":[]},{"level":3,"title":"待了解","slug":"待了解","link":"#待了解","children":[]}]},{"level":2,"title":"影视整理","slug":"影视整理","link":"#影视整理","children":[]},{"level":2,"title":"NAS 硬盘","slug":"nas-硬盘","link":"#nas-硬盘","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":6.77,"words":2031},"filePathRelative":"posts/linux/nas.md","localizedDate":"2023年1月19日","excerpt":"<p>NAS 主要用于 Docker 服务、影视管理和文件存储备用这三方面。群晖 NAS 在使用前，注意以下几点：</p>\\n<ul>\\n<li>选择「控制面板」&gt;「文件服务」&gt;「SMB」&gt;「高级设置」，将最小 SMB 协议 设为 SMB1，避免部分应用发现了 NAS 但无法打开共享文件。</li>\\n<li>选择「控制面板」&gt;「任务计划」&gt;「新增」&gt;「计划的任务」&gt;「用户定义的脚本」，给 NAS 建立定时任务脚本。</li>\\n<li>SSD 缓存对家用的 NAS 性能提升不大，没必要加。</li>\\n<li>DS/Transmission 套件：用于 PT 下载 (禁用 DHT，半小时停止做种)。</li>\\n<li>Synology Drive Server 套件：电脑文件备份。</li>\\n<li>Hyper Backup：本地多硬盘备份，防止一个硬盘丢失后重要文件损坏，比如 docker 容器的本地配置文件夹。</li>\\n<li>群晖系统分布在所有硬盘，拔出一个不影响使用。但应用会有影响？</li>\\n</ul>","autoDesc":true}');export{de as comp,he as data};
