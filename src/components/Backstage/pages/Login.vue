<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <h5 class="my-3 font-weight-bold ">管理者登入</h5>
      <div><img src="../../../assets/images/ufclogo2.png" alt="" style="width:100%; margin-top: 10px; margin-bottom: 50px"></div>     
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" v-model="user.password" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> 記住帳密
        </label>
      </div>
      <button class="btn btn-lg btn-danger btn-block font-weight-bold" type="submit">登入</button>
      <div style="margin-top: 30px;margin-left: 200px"><router-link style="color: black; margin-top: 30px" to="/">回首頁</router-link></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user:{
        usrname:'',
        password:'',  
      },

      basenine :[

        {
          id: 0,
          img: '/static/images/ufclogo2.png',
        },
        
      ],

    };
  },
  methods:{
    signin(){
              const api=`${process.env.APIPATH}/admin/signin`;
              const vm = this;
              this.$http.post(api,vm.user).then(
                  (response) => {console.log(response.data);                 
                                if(response.data.success){
                                const token = response.data.token;
                                const expired = response.data.expired;
                                console.log(token, expired);
                                document.cookie = `hexToken=${token}; expires=${ new Date(expired)}`;
                                vm.$router.push(`/admin/products`);                                
                                };                                                  
                  }                  
              );
    },      
  },
}
</script>

<style scoped>

  html,body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  
</style>