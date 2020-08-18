/********
 * RSA加解密库
 ********/

const BigNumber = require('bignumber.js')

/**
 * 判断是否素数
 * @param {*} number
 */
export function isPrime(number) {
    console.log(number)
}

/**
 * 求number 模 exponent的逆元
 * @param {*} number 
 * @param {*} exponent
 */
export function modInverse(number, exponent) {

  if (number.isNaN() || exponent.isNaN()) {
    return NaN // invalid input
  }

  number = number.mod(exponent).plus(exponent).mod(exponent)
  // number = (number % exponent + exponent) % exponent
  if (number.isZero() || exponent.lt(2)) {
    return NaN // invalid input
  }

  // find the gcd
  const s = []
  let b = exponent
  while(!b.isZero()) {
    [number, b] = [b, number.mod(b)]
    s.push({number, b})
  }
  if (!number.eq(1)) {
    return NaN // inverse does not exists
  }
  // find the inverse
  let x = new BigNumber(1)
  let y = new BigNumber(0)
  for(let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y,  x.minus(y.times(Math.floor(s[i].number.div(s[i].b))))]
  }
  return (y.mod(exponent).plus(exponent)).mod(exponent)
}

export function nativeModInverse(number, exponent) {
  // validate inputs
  [number, exponent] = [Number(number), Number(exponent)]
  if (Number.isNaN(number) || Number.isNaN(exponent)) {
    return NaN // invalid input
  }
  number = (number % exponent + exponent) % exponent
  if (!number || exponent < 2) {
    return NaN // invalid input
  }
  // find the gcd
  const s = []
  let b = exponent
  while(b) {
    [number, b] = [b, number % b]
    s.push({number, b})
  }
  if (number !== 1) {
    return NaN // inverse does not exists
  }
  // find the inverse
  let x = 1
  let y = 0
  for(let i = s.length - 2; i >= 0; --i) {
    [x, y] = [y,  x - y * Math.floor(s[i].number / s[i].b)]
  }
  return (y % exponent + exponent) % exponent
}

/**
 * 生成密钥对
 * 1. 选取两个互异大素数p和q
 * 2. n = p * q, \phi(n) = (p-1)(q-1)
 * 3. 选取整数e, 1 < e < \phi(n), 使得gcd(\phi(n), e) = 1
 * 4. 计算模\phi(n)下e的逆元d,  ed === 1 mod \phi(n)
 * 5. e为公钥，d为私钥
 */
export function generateKeyPair(p, q) {
    p = new BigNumber(7)
    q = new BigNumber(17)  

    let n = p.times(q)
    let phi = p.minus(1).times(q.minus(1))
    let e = new BigNumber(5)

    let d = modInverse(e, phi)

    return {
        publicKey: {
            key: e,
            n: n
        },
        privateKey: {
            key: d,
            n : n
        }
    }
}

/**
 * 加密
 * @param {BigNumber} message 
 * @param {*} publicKey
 */
export function encrypt(message, publicKey) {
    let cipherText = new BigNumber(message).pow(publicKey.key).mod(publicKey.n)
    return cipherText
}

/**
 * 解密
 * @param {String} cipherText 
 */
export function decrypt(cipherText, privateKey) {
    // let plainText = Math.pow(cipherText, privateKey.key) % privateKey.n
  let plainText = new BigNumber(cipherText).pow(privateKey.key).mod(privateKey.n)
    return plainText
}