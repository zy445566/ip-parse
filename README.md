# ip-parse
convert ip into an array,support ipv4 and ipv6.

# install 
```sh
npm install ip-parse
```
# example
```js
ipParse.parseIp('127.0.0.1') // output: ['127','0','0','1']
ipParse.parseIp('110.120.119.255') // output: ['110','120','119','255']
ipParse.parseIp('256.120.119.255') // output: []  // because ipv4 every num must lte 255
ipParse.parseIp('::') // output: ['0','0','0','0','0','0','0','0']
ipParse.parseIp('::1') // output: ['0','0','0','0','0','0','0','1']
ipParse.parseIp('1:2:3::') // output: ['1','2','3','0','0','0','0','0']
ipParse.parseIp('1:2:3:4:5:6:7:ffff') // output: ['1','2','3','4','5','6','7','ffff']
ipParse.parseIp('1::2::3') // output: []  // because ipv6 only one ::
```