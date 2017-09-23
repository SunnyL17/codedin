<template>
 <div>
  <input type="file" name="image" @change="filesChange($event.target.files)" v-on:change="previewThumbnail" accept="image/*" >
 <img v-bind:src=imageSrc>
    <button @click='postPic'>Post imageSrc</button>
 </div>
</template>
<script>
import axios from 'axios'
import Firebase from 'firebase'
export default{
 data(){
  return{
      imageUrl:'',
      logoUrl:'klj',
      imageSrc:undefined,
      User:{
          localpic:''
      }
  }   
    
},
methods:{
    postPic(){
        var self=this
  axios.post('https://vue1-51412.firebaseio.com/Projects.json',self.logoUrl).then(function(data){
            console.log('image src store');
        })
    },
    previewThumbnail: function(event) {
      console.log('it works 1')
      var self=this
      var input = event.target;
      let getFile =input.files[0];
      let storageRef = Firebase.storage().ref(getFile.name);
      let task =storageRef.put(getFile);
      console.log(storageRef);
      let images=Firebase.storage().ref(getFile.name).getDownloadURL();
      console.log(images)
        
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var vm = this;
        reader.onload = function(e) {
          vm.imageSrc = e.target.result;
          vm.imageData = input.files[0];
         this.imageUrl=reader.result;
        }
       
        reader.readAsDataURL(input.files[0]);
      }
    },
    filesChange(fileList) {
     console.log('it works 2')
      if (!fileList.length) return;
      this.image = fileList[0];
      console.log(this.image)

    }
}
}
</script>
<style scoped>
</style>