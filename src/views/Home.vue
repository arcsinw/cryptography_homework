<template>
  <div class="home">
    <div>
      <el-input v-model="plainText" placeholder="输入明文"/>
    </div>

    <el-button @click="encrypt">加密</el-button>

    <div>
      <el-input v-model="cipherText" placeholder="输入密文"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      plainText: '',
      cipherText: ''
    }
  },
  methods: {
    encrypt() {
      console.log('encrypt')
    }
  }
};
</script>
