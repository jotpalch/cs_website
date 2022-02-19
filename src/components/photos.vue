<template>
    <!-- <div class="bg-gray-500 h-52">
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
            <div class="box-content h-32 w-32 p-4 transform scale-110 -rotate-6 bg-blue-800">
                1
            </div>
            <div class="container  col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                2
            </div>
            <div class="transform scale-150 translate-y-11">
                3
            </div>
            <div class="transform translate-y-24">
                4
            </div>
            <div class="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
                5
            </div>
        </div>
    </div> -->

    <div class="w-screen">
        <div class=" flex items-center w-full -my-8">
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu rotate-3 hover:rotate-0 bg-gradient-to-br from-blue-300 to-blue-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C1.jpg" alt="EC building">
                    <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">工程三館</figcaption>
                </figure>
            </div>
            <div class=" px-4 flex-none">
                <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-green-300 to-green-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C2.jpg" alt="EC building">
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
                    <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C7.jpg" alt="EC building">
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
    <!-- <div class=" flex items-center w-full overflow-hidden -my-8">
        <div class=" px-4 flex-none">
            <figure class="transition-transform ease-in-out transform-gpu rotate-3 hover:rotate-0 bg-gradient-to-br from-blue-300 to-blue-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C1.jpg" alt="EC building">
                <figcaption class=" text-gray-50 font-black text-shadow-lg -my-9 text-2xl md:text-3xl z-10 md:-my-10">工程三館</figcaption>
            </figure>
        </div>
        <div class=" px-4 flex-none">
            <figure class="transition-transform ease-in-out transform-gpu -rotate-2 hover:rotate-0 bg-gradient-to-br from-green-300 to-green-500 p-3 shadow-lg rounded-2xl flex-none w-64 h-64 md:w-full">
                <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C2.jpg" alt="EC building">
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
                <img class="overflow-hidden object-cover rounded-2xl w-full h-full" src="../assets/cards/C7.jpg" alt="EC building">
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
    </div> -->

    <div class=" max-w-md m-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg md:mx-auto">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img class="h-48 w-max object-cover" src="../assets/cards/C1.jpg" alt="EC building">
            </div>
            <div class=" p-4">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">工程三館</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">123</a>
            </div>
        </div>
    </div>
    <img class="w-full"  src="../assets/cards/C1.jpg" alt="EC building">
</template>