<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="iphone flex justify-center "> 
    <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9  h-screen">
            <img class="self-end row-start-2 hover:animate-spin" src="/media/cool.png" alt="" draggable="false">
            <img class="col-start-6 mt-4 hover:animate-spin" src="/media/miffy.svg" alt="" draggable="false">
            <img class="col-start-6 row-start-8 self-end mt-4 hover:animate-spin" src="/media/heart.png" alt="" draggable="false">
         </div>
      <div class="grid grid-rows-4">
        <h1 class="font-scale text-center row-start-1 text-4xl m-20" >ADVICES</h1>

          <p class="font-scale text-xl text-center  row-start-2">How is your mood today?</p>
          <div class="absolute row-start-2 self-center mt-4 grid grid-cols-2 grid-rows-2 gap-4 ">
            <RouterLink to="/color"><button class="p-0"><img src="/media/happy.svg" alt=""></button></RouterLink>
            <RouterLink to="/color"><button class="p-0"><img src="/media/meh.svg" alt=""></button></RouterLink>
            <RouterLink to="/color"><button class="p-0"><img src="/media/mad.svg" alt=""></button></RouterLink>
            <RouterLink to="/color"><button class="p-0"><img src="/media/silly.svg" alt=""></button></RouterLink>
          </div>

          <div class=" row-start-4 flex  justify-center items-start">
            <RouterLink to="/" class="z-10">
                <button class="pr-4"><img src="/media/left.svg" alt=""></button>
            </RouterLink>
            <RouterLink to="/color" class="z-10">
            <button class="pl-4"><img src="/media/right.svg" alt=""></button>
            </RouterLink>
          </div>

        </div>
        </div>
        </div>

</template>