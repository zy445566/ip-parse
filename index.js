const net =  require('net');
class IpParse {
    isIp(ip) {
        return net.isIP(ip);
    }
    isIpv4(ip) {
        return net.isIPv4(ip);
    }
    isIpv6(ip) {
        return net.isIPv6(ip)
    }
    parseIp(ip) {
        let ipData = []
        if(this.isIpv4(ip)){
            ipData = ip.split('.');
        }
        if(this.isIpv6(ip)){
            const fitterData = (e)=>{
                if(!e) {return '0'}
                return e;
            }
            const ipv6Data = ip.split('::').map(fitterData);
            if(ipv6Data.length==1) {
                return ip.split(':');
            }
            const ipv6DataBefore = ipv6Data[0].split(':').map(fitterData);
            const ipv6DataAfter = ipv6Data[1].split(':').map(fitterData);
            const ipv6DataMid = new Array(8 - (ipv6DataBefore.length+ipv6DataAfter.length)).fill('0');
            return [...ipv6DataBefore,...ipv6DataMid,...ipv6DataAfter]   
        }
        return ipData;
    }
}

const ipParseInstance = new IpParse()
module.exports = ipParseInstance;
module.exports.default = ipParseInstance;