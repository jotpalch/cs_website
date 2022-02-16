<template>
  <div class="container">
    <div class="logo-box">
      <div class="name-box">    
        <a href="/">
          <img class="cursor-wait" src="../assets/barlogo.png" alt="LOGO">
        </a>
      </div>
      <div class="align-center color-white">
          <a class="color-white" href="#">系所介紹</a>
          <a href="#">課程資訊</a>
          <a href="#">課外生活</a>
          <a href="#">交換學生</a>
          <a href="#">傑出系友</a>
          <a href="#">入學資訊</a>
          <a href="#">常見QA</a>
      </div>
    </div> 
  </div>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="../assets/barlogo.png" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-gray-500">You have a new message!</p>
  </div>
</div>

<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <slot/>123123
    <span class="flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
    </span>
</button>


</template>

