<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!-- jumbotron大廣告 -->
    <div class="jumbotron jumbotron-fluid jumbotronBgProducts d-flex jumbotronAllOutside mb-0">
      <div class="container jumbotronCover">
        <img class="jbImgBoxer2" src="../../assets/images/boxer.png" alt="">
        <h6 class="jumbotronSubtitle">動起來! 戰力指數 <span class="jumbotronPower"> 100%</span></h6>     
      </div>
    </div>

    <!-- 產品介紹 -->
    <section class="productAllOutside mb-0 p-0" style="height: 100000px">

      <div class="container" style="height: 100vh; background-color: #ffd000; ">

        <div>
            <LikeProduct :likeProduct="likeProducts" @emitgetLikeProduct="getProduct"/>
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
import LikeProduct from './frontpages/LikeProduct';
import $ from 'jquery';

export default {

  data(){
    return{

      products: [],
      product: {},
      status: {
        loadingItem: '',
      },

      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },      

      cart: {
        carts: [],
      },
      
      isLoading: false,
      coupon_code: '',
      keyword: '',
      isReverse: false,
      type: '',

      
      categories: [],
      currentCategory: '',
      currentPage: 0,

      // ***

      categories: [],
      likeProducts: [],

    }
  },

  components: {
    ComFrontnavbar,
    ComFrontfooter,
    LikeProduct,
  },

  methods: {

    getProducts () {
      const vm = this
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`;
      vm.isLoading = true
      vm.$http.get(url).then((response) => {
        vm.products = response.data.products
        vm.products.forEach(item => {
          vm.$set(item, 'likeThis', false)
        })
        // 比對 likeProducts 將 products 的 likeThis 改值
        vm.products.forEach((item) => {
          vm.likeProducts.forEach((likeItem) => {
            if (likeItem.id === item.id) {
              item.likeThis = !item.likeThis
            }
          })
        })
        vm.getCategory()
        vm.isLoading = false
      })
    },

    getProduct(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show');
        console.log(response);
        vm.status.loadingItem = '';
      });
    },

    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.status.loadingItem = '';
        vm.getCart();
        $('#productModal').modal('hide');
      });
    },

    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;      
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        // vm.product = response.data.products;
        vm.cart = response.data.data;
        console.log(response);
        vm.isLoading = false;
      }); 
    },

    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(() => {
        vm.getCart();
        vm.isLoading = false;
      });
    },

    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true;
      this.$http.post(url, {data: coupon} ).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },  

    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true;
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if(response.data.success){
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
            // vm.getCart();
            vm.isLoading = false;
          });
        } else {
          console.log('欄位不完整');
        }
      });
    },

    getCategory () {
      const vm = this
      // Set() 為 ES6 語法，同 const categories = []
      const categories = new Set()
      vm.products.forEach((item) => {
        // Set() 下以 add() 取代 push()
        categories.add(item.category)
      })
      // 將類陣列轉換為陣列在回存到 categories 內
      vm.categories = Array.from(categories)
    },

    changeReverse() {
      let vm = this;
      vm.isReverse = !vm.isReverse;
      vm.products.sort((a, b) => {
        a = a.price;
        b = b.price;
        return vm.isReverse ? a - b : b - a;
      })      
    },

    addToLike (Item) {
      const vm = this
      let newIndex = ''
      Item.likeThis = !Item.likeThis
      if (Item.likeThis) {
        vm.likeProducts.push(Item)
      } else {
        vm.likeProducts.forEach((item, key) => {
          if (Item.id === item.id) {
            newIndex = key
          }
        })
        vm.likeProducts.splice(newIndex, 1)
      }
      vm.addToLocalStorage(vm.likeProducts)
    },

    addToLocalStorage (likeProducts) {
      // 陣列轉字串 JSON.stringify
      localStorage.setItem('likeProducts', JSON.stringify(likeProducts))
    },
    
    getLocalStorage () {
      const vm = this
      // 陣列轉字串 JSON.parse
      // 將 localStorage 資料倒回 likeProducts 內
      vm.likeProducts = JSON.parse(localStorage.getItem('likeProducts') || '[]')
    }

  },

  computed: {

    filterData () {
      const vm = this
      // step1. 先過濾出要的資料
      let items = []
      vm.currentPage = 0
      if (vm.currentCategory !== '') {
        items = vm.products.filter((item, i) => {
          return item.category === vm.currentCategory
        })
      } else {
        items = vm.products
      }
      // step2. 依照過濾出的資料做分頁
      // 分頁要點1: 總共有幾頁
      // 分頁要點2: 每頁的內容
      // 分頁要點3: 組成二維陣列 [[1...],[2...],[3...]]
      const newProducts = []
      items.forEach((item, i) => {
        if (i % 9 === 0) {
          newProducts.push([])
        }
        const page = parseInt(i / 9)
        newProducts[page].push(item)
      })
      return newProducts
    }

  },

  created() {

    this.getProducts();
    this.getCart();
    this.getLocalStorage();

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

      var distProduct = $(".productAllOutside").offset().top
      
      $(window).scroll(function(){

        if ( $(this).scrollTop() > distProduct ) {
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

  .jumbotronBgProducts{
    background-image: url(../../assets/images/jumbg003.jpg);
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
    .jumbotronBgProducts{
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






