import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,f as s}from"./app-Cbix2SPG.js";const a={},l=s('<h2 id="sql-概述" tabindex="-1"><a class="header-anchor" href="#sql-概述"><span>SQL 概述</span></a></h2><p>了解了数据模型后，接下来我们就学习 SQL 语句，通过 SQL 语句对数据库、表、数据进行增删改查操作。</p><h2 id="sql-简介" tabindex="-1"><a class="header-anchor" href="#sql-简介"><span>SQL 简介</span></a></h2><ul><li>英文：Structured Query Language，简称 SQL</li><li>结构化查询语言，一门操作关系型数据库的编程语言</li><li>定义操作所有关系型数据库的统一标准</li><li>对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”</li></ul><h2 id="通用语法" tabindex="-1"><a class="header-anchor" href="#通用语法"><span>通用语法</span></a></h2><ul><li><p>SQL 语句可以单行或多行书写，以分号结尾。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916954.png" alt="image-20220910090836346" tabindex="0" loading="lazy"><figcaption>image-20220910090836346</figcaption></figure><p>如上，以分号结尾才是一个完整的 sql 语句。</p></li><li><p>MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。</p><p>同样的一条 sql 语句写成下图的样子，一样可以运行处结果。</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916982.png" alt="image-20220910090831935" tabindex="0" loading="lazy"><figcaption>image-20220910090831935</figcaption></figure></li><li><p>注释</p><ul><li><p>单行注释: -- 注释内容 或 #注释内容(MySQL 特有)</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916099.png" alt="image-20220910090829243" tabindex="0" loading="lazy"><figcaption>image-20220910090829243</figcaption></figure><p><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916488.png" alt="image-20220910090824707" loading="lazy"> GFDWQ 111111111111111111111</p><blockquote><p>注意：使用-- 添加单行注释时，--后面一定要加空格，而#没有要求。</p></blockquote></li><li><p>多行注释: /* 注释 */</p></li></ul></li></ul><h2 id="sql-分类" tabindex="-1"><a class="header-anchor" href="#sql-分类"><span>SQL 分类</span></a></h2><ul><li><p>DDL(Data Definition Language) ： 数据定义语言，用来定义数据库对象：数据库，表，列等</p><p>DDL 简单理解就是用来操作数据库，表等</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916598.png" alt="image-20220910090818084" tabindex="0" loading="lazy"><figcaption>image-20220910090818084</figcaption></figure></li><li><p>DML(Data Manipulation Language) 数据操作语言，用来对数据库中表的数据进行增删改</p><p>DML 简单理解就对表中数据进行增删改</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916681.png" alt="image-20220910090815829" tabindex="0" loading="lazy"><figcaption>image-20220910090815829</figcaption></figure></li><li><p>DQL(Data Query Language) 数据查询语言，用来查询数据库中表的记录(数据)</p><p>DQL 简单理解就是对数据进行查询操作。从数据库表中查询到我们想要的数据。</p></li><li><p>DCL(Data Control Language) 数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户</p><p>DML 简单理解就是对数据库进行权限控制。比如我让某一个数据库表只能让某一个用户进行操作等。</p></li></ul><blockquote><p>注意： 以后我们最常操作的是 <code>DML</code> 和 <code>DQL</code> ，因为我们开发中最常操作的就是数据。</p></blockquote>',9),n=[l];function p(c,r){return e(),i("div",null,n)}const o=t(a,[["render",p],["__file","sql.html.vue"]]),h=JSON.parse('{"path":"/posts/mysql/sql.html","title":"SQL概述","lang":"zh-CN","frontmatter":{"icon":"mysql","order":3,"date":"2022-03-20T00:00:00.000Z","author":"h7ml","category":"mysql","tag":"mysql","title":"SQL概述","description":"SQL 概述 了解了数据模型后，接下来我们就学习 SQL 语句，通过 SQL 语句对数据库、表、数据进行增删改查操作。 SQL 简介 英文：Structured Query Language，简称 SQL 结构化查询语言，一门操作关系型数据库的编程语言 定义操作所有关系型数据库的统一标准 对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方...","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/mysql/sql.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/mysql/sql.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"SQL概述"}],["meta",{"property":"og:description","content":"SQL 概述 了解了数据模型后，接下来我们就学习 SQL 语句，通过 SQL 语句对数据库、表、数据进行增删改查操作。 SQL 简介 英文：Structured Query Language，简称 SQL 结构化查询语言，一门操作关系型数据库的编程语言 定义操作所有关系型数据库的统一标准 对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916954.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:published_time","content":"2022-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL概述\\",\\"image\\":[\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916954.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916982.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916099.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916488.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916598.png\\",\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916681.png\\"],\\"datePublished\\":\\"2022-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":2,"title":"SQL 概述","slug":"sql-概述","link":"#sql-概述","children":[]},{"level":2,"title":"SQL 简介","slug":"sql-简介","link":"#sql-简介","children":[]},{"level":2,"title":"通用语法","slug":"通用语法","link":"#通用语法","children":[]},{"level":2,"title":"SQL 分类","slug":"sql-分类","link":"#sql-分类","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"posts/mysql/sql.md","localizedDate":"2022年3月20日","excerpt":"<h2>SQL 概述</h2>\\n<p>了解了数据模型后，接下来我们就学习 SQL 语句，通过 SQL 语句对数据库、表、数据进行增删改查操作。</p>\\n<h2>SQL 简介</h2>\\n<ul>\\n<li>英文：Structured Query Language，简称 SQL</li>\\n<li>结构化查询语言，一门操作关系型数据库的编程语言</li>\\n<li>定义操作所有关系型数据库的统一标准</li>\\n<li>对于同一个需求，每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”</li>\\n</ul>\\n<h2>通用语法</h2>\\n<ul>\\n<li>\\n<p>SQL 语句可以单行或多行书写，以分号结尾。</p>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916954.png\\" alt=\\"image-20220910090836346\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220910090836346</figcaption></figure>\\n<p>如上，以分号结尾才是一个完整的 sql 语句。</p>\\n</li>\\n<li>\\n<p>MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。</p>\\n<p>同样的一条 sql 语句写成下图的样子，一样可以运行处结果。</p>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916982.png\\" alt=\\"image-20220910090831935\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220910090831935</figcaption></figure>\\n</li>\\n<li>\\n<p>注释</p>\\n<ul>\\n<li>\\n<p>单行注释: -- 注释内容 或 #注释内容(MySQL 特有)</p>\\n<figure><img src=\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916099.png\\" alt=\\"image-20220910090829243\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220910090829243</figcaption></figure>\\n<p><img src=\\"https://static.h7ml.cn/vitepress/assets/images/mysql/202209100916488.png\\" alt=\\"image-20220910090824707\\" loading=\\"lazy\\"> GFDWQ 111111111111111111111</p>\\n<blockquote>\\n<p>注意：使用-- 添加单行注释时，--后面一定要加空格，而#没有要求。</p>\\n</blockquote>\\n</li>\\n<li>\\n<p>多行注释: /* 注释 */</p>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,h as data};