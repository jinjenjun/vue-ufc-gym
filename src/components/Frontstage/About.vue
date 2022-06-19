<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!--jumbotron大廣告-->
    <div class="jumbotron jumbotron-fluid jumbotronBgAbout d-flex jumbotronAllOutside mb-0 ">
      <div class="container jumbotronCover">
        <img class="jbImgBoxer" src="../../assets/images/boxer.png" alt="">
        <h6 class="jumbotronSubtitle">動起來! 戰力指數 <span class="jumbotronPower"> 100%</span></h6>
      </div>     
    </div>

    <!--品牌理念-->
    <section class="pb-4 brandAllOutside">
      <div class="container  brandTitleOutside">
        <!-- <div class="col-md-12 brandTitleInside">
          <i class="fas fa-star text-light"></i><i class="far fa-star text-light"></i><h2 class="brandTitle">{{items[1].title}}</h2>
          <i class="far fa-star text-light"></i><i class="fas fa-star text-light"></i>        
        </div> -->
        <div class="col-md-12 brandTitleInside">
          <i class="fas fa-star text-light"></i><i class="far fa-star text-light"></i><h2 class="storeTitle">品牌理念</h2>
          <i class="far fa-star text-light"></i><i class="fas fa-star  text-light"></i>        
        </div>
        <div class="brandBar"></div>        
        <div class="row">
          <div class="col-md-4">
            <div class="brandOutside">
              <img class="brandImgOutside" src="../../assets/images/aboutpic001.jpg" alt="">
              <div class="brandImgInside"><img class="brandImg" src="../../assets/images/fightpic.png" alt=""></div>
            </div>
            <h4 class="brandInsideTitle">{{items[0].title}}</h4>
            <p class="brandInsideContent">{{items[0].content}}</p>
          </div>
          <div class="col-md-4">
            <div class="brandOutside">
              <img class="brandImgOutside" src="../../assets/images/aboutpic002.jpg" alt="">
              <div class="brandImgInside"><img class="brandImg" src="../../assets/images/fightpic.png" alt=""></div>
            </div>
            <h4 class="brandInsideTitle">{{items[1].title}}</h4>
            <p class="brandInsideContent">{{items[1].content}}</p>  
          </div>
          <div class="col-md-4">
            <div class="brandOutside">
              <img class="brandImgOutside" src="../../assets/images/aboutpic003.jpg" alt="">
              <div class="brandImgInside"><img class="brandImg" src="../../assets/images/fightpic.png" alt=""></div>
            </div>
            <h4 class="brandInsideTitle">{{items[2].title}}</h4>
            <p class="brandInsideContent">{{items[2].content}}</p> 
          </div>

        </div>
      </div>
    </section>

    <!--關於UFC-->    
    <section class="container-fluid ufcAllOutside text-white">
      <div class="row">
        <div class="col-md-5 bg-cover ufcBgImg">        
        </div>
        <div class="container">
          <div class="row justify-content-end text-md-dark">
            <div class="col-md-7 ufcBackground">
              <h2 class="font-weight-bold mb-2">關於UFC</h2>
              <p class="ufcContent ">{{items[3].content}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!--店點資訊-->
    <section class="storeAllOutside">
      <div class="container">
        <div class="col-md-12 storeTitleOutside">
          <i class="fas fa-star text-light"></i><i class="far fa-star text-light"></i><h2 class="storeTitle">店點資訊</h2>
          <i class="far fa-star text-light"></i><i class="fas fa-star  text-light"></i>        
        </div>
        <div>
          <hr class="hrStyle2 mt-0">
        </div>

        <div class="row">

          <div class="col-md-4 storeAddressOutside">
            <div class="card h-100 storeAddressInside">
              <div class="card-body storeSpotOutside">
                <h4 class="card-title font-weight-bold">{{items[4].title}}</h4>
                <p class="card-text text-left" v-html="items[4].content"></p>
              </div>
              <div class="card-footer storeSpot">
                <iframe :src="items[4].img" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div class="col-md-4 storeAddressOutside">
            <div class="card h-100 storeAddressInside">
              <div class="card-body storeSpotOutside">
                <h4 class="card-title font-weight-bold">{{items[5].title}}</h4>
                <p class="card-text text-left" v-html="items[5].content"></p>
              </div>
              <div class="card-footer storeSpot">
                <iframe :src="items[5].img" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>

          <div class="col-md-4 storeAddressOutside">
            <div class="card h-100 storeAddressInside">
              <div class="card-body storeSpotOutside">
                <h4 class="card-title font-weight-bold">{{items[6].title}}</h4>
                <p class="card-text text-left" v-html="items[6].content"></p>
              </div>
              <div class="card-footer storeSpot">
                <iframe :src="items[6].img" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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

      items :[
        {
          id: 0,
          title: '專業化訓練課程',
          content: 'UFC GYM健身中心源自於UFC格鬥冠軍賽，UFC冠軍是世界上最訓練有素的運動員，要在擂台比賽中贏得冠軍，每一天的訓練都不能鬆懈，且必須掌握多種兼具高力量高耐力的武術派別！雖然他們所長的技能各有不同，但只要擁有堅定的決心，不論是能力或是意志都從未減弱！',
          button: '點擊我 看課程',
        },
        {
          id: 1,
          title: '個人化內容調整',
          content: 'TRAIN DIFFERENT是UFC訓練的核心概念之一，正是從這種強烈求勝的心態中萌生：UFC GYM透過了解每一位UFC Fighter，深入分析他們的訓練內容、營養攝取、專項技術顧問及教練，綜合多面相的專業知識提供給每一位運動員最佳的菁英培訓方案！',
          button: '點擊我 看課程',
        },
        {
          id: 2,
          title: '全面化提升體能',
          content: '透過融合多元領域專業的混合武術、先進的設備和一流的教練，建立一個能夠激勵健身愛好者的環境，同步提升身體能力與自我效能，無論你的年齡或健身水平，UFC GYM 將幫助你有力量、勇氣、紀律和目標，主在體能及競技有幫助，能讓你能面對生命中的每一個挑戰。',
          button: '點擊我 看課程',
        },
        {
          id: 3,
          content: 'UFC（Ultimate Fighting Championship）格鬥冠軍賽是美國的一項混合武術格鬥賽事，起源於1993年。該賽事以異種無差別實戰為賣點，比賽的規則限制非常低。比賽場地為八角籠，設有裁判一名，每局5分鐘，共3局（冠軍賽5局），倘若3局後不分勝負，則以三位場下裁判（判分員）決定輸贏。同樣一方認輸、失去意識或裁判中止比賽為結束，而為了推廣台灣健身及格鬥相關運動，於2017年在台灣設立第一間UFC GYM健身中心。',
        },
        {
          id: 4,
          img: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.84655416872!2d121.54807781495869!3d25.039280983969803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abcf913891b1%3A0x66889ac3ea829080!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5a6J5ZKM6Lev5LiA5q61MjfomZ8!5e0!3m2!1szh-TW!2stw!4v1643053770756!5m2!1szh-TW!2stw',
          title: '敦南旗艦館',
          content: '地址：台北市大安區安和路一段27號B1<br>電話：02-8773-3772<br>捷運忠孝敦化站5號出口，步行2分鐘',
        },
        {
          id: 5,
          img: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6596753664903!2d121.57121041495951!3d25.079521483951098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac650cf40e29%3A0x21b9279b53cf5267!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A5rSy5a2Q6KGXNTXomZ8!5e0!3m2!1szh-TW!2stw!4v1643054001209!5m2!1szh-TW!2stw',
          title: '內科模範館',
          content: '地址：台北市內湖區洲子街55號1F<br>電話：02-2799-6666<br>捷運港墘站2號出口，步行1分鐘',
        },
        {
          id: 6,
          img: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.5842264240573!2d120.6616593149409!3d24.151235384393296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9dd82789cd%3A0x2e2c3778af6649bf!2zNDAz5Y-w5Lit5biC6KW_5Y2A5YWs55uK6LevNjjomZ8!5e0!3m2!1szh-TW!2stw!4v1643054082242!5m2!1szh-TW!2stw',
          title: '台中旗艦館',
          content: '地址：台中市西區公益路68號12、13F<br>電話：04-2228-9234<br>台中高鐵接駁車至科博館站，步行5分鐘',
        },
      ]
    }
  },

  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },

  created() {
      
      $(function(){

        //進度條動畫
        
        var percent = 0
        var timer = setInterval(function(){
          // $(".brandStyle003").css("opacity",percent+"%");
          // $(".brandStyle004").css("opacity",percent+"%");
          $(".brandBar").css("width",percent+"%");
          $(".jumbotronPower").text(percent+"%");

          percent+=1
          if (percent>=101){
            clearInterval(timer)
          }
        },10)

        //回頂部標籤功能

        var distBrand = $(".brandAllOutside").offset().top
        
        $(window).scroll(function(){

          if ( $(this).scrollTop() > distBrand ) {
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

  .jumbotronBgAbout{
    background-image: url(../../assets/images/jumbg001.jpg);
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
    .jumbotronBgAbout{
      background-image: url(../../assets/images/boxer.png);
      background-color: #9a0000;
      background-size: 80% auto;
      background-position: center 20%;
      background-repeat: no-repeat;
      background-attachment: scroll;
    }

    .jbImgBoxer{
      display: none;
    }

  }

  .ufcBgImg{
    position: absolute; 
    top: 0; 
    bottom:0;   
    background-image: url(../../assets/images/ufcstage.jpg);
  } 

  .storeAllOutside{
    padding-top: 50px;
    padding-bottom: 40px;
    background-color: #ffd000;
  }

  .storeTitleOutside{
    text-align: center;
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color:#39505e; 
    border-radius: 5px 5px 0px 0px; 
  }

  .storeTitle{
    font-weight: bold;
    margin: 0px;
    padding: 5px;
    background-color:#39505e;
    color: #ffffff;
  }

  .storeAddressOutside{
    background-color: #ffd000;
    margin-bottom: 4px;
  }

  .storeAddressInside{
    background-color: #ffd000;
    text-align: center;
    border: 0px;
  }

  .storeSpotOutside{
    background-color: #ffd000;
  }

  .storeSpot{
    border-top: 0px;
    display: flex;
    padding: 0px;
    background-color: #ffd000;
    border-radius: 0px;
  }

</style>
