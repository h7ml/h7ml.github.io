import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,f as a}from"./app-Cbix2SPG.js";const t={},r=a(`<div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>public class MainActivity extends AppCompatActivity {

    private ImageView mImageView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mImageView = (ImageView) findViewById(R.id.image);
    }

 // 给图片加水印的方法
    private Bitmap createWatermark(Bitmap bitmap, String mark) {
        int w = bitmap.getWidth();
        int h = bitmap.getHeight();
        Bitmap bmp = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(bmp);
        Paint p = new Paint();
        // 水印颜色
        p.setColor(Color.parseColor(&quot;#C5FF0000&quot;));
        // 水印字体大小
        p.setTextSize(150);
        //抗锯齿
        p.setAntiAlias(true);
        //绘制图像
        canvas.drawBitmap(bitmap, 0, 0, p);
        //绘制文字
        canvas.drawText(mark, 0, h / 2, p);
        canvas.save(Canvas.ALL_SAVE_FLAG);
        canvas.restore();
        return bmp;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="没用-rxjava-之前" tabindex="-1"><a class="header-anchor" href="#没用-rxjava-之前"><span>没用 RxJava 之前</span></a></h3><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>new Thread(new Runnable() {
    @Override
    public void run() {
        try {
            URL url = new URL(&quot;https://www.baidu.com/img/bd_logo1.png?where=super&quot;);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            InputStream inputStream = urlConnection.getInputStream();
            Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
            // 加一个水印
            bitmap = createWatermark(bitmap,&quot;RxJava2.0&quot;);
            // 显示到图片
            Message message = Message.obtain();
            message.obj = bitmap;
            mHandler.sendMessage(message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}).start();

private Handler mHandler = new Handler(){
    @Override
    public void handleMessage(Message msg) {
        Bitmap bitmap = (Bitmap) msg.obj;
        mImageView.setImageBitmap(bitmap);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-rxjava-之后" tabindex="-1"><a class="header-anchor" href="#使用-rxjava-之后"><span>使用 RxJava 之后</span></a></h3><div class="language-android line-numbers-mode" data-ext="android" data-title="android"><pre class="language-android"><code>Observable.just(&quot;https://www.baidu.com/img/bd_logo1.png?where=super&quot;)
  .map(new Function&lt;String, Bitmap&gt;() { // 事件变换

      @Override
      public Bitmap apply(@NonNull String urlPath) throws Exception {
          URL url = new URL(urlPath);
          HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
          InputStream inputStream = urlConnection.getInputStream();
          Bitmap bitmap = BitmapFactory.decodeStream(inputStream);
          return bitmap;
      }
  })
  .map(new Function&lt;Bitmap, Bitmap&gt;() {

      @Override
      public Bitmap apply(@NonNull Bitmap bitmap) throws Exception {
          bitmap = createWatermark(bitmap, &quot;RxJava2.0&quot;);
          return bitmap;
      }
  })
  .subscribeOn(Schedulers.io())
  .observeOn(AndroidSchedulers.mainThread())
  .subscribe(new Consumer&lt;Bitmap&gt;() {

      @Override
      public void accept(Bitmap bitmap) throws Exception {
          mImageView.setImageBitmap(bitmap);
      }
  });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rxjava-优势" tabindex="-1"><a class="header-anchor" href="#rxjava-优势"><span>RxJava 优势</span></a></h3><ul><li><p>实现优雅：链式调用，一点到底</p></li><li><p>逻辑简洁：代码可读性高，解耦</p></li><li><p>使用简单：支持线程调度和各种操作符</p></li><li><p>扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅</p></li><li><p>扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅</p></li></ul>`,7),s=[r];function d(l,v){return i(),n("div",null,s)}const o=e(t,[["render",d],["__file","superiority.html.vue"]]),p=JSON.parse('{"path":"/posts/rxjava/superiority.html","title":"RxJava的优势","lang":"zh-CN","frontmatter":{"title":"RxJava的优势","icon":"creative","date":"2019-03-27T00:00:00.000Z","author":"h7ml","category":"android","tag":"rxjava","description":"没用 RxJava 之前 使用 RxJava 之后 RxJava 优势 实现优雅：链式调用，一点到底 逻辑简洁：代码可读性高，解耦 使用简单：支持线程调度和各种操作符 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅","head":[["link",{"rel":"canonical","href":"https://www.h7ml.cn/posts/rxjava/superiority.html"}],["meta",{"property":"og:url","content":"https://www.h7ml.cn/posts/rxjava/superiority.html"}],["meta",{"property":"og:site_name","content":"h7ml-前端物语"}],["meta",{"property":"og:title","content":"RxJava的优势"}],["meta",{"property":"og:description","content":"没用 RxJava 之前 使用 RxJava 之后 RxJava 优势 实现优雅：链式调用，一点到底 逻辑简洁：代码可读性高，解耦 使用简单：支持线程调度和各种操作符 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅 扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-03T04:52:44.000Z"}],["meta",{"property":"article:author","content":"h7ml"}],["meta",{"property":"article:tag","content":"rxjava"}],["meta",{"property":"article:published_time","content":"2019-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-05-03T04:52:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RxJava的优势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-05-03T04:52:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"h7ml\\"}]}"]]},"headers":[{"level":3,"title":"没用 RxJava 之前","slug":"没用-rxjava-之前","link":"#没用-rxjava-之前","children":[]},{"level":3,"title":"使用 RxJava 之后","slug":"使用-rxjava-之后","link":"#使用-rxjava-之后","children":[]},{"level":3,"title":"RxJava 优势","slug":"rxjava-优势","link":"#rxjava-优势","children":[]}],"git":{"createdTime":1683089564000,"updatedTime":1683089564000,"contributors":[{"name":"h7ml","email":"h7ml@qq.com","commits":1}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"posts/rxjava/superiority.md","localizedDate":"2019年3月27日","excerpt":"<div class=\\"language-android\\" data-ext=\\"android\\" data-title=\\"android\\"><pre class=\\"language-android\\"><code>public class MainActivity extends AppCompatActivity {\\n\\n    private ImageView mImageView;\\n    @Override\\n    protected void onCreate(Bundle savedInstanceState) {\\n        super.onCreate(savedInstanceState);\\n        setContentView(R.layout.activity_main);\\n        mImageView = (ImageView) findViewById(R.id.image);\\n    }\\n\\n // 给图片加水印的方法\\n    private Bitmap createWatermark(Bitmap bitmap, String mark) {\\n        int w = bitmap.getWidth();\\n        int h = bitmap.getHeight();\\n        Bitmap bmp = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888);\\n        Canvas canvas = new Canvas(bmp);\\n        Paint p = new Paint();\\n        // 水印颜色\\n        p.setColor(Color.parseColor(\\"#C5FF0000\\"));\\n        // 水印字体大小\\n        p.setTextSize(150);\\n        //抗锯齿\\n        p.setAntiAlias(true);\\n        //绘制图像\\n        canvas.drawBitmap(bitmap, 0, 0, p);\\n        //绘制文字\\n        canvas.drawText(mark, 0, h / 2, p);\\n        canvas.save(Canvas.ALL_SAVE_FLAG);\\n        canvas.restore();\\n        return bmp;\\n    }\\n}\\n</code></pre></div>","autoDesc":true}');export{o as comp,p as data};
