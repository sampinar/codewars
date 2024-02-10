/* Extract the domain name from a URL

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */


function domainName(url){
    //your code here
    //const regex = /(?<=\/\/)\w+/;
    // const regex = /((?<=\/\/))[\w\-]*|(?<=^w{3,}\.)\w+|((?<!\.))^\w+/;
    // const regex = /(?<=^http[s]?:\/\/)[\w\-]+|(?<=^w{3,}\.)[\w\-]+|(?<=^http[s]?:\/\/w{3,}\.)[\w\-]+/;
    const regex = /(?<=\.)[\w\-]+|(?<!\..*\/?)[\w\-]+/g;
    let dname = url.match(regex);

    for (let e of dname) {
        if (e === 'http' || e === 'https' || e === 'www') {
            continue;
        }
        return e;
    }
    // return dname;
}

console.log(domainName("http://google.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.log(domainName("6skvha.tv"));
console.log(domainName("2rccko5eob5ecf-a-32hk6yzg9hq.it"));
console.log(domainName("https://www.nz24d3fbvj2ragbqclhj1g.de/warez/"));
console.log(domainName("https://www.google.co.jp"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("2rccko5eob5ecf-a-32hk6yzg9hq.it"));
console.log(domainName("http://www.nz24d3fbvj2ragbqclhj1g.de/warez/"));
console.log(domainName("https://www.nz24d3fbvj2ragbqclhj1g.de/warez/"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://www.dzhb7wiffzrns8v6k.name"));
console.log(domainName("http://www.vruqtn.co/default.html"));
console.log(domainName("http://p6tft.io/error"));
console.log(domainName("https://b32pn.co/archive/"));
console.log(domainName("http://55jo6tcqenxe2k-r9nv2h.co.uk/error"));
console.log(domainName("m8be8m-m0jfcm3dis5zmsbah.co.uk/error"));
console.log(domainName("http://www.pyko-ag.co.za/"));
console.log(domainName("https://www.wpksc09hx7a-7qc.us/archive/"));
console.log(domainName("https://38xa8n2q3wwymp2alae9r.net/default.html"));
console.log(domainName("a2pe6e4jreaezdr9vmdc4wbp3.tv"));
console.log(domainName("https://otw7rrr7kc6l7vgjuuf6.fr/default.html"));
console.log(domainName("http://gxz7glhpy7mwo6jtagfi2.co.uk/index.php"));
console.log(domainName("https://drijf5t0i.tv/img/"));
console.log(domainName("had6a227fclm93fyx.name/archive/"));
console.log(domainName("http://www.vruqtn.co/default.html"));
console.log(domainName("https://www.dzhb7wiffzrns8v6k.name"));
console.log(domainName("http://www.nz24d3fbvj2ragbqclhj1g.de/warez/"));
console.log(domainName("2rccko5eob5ecf-a-32hk6yzg9hq.it"));
console.log(domainName("http://www.l--j3v-mrltqou3-wxy4mceva9tbe.net/index.php"));
console.log(domainName("http://www.ktkkw39ox.fr/"));
console.log(domainName("https://www.qax2ihyn7eub0vz8ffa1gy67jqya.co/warez/"));
console.log(domainName("601bfmbje29mhdvny271bkn1ckcij9.de/index.php"));
console.log(domainName("http://i4jj8u2ov5gtfscwlbdqy15i0a53.pro/users"));
console.log(domainName("http://www.jg3ljxa0et7fbrc5c2dzjrafe.biz/users"));
console.log(domainName("http://www.d2rr8993zv5qtdfkuew.com"));
console.log(domainName("http://www.z7gho1wb5srwyv-212ldgb.tv/warez/"));
console.log(domainName("http://www.28cpjbqdbg1rgdi9.co/index.php"));
console.log(domainName("s3mb8owpnizj80nz1jcsv6x7.tv/img/"));
console.log(domainName("https://www.t8wugdoe7zps.jp"));
console.log(domainName("31nwws-aq5wezq.biz/"));
console.log(domainName("https://q4v7vm.org"));
console.log(domainName("https://www.8gucrk4oyu8ko.biz/archive/"));
console.log(domainName("https://ru-ld2whzyv4h9tz377o4ni.jp/error"));
console.log(domainName("cscvxm229p.edu"));
console.log(domainName("https://www.xat7lbvlvus35rux871dc3id.tv/warez/"));
console.log(domainName("http://10tqhw.it/"));
console.log(domainName("a1f5h0qfwbfsm.it/archive/"));
console.log(domainName("http://wvq8t90q-76toeqhz27co.name/"));
console.log(domainName("http://www.k2evejogqapjj.net/archive/"));
console.log(domainName("https://ya2-kmlk0ns8kn92kf17kxidz.tv/"));
console.log();


// ((?<=\/\/)\w+)(?<!\.)|((?<=^\w{3,}\.)\w+)

// |(?<!(^w{3,}\.)))\w+

// (?<=^https?:\/\/)[\w\-]+|(?<=^w{3,}\.)[\w\-]+|(?<![\w+\-]\.)\w+

// regex: string "\w" or hyphen "-" that has "." on other side

// (?<=https?\:\/\/|w{3}\.)[\w\-]+|(?<=w{3}\.)[\w\-]+

// (?<=^http[s]?\:\/\/|(w{3})?\.?)([\w\-]+)(?=\.[\w]{2,3}.*$)

// (?<=https?\:\/\w{3}?\.)|(?<=w{3}?\.?)|(?<=https?\:\/\/)([\w\-]+)(?=\.)

// ((?!https?\:\/\/w{3}?\.?))?([\w\-]+)(?:\.)

// ((?!https?\:\/\/w{3}?\.?))?([\w\-]+)(?:\.)

// |(?<!\.\w$)^[\w\-]+