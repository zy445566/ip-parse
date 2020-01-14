const assert =  require('assert')
const ipParse = require('./index')
const testUnit = {
    [Symbol('test.isIp')] : async function() {
        assert.ok(ipParse.isIp('127.0.0.1')===4,'isIp error!')
        assert.ok(ipParse.isIp('110.120.119.255')===4,'isIp error!')
        assert.ok(ipParse.isIp('256.120.119.255')===0,'isIp error!')
        assert.ok(ipParse.isIp('::')===6,'isIp error!')
        assert.ok(ipParse.isIp('::1')===6,'isIp error!')
        assert.ok(ipParse.isIp('1:2:3::')===6,'isIp error!')
        assert.ok(ipParse.isIp('1:2:3:4:5:6:7:8')===6,'isIp error!')
        assert.ok(ipParse.isIp('1::2::3')===0,'isIp error!')
    },
    [Symbol('test.isIpv4')] : async function() {
        assert.ok(ipParse.isIpv4('127.0.0.1'),'isIpv4 error!')
        assert.ok(ipParse.isIpv4('110.120.119.255'),'isIpv4 error!')
        assert.ok(ipParse.isIpv4('256.120.119.255')===false,'isIpv4 error!')
    },
    [Symbol('test.isIpv6')] : async function() {
        assert.ok(ipParse.isIpv6('::'),'isIpv6 error!')
        assert.ok(ipParse.isIpv6('::1'),'isIpv6 error!')
        assert.ok(ipParse.isIpv6('1:2:3::'),'isIpv6 error!')
        assert.ok(ipParse.isIpv6('1:2:3:4:5:6:7:ffff'),'isIpv6 error!')
        assert.ok(ipParse.isIpv6('1::2::3')===false,'isIpv6 error!')
    },
    [Symbol('test.parseIp')] : async function() {
        assert.deepEqual(ipParse.parseIp('127.0.0.1'),['127','0','0','1'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('110.120.119.255'),['110','120','119','255'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('256.120.119.255'),[], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('::'),['0','0','0','0','0','0','0','0'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('::1'),['0','0','0','0','0','0','0','1'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('1:2:3::'),['1','2','3','0','0','0','0','0'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('1:2:3:4:5:6:7:ffff'),['1','2','3','4','5','6','7','ffff'], 'parseIp error!')
        assert.deepEqual(ipParse.parseIp('1::2::3'),[], 'parseIp error!')
    },
}


async function run(testUnitList) {
    for(let testUnitValue of testUnitList) {
        for(let testFunc of Object.getOwnPropertySymbols(testUnitValue)) {
            await testUnitValue[testFunc]();
        }
    }
}
(async function() {
    await run([testUnit]);
})();

