<template>
      <div class="w-full h-screen">
            <img class=" overflow-hidden object-cover w-full h-full " src="../assets/ECphoto.jpg" alt="">
            <div class="absolute left-0 right-0 mr-4 md:mr-14 z-10 top-1/2 text-right text-white">
                  <span class="whitespace-nowrap text-shadow-lg text-5xl md:text-7xl ">陽明交通資工系<br></span>
                  <span class=" text-3xl mr-1 text-yellow-500 text-shadow-lg font-black">高中生專區</span>
            </div>
      </div>
      
      <section class="relative h-screen pt-56 pb-32 px-8 lg:px-48" id="Dep">
            <div class=" bg-gray-200 h-full rounded-2xl ">
                  <div class="w-full h-full transform-gpu -rotate-3 rounded-2xl bg-gradient-to-br from-blue-300 to-blue-500 shadow-2xl">
                        
                  </div>
                  <div v-motion-slide-visible-top class="absolute flex flex-wrap lg:flex-nowrap rounded-xl z-10 top-1/4 lg:top-1/3 xl:bottom-3/12 bg-gray-50 shadow-xl mx-5 lg:mx-20 text-left">    
                        <div class=" rounded-t-xl w-auto lg:w-4/12 overflow-hidden lg:flex-shrink-0 lg:rounded-l-xl lg:rounded-tr-none">
                              <img class="w-full h-full lg:rounded-l-xl object-cover object-right" src="../assets/Dep.png" alt="">
                        </div>
                        <div class="m-3 lg:m-8">
                              <h2 class=" text-2xl md:text-4xl lg:text-6xl mb-2 lg:mb-5">系所介紹</h2>
                              <blockquote class="text-xs md:text-xl lg:text-2xl lg:mt-4" style="text-indent: 2rem">
                                    我們的日常生活中，幾乎與資訊工程的應用脫離不了關係。再加上近幾年人工智慧等方面的蓬勃發展，不論是任何產業都與資訊工程息息相關，使得資工不僅只是熱門領域，更是推動未來的關鍵。
                              </blockquote>
                              <blockquote class="text-xs md:text-xl lg:text-2xl" style="text-indent: 2rem">
                                    陽明交通大學資訊工程系為國內大學第一大資訊科系，擁有最多的師資人數，最完整的研究領域、最多的畢業系友以及全國首屈一指的電腦實驗設備。本系整合本校既有的資訊領域豐沛且優異的人才與資源，以邁向國際頂尖，培育下一世代菁英資訊人才為目標。
                              </blockquote>
                              <blockquote class="text-xs md:text-xl lg:text-2xl" style="text-indent: 2rem">
                                    對於大學生來說，好的學習資源以及環境也十分重要。 除了國內首居一指的學術網路以及圖書館外，本系還有系計算機中心、軟硬體系統整合實驗室以及各式特色空間供學生使用，不僅能快速找到想要的資料，更能動手操作驗證，並與其他同學交流討論。近年爲改善暨充實教室環境設備，系上陸續改造系館教室，透過優化空間的做法，提供精進教學環境，以促發學生有效的學習。 
                              </blockquote>
                        </div>                       
                  </div>      
            </div>      
      </section>

      <div class=" relative h-96 pt-24 mb-14  overflow-hidden">
            <div class=" absolute bg-gradient-to-t from-gray-200 to-gray-50 w-full bottom-1/3 z-10 top-0"></div> 
            <Photos v-motion-slide-visible-top msg="photos" class="absolute z-20"/>    
      </div>

      <section class="relative lg:pt-16 overflow-hidden flex flex-wrap-reverse lg:flex-nowrap" id="Lec">
            <div class=" min-h-screen flex items-center justify-center px-3 lg:right-1/2 lg:w-1/2">
                  <div class="relative w-full max-w-2xl">
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 top-0 lg:top-32 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob "></div>
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 top-0 lg:top-32 -right-4 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 -bottom-20 lg:bottom-12 right-8 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                        <div id="A" class="relative transform hover:scale-150 hover:translate-y-16 bg-opacity-50 hover:bg-opacity-100 lg:hover:translate-x-10 w-auto bg-white  rounded-2xl px-10 py-5 m-10 shadow-2xl" >
                              <span class=" text-gray-600 text-lg md:text-4xl">甲組</span>
                              <img class="-my-3 lg:-my-6" src="../assets/Lec/A.png" >
                        </div>
                        <div class="relative transform hover:scale-150 hover:-translate-y-20 lg:hover:translate-x-10 bg-opacity-50 hover:bg-opacity-100 w-auto bg-white rounded-2xl px-10 py-5 m-10 shadow-2xl" >
                              <span class=" text-gray-600 text-lg md:text-4xl">乙組</span>
                              <img class="mr-11 lg:mr-16" src="../assets/Lec/B.png" >
                        </div>
                  </div>
            </div>
            <div class=" rounded-xl lg:w-1/2 mx-5 pt-32 lg:pt-64 px-12 ">                   
                  <div class="m-1 lg:m-8">
                        <h2 class="text-4xl lg:text-6xl mb-2 mb-16 lg:text-left">課程資訊</h2>
                        <blockquote class="text-md md:text-xl lg:text-2xl lg:mt-4 text-left max-w-3xl" style="text-indent: 2rem">
                              本系在課程規劃上，除了校訂必修(外語與通識等)、基礎科學(物理/普生/化學三選一、微積分)以及專業必修(計算機概論與程式設計、線性代數等)以外，學生可依據自己的興趣選修系上規劃的各式主題學程(甲組學生除主題學程外，尚可申請跨域學程)、專業課程(專業選修)以及外系所課程(自由選修)。 為了有系統地提升學生程式實作能力，系上於大一、大二安排扎實的基礎程式訓練課程，並規定學生須通過系上程式檢定考試，以達到畢業標準。此外，亦規劃數門產業極需的特色課程，如「作業系統設計與實作」(師法美國卡內基美隆大學、美國加州柏克萊大學、美國史丹佛等學校課程)、「系統管理實務」與「網路管理實務」等，除了學習理論課程，並加強實作經驗來與產業接軌，兼備學研及實務應用之雙重專業能力。
                              <p class=" text-xs my-10 lg:text-lg lg:text-center">更多資訊請參考: <a href="https://www.cs.nycu.edu.tw/education/undergraduate" class=" text-blue-700 hover:text-blue-900" target="_blank">陽交大資工課程修業</a> </p>
                        </blockquote>
                  
                  </div>                                              
            </div> 
      </section>


      <section class=" h-screen" id="Exc">
            <div>
            系學會舉辦的活動多采多姿，動態的如系內體育競賽、每年由同學主辦的系露營、宿營與資工營等等，此外，還有多項精彩的大型活動，如企業參訪、迎新茶會、火鍋大會、抓馬盃等，從2021年開始，系學會還新增了工作坊系列活動，邀請不同領域的講師帶領大家探索不一樣的知識。
