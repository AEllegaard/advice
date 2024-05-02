<script setup>

</script>

<template>
 <div class="iphone flex justify-center "> 
    <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9  h-screen">
            <img class="self-end hover:animate-spin" src="/media/kys.png" alt="" draggable="false">
            <img class="col-start-6 mt-4 hover:animate-spin" src="/media/strawberry.svg" alt="" draggable="false">
            <img class="row-start-3 col-start-2 self-center hover:animate-spin" src="/media/bluemonster.svg" alt="" draggable="false">
            <img class="row-start-4 col-start-5 ml-8 hover:animate-spin" src="/media/yellownerd.svg" alt="" draggable="false">
            <img class="row-start-5 col-start-3 hover:animate-spin" src="/media/hmm.png" alt="" draggable="false">
            <img class="row-start-6 col-start-6 self-end hover:animate-spin" src="/media/heart.png" alt="" draggable="false">
            <img class="row-start-9 ml-2 hover:animate-spin" src="/media/miffy.svg" alt="" draggable="false">
        </div>
      <div class="grid grid-rows-4">
        <h1 class="font-scale text-center row-start-1 text-4xl m-20" >ADVICES</h1>
        <div class="grid grid-rows-2 row-start-3">
          <p class="font-scale text-xl text-center self-end row-start-1">Your journey to clarity starts here.</p>
          <p class="font-krub font-light text-center self-center row-start-2">Answer some questions <br> and get some advice</p>
        </div>

        <RouterLink to="/one" class="z-10 row-start-4 font-krub text-white justify-self-center flex"> <button class="bg-black self-center">Get Started</button></RouterLink>
      </div>
      <!-- <button class="font-scale px-12 py-32 bg-gray-200" @click="fetchAdvice">Get Advice</button>
      <p class="font-scale" v-if="advice">{{ advice }}</p>
      -->
    </div>
  </div>

</template>
