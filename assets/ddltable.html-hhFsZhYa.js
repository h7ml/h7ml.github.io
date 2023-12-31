import{_ as s,o as n,c as a,f as e}from"./app-Q-AMctCt.js";const l={},i=e(`<h2 id="ddl-操作表" tabindex="-1"><a class="header-anchor" href="#ddl-操作表" aria-hidden="true">#</a> DDL:操作表</h2><p>操作表也就是对表进行增（Create）删（Retrieve）改（Update）查（Delete）。</p><h2 id="查询表" tabindex="-1"><a class="header-anchor" href="#查询表" aria-hidden="true">#</a> 查询表</h2><ul><li><strong>查询当前数据库下所有表名称</strong></li></ul><p>我们创建的数据库中没有任何表，因此我们进入 mysql 自带的 mysql 数据库，执行上述语句查看</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907344.png" alt="image-20220910090749302" tabindex="0" loading="lazy"><figcaption>image-20220910090749302</figcaption></figure><ul><li><strong>查询表结构</strong></li></ul><p>查看 mysql 数据库中 func 表的结构，运行语句如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907412.png" alt="image-20220910090745367" tabindex="0" loading="lazy"><figcaption>image-20220910090745367</figcaption></figure><h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表" aria-hidden="true">#</a> 创建表</h2><ul><li><strong>创建表</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">(</span>
 字段名<span class="token number">1</span>  数据类型<span class="token number">1</span><span class="token punctuation">,</span>
 字段名<span class="token number">2</span>  数据类型<span class="token number">2</span><span class="token punctuation">,</span>
 …
 字段名n  数据类型n
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：最后一行末尾，不能加逗号</p></blockquote><p>知道了创建表的语句，那么我们创建创建如下结构的表</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907433.png" alt="image-20220910090741389" tabindex="0" loading="lazy"><figcaption>image-20220910090741389</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> tb_user <span class="token punctuation">(</span>
 id <span class="token keyword">int</span><span class="token punctuation">,</span>
    username <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    password <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行语句如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907724.png" alt="image-20220910090737679" tabindex="0" loading="lazy"><figcaption>image-20220910090737679</figcaption></figure><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><p>MySQL 支持多种类型，可以分为三类：</p><ul><li><p>数值</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">tinyint</span> : 小整数型，占一个字节
<span class="token keyword">int</span> ： 大整数类型，占四个字节
 eg ： age <span class="token keyword">int</span>
<span class="token keyword">double</span> ： 浮点类型
 使用格式： 字段名 <span class="token keyword">double</span><span class="token punctuation">(</span>总长度<span class="token punctuation">,</span>小数点后保留的位数<span class="token punctuation">)</span>
 eg ： score <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>日期</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">date</span> ： 日期值。只包含年月日
 eg ：birthday <span class="token keyword">date</span> ：
<span class="token keyword">datetime</span> ： 混合日期和时间值。包含年月日时分秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>字符串</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">char</span> ： 定长字符串。
 优点：存储性能高
 缺点：浪费空间
 eg ： name <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  如果存储的数据字符个数不足<span class="token number">10</span>个，也会占<span class="token number">10</span>个的空间
<span class="token keyword">varchar</span> ： 变长字符串。
 优点：节约空间
 缺点：存储性能底
 eg ： name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> 如果存储的数据字符个数不足<span class="token number">10</span>个，那就数据字符个数是几就占几个的空间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>注意：其他类型参考资料中的《MySQL 数据类型].xlsx》</p></blockquote><p><strong>案例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>需求：设计一张学生表，请注重数据类型、长度的合理性
 1. 编号
 2. 姓名，姓名最长不超过10个汉字
 3. 性别，因为取值只有两种可能，因此最多一个汉字
 4. 生日，取值为年月日
 5. 入学成绩，小数点后保留两位
 6. 邮件地址，最大长度不超过 64
 7. 家庭联系电话，不一定是手机号码，可能会出现 - 等字符
 8. 学生状态（用数字表示，正常、休学、毕业...）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语句设计如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> student <span class="token punctuation">(</span>
 id <span class="token keyword">int</span><span class="token punctuation">,</span>
    name <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    gender <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    birthday <span class="token keyword">date</span><span class="token punctuation">,</span>
    score <span class="token keyword">double</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    email <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    tel <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">status</span> <span class="token keyword">tinyint</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除表" tabindex="-1"><a class="header-anchor" href="#删除表" aria-hidden="true">#</a> 删除表</h2><ul><li><p><strong>删除表</strong></p></li><li><p><strong>删除表时判断表是否存在</strong></p></li></ul><p>运行语句效果如下：</p><figure><img src="https://static.h7ml.cn/vitepress/assets/images/mysql/202209100907228.png" alt="image-20220910090731175" tabindex="0" loading="lazy"><figcaption>image-20220910090731175</figcaption></figure><h2 id="修改表" tabindex="-1"><a class="header-anchor" href="#修改表" aria-hidden="true">#</a> 修改表</h2><ul><li><strong>修改表名</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">RENAME</span> <span class="token keyword">TO</span> 新的表名<span class="token punctuation">;</span>

<span class="token comment">-- 将表名student修改为stu</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> student <span class="token keyword">rename</span> <span class="token keyword">to</span> stu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>添加一列</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">ADD</span> 列名 数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 给stu表添加一列address，该字段类型是varchar(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">add</span> address <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>修改数据类型</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">MODIFY</span> 列名 新数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的address字段的类型改为 char(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">modify</span> address <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>修改列名和数据类型</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 CHANGE 列名 新列名 新数据类型<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的address字段名改为 addr，类型改为varchar(50)</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu change address addr <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>删除列</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 <span class="token keyword">DROP</span> 列名<span class="token punctuation">;</span>

<span class="token comment">-- 将stu表中的addr字段 删除</span>
<span class="token keyword">alter</span> <span class="token keyword">table</span> stu <span class="token keyword">drop</span> addr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),t=[i];function p(c,d){return n(),a("div",null,t)}const r=s(l,[["render",p],["__file","ddltable.html.vue"]]);export{r as default};
