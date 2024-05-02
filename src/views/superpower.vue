<script>
 import { RouterLink } from 'vue-router'
  
  export default {
    components: {
      RouterLink
    },
    mounted() {
      let enterBtn = document.querySelector('.input');

        enterBtn.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".last-router-link button").click();
  }
});
    }
  }

</script>

<template>
  <div class="iphone flex justify-center "> 
    <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9  h-screen">
            <img class="self-end row-start-2 hover:animate-spin" src="/media/cool.png" alt="" draggable="false">
            <img class="col-start-6 mt-4 hover:animate-spin" src="/media/bluemonster.svg" alt="" draggable="false">
            <img class="col-start-6 row-start-8 self-end mt-4 hover:animate-spin" src="/media/yellownerd.svg" alt="" draggable="false">
         </div>
      <div class="grid grid-rows-4">
        <h1 class="font-scale text-center row-start-1 text-4xl m-20" >ADVICES</h1>

          <p class="font-scale text-xl text-center p-10 row-start-2">If you could have a superpower, what would it be??</p>
          <div class="row-start-3 flex justify-center">
            <input class="bg-gray-100 font-scale z-10 input" type="text" id="super" placeholder="Mindreading..." >
            </div>

          <div class=" row-start-4 flex  justify-center items-start">
            <RouterLink to="/color" class="z-10">
                <button class="pr-4"><img src="/media/left.svg" alt=""></button>
            </RouterLink>
            <RouterLink to="/food" class="z-10 last-router-link">
            <button class="pl-4"><img src="/media/right.svg" alt=""></button>
            </RouterLink>
          </div>

        </div>
        </div>
        </div>
</template>

<style>
input {
    height: 40px;
    width:300px;
    border-radius: 15px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
    padding:10px;
    padding-top: 12px;
}
</style>