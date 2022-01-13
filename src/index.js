import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.cc';
import ExchangeService from './js/exchange-service.js'

function clearFields() {
  $('#amountUSD').val("");
  $('.showErrors').text("");
  $('.showExchangeRate').text("");
}