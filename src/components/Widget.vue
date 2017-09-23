<template>
  <div class="con">
    <div class="con-tooltip bottom">
      <router-link to="Project" style="text-decoration: none; color: #FFFFFF">
        <p>Looking for Projects</p>
        </router-link>
        <div class="tooltip">
          <p>Check out what projects we have!</p>
        </div>
    </div>
    <div class="con-tooltip bottom">
      <router-link to="Users" style="text-decoration: none; color: #FFFFFF">
        <p> New Feature coming out</p>
      </router-link>
        <div class="tooltip ">
          <p>See if there is anyone you can connect with!</p>
        </div>
    </div>
    <div class="con-tooltip bottom">
        <p>New Feature</p>
        <div class="tooltip ">
          <p>Description for new feature</p>
        </div>
    </div>
    </div>

</template>

<script>
</script>


<style scoped>
/* Start Body */

body {
  box-sizing: border-box;
  text-align: center;
  font: 16px;
 position: relative;
}


/*tooltip Box*/
.con-tooltip {
  position: relative;
  background: #9575CD;

  border-radius: 9px;
  padding: 0 20px;
  margin: 10px;

  display: inline-block;
  color: white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

}
/*tooltip */
.tooltip {
  visibility: hidden;

  opacity: .40;
  width: 100%;
  padding: 0px 1px;
  background: white;
  position: absolute;
  border-radius: 9px;
  font: 16px;
  transform: translateY(9px);
  transition: all 0.3s ease-in-out;
  color: #9575CD;
  border: dotted #9575CD;
  margin: 10px;

}

.tooltip::after {
  content: " ";
  width: 0;
  height: 0;

  border-style: solid;
  border-width: 12px 12.5px 0 12.5px;
 /* border-color:  #337ab7 transparent transparent transparent;*/
  border-color:  #9575CD transparent transparent transparent;

  position: absolute;

}

.con-tooltip:hover .tooltip{
  visibility: visible;
  transform: translateY(-10px);
  opacity: 1;
    transition: .3s linear;
  animation: odsoky 1s ease-in-out infinite  alternate;
  margin: 10px;
  position: absolute;

}
@keyframes odsoky {
  0%{
    transform: translateY(6px);
  }

  100%{
    transform: translateY(1px);
  }

}
.bottom:hover {
  transform: translateY(6px);
  z-index: 100;
  position: relative;
}

.bottom .tooltip {
  top:115%; left:-5%; }

.bottom .tooltip::after{
  top:-17%;
  left:40%;
  }
</style>
