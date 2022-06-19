<template>
 
  <nav class="navbar navbar-expand-lg navbar-light px-5 py-1 sticky-top">
    <a class="navbar-brand" style="width: 200px" href=""><img src="../../../assets/images/ufclogo.png" alt="" style="width: 100px"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-light"></span>
    </button>

  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mr-5">
        <li class="nav-item">
          <router-link class="nav-link" to="/">關於我們</router-link>
          <!-- <router-link class="nav-link" :to="{name:'關於我們'}">Home</router-link> -->
          <!-- 分頁的兩種寫法 -->
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/news">最新資訊</router-link>
          <!-- <router-link class="nav-link" :to="{name:'最新資訊'}">Home</router-link> -->
          <!-- 分頁的兩種寫法 -->
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">各式商品</a>
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item text-dark font-weight-bold text-center nav-link" to="/allproducts">全部商品</router-link>
            <!-- <router-link class="dropdown-item nav-link" :to="{name:'全部商品'}">全部商品</router-link> -->
            <!-- 分頁的兩種寫法 -->
            <div class="dropdown-divider m-0 p-0"></div>
            <router-link class="dropdown-item text-dark font-weight-bold text-center nav-link" to="/course">訓練課程</router-link>
            <!-- <router-link class="dropdown-item nav-link" :to="{name:'訓練課程'}">訓練課程</router-link> -->
            <!-- 分頁的兩種寫法 -->
            <div class="dropdown-divider m-0 p-0"></div>
            <router-link class="dropdown-item text-dark font-weight-bold text-center nav-link" to="/cloth">運動服飾</router-link>
            <!-- <router-link class="dropdown-item nav-link" :to="{name:'運動服飾'}">運動服飾</router-link> -->
            <!-- 分頁的兩種寫法 -->
            <div class="dropdown-divider m-0 p-0"></div>
            <router-link class="dropdown-item text-dark font-weight-bold text-center nav-link" to="/accessory">精選配件</router-link>
            <!-- <router-link class="dropdown-item nav-link" :to="{name:'運動服飾'}">運動服飾</router-link> -->
            <!-- 分頁的兩種寫法 -->
          </div>
        </li>        

        <li class="nav-item">
          <router-link class="nav-link" to="/contact">客服信箱</router-link>
          <!-- <router-link class="nav-link" :to="{name:'客服信箱'}">Home</router-link> -->
          <!-- 分頁的兩種寫法 -->
          <div class="backgroundBar"></div>
          <div class="innerBar"></div>
        </li>
      </ul>
      <!-- <div>
        <input class="js__input my-2" placeholder="請輸入搜尋關鍵字">
        <button class="js__btn my-2" type="submit">站內搜尋</button>
      </div> -->

      <div>
        <button class="js__btn my-2 mx-0 p-0" type="submit"><router-link class="nav-link text-light" to="/myorder">管理者登入</router-link></button>
      </div>

    </div>  
  </nav>

</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
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

      cart:{},
      isLoading: false,
      coupon_code: '',
    };
  },
  methods: {

    getProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.products = response.data.products;
        console.log(response);
        vm.isLoading = false;
      });
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
  },

  created() {
    
    this.getProducts();
    this.getCart();

    $(function(){
      
      //navbar hover變色與跳出效果

      $(".nav-item").hover(
        function(e){
          e.preventDefault();
          $(this).find(".innerBar").css("width","100%");
          $(this).siblings().find(".innerBar").css("width","0%");
        },
        function(e){
          e.preventDefault();
          $(this).find(".innerBar").css("width","0%");
          $(this).siblings().find(".innerBar").css("width","0%");
        }
      );

      $(".nav-item").hover(
        function (e) {
        e.preventDefault();
        $(this).find(".backgroundBar").css("opacity","100%");
        $(this).siblings().find(".backgroundBar").css("opacity","0%");
          },
        function (e) {
        e.preventDefault();
        $(this).find(".backgroundBar").css("opacity","0%");
        $(this).siblings().find(".backgroundBar").css("opacity","0%");
          }
      );


      //阻止購物車下拉清單消失

      $("body").on('click','[data-stopPropagation]',function(e){e.stopPropagation()});

    });

  },
};
</script>

