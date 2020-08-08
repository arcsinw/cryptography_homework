<template>
  <div>
    <el-form>
      <el-form-item label="明文:">
        <el-input placeholder="输入明文" v-model="plainText"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="24">
          <el-button @click="encrypt">加密</el-button>
        </el-col>
      </el-row>

      <el-form-item label="密文:">
        <el-input placeholder="输入密文" v-model="cipherText"></el-input>
      </el-form-item>

      <!-- <el-divider></el-divider> -->
      <el-button @click="encrypt">解密</el-button>

      <el-form-item label="解密明文:">
        <el-input placeholder="" v-model="decryptedPlainText"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {encrypt} from '@/components/RSA'
export default {
    name: "RSACrypto",
    components: {

    },
    data() {
        return {
          plainText: '',
          cipherText: '',
          decryptedPlainText: ''
        }
    },
    methods: {
      encrypt: function() {
        this.cipherText = encrypt(this.plainText)
      }
    }
}
</script>

<style>

</style>