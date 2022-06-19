<template>
  <div>

    <ComFrontnavbar></ComFrontnavbar>

    <!-- jumbotron大廣告 -->
    <!-- <div class="jumbotron jumbotron-fluid jumbotron-bg4 mb-0">
      <div class="container jumbotronStyle001">
        <img class="jbimg__boxer" :src="baseeight[0].img" alt="">
      </div>
    </div> -->

    <!-- 產品介紹 -->
    <section style="background-color: #ffffff;">

      <div class="container" style="background-color: #ffffff;">

        <div class="row">
          <div class="col-md-12">
            <div>
              <div class="productStyle002">
                <i class="fas fa-star text-light"></i><i class="far fa-star text-light"></i><h2 class="emailStyle001">結帳付款</h2><i class="far fa-star text-light"></i><i class="fas fa-star text-light"></i>      
              </div>
              <div>
                <hr class="hrStyle2 mt-0">
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm">
            <div class="alert alert-dark alert-rounded" style="text-align: center; font-size: 16px;" role="alert">
              輸入資料訂單
            </div>
          </div>

          <div class="col-12 col-sm">
            <div class="alert alert-primary alert-rounded" style="text-align: center; font-size: 16px;" role="alert">
              金流付款
            </div>
          </div>

        </div>


        <div class="row font-weight-bold" style="font-size: 16px">
          <div class="col-md-4 mb-5 mt-3"></div>
          <div class="col-md-4 mb-5 mt-3">
            <div class="m-1 row justify-content-center">
              <form  @submit.prevent="payOrder">
                <table class="table">
                  <thead>
                    <th>品名</th>
                    <th>數量</th>
                    <th style="text-align: right">單價</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in order.products" :key="item.id">
                      <td class="align-middle">{{ item.product.title }}</td>
                      <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                      <td class="align-middle text-right">{{ item.final_total }}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" class="text-right">總計</td>
                      <td class="text-right">{{ order.total }}</td>
                    </tr>
                  </tfoot>
                </table>

                <table class="table">
                  <tbody>
                    <tr>
                      <th width="100">Email</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th>姓名</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                    <tr>
                      <th width="100">收件人電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th width="100">收件人地址</th>
                      <td>{{ order.user.address }}</td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <span v-if="!order.is_paid">尚未付款</span>
                        <span v-else class="text-success">付款完成</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-right" v-if="order.is_paid === false">
                  <button class="btn btn-danger font-weight-bold">確認付款去</button>
                </div>
              </form>
            </div>

          </div>             
        </div>
      </div>

    </section>



    <ComFrontfooter></Comfrontfooter>

  </div>  

</template>

<script>
import ComFrontnavbar from './frontpages/ComFrontnavbar';
import ComFrontfooter from './frontpages/ComFrontfooter';
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  
  components: {
    ComFrontnavbar,
    ComFrontfooter,
  },

  methods: {

    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        console.log(response);
        vm.isLoading = false;
      });
    },

    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        console.log(response);
        if (response.data.success) {
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },

  },

  created() {

    this.orderId = this.$route.params.orderId;
    this.getOrder();
    console.log(this.orderId);
    
  },

};
</script>