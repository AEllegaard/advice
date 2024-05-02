<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="iphone flex justify-center "> 
    <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9  h-screen">
            <img class="self-end row-start-1 hover:animate-spin" src="/media/heart.png" alt="" draggable="false">
            <img class="col-start-6 row-start-2 self-end mt-4 hover:animate-spin" src="/media/miffy.svg" alt="" draggable="false">
            <img class="col-start-3 row-start-9  mt-4 hover:animate-spin" src="/media/kys.png" alt="" draggable="false">
         </div>
      <div class="grid grid-rows-4">
        <h1 class="font-scale text-center row-start-1 text-4xl m-20" >ADVICES</h1>

        <p class="font-scale text-xl text-center px-10 row-start-2">You can only eat one food for the rest of your life, what would it be?</p>
        <div class="absolute self-center justify-self-center mt-4 grid grid-cols-2 grid-rows-2 gap-4">
          <RouterLink to="/receipt"><button class="p-0"><img src="/media/burger.png" alt=""></button></RouterLink>
          <RouterLink to="/receipt"><button class="p-0"><img src="/media/pancake.png" alt=""></button></RouterLink>
          <RouterLink to="/receipt"><button class="p-0"><img src="/media/salad.png" alt=""></button></RouterLink>
          <RouterLink to="/receipt"><button class="p-0"><img src="/media/sushi.png" alt=""></button></RouterLink>
        </div>

          <div class=" row-start-4 flex  justify-center items-start">
            <RouterLink to="/super" class="z-10">
                <button class="pr-4"><img src="/media/left.svg" alt=""></button>
            </RouterLink>
            <RouterLink to="/receipt" class="z-10">
            <button class="pl-4"><img src="/media/right.svg" alt=""></button>
            </RouterLink>
          </div>

        </div>
        </div>
        </div>

</template>