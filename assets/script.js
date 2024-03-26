var EURUSD = document.querySelector("#EURUSD");
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
            EURUSD.innerText=`${rates.EUR}`;
    }
};

// remove these if you want everything
getLatest({base: 'USD'});
// getLatest({base: 'USD',symbols: 'USD,CAD,GBP'});


