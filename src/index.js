import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchange-service.js';

function clearFields() {
  $('#amountUSD').val("");
  $('.showErrors').text("");
  $('.showExchangeRate').text("");
}

$(document).ready(function() {
  $('#exchangeBtn').click(function() {
    event.preventDefault();
    console.log("test1");
    let fromCurrency = $('#fromCurrency').val();
    let toCurrency = $('#toCurrency').val();
    let amount = $('#amountToExchange').val();
    console.log("test");
    clearFields();
    let promise = ExchangeService.exchangeRate(fromCurrency, toCurrency, amount);
    promise.then(function(response) {
      console.log("hello");
      const body = JSON.parse(response);
      $('.showExchangeRate').text(`Your new amount in ${toCurrency} is ${body.conversion_result}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});