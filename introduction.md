# RSA 加解密与签名

## 公钥和私钥的生成

- 选取两个互异大素数$p$和$q$
- 计算$n=p \times q$，$n$的欧拉函数 $\varphi(n)=(p-1) \times(q-1)$
- 选一个整数e, 满足$1<e<\varphi(n)$， $gcd(e,\varphi(n))=1$
- 计算e在$mod \varphi(n)$下的逆元d，e为公钥，d为私钥

### 大素数生成

基本方法：随机生成一个指定位数的大数，然后判断这个数是否是素数，如果不是就重新生成

如何判断一个大数是否是素数

Fermat定理

> 若p是素数，a是正整数且gcd(a, p)=1，
则 $a^{p-1} ≡ 1 \bmod p$

Miller-Rabin素性测试




### 加解密算法实现

#### 将文本转成数字

使用UTF-8对汉字进行编码

|Unicode编码(十六进制)|UTF-8 字节流(二进制)|
|:---:|:---:|
|000000-00007F|0xxxxxxx|
|000080-0007FF|110xxxxx 10xxxxxx|
|000800-00FFFF|1110xxxx 10xxxxxx 10xxxxxx|
|010000-10FFFF|11110xxx 10xxxxxx 10xxxxxx 10xxxxxx|

#### 加密

求a mod p的乘法逆元

扩展的欧几里得

已知整数a、b, 扩展欧几里得算法可以在求得gcd(a, b)的同时找到整数x、y, 满足ax + by = gcd(a, b) 其中x为a mod y 的逆元

$$ax \equiv 1 \bmod p$$

1. 若p是素数，a是正整数且gcd(a, p)=1, 根据Fermat定理
$$a^{p-1} = a^{p-2} \times a \equiv 1 \bmod p$$

$a \bmod p$的逆元为$a^{p-2}$

##### 将数字转回文本

### 签名算法实现

### 单元测试

### 性能测试

### UI

### 代码开源链接

[https://github.com/arcsinw/cryptography_homework](https://github.com/arcsinw/cryptography_homework)

### References

1. [https://baike.baidu.com/item/Unicode/750500](https://baike.baidu.com/item/Unicode/750500)

2. [https://bindog.github.io/blog/2014/07/19/how-to-generate-big-primes/](https://bindog.github.io/blog/2014/07/19/how-to-generate-big-primes/)