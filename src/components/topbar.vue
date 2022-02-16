<template>
  <div class="container">
    <div class="logo-box">
      <div class="name-box">    
        <a href="/">
          <img src="../assets/barlogo.png" alt="LOGO">
        </a>
      </div>
      <div class="link-box">
          <a href="#">系所介紹</a>
          <a href="#">課程資訊</a>
          <a href="#">課外生活</a>
          <a href="#">交換學生</a>
          <a href="#">傑出系友</a>
          <a href="#">入學資訊</a>
          <a href="#">常見QA</a>
      </div>
    </div> 
  </div>
</template>

<style scoped>
.container {
    overflow: hidden;
    display: flexbox;
    color: black;
}

.link-box a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 17%;
}

.link-box a:hover {
    background-color: azure;
    color: black;
}

</style>