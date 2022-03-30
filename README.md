# 交大資工-高中生專區

更新系上長達五年未更新的高中生網站  
https://highschool.nctucsunion.me/

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
  

## 遇上的問題

#### src 物件在 render 後無法顯示
  解決方法：  
  ```
  把src用require()包起來  
  問題原因 -> webpack 的打包機制  
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

