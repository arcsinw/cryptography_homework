<template>
  <div class="home">
    {{type}}
  </div>
</template>

<script>
export default {
  name: "Crypto",
  components: {
    
  },
  data() {
    return {
      type: this.$route.params.type
    }
  }
};
</script>
 
