const url = "https://en.wikipedia.org/wiki/C#Pronunciation_and_use";
const request = require("request");
const cheerio = require("cheerio");
request(url, cb);
function cb(err, response, html) {
    if(err) {
        console.error();
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html);
    let headArr = $(".mw-headline");
    let content0 = $(headArr[0]).text();
    let content1 = $(headArr[1]).text();
    let content2 = $(headArr[2]).text();
    // console.log(content0+" \n");
    // console.log(content1+" \n");
    // console.log(content2+" \n");
    let parr = $("p");
    let psubarr = $("h3");
    let sub1 = $(psubarr[0]).text();
    let sub2 = $(psubarr[1]).text();
    let sub3 = $(psubarr[2]).text();
    let sub4 = $(psubarr[3]).text();
    // for(let i=2;i<22;i++) {
    //     if(i==8) {
    //         continue;
    //     }
    //     let text = $(parr[i]).text();
    //     console.log(" "+text);
    // }
    let text = content0.toString() +" " ;
    for(let i=2;i<5;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += content1.toString() +" " ;
    for(let i=5;i<8;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += content2.toString() +" " ;
    for(let i=8;i<9;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += sub1.toString() +" " ;
    for(let i=9;i<14;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += sub2.toString() +" " ;
    for(let i=14;i<19;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += sub3.toString() +" " ;
    for(let i=19;i<20;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    text += sub4.toString() +" " ;
    for(let i=20;i<22;i++) {
        if(i==8) {
            continue;
        }
        let t = $(parr[i]).text();
        text += t + " ";
    }
    finaltext = text.toString();
    console.log(finaltext);

}