/********
 * RSA加解密库
 ********/

/**
 * 判断是否素数
 * @param {*} number
 */
export function isPrime(number) {
    console.log(number)
}

/**
 * 求逆元
 * @param {*} number 
 */
export function modInverse(number) {
    console.log(number)
}

/**
 * 生成密钥对
 * 1. 选取两个互异大素数p和q
 * 2. n = p * q, \phi(n) = (p-1)(q-1)
 * 3. 选取整数e, 1 < e < \phi(n), 使得gcd(\phi(n), e) = 1
 * 4. 计算模\phi(n)下e的逆元d,  ed === 1 mod \phi(n)
 * 5. e为公钥，d为私钥
 */
export function generateKeyPair() {
    
}

/**
 * 加密
 * @param {String} message 
 */
export function encrypt(message) {
    console.log(message)
}

/**
 * 解密
 * @param {String} cipherText 
 */
export function decrypt(cipherText) {
    console.log(cipherText)
}