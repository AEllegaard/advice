
<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      advice: "",
    };
  },
  methods: {
    fetchAdvice() {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          // Extract the advice from the response
          this.advice = data.slip.advice;
        })
        .catch(error => {
          console.error('Error fetching advice:', error);
        });
    },
  },
};
</script>

<template>
  
  <RouterView/>
</template>


<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
}

#baggrund{
  background-color: #FEFEFE;
  width: 450px;
}
</style>