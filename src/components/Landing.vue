<template>
    <div>
        <p class="title">CodingDigger</p>
        <p>Hey there! {{user.email}}, tell us what you want.</p>   
        <v-wid></v-wid>
    </div>
</template>
<script>
import Widget from './Widget'
export default{
    name:'Landing',
    components:
    {
    'v-wid':Widget
        },
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        computed:{
        user(){
            return this.$store.state.user
            
        }
    }
        
        
    /*,
    GoBack(){
       this.$store.commit('ShareInfo',{
              input1:this.user.input1
              
          }); 
          this.$router.push({path:'/'})      
    }
    */
   }
}
</script>
<style scoped>
 header
{
  color: crimson;
  width: 100%;
  height: 20%;
    }
.title{
    color:#9575CD;
    font-weight: bold;
    font-size: 200%;

    }
</style>