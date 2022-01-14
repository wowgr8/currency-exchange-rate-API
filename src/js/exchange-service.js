export default class ExchangeService {
  static exchangeRate(currency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${fromCurrency}/${toCurrency}/${amount}`; //usd and eur and 30 will need place holders. originally: https://v6.exchangerate-api.com/v6/ee953c2d929db82509d7d3ba/pair/USD/EUR/30
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}