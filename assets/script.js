var EURUSD = document.querySelector("#EURUSD");
var GBPUSD = document.querySelector("#GBPUSD");
var USDCAD = document.querySelector("#USDCAD");
var USDCHF = document.querySelector("#USDCHF");
var USDNOK = document.querySelector("#USDNOK");
var USDSEK = document.querySelector("#USDSEK");
var USDJPY = document.querySelector("#USDJPY");
var AUDUSD = document.querySelector("#AUDUSD");
var NZDUSD = document.querySelector("#NZDUSD");
var USDBRL = document.querySelector("#USDBRL");
var USDMXN = document.querySelector("#USDMXN");
var USDPHP = document.querySelector("#USDPHP");
var USDARS = document.querySelector("#USDARS");
var USDPEN = document.querySelector("#USDPEN");
var USDCRC = document.querySelector("#USDCRC");
var USDUYU = document.querySelector("#USDUYU");
var USDSAR = document.querySelector("#USDSAR");
var USDSGD = document.querySelector("#USDSGD");
var USDJPY = document.querySelector("#USDJPY");

let url = 'https://api.exchangeratesapi.io/v1';

function params(paramsObj) {
    return new URLSearchParams({
      access_key: '87372d954b00795a61264fb57533944a',
      ...paramsObj
    });
}

function getLatest(options) {
  fetch(`${url}/latest?${params(options)}`)
    .then(res => res.json())
    .then(displayData)
    .catch(error => {
        console.error('Error fetching data:', error);
      });

    function displayData(rates) {
        console.log(rates)
        // console.log(rates.rates)
        // console.log(rates.rates.EUR)
            EURUSD.innerText=`${"EUR/USD " + rates.rates.EUR}`;
            GBPUSD.innerText=`${"GBP/USD " + rates.rates.GBP}`;
            USDCAD.innerText=`${"USD/CAD " + rates.rates.CAD}`;
            USDCHF.innerText=`${"USD/CHF " + rates.rates.CHF}`;
            USDNOK.innerText=`${"USD/NOK " + rates.rates.NOK}`;
            USDSEK.innerText=`${"USD/SEK " + rates.rates.SEK}`;
            USDJPY.innerText=`${"USD/JPY " + rates.rates.JPY}`;
            AUDUSD.innerText=`${"AUD/USD " + rates.rates.AUD}`;
            NZDUSD.innerText=`${"NZD/USD " + rates.rates.NZD}`;
            USDBRL.innerText=`${"USD/BRL " + rates.rates.BRL}`;
            USDMXN.innerText=`${"USD/MXN " + rates.rates.MXN}`;
            USDPHP.innerText=`${"USD/PHP " + rates.rates.PHP}`;
            USDARS.innerText=`${"USD/ARS " + rates.rates.ARS}`;
            USDPEN.innerText=`${"USD/PEN " + rates.rates.PEN}`;
            USDCRC.innerText=`${"USD/CRC " + rates.rates.CRC}`;
            USDUYU.innerText=`${"USD/UYU " + rates.rates.UYU}`;
            USDSAR.innerText=`${"USD/SAR " + rates.rates.SAR}`;
            USDSGD.innerText=`${"USD/SGD " + rates.rates.SGD}`;
            USDJPY.innerText=`${"USD/JPY " + rates.rates.JPY}`;

    }
};

// remove these if you want everything
getLatest({base: 'USD'});
// getLatest({base: 'USD',symbols: 'USD,CAD,GBP'});

  // RT: display day.js todays date
  var today = dayjs();
  $("#day").text(today.format("[Today is] MMM D, YYYY [- CLICK Current FX Prices:]"));

