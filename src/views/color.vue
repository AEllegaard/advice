<template>
    <div class="iphone flex justify-center ">
      <div id="baggrund" class="h-screen flex justify-center ">
        <div class="absolute grid grid-cols-5 grid-rows-9 h-screen">
            <img class="self-end hover:animate-spin" src="/media/cowboy.png" alt="" draggable="false">
            <img class="col-start-6 row-start-2 self-end mt-4 hover:animate-spin" src="/media/miffy.svg" alt="" draggable="false">
            <img class="row-start-9 col-start-5 self-center hover:animate-spin" src="/media/hmm.png" alt="" draggable="false">           </div>
        <div class="grid grid-rows-4 w-full">
            <div class="flex flex-col">
                <h1 class="font-scale text-center row-start-1 text-4xl mt-20">ADVICES</h1>
                  <p class="font-scale text-xl text-center mt-10">What is your color today?</p>
            </div>
          <div class="absolute row-start-2 w-1/4 self-center ml-10 flex  flex-col items-center">
            <canvas class="canvas" ref="canvas"></canvas>
          </div>
  
          <div class="row-start-4 flex justify-center items-start">
            <RouterLink to="/one" class="z-10">
              <button class="pr-4"><img src="/media/left.svg" alt=""></button>
            </RouterLink>
            <RouterLink to="/super" class="z-10">
            <button class="pl-4"><img src="/media/right.svg" alt=""></button>
            </RouterLink>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router'
  
  export default {
    components: {
      RouterLink
    },
    mounted() {
      this.initCanvas();

      
    },
    methods: {
      initCanvas() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext('2d');
        canvas.height = 300;
        
        // Initial hue value
        let hue = 0;
  
        // Draw the box with rainbow colors
        this.drawRainbowBox(ctx, hue);
        
        // Create and style the slider
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 360; // Maximum hue value
        slider.value = 0;
        slider.style.width = '200px';
  
        // Add event listener to handle slider change
        slider.addEventListener('input', () => {
          // Update hue value based on slider value
          hue = slider.value;
          // Redraw the box with the new color
          this.drawRainbowBox(ctx, hue);
        });
  
        // Append the slider to the HTML
        canvas.parentNode.appendChild(slider);
      },
      drawRainbowBox(ctx, hue) {
        // Clear the canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
        // Draw the box with rainbow colors
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
        // Draw the rounded rectangle
        this.roundedRect(ctx, 0, 0, 300, 300, 15);
        ctx.fill();
      },
      roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
      }
    }
  }
  </script>
  
  <style>
input[type="range"] {
-webkit-appearance: none;
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 20%, rgba(0,255,0,1) 35%, rgba(0,255,255,1) 50%, rgba(0,0,255,1) 65%, rgba(255,0,255,1) 85%, rgba(255,0,0,1) 100%);
  border-radius: 5px;
  outline: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top: 40px; /* Adjust the margin-top as needed */
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #FEFEFE;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  border-radius: 50%;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 10px;
  background: #4caf50;
  cursor: pointer;
  border-radius: 50%;
}
</style>
