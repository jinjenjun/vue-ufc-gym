<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!-- jumbotron大廣告 -->
    <div class="jumbotron jumbotron-fluid jumbotronBgContact d-flex jumbotronAllOutside mb-0">
      <div class="container jumbotronCover">
        <img class="jbImgBoxer2" src="../../assets/images/boxer.png" alt="">
        <h6 class="jumbotronSubtitle">動起來! 戰力指數 <span class="jumbotronPower"> 100%</span></h6>
      </div>
    </div>

    <!-- 產品介紹 -->
    <section style="background-color: #ffd000; padding-top: 3px">

      <div class="container" style="background-color: #ffd000;">

        <div class="row">

          <div class="col-md-12">
            <div>
              <div class="emailAllOutside">
                <i class="fas fa-star text-light"></i><i class="far fa-star text-light"></i><h2 class="emailTitle">客服信箱</h2><i class="far fa-star text-light"></i><i class="fas fa-star text-light"></i>      
              </div>
              <div class="brandBar"></div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-md-6 mb-5 mt-4">

            <swiper :options="swiperOption" @swiper="onSwiper" @slideChange="onSlideChange">
              <swiper-slide><img style="max-width:100%" src="../../assets/images/swiperimg001.jpg" alt=""></swiper-slide>
              <swiper-slide><img style="max-width:100%" src="../../assets/images/swiperimg002.jpg" alt=""></swiper-slide>
              <swiper-slide><img style="max-width:100%" src="../../assets/images/swiperimg003.jpg" alt=""></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>

          </div>
          <div class="col-md-6 mb-5 mt-4">

            <form action="" id="needs-validation" novalidate >
              <div class="form-group">
                <label for="username" class="h5 font-weight-bold">姓名*</label>
                <input type="text" class="form-control" id="username" placeholder="請輸入姓名" required  name="username" v-validate="'required'">
                <!-- <div class="invalid-feedback">
                  請輸入姓名                  
                </div> -->
                <span class="text-danger" v-if="errors.has('username')">姓名不能留空</span>    
              </div>
              <div class="form-group">
                <label for="tel" class="h5 font-weight-bold">電話*</label>
                <input type="tel" class="form-control" id="tel" placeholder="請輸入電話" required  name="tel" v-validate="'required'">
                <!-- <div class="invalid-feedback">
                  請輸入電話                  
                </div> -->
                <span class="text-danger" v-if="errors.has('tel')">電話不能留空</span>   
              </div>
              <div class="form-group">
                <label for="email" class="h5 font-weight-bold">Email*</label>
                <input type="email" class="form-control" id="email" placeholder="請輸入Email" required  name="email" v-validate="'required|email'">
                <!-- <div class="invalid-feedback">
                  請輸入Email                 
                </div> -->
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="h5 font-weight-bold">留言內容*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="請輸入留言內容" required  name="message" v-validate="'required'"></textarea>
                <!-- <div class="invalid-feedback">
                  請輸入留言內容                  
                </div> -->
                <span class="text-danger" v-if="errors.has('message')">留言內容不能留空</span>
              </div>
              <div class="text-right">
                <button type="button" class="btn btn-secondary font-weight-bold">取消</button>
                <button tyep="submit" class="btn btn-primary font-weight-bold">送出</button>
              </div> 

              <!-- <div class="form-group">
                <label for="number">輸入人數*</label>
                <input type="number" class="form-control" id="number" placeholder="請輸入人數" required>
                <div class="invalid-feedback">
                  請輸入人數      
                </div>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                <label class="form-check-label" for="exampleRadios1">
                  需要素食
                </label>
              </div>
              <div class="form-check mt-1">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                <label class="form-check-label" for="exampleRadios2">
                  不需要素食
                </label>
              </div> -->

            </form>

          </div>
             
        </div>
      </div>

      <div class="backToTop" id="backToTopTag">
        <img class="arrowUp" src="../../assets/images/arrowup.png" alt="">
      </div>

    </section>



    <ComFrontfooter></Comfrontfooter>

  </div>  

</template>

<script>

import ComFrontnavbar from './frontpages/ComFrontnavbar';
import ComFrontfooter from './frontpages/ComFrontfooter';
import $ from 'jquery';

export default {

  data(){
    return{

        swiperOption: {
          slidesPerView: 1,
          // 設置分頁
          pagination: {
            el: '.swiper-pagination',
            // 設置點擊切換
            clickable: true
          },
          // 設置前進後退按鈕
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // 設置自動輪播
          autoplay: {
            delay: 2000 // 輪播秒數
          },
          // 設置輪播可循環
          loop: true
      },

    }
  },


  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },


  methods: {
    onSwiper () {

    },
    onSlideChange () {

    }
  },

  created() {

    //進度條動畫
    $(function(){
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
    });

    //回頂部標籤功能
    $(function(){

      var disJumbotron2 = $( ".jumbotronAllOutside" ).offset().top
      
      $(window).scroll(function(){

        if ( $(this).scrollTop() > disJumbotron2 ) {
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

  .jumbotronBgContact{
    background-image: url(../../assets/images/jumbg004.jpg);
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
    .jumbotronBgContact{
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
  
</style>

