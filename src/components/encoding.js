// 将文本转为字节数组（utf-8编码）
String.prototype.toBytes = function () {
    var result = new Array()
    var length = this.length
    for (let index = 0; index < length; index++) {
        var code = this.charCodeAt(index) // charCodeAt返回unicode
        result[index] = code
    }
    return result
}