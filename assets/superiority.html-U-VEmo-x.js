import{_ as i,o as e,c as n,f as a}from"./app-Q-AMctCt.js";const d={},s=a(`<div class="language-android line-numbers-mode" data-ext="android"><pre class="language-android"><code>public class MainActivity extends AppCompatActivity {

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="没用-rxjava-之前" tabindex="-1"><a class="header-anchor" href="#没用-rxjava-之前" aria-hidden="true">#</a> 没用 RxJava 之前</h3><div class="language-android line-numbers-mode" data-ext="android"><pre class="language-android"><code>new Thread(new Runnable() {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-rxjava-之后" tabindex="-1"><a class="header-anchor" href="#使用-rxjava-之后" aria-hidden="true">#</a> 使用 RxJava 之后</h3><div class="language-android line-numbers-mode" data-ext="android"><pre class="language-android"><code>Observable.just(&quot;https://www.baidu.com/img/bd_logo1.png?where=super&quot;)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rxjava-优势" tabindex="-1"><a class="header-anchor" href="#rxjava-优势" aria-hidden="true">#</a> RxJava 优势</h3><ul><li><p>实现优雅：链式调用，一点到底</p></li><li><p>逻辑简洁：代码可读性高，解耦</p></li><li><p>使用简单：支持线程调度和各种操作符</p></li><li><p>扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅</p></li><li><p>扩展维护：随着程序逻辑的复杂性提高，它依然能够保持简洁和优雅</p></li></ul>`,7),l=[s];function r(v,t){return e(),n("div",null,l)}const c=i(d,[["render",r],["__file","superiority.html.vue"]]);export{c as default};