校內活動亦精彩豐富，藝文活動如每年的抓馬盃話劇賽、學聯會固定舉辦的校園演唱會等，以及校內各種社團，如服務性、音樂性、文藝性、校友會等各種社團，都可以看到出色的資工系學生穿梭其中。同學們不僅習得各種技能，更拓展同學的交友圈，學習與他人相處互動。這些從生活中點滴累積而成的寶貴經驗也養成同學更完整的人格。
            </div>
            <div class="flex flex-col">
                  <div class="flex">
                        <div>
                              <img src="" alt="">
                        </div>
                  </div>
                  <div class="flex"></div>
            </div>
      </section>

      <section class=" h-screen bg-gray-400" id="Exs">
            
            <div class="flex ">
                  <iframe src="https://csdrive.cs.nctu.edu.tw/release/c066132b-87ca-40fc-98c4-30980f4d3e0e" frameborder="0"></iframe>
                  <iframe src="https://www.youtube.com/embed/9nS-B8OgqEg" frameborder="0"></iframe>
                  <iframe src="https://www.youtube.com/embed/McKUFsp7AsE" frameborder="0"></iframe>
            </div>

                  <Splide :options="{ type: 'loop',rewind: true, width: 800, gap: '1rem', }">
                        <SplideSlide>
                              <iframe src="https://csdrive.cs.nctu.edu.tw/release/c066132b-87ca-40fc-98c4-30980f4d3e0e" frameborder="0"></iframe>
                        </SplideSlide>
                        <SplideSlide>
                              <iframe src="https://www.youtube.com/embed/9nS-B8OgqEg" frameborder="0"></iframe>
                        </SplideSlide>
                        <SplideSlide>
                              <iframe src="https://www.youtube.com/embed/McKUFsp7AsE" frameborder="0"></iframe>
                        </SplideSlide>
                  </Splide>

            <p>
                  本系交換學生前往的都是歐美亞洲頂尖名校，學生可以在充滿異國文化的環境中，與全球菁英交流切磋，開拓前瞻視野。透過整個學期甚至一學年的國外體驗，交換生多對生涯規劃有更明確的想法，無論將來是回國或繼續在國外發展，均有多元且傑出的成績。與本系交流之國外學校向來對我們學生的學業表現與創新思考的態度讚賞有加，因有優秀的表現，如果要申請該校研究所，也較容易被錄取。
            </p>
            
            <span>更多資訊請參考: 陽交大資工出國交換</span>
      </section>

      <section class=" h-screen" id="Alu">
            <p>
                     本系成立迄今已累積近九千位學士、碩士、博士畢業系友，成為國內外產官學研各界的中流砥柱。為了將這廣沛的人脈縱橫串聯，黃種智學長 (計算機工程 69 級) 於 2005 年積極籌畫「交通大學資訊系友會」，並擔任第一屆系友會會長，為凝聚系友力量貢獻卓著。第二屆會長為林三元學長 (計算機工程系 70 級)，第三屆會長余孝先學長(計算機工程系 70 級) ，第四屆會長洪毓祥學長(資訊工程系79級)，現任會長為吳銘雄學長(計算機科學系67級)陸續接棒，傳承聯繫系友的使命。並由趙書華學姐(計算機工程系69級)、陳炳富學長(資訊工程系78級)、邱繼弘(資訊科學系89級)擔任副會長，以及院系教師齊心運作，共同推動系友會諮議、傳承、聯繫、支援等事務。
            </p>
            <!-- <img src="../assets/Alu/alu_1.png">
            <img src="../assets/Alu/alu_2.png">
            <img src="../assets/Alu/alu_3.png"> -->
      </section>

      <section class=" relative lg:pt-16 overflow-hidden flex flex-wrap lg:flex-nowrap " id="Inf">
            <div class=" rounded-xl lg:w-1/2 mx-3 pt-32 lg:pt-0 px-10 my-auto">                   
                  <div class="m-1 lg:m-8 ">
                        <h2 class="text-4xl lg:text-6xl mb-2 mb-16 ">入學資訊</h2>
                        <div class="text-md md:text-xl lg:text-2xl lg:mt-4 text-left mx-auto max-w-3xl " style="text-indent: 2rem">
                              近幾年來，跨領域創新已成為世界趨勢，本系將提供學生多元的學習機會，除了繼續強化基礎課程的學習，同時也將使專業課程選修具備彈性，促使多元整合之機會，故自108學年度起，取消學籍分組，鼓勵學生多元學習不同專業科目，激發創新思考能力，期待培育出擁有扎實資訊工程基礎並具備新一代跨域創新學習和思考的青年。
                              <p class=" text-xs my-10 lg:text-lg lg:text-center">更多資訊請參考: <a href="https://www.cs.nycu.edu.tw/admission/undergraduate" class=" text-blue-700 hover:text-blue-900" target="_blank">陽交大資工入學資訊</a> </p>
                        </div>
                  
                  </div>                                              
            </div> 
            <div class=" min-h-screen flex items-center justify-center px-3 lg:left-1/2 lg:w-1/2">
                  <div class="relative w-full max-w-3xl">
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 top-0 lg:top-32 -left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob "></div>
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 top-0 lg:top-32 -right-4 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
                        <div class="absolute w-72 h-72 lg:w-96 lg:h-96 -bottom-20 lg:bottom-12 right-8 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
                        <div id="A" class="relative transform bg-opacity-50 hover:bg-opacity-100  w-auto bg-white  rounded-2xl px-7 py-3 m-8 shadow-2xl" >
                              <span class=" text-gray-600 text-2xl md:text-4xl">資訊工程甲組</span>
                              <div class="my-3 text-base lg:text-2xl md:m-3">
                                    本組延續(原)電機資訊學士班之雙專業，培育多元跨領域人才，修課具彈性，除資訊基礎專業科目外，提供更多專業的跨域學程，以資訊整合電機、財金、生醫、傳播等專長，培育創新智慧系統及創業能力。 除有機會獲得第一志願入學獎學金 (各年度之獎學金金額與名額詳見各年度之<a href="https://www.cs.nycu.edu.tw/admission/undergraduate" class=" text-blue-800 hover:text-blue-900" target="_blank">辦法</a>)，另提供獎學金赴國外一流大學交換 (詳見<a href="https://oia.nctu.edu.tw/announcement/student-area/3077" class=" text-blue-800 hover:text-blue-900" target="_blank">辦法</a>)，以及海外實習機會，亦可申請創新創業獎學金。
                              </div>
                        </div>
                        <div class="relative transform bg-opacity-50 hover:bg-opacity-100 w-auto bg-white rounded-2xl px-7 py-3 m-8 shadow-2xl" >
                              <span class=" text-gray-600 text-2xl md:text-4xl">資訊工程乙組</span>
                              <div class="my-3 text-base lg:text-2xl md:m-3">
                                   本組培育頂尖資訊工程、資訊科學與數據科學(CE、CS、DS)人才，系統化學習，除資訊基礎專業科目外，規劃各式專業主題學程，包含人工智慧與數據科學、資訊安全、多媒體工程、網路工程、系統軟體，軟硬體整合與計算理論等，學生可依據自己的興趣選修學程。 在學成績優異者，可申請獎學金赴國外一流大學交換，以及海外實習，亦可申請創新創業獎學金。 
                              </div>
                        </div>
                  </div>
            </div>
      </section>

      <section class=" min-h-screen pt-16 lg:pt-24" id="Qa">
            <div class="text-4xl lg:text-7xl mt-20 mb-10 lg:m-20">
                  常見QA
            </div>
            <div class="grid grid-cols-1 justify-items-center lg:grid-cols-2 text-left mx-1 lg:mx-20 lg:-mt-20">
                  <div class="m-3 lg:m-20 rounded-2xl bg-white shadow-xl max-w-4xl">
                        <div class="flex items-center rounded-t-2xl text-white bg-gradient-to-br from-purple-500 to-indigo-600 ">
                              <img class="w-10 h-full mx-5 my-2 " src="../assets/Q.png"/>
                              <blockquote class="my-3 text-xl mr-7 lg:text-3xl">
                                    先選校好，還是先選系好？
                              </blockquote>
                        </div>
                        <div class="flex">
                              <img class="w-12 h-12 mx-4 my-4 " src="../assets/A.png"/>
                              <blockquote class="my-5 mr-7 lg:text-xl">
                                    先選系的優勢在於能在大一時便專心在你喜歡的科系上，不必想著要轉系、輔系、雙主修這些麻煩事，更何況轉系絕非易事，每年能成功轉入熱門科系的人數也不多(參考自以下資料)，與其花費寶貴的大一時光在沒興趣的科目上，倒不如先紮紮實實得在大一就把基礎打穩吧。
                              </blockquote>
                        </div>
                  </div>

                  <div class="m-3 lg:m-20 rounded-2xl bg-white shadow-xl max-w-4xl">
                        <div class="flex items-center rounded-t-2xl text-white bg-gradient-to-br from-yellow-500 to-pink-600">
                              <img class="w-10 h-full mx-5 my-2 " src="../assets/Q.png"/>
                              <blockquote class="my-3 text-xl mr-7 lg:text-3xl">
                                    電機和資工好像差不多，我到底要選擇電機還是資工?
                              </blockquote>
                        </div>
                        <div class="flex">
                              <img class="w-12 h-12 mx-4 my-4 " src="../assets/A.png"/>
                              <blockquote class="my-5 mr-7 lg:text-xl">
                                    電機和資工的領域雖然有部份重疊，但電機偏向底層硬體的設計，而資工則較多軟體及應用方面的課程，跟各行各業都能結合。雖然國內較知名的大廠主要是以硬體為主，但在國外，您熟知的 Google、Facebook、Microsoft、Amazon…等，都軟體公司，就連看似硬體公司的 Apple，主要的收入來源也是軟體端的 Apple Store 哦！除此之外，就算是硬體公司如聯發科技，他們也非常需要軟體人材，否則設計好的硬體，沒有程式在上面執行的話，一樣沒有人買會買單。網路上有一些文章，您可以根據您的興趣，再做決定囉！
                              </blockquote>
                        </div>
                  </div>

                  
                  <div class="m-3 lg:m-20 rounded-2xl bg-white shadow-xl max-w-4xl">
                        <div class="flex items-center rounded-t-2xl text-white bg-gradient-to-br from-green-500 to-green-600">
                              <img class="w-10 h-full mx-5 my-2 items-center" src="../assets/Q.png"/>
                              <blockquote class="my-3 text-xl mr-7 lg:text-3xl">
                                    我完全不會寫程式，念資工系會不會很辛苦?
                              </blockquote>
                        </div>
                        <div class="flex">
                              <img class="w-12 h-12 mx-4 my-4" src="../assets/A.png"/>
                              <blockquote class="my-5 mr-7 lg:text-xl">
                                    絕大部份進來本系的學生都是沒有程式背景的，你覺得那些很厲害的同學基本上是少數中的少數。2018年由Google 舉辦的 Code Jam to I/O for Women 線上程式競賽，台灣隊伍中的第一名與第二名分別是當時陽交大資工系的大二李雅涵同學跟大四柯筑苓同學，他們都是進入陽交大後才開始學習怎麼寫程式的。即使是較晚起步，他們也能在比賽中獲得超強的表現！陽交大資工系有這麼完善的訓練團隊跟環境，你還擔心什麼?!
                              </blockquote>
                        </div>
                  </div>

                  <div class="m-3 lg:m-20 rounded-2xl bg-white shadow-xl max-w-4xl">
                        <div class="flex items-center rounded-t-2xl text-white bg-gradient-to-br from-yellow-400 to-yellow-600">
                              <img class="w-10 h-full mx-5 my-2" src="../assets/Q.png"/>
                              <blockquote class="my-3 text-xl mr-7 lg:text-3xl">
                                    我對新竹人生地不熟的，萬一抽不到宿舍怎麼辦?
                              </blockquote>
                        </div>
                        <div class="flex">
                              <img class="w-12 h-12 mx-4 my-4 stroke-current text-purple-600" src="../assets/A.png"/>
                              
                              <blockquote class="my-5 mr-7 lg:text-xl">
                                    陽交大的大一生、大二生都有保障住宿喔，而且同系的學生還都住在一起，可以一起念書討論功課，放心啦！
                              </blockquote>
                        </div>
                  </div>
            </div>

      </section>

            
</template>

<script>
import Photos from './photos.vue'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  components: {
    Photos,
    Splide,
    SplideSlide,
  }
}
</script>

<style>
#A:hover {
      z-index: 10;
}

</style>