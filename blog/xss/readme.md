# Nodejs关于防御XSS攻击的方法（一）
* 用白名单过滤HTML的思路，使用现有的模块 [*xss*](https://github.com/leizongmin/js-xss) [![GitHub stars](https://img.shields.io/github/stars/leizongmin/js-xss.svg)](https://github.com/leizongmin/js-xss/stargazers)
感谢 [老雷](https://github.com/leizongmin) 做出的开源贡献

### 简单看看效果
***test.js***
```node
// * test.js
const xss = require('xss')

console.log(xss('<script>alert("xss");</script>'))
```
***终端***
```shell
> node test.js
&lt;script&gt;alert("xss");&lt;/script&gt;
```




