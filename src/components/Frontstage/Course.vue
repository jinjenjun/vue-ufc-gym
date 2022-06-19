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
    <section class="productAllOutside" style="padding-top: 3px" >

      <div class="container productAllOutside">

        <div class="row">
          <div class="col-md-12 toolBarStyle">

            <button type="button" class="btn btn-secondary btn-sm font-weight-bold mr-1" @click="changeReverse(); type = 'price'">
              <label class="py-1 px-0 m-0" style="font-size: 12px">價格排序</label>
              <font-awesome-icon icon="fa-solid fa-caret-down" :class="{'inverse': isReverse }" v-if="type=='price'"/>
            </button>

            <!--我的最愛-->

            <button type="button" class="btn btn-secondary btn-sm font-weight-bold mr-1">
              <router-link to="/myfavorite" class="nav-link py-1 px-0 m-0" style="font-size: 12px; color: #ffffff"><i class="far fa-heart"/>我的最愛</router-link>
            </button>

            <!--購物車-->

            <div class="dropdown shoppingCartStyle">
              <button class="btn btn-sm btn-cart mr-0 pr-0" data-toggle="dropdown" data-flip="false">
                <i class="fas fa-shopping-cart text-light fa-2x" aria-hidden="true"></i>
                <span class="badge badge-pill badge-danger">{{cart.carts.length}}</span>
              </button>             
              <div class="dropdown-menu dropdown-menu-right dropDownStyle mt-5">
                <div class="px-4 py-0">
                  <h5 class="p-2" style="font-weight: bold;">購物車清單</h5>
                  <table class="table table-sm">

                    <div class="my-0 row justify-content-center">
                      <table class="table">
                        <thead>
                          <th></th>
                          <th>品名</th>
                          <th>數量</th>
                          <th style="text-align: right">單價</th>
                        </thead>
                        <tbody>
                          <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts">
                            <td class="align-middle">
                              <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)" data-stopPropagation="true">
                                <i class="far fa-trash-alt"></i>
                              </button>
                            </td>
                            <td class="align-middle">
                              {{ item.product.title }}
                              <div class="text-success" v-if="item.coupon">
                                已套用優惠券
                              </div>
                            </td>
                            <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colspan="3" class="text-right">總計</td>
                            <td class="text-right">{{ cart.total }}</td>
                          </tr>
                          <tr v-if="cart.final_total !==cart.total" >
                            <td colspan="3" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ cart.final_total }}</td>
                          </tr>
                        </tfoot>
                      </table>

                    </div>

            
                    <!-- <div class="my-5 row justify-content-center">
                      <form class="col-md-6" @submit.prevent="createOrder">
                        <div class="form-group">
                          <label for="useremail">Email</label>
                          <input type="email" class="form-control" name="email" id="useremail"
                            v-validate="'required|email'"
                            :class="{'is-invalid': errors.has('email')}"
                            v-model="form.user.email" placeholder="請輸入 Email">
                          <span class="text-danger" v-if="errors.has('email')">
                            {{ errors.first('email') }}
                          </span>
                        </div>

                        <div class="form-group">
                          <label for="username">收件人姓名</label>
                          <input type="text" class="form-control" name="name" id="username"
                            :class="{'is-invalid': errors.has('name')}"
                            v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
                          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                        </div>

                        <div class="form-group">
                          <label for="usertel">收件人電話</label>
                          <input type="tel" class="form-control" id="usertel"
                            v-model="form.user.tel" placeholder="請輸入電話">
                        </div>

                        <div class="form-group">
                          <label for="useraddress">收件人地址</label>
                          <input type="address" class="form-control" name="address"
                                :class="{'is-invalid': errors.has('address')}"
                            id="useraddress" v-model="form.user.address" v-validate="'required'"
                            placeholder="請輸入地址">
                          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                        </div>

                        <div class="form-group">
                          <label for="useraddress">留言</label>
                          <textarea name="" id="" class="form-control" cols="30" rows="10"
                            v-model="form.message"></textarea>
                        </div>
                        <div class="text-right">
                          <button class="btn btn-danger">送出訂單</button>
                        </div>
                      </form>
                    </div>    -->
                    

                  </table>

                  <router-link class="btn btn-primary btn-block font-weight-bold mb-3" to="/frontmyorder">結帳去</router-link>
        
                </div>
              </div>
              
            </div>  

          </div>

          <div class="col-md-12">
            <div>
              <div class="productTitleOutside">
                <h2 class="productTitle" style="margin-left: 30px">訓練課程</h2>
              </div>
              <div class="brandBar"></div>

              <!-- <div class="mt-3 ml-5">
               
                <div style="display: flex; justify-content: center; align-items: center">
                  <label class="productSearchLabel ml-3">搜尋商品</label>
                  <input class="productSearchInput" v-model="keyword">
                </div>
                
              </div> -->

              <!-- <h6 class="font-weight-bold" v-if="keyword">以下為符合搜尋"{{keyword}}"的項目</h6>     -->
            </div>
          </div>
        </div>

        <loading :active.sync="isLoading"></loading>
        
        <!-- 產品列表 -->
  
        <div class="row mt-4">
          <div class="col-md-4 mb-4"  v-for="item in products" :key="item.id" v-if="item.category == '訓練課程'">
            <div class="card border-0 box-shadow productCardImg" style="border-radius: 5px">
              <div style="height: 250px; background-size: cover; background-position: center; border-radius: 5px 5px 0px 0px"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                  <span class="text-dark" style="font-size: 18px">{{ item.title }}</span>
                </h5>
                <p class="card-text productCardContent">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5 font-weight-bold" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <del class="h6 font-weight-bold" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                  <div class="h5 font-weight-bold" v-if="item.price">特價 {{ item.price }} 元</div>
                </div>
              </div>
              <div class="card-footer d-flex">
                <button type="button" class="btn btn-secondary btn-sm font-weight-bold mx-1"
                  @click="getProduct(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  查看更多
                </button>
                <button type="button" class="btn btn-success font-weight-bold btn-sm ml-auto  mx-1"
                  @click.stop="addToLike(item)">
                  <i class="far fa-heart" :class="{'fa': item.likeThis}"/>
                  加入最愛
                </button>
                <button type="button" class="btn btn-primary font-weight-bold btn-sm ml-auto  mx-1"
                  @click="addtoCart(item.id)">
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">{{ product.title }}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img :src="product.image" class="img-fluid" alt="">
                <blockquote class="blockquote mt-3">
                  <p class="mb-0 productCardContent">{{ product.content }}</p>
                  <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                </blockquote>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h4 font-weight-bold" v-if="!product.price">{{ product.origin_price }} 元</div>
                  <del class="h6 font-weight-bold" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                  <div class="h4 font-weight-bold" v-if="product.price">特價 {{ product.price }} 元</div>
                </div>
                <select name="" class="form-control mt-3 font-weight-bold" v-model="product.num">
                  <option :value="num" v-for="num in 10" :key="num">
                    選購 {{num}} {{product.unit}}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <div class="text-muted text-nowrap mr-3">
                  小計 <strong>{{ product.num * product.price || 0 }}</strong> 元
                </div>
                <button type="button" class="btn btn-primary font-weight-bold"
                  @click="addtoCart(product.id, product.num)">
                  <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                  加到購物車
                </button>
              </div>
            </div>
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


