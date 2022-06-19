<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!-- jumbotron大廣告 -->
    <div class="jumbotron jumbotron-fluid jumbotronBgNews d-flex jumbotronAllOutside mb-0">
      <div class="container jumbotronCover">
        <img class="jbImgBoxer2" src="../../assets/images/boxer.png" alt="">
        <h6 class="jumbotronSubtitle">動起來! 戰力指數 <span class="jumbotronPower"> 100%</span></h6>
      </div>
    </div>    

    <!-- 新聞內容 -->
    <section class="newsAllOutside">

      <div class="container">
        <div class="row">
          <div class="col-md-4 tagMenu mt-3">
            <ul>
              <li><a href="#tab1" class="current">優惠活動</a></li>
              <li><a href="#tab2">專欄文章</a></li>
              <li><a href="#tab3" class="tagMenuli3">其他新聞</a></li>
            </ul>

            <!-- 輪播廣告 -->
            
            <header>
              <div id="carouselExampleIndicators" class="carousel slide carouselShow" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item header-carousel-item bg-cover active newsCarouselImg001">
                    <!-- <div class="carousel-caption d-none d-md-block px-3 mb-5">
                      <h3>頂尖對決</h3>
                      <p>雙強爭霸，誰與爭鋒</p>
                    </div> -->
                  </div>
         
                  <div class="carousel-item header-carousel-item bg-cover newsCarouselImg002">
                    <!-- <div class="carousel-caption d-none d-md-block px-3 mb-5">
                      <h3>頂尖對決</h3>
                      <p>雙強爭霸，誰與爭鋒</p>
                    </div> -->
                  </div>

                  <div class="carousel-item header-carousel-item bg-cover newsCarouselImg003">
                    <!-- <div class="carousel-caption d-none d-md-block px-3 mb-5">
                      <h3>頂尖對決</h3>
                      <p>雙強爭霸，誰與爭鋒</p>
                    </div>  -->
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </button>
              </div>
            </header>

          </div>

          <div class="col-md-8 menuBoard">
            <div class="mt-3 box-shadow" id="contents">
              <div id="tab1" style="justify-content: center">
                <h2 class="text-center font-weight-bold">優惠活動</h2>
                <div class=" d-flex brandBar2" style="justify-content: center; background-color: #012b7f; border-radius: 0px; padding: 5px"></div> 
                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/auction001.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{baseone[0].title}}</h2>
                <p class="triggerOpen001 ellipsis2 my-4 newsContent">{{baseone[0].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen001" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">
              
                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/auction002.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{baseone[1].title}}</h2>
                <p class="triggerOpen002 ellipsis2 my-4 newsContent">{{baseone[1].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen002" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">
 
                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/auction003.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{baseone[2].title}}</h2>
                <p class="triggerOpen003 ellipsis2 my-4 newsContent">{{baseone[2].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen003" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">

              </div>
              <div id="tab2">

                <h2 class="text-center font-weight-bold">專欄文章</h2>
                <div class=" d-flex brandBar2" style="justify-content: center; background-color: #012b7f; border-radius: 0px; padding: 5px"></div> 

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news001.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basetwo[0].title}}</h2>
                <p class="triggerOpen004 ellipsis2 my-4 newsContent">{{basetwo[0].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen004" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news002.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basetwo[1].title}}</h2>
                <p class="triggerOpen005 ellipsis2 my-4 newsContent">{{basetwo[1].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen005" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news003.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basetwo[2].title}}</h2>
                <p class="triggerOpen006 ellipsis2 my-4 newsContent">{{basetwo[2].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen006" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">
              
              </div>
              <div id="tab3">

                <h2 class="text-center font-weight-bold">其他新聞</h2>
                <div class=" d-flex brandBar2" style="justify-content: center; background-color: #012b7f; border-radius: 0px; padding: 5px"></div> 

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news004.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basethree[0].title}}</h2>
                <p class="triggerOpen007 ellipsis2 my-4 newsContent">{{basethree[0].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen007" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news005.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basethree[1].title}}</h2>
                <p class="triggerOpen008 ellipsis2 my-4 newsContent">{{basethree[1].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen008" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">

                <div class="d-flex" style="justify-content: center">            
                  <img class="pics__outlook" src="../../assets/images/news006.jpg" alt="">
                </div>
                <h2 class="text-center font-weight-bold mt-3">{{basethree[2].title}}</h2>
                <p class="triggerOpen009 ellipsis2 my-4 newsContent">{{basethree[2].content}}</p>
                <a href="javascript:void(0);" value="triggerOpen009" class="js__btn js__btn:hover js__btn__menuAdjust">{{baseone[0].buttoncontent}}</a>
                <hr class="hrStyle__sm mt-1">
          
              </div>
            </div>     
          </div>

        </div>
      </div>

      <div class="backToTop" id="backToTopTag">
        <img class="arrowUp" src="../../assets/images/arrowup.png" alt="">
      </div>

    </section>

    <ComFrontfooter></ComFrontfooter>

  </div>  

</template>

<script>

import ComFrontnavbar from './frontpages/ComFrontnavbar';
import ComFrontfooter from './frontpages/ComFrontfooter';
import $ from 'jquery';

export default {

  data(){
    return{

      baseone :[

        {
          id: 0,
          title: 'UFC GYM專屬優惠方案，力邀投入健身',
          content: '台灣頂尖健身品牌UFC GYM健身俱樂部， 將提供專業便利的運動場館，延續會員的運動習慣！專屬優惠方案，歡迎擁有有效會籍的會員，自即日起至2022/1/31止， 辦理會籍相關事宜，平行轉移使用權益以及運動不間斷。疫情衝擊健身業，作為健身業領導品牌，World Gym盡最大可能，協助市場上中小型健身品牌及其會員，以不影響會員運動習慣及權益為首要任務，同時給予業者更多經營策略的選擇。因此於2022年，除了展店15家的目標，也同時積極尋求收購機會，藉以不同方式與其他健身產業經營者，達到雙贏。',
          buttoncontent: '閱讀全文',
          buttoncontent2: '收合全文',
        },
        {
          id: 1,
          title: '2022週年慶抽獎活動大公開',
          content: '每人僅限一次中獎機會，抽獎時得獎者需在現場並具有會員身份且無應繳而未繳之費用者始有抽獎及得獎資格。得獎者如於得獎後六個月內因行使契約解除權致會籍資格喪失者，應將所得獎項返還。本公司保有最後解釋決定活動辦法之權力。本活動參加資格與獎項，僅限供居住於中華民國台澎金馬地區之居民，外國人需有中華民國居留證，並為求活動公正性，凡任職於主管級以上之員工及其配偶、三親等內之親屬、男/女朋友，均不得參與本活動之抽獎，違者均視同放棄。獎品顏色規格依實物為主。',
          buttoncontent: '閱讀全文',
        },
        {
          id: 2,
          title: '使用動滋券，好康優惠享不完',
          content: '以動滋券$500消費即可享，一個月免費會籍再加碼一堂教練體驗，還沒開始運動或正準備開始運動的你，現在就來領取您的優惠，跟著我們開始運動吧!，詳情請洽詢俱樂部專員，限非現有會員  每人限兌換一次，另外，疫情衝擊健身業，作為健身業領導品牌，UFC GYM盡最大可能，以不影響會員運動習慣及權益為首要任務，同時給予業者更多經營策略的選擇。因此，於2022年，除了展店15家的目標，也同時積極尋求收購機會，藉以不同方式與其他健身產業經營者，達到雙贏。',
          buttoncontent: '閱讀全文',
        },
        
      ],

      basetwo :[

        {
          id: 0,
          title: '1秒幾百萬上下！格鬥選手2分鐘撈6億',
          content: 'MMA綜合格鬥選手麥可格雷(Conor McGregor)，去年7月摔斷腿後便久未上場，但吸金功力依舊一等一，去年他正式出賽的時間才短短2分鐘32秒，便海撈2200萬美元（約6億新台幣），收入稱霸體壇。去年麥可格雷只出賽2場，對手都是外號「鑽石」的波里爾(Dustin Poirier)，1月的首度對戰，波里爾只花了2分32秒就擊敗麥可格雷，7月交手時麥可格雷更因傷退賽，傷後大部分的時間都在進行重量訓練，但憑他的賺錢功力，可是完全不怕短期內無法披上戰袍。',
          buttoncontent: '閱讀全文',
        },
        {
          id: 1,
          title: '蓋恩希望和納干諾在今年年底開戰',
          content: '現任UFC重量級臨時冠軍「好孩子」西里爾-蓋恩希望能在法國巴黎和現任UFC重量級冠軍「鐵血」弗朗西斯-納干諾進行冠軍統一戰。蓋恩剛剛在UFC 265頭條主賽里TKO戰勝「黑野獸」德里克-劉易斯，成為重量級臨時冠軍，這是他在2020年12月以來打的第四場比賽。隨著妻子即將分娩，蓋恩打算好好休息一下。「我要休息一段時間，因為從去年7月開始我就一直在訓練營里備戰。我期待和妻子以及女兒的團聚，不過今年年底或者2022年年初，如果可以在法國打響比賽，我一定參加。',
          buttoncontent: '閱讀全文',
        },
        {
          id: 2,
          title: '傳奇格鬥選手「冰人」涉嫌家暴被捕',
          content: '根據多家媒體報道，早在2010年就已經退役的終極格鬥（UFC）名人堂選手、綽號「冰人」的利德爾（Chuck Liddell）於10月11日凌晨因為涉嫌家庭暴力遭到警方逮捕。洛杉磯縣警局指出，警方在午夜過後不久接到一通有關家庭糾紛的報請電話，並緊急趕往Hidden Hills的一處住宅。體育新聞ESPN報道指出，調查人員確定當時有發生肢體衝突，並將利德爾拘留。利德爾稱自己是事件的受害者。「警方告訴我，我的妻子將被逮捕，因為我遭受她的肢體攻擊時，並沒有還手，並因此遭受瘀傷以及撕裂傷。我是自願去代替她的。」',
          buttoncontent: '閱讀全文',
        },

      ],

      basethree :[

        {
          id: 0,
          title: 'UFC選手邀歌手合照遭拒，潑飲料被架開',
          content: '2021年MTV音樂錄影帶大獎（VMA）在美國紐約12日晚間落幕，不過就在典禮開始前的紅毯發生了意外插曲。一度傳出起因是「UFC格鬥天王」康納麥葛瑞格（Conor McGregor）想邀男歌手機關槍凱利（Machine Gun Kelly）合照被拒，憤而作勢打人「潑灑飲料」發生推擠，最後被保全拉開制止，但他隨後又在採訪澄清，「我不認識他，只知道他跟梅根福克斯（Megan Fox）在一起。」，事後有媒體詢問凱利剛剛與康納到底發生了什麼衝突？他仰天大笑一聲出手壓住了麥克風掉頭就走，看起來相當不悅，但事後他入場表演並上台領獎似乎沒有受到此事件的影響。',
          buttoncontent: '閱讀全文',
        },
        {
          id: 1,
          title: 'UFC選手叫陣馬斯克：把車交出來！',
          content: 'UFC 是競爭強度很高又無比現實的擂台，選手除了要會打，還必須有觀眾緣、有好票房，最重要的就是要贏得主席白大拿的心，才有可能被調高薪酬並獲得一場又一場的比賽，所以通常選手都會在賽後訪問無所不用其極地行銷自己，但達瑞許在搏命獲勝竟然是在台上要他的特斯拉？這絕對是沒人意料的超展開，也說明了達瑞許到底有多需要他的特斯拉 (是 Model X)，這次劇本外的演出也當然立刻鬧翻體壇和車界，達瑞許的請求很快便傳到了馬斯克的耳裡。馬斯克推文開金口說：「抱歉延遲了，很快會交車的。」',
          buttoncontent: '閱讀全文',
        },
        {
          id: 2,
          title: '鋼管女郎轉戰職業格鬥，驚險摘下首勝',
          content: 'UFC格鬥女將戴摩普羅絲（Vanessa Demopoulos）在UFC 270取得加盟首勝，其實她在8個星期之前還是一位鋼管女郎。戴摩普羅絲賽後說：「我想這不是秘密了，我過去13年是個豔舞表演者。我沒在麥克風前說過，現在我要正式宣布，我離開脫衣舞加入格鬥訓練營，我6至8周前才停止跳舞，好讓我全力專注在格鬥。」，戴摩普羅絲提到，鋼管舞比看上去的困難得多，需要高水準的敏捷度和柔軟度，「這有點像柔術的感覺，但是柔術比較安全，因為你在地板上可以隨時投降。鋼管舞有時候是在生死邊緣，一個錯誤的動作就玩完了，就像從兩層樓掉下來。」英媒《太陽報》報導她寫過一本書《脫衣舞者聖經》，她希望UFC把自己捧成下一個明星。',
          buttoncontent: '閱讀全文',
        },

      ],

    }
  },

  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },

  created(){

    $(function(){

      //進度條動畫

      var percent = 0
      var timer = setInterval(function(){
        // $(".brandStyle003").css("opacity",percent+"%");
        // $(".brandStyle004").css("opacity",percent+"%");
        $(".brandBar2").css("width",percent+"%");
        $(".jumbotronPower").text(percent+"%");

        percent+=1
        if (percent>=101){
          clearInterval(timer)
        }
      },10)


      //頁籤特效

      //隱藏tab1以外的內容
      $('#contents div[id != "tab1"]').hide();
      
      // 點選頁籤
      $(".tagMenu ul li a").click(function(){
        // 先將所有內容設為隱藏不顯示
        $("#contents div").hide();

        // 顯示出選擇頁籤的對應內容
        $($(this).attr("href")).show();
        
        // 移除目前的current類別
        $(".current").removeClass("current");
        
        // 在目前所選頁籤本身加上current類別
        $(this).addClass("current");

        return false;
      });


      //新聞展開收合

      $("a").click(function(){
        // 取得value屬性值
        var target = $(this).attr("value");

        // 比對p元素
        $("#tab1 p").each(function(){
            // 比對是否符合篩選條件
            if($(this).hasClass(target)){
              // 展開及收合全文
              $(this).toggleClass("ellipsis2")
            }
        })

        // 比對p元素
        $("#tab2 p").each(function(){
            // 比對是否符合篩選條件
            if($(this).hasClass(target)){
              // 展開及收合全文
              $(this).toggleClass("ellipsis2")
            }
        })

        // 比對p元素
        $("#tab3 p").each(function(){
            // 比對是否符合篩選條件
            if($(this).hasClass(target)){
              // 展開及收合全文
              $(this).toggleClass("ellipsis2")
            }
        })

      });


      //回頂部標籤功能
      
      var distNews = $(".newsAllOutside").offset().top
      
      $(window).scroll(function(){

        if ( $(this).scrollTop() >  distNews ) {
          $("#backToTopTag").addClass("showToTopTag");
        } else {
          $("#backToTopTag").removeClass("showToTopTag");
        }
     
      })

      $('.backToTop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0,
        }, 700)
      });
      // 有些瀏覽器只支援html，有些只支援body，所以兩個都寫進去

    });

  },

  
};

</script>


<style>

  .jumbotronBgNews{
    background-image: url(../../assets/images/jumbg002.jpg);
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    align-items: end;
    margin-bottom: 0px;
    position: relative; 
  }

  @media (max-width: 820px) {

     /* jumbotron樣式 */
    .jumbotronBgNews{
      background-image: url(../../assets/images/boxer.png);
      background-color: #9a0000;
      background-size: 80% auto;
      background-position: center 20%;
      background-repeat: no-repeat;
      background-attachment: scroll;
    }

    .jbImgBoxer2{
      display: none;
    }

  }

  .newsCarouselImg001{
    background-image: url(../../assets/images/carousel001.jpg);
  }

  .newsCarouselImg002{
    background-image: url(../../assets/images/carousel002.jpg);
  }

  .newsCarouselImg003{
    background-image: url(../../assets/images/carousel003.jpg);
  }

</style>

