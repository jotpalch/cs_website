<template>

    <div class="-my-8 overflow-hidden">
        <div ref="photos" class=" flex items-center w-full py-8" >
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-3 hover:rotate-0 bg-gradient-to-br from-blue-300 to-blue-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C1.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">工程三館</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-green-300 to-green-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <a href="https://www.lib.nycu.edu.tw/?lang=zh-TW#" target="_blank"><img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C2.jpg" alt="EC building"></a>
                    <figcaption class=" text-gray-50 font-black -my-9 text-shadow-lg text-2xl md:text-3xl z-10 md:-my-10">浩然圖書館</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-3 hover:rotate-0 bg-gradient-to-br from-yellow-300 to-yellow-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C3.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black -my-9 text-shadow-lg text-2xl md:text-3xl z-10 md:-my-10">電子資訊大樓</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-pink-400 to-pink-600 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C4.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">嶄新的教室空間</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-1 hover:rotate-0 bg-gradient-to-br from-indigo-500 to-indigo-700 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C5.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">Design Space</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C6.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">空氣品質資訊牆</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-3 hover:rotate-0 bg-gradient-to-br from-purple-500 to-purple-700 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <a href="https://it.cs.nycu.edu.tw/" target="_blank"><img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C7.jpg" alt="EC building"></a>
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">系計算機中心</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-1 hover:rotate-0 bg-gradient-to-br from-green-500 to-green-700 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C8.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">系計算機中心二樓機房</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-blue-500 to-blue-700 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C9.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">VR/AR教學實驗室</figcaption>
                </figure>
            </div>
        </div>
    </div>

</template>

<script> 
import { gsap } from 'gsap'

export default { 
  mounted() { 

    const { photos } = this.$refs
    const timeline = new gsap.timeline({repeat: -1, }) 
    
    timeline.to(photos, 1, { x: 200 }) 
    timeline.to(photos, 8, { x: -1130 }) 
    timeline.to(photos, 1, { x: -1330 }) 
    timeline.to(photos, 8, { x: 0 }) 
  } 
} 
</script>