<template>
<div>
    <p class="title">Codedln</p>
    <h3 class="log_in">Log In</h3>
    <p>
    <input type="text" placeholder="Email" v-model='email'>
    </p>
    <p>
    <input type='password' placeholder="Password" v-model='password'>
    </p>
    <button v-on:click='signIn'>Log In</button>
</div>
</template>
<script>
import firebase from 'firebase'
export default{
 data:function(){
  return{
   email:'',
   password:''
      
  }  
 },
  computed:{
    user(){
      console.log(this.$store.state)
      return this.$store.state.user    
    }  
  },
  methods:{
    computed:{
      user(){
        console.log(this.$store.state)
        return this.$store.state.user    
        }  
    },
     signIn:function(){
      var self = this
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (user) =>{
              
         self.$store.commit('ShareInfo',{
              email:this.email

          });
          self.$router.push('/Landing')          
      },
     (err)=>{
          alert('Oops.'+err.message)
      }
      );
         
     }
  }
}
</script>
<style scoped>
.title{
    color:#9575CD;
    font-weight: bold;
    font-size: 200%;

    }
.log_in{
     color:#9575CD;       
        
    }
</style>