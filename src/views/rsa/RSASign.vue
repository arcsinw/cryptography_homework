<template>
  <div>
    <el-form>
      <el-form-item label="p:">
        <el-input placeholder="输入一个大素数p" v-model="p"></el-input>
      </el-form-item>
      
      <el-form-item label="q:">
        <el-input placeholder="输入一个大素数q" v-model="q"></el-input>
      </el-form-item>
      <el-row>
        <el-button @click="generateKeyPair(p, q)">生成密钥对</el-button>
      </el-row>
      <el-form-item label="公钥:">
        <el-input placeholder="输入公钥" v-model="publicKey.key"></el-input>
      </el-form-item>
      
      <el-form-item label="私钥:">
        <el-input placeholder="输入私钥" v-model="privateKey.key"></el-input>
      </el-form-item>

      <el-form-item label="明文:">
        <el-input placeholder="输入明文" v-model="plainText"></el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12">
          <el-button @click="sign">签名</el-button>
        </el-col>
        <el-col :span="12">
          <el-button @click="verify">验证</el-button>
        </el-col>
      </el-row>

      <el-form-item label="签名:">
        <el-input placeholder="输入密文" v-model="signText"></el-input>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import * as rsa from '@/components/rsa'
export default {
    name: "RSACrypto",
    components: {

    },
    data() {
        return {
          plainText: '',
          cipherText: '',
          decryptedPlainText: '',
          publicKey: {},
          privateKey: {},
          p: 7,
          q: 17
        }
    },
    methods: {
      sign: function() {
          if (this.publicKey != undefined && 
              this.publicKey.key != undefined &&
              this.publicKey.n != undefined) {
            this.cipherText = rsa.sign(this.plainText, this.privateKey) 
          }
      },
      generateKeyPair: function(p, q) {
        let keyPair = rsa.generateKeyPair(p, q)
        
        this.publicKey = keyPair.publicKey
        this.privateKey = keyPair.privateKey
      },
      verify: function() {
        if (this.privateKey != undefined && 
            this.privateKey.key != undefined &&
            this.privateKey.n != undefined) {
          rsa.decrypt(this.signText, this.publicKey)
        }
      }
    }
}
</script>

<style>

</style>