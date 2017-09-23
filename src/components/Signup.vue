<template>
<div>
<p class="title">Codedln</p>
    <div class='sign_up_intro'>
    <p>
    <i class="fa fa-check-circle-o fa-2x" aria-hidden="true" ></i>
    <span class='statement'>
     Share great project ideas
    </span>
    </p>
    <p>
    <i class="fa fa-check-circle-o fa-2x" aria-hidden="true" ></i>
    <span class='statement'>
    Seep up the process to look for side-project partner(s)
    </span>
    </p>
    <p>
    <i class="fa fa-check-circle-o fa-2x" aria-hidden="true" ></i>
    <span class='statement'>
    Let other people know your skills
    </span>
    </p>
    <br>
    </div>
    
    <div class='sign_up_box'>
    <h3 class='sign_up_header'>Sign Up Today!</h3>
    <p>
    <input type="text" placeholder="Email" v-model="email">
    </p>
    <p>
    <input type='password' placeholder="Password" v-model="password">
    </p>
    <button class="sign_up_button"v-on:click='signUp'>SignUp</button>
        <div>
    Have an account already? <router-link to='/Login'>Sign in</router-link> here!
    </div>
    </div>
    
</div>
</template>
<script>
import firebase from 'firebase'
import Router from 'vue-router'
    
export default{
 data:function(){
  return{
   email:'',
   password:''
      
  }  
 },
  methods:{
     signUp:function(){
      var self=this
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
      function(user){
          alert('You account has been created! Lets Login!')
          self.$router.push('/Login')
      },
      function(err){
          alert('Oops.'+err.message)
      });
         
     }
  }
}
</script>
<style scoped>
.sign_up_button{
    background:#9575CD;
    color: white;
    border: none;
    padding:2% 10%;
    }
.title{
    color:#9575CD;
    font-weight: bold;
    font-size: 200%;
    
    }
.sign_up_box{
 position: relative;
  display: inline-block;
    display: inline-block;
    margin-left: 10%;
    margin-right: 50%;
    margin-top: -14%;
    }
.sign_up_header,
 .fa-check-circle-o {
  color:#9575CD;         
}

.sign_up_intro{
  margin-top:5%;
  display: inline-box;
padding-left: 3%;
 border-left: 3px solid #9575CD;
 display: inline-block;
   text-align: left;
   margin-left: 39%;
  
    
    }
.statement
{
  font-weight: bold;
}
</style>