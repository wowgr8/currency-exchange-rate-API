import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import ExchangeService from './js/exchange-service.js'

function clearFields() {
  $('#amountUSD').val("");
  $('.showErrors').text("");
  $('.showExchangeRate').text("");
}

$(document).ready(function() {
  $('#exchangeBtn').click(function() {
    let baseCurrency = $('#fromCurrency').val();
    let targetCurrency = $('#toCurrency').val();
    clearFields();
    let promise = ExchangeService.exchangeRate(currency);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showExchangeRate').text(`Your new amount in ${targetCurrency} is ${body.conversion_result}`)
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});