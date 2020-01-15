declare class IpParse {
    isIp(ip:string):number;
    isIpv4(ip:string):boolean;
    isIpv6(ip:string):boolean;
    parseIp(ip:string):Array<string>;
}

export default IpParse;