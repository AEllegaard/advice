<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      advice: "",
      currentDate: "",
      isLoaded: false
    };
  },
  mounted() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    this.currentDate = `${day}-${month}-${year}`;
    this.fetchAdvice();
  },
  methods: {
    fetchAdvice() {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          this.advice = data.slip.advice;
          // Simulate loading animation completion
          setTimeout(() => {
            this.isLoaded = true;
            this.slideDownReceipt();
          }, ); // Adjust the timeout as needed
        })
        .catch(error => {
          console.error('Error fetching advice:', error);
        });
    },
    slideDownReceipt() {
    // Display the receipt container by setting its style to "block"
    this.$refs.loadingCanvas.style.display = "none";
    this.$refs.receipt.style.display = "block";
    
    // Trigger slide-down animation by adding the CSS class
    setTimeout(() => {
      this.$refs.receipt.classList.add("slide-down");
    }, 50); // Adding a small delay to ensure smooth animation
  }
  },
};
</script>



<template>
    <div class="iphone flex justify-center "> 
      <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9 h-screen">
          <img class="self-end row-start-2 hover:animate-spin" src="/media/cool.png" alt="" draggable="false">
          <img class="col-start-6 mt-4 hover:animate-spin" src="/media/miffy.svg" alt="" draggable="false">
          <img class="col-start-6 row-start-8 self-end mt-4 hover:animate-spin" src="/media/heart.png" alt="" draggable="false">
        </div>
        <div class="grid grid-rows-4">
          <h1 class="font-scale text-center row-start-1 text-4xl m-20">ADVICES</h1>
  
          <p class="font-scale text-xl text-center row-start-2">loading...</p>
        <div class="absolute row-start-2 self-center mt-4 grid grid-cols-2 grid-rows-2 gap-4">
          <canvas class="loading" ref="loadingCanvas"></canvas>
        </div>

        <div class="absolute bottom-56 left-1/2 transform -translate-x-1/2">
          <router-link to="/one" class="z-10 font-krub text-white">
            <button class="bg-black">START OVER</button>
          </router-link>
        </div>
  
          <!-- Adjusted receipt container -->
          <div class="receipt absolute top-0 left-1/2 transform -translate-x-1/2" v-if="advice" ref="receipt">
            <div class="grid grid-rows-5 inner">
              <h1 class="font-scale text-center self-center row-start-1 text-4xl">ADVICES</h1>
              <div class="date flex justify-between">
                  <p class="px-4 font-krub">Date</p>
                  <p class="px-4 font-krub">{{ currentDate }}</p>
                  <div class="line absolute"></div>
              </div>
              <p class=" text-2xl p-4 font-krub" v-if="advice">{{ advice }}</p>
              <div class="lines flex flex-col row-start-5">
                  <div class="linetwo row-start-5"></div>
                  <div class="linetwo row-start-5 mt-0.5"></div>
                <p class="font-krub text-3xl self-center mt-5">***</p>
                <p class="font-krub text-xl self-center">THANK YOU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .receipt {
    background: linear-gradient(180deg, rgba(241, 241, 241, 1) 0%, rgba(255, 255, 255, 1) 30%, rgba(225, 225, 225, 1) 100%);
    height: 500px;
    width: 350px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1), 0 6px 12px 0 rgba(0, 0, 0, 0.1);
    display: none; /* Initially hide the receipt */
  transition: top 2s ease-out; /* Add transition for smooth animation */
  position: absolute; /* Ensure position is absolute for top property to work */
  top: -100%; /* Initially position it above the screen */
}


.receipt.slide-down {
    top: 0; /* Move the receipt down from the top */
}
  .inner{
    height: 500px;
  }

  .line {
  margin:5px 0;
  width: 350px;
  height:2px;
  margin-top:25px;
  background: repeating-linear-gradient(90deg,black 0 5px,#0000 0 7px)
    /*5px red then 2px transparent -> repeat this!*/
}

  .linetwo {
  width: 350px;
  height:2px;
  background: repeating-linear-gradient(90deg,black 0 5px,#0000 0 7px)
    /*5px red then 2px transparent -> repeat this!*/
}
  </style>
  