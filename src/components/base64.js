/**
 * base64编解码
 * 二进制 3 x 8 -> 4 x 6 ，
 */

require('@/components/encoding.js')

const BASE64_TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const PADDING_CHAR = '=';

/**
 * 将文本编码成base64字符串
 */
String.prototype.toBase64String = function () {
    console.log(this.toBytes())
}

/**
 * 将base64字符串解码成文本
 */
String.prototype.fromBase64String = function () {
    
}