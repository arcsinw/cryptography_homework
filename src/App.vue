<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link :to="{name: 'RSACrypto', params: {type: 'rsa'}}">RSA</router-link> |
      <router-link :to="{name: 'ElGamalCrypto', params: {type: 'elgamal'}}">ElGamal</router-link> |
      <router-link :to="{name: 'DSACrypto', params: {type: 'dsa'}}">DSA</router-link> |
      <router-link to="/diff">Diffie-Hellman</router-link> |
      <router-link to="/elgamal">椭圆曲线ElGamal</router-link> |
      <router-link to="/dh">椭圆曲线Diffie-Hellman</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
