# 交大資工-高中生專區

更新系上長達五年未更新的高中生網站  
https://highschool.nctucsunion.me/
  
![](https://i.imgur.com/6rLzc30.jpg)  

## 使用技術

`Ｖue.js v3` 網頁框架  
https://github.com/vuejs/vue  
  
`TailwindCSS v2.2.9`  方便實現RWD  
https://v2.tailwindcss.com/  
  
`VueSplide` 照片滑動效果  
https://github.com/Splidejs/vue-splide  
  
`GSAP` 網頁動畫效果  
https://greensock.com/gsap/  
  
`@vueuse/motion` 物件動畫效果  
https://github.com/vueuse/motion  

`fontTools` python 字體檔案解析工具  
https://pypi.org/project/fonttools/

## 遇上的問題

#### - src 物件在 render 後無法顯示
  解決方法：  
  ```
  把src用require()包起來  
  問題原因 -> webpack 的打包機制  
  ```
#### - 網頁讀取速度緩慢
  解決方法：  
  ```
  壓縮字體檔案  
  問題原因 -> 中文字體檔案過大  
  ```
  [PageSpeed Insights](https://pagespeed.web.dev/?hl=zh_TW) 評分：
  
  ![](https://i.imgur.com/loOlcjb.png)
  
  Reference：  
  https://fontforge.org/en-US/  
  https://fontdrop.info/#/?darkmode=true  
  https://hsingko.github.io/post/compress_webfont/  
  https://fonttools.readthedocs.io/en/latest/index.html  
  ```
  pyftsubset 字體檔案.ttf --text=$(cat 內文.txt) --no-hinting
  ```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

