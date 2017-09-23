<template>
<div>
    <p class="title">CodingDigger</p>
    <p><span class='user_email'>{{user.email}}</span>, are you interested in any project? If not, feel free to 
    <button @click.prevent='AddProject'> Add Project + </button>
    and see if anyone is interested!</p>
    
    <div v-if='Add'>
        <p> 
         <label>Project Name:</label>
         <input type='text' v-model="Project.projectname" required>
        </p>
        <p>
        <label>What is this project about:</label>
        <br>
        <textarea rows="3" cols="40" name="comment" form="usrform" v-model='Project.projectstatement' required> Enter text here...</textarea>
        </p> 
        <p>
        <label>What skills you have for this project:</label>
        <br>    
        <textarea rows="3" cols="40" name="comment" form="usrform" v-model='Project.skills' required> Enter text here...</textarea>
        </p>
        <p>
        <label>What are you look for: </label>
        <br>
        <textarea rows="3" cols="40" name="comment" form="usrform" v-model='Project.skillsneed' required> Enter text here...</textarea>
        </p>
        <p>
        <label>How would you like to be contacted:</label>
        <br>
        <textarea rows="3" cols="40" name="comment" form="usrform" v-model='Project.contactinfo' required> Enter text here...</textarea>
        </p> 
        <button type='submit' @click.prevent='NewProject'>Submmit</button>
    </div>
    <small>*You can click on 'Delete' button on the project(s) you created :) </small>
    <br>
    <input class='search_project' type="text" v-model='search' placeholder='search here by project name...'>
    <table>
     <tr> 
        <th class='table_title'>Project</th> 
        <th class='table_title'>Created by</th>
        <th class='table_title'>Description for project</th>
        <th class='table_title'>Skill(s) user has</th>
        <th class='table_title'>Skill(s) user is looking for</th>
        <th class='table_title'>Contact Information</th>
        <th class='table_title'>Options</th>
    </tr>    
    <tr v-for="Project in filter">
         <th>
            {{Project.projectname}}
         </th>
         <th>
            {{Project.user}}
         </th>
         <th>
            {{Project.projectstatement}}
         </th>
         <th> {{Project.skills}}
         </th>
         <th> {{Project.skillsneed}}
         </th>
         <th>{{Project.contactinfo}}
         </th>
         <th>
          <div v-if='Project.user===user.email'>
          <button @click.prevent='deleteProject(Project)'><i class="fa fa-trash-o" aria-hidden="true"></i></button>
          </div>
          <div v-else>
           <p>N/A</p>
          </div>
         </th>
    </tr>
    </table>
</div>
</template>
<script>
import axios from 'axios'
import Firebase from 'firebase' 
let config ={
    apiKey: "AIzaSyDg8yfERg5JR7lqrBUG5T5RW35dTNMB-io",
    authDomain: "vue1-51412.firebaseapp.com",
    databaseURL: "https://vue1-51412.firebaseio.com",
    projectId: "vue1-51412",
    storageBucket: "vue1-51412.appspot.com",
    messagingSenderId: "520496306287"

}    
let app =Firebase.initializeApp(config);

let db =app.database();
let ProjectRef =db.ref('Projects');
    
export default{
  firebase:{
      Projects:ProjectRef
      
  },
  computed:{
        user(){
            return this.$store.state.user
        },
        filter(){
            return this.Projects.filter((Project)=>{
              return Project.projectname.includes(this.search);
            });
        }
    },
  data(){
   return{
    Add:false,
    search:'',
    Project:{
    skills:'',
    skillsneed:'',
    projectname:'',
    projectstatement:'',
    contactinfo:'',
    user:''
    }
   }
  },
  methods:{
      AddProject(){
        var self=this
      if(self.user.email!=='')
       {
        self.Add=!self.Add
       }
       else{
           
         alert('Vaild User!')  
       }
      },
      deleteProject:function(Project){
         
         if(confirm('Are you sure?')===true){ 
          ProjectRef.child(Project['.key']).remove();
         } else{
             console.log('user decides not to')
         }
          
      },
      NewProject(){
          var self=this
          console.log(self.user.email)
        axios.post('https://vue1-51412.firebaseio.com/Projects.json',self.Project,self.Project.user=self.user.email).then(function(data){
            console.log(data);
        })
          .then(response=>self.Add=false);
      },
      computed:{
        user(){
            return this.$store.state.user
            
        }
    }
      
  }
}
</script>
<style scoped>
.search_project{
 margin-top: 2%;  
 width: 20%;
}
.user_email{
    color:#9575CD;    
    }
.title{
    color:#9575CD;
    font-weight: bold;
    font-size: 200%;
}
.table_title {
   background: #9575CD;
   color: white;
   padding: 5px 10px;
   border: solid white;
}
table,
th,
td {
   margin: 2% 10%;
   border: 1px solid white;
   border-collapse: collapse;
   padding: 5px 10px;
   background-color: rgb(238, 238, 238);
   /*color: rgb(56, 57, 58);*/
   color:#9575CD;
}
table{
 margin-bottom: 20%;   
}
</style>