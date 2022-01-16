# CURRENCY EXCHANGE RATE API

## by Cesar Lopez

### _January 15, 2022_

#### This application will let the user choose from multiple different currencies, enter a dollar amount, and convert them to another currency of their choice. To determine the most recent exchange rate, this application will make an API call to the Exchange Rate API.

## Technologies Used
- Babel
- CSS_
- eslint
- HTML
- package-json
- Javascript
- JQuery
- popper.js 1.16.1_
- style-loader 1.0.0_
- webpack

## Setup Instructions
You will need to make an account and get an API key.

1. _Visit [ExchangeRate-API](https://www.exchangerate-api.com/) site. Enter your email address and click the "Get Free Key" button._

2. _Enter your email, first name and create a password. Agree to the terms of use and click on "Get Started!"_

3. _Now you should have access to your personal API Key._

4. _In your terminal, navigate to the directory you desire to download thse files into._

5. _Copy and enter this command ```$ git clone https://github.com/wowgr8/currency-exchange-rate-API```_

6. _Navigate to the top level of the directory with the command ```$ cd currency-exhange-rate-API```_

7. _Make sure you have installed [Node js](https://nodejs.org/en/)_

8. _Run command ``` $ npm install``` to install all dependencies._

9. _Create file for storing environmental variables you want to keep secret (such as an API key) ``` $ touch .env```_

10. _Add the following line of code to the .env file ```API_KEY=insert-your-API-key-here```. Be sure to insert your personal API key in the code aboce._

11. _Run the command ```$ npm run build```_

12. _Run the command ```$ npm run start``` to launch and view the project in your browser._

## For Windows Users
- For this environment to work properly, be sure to make the following change:

1. _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs
* None

## License
[MIT](https://opensource.org/license/MIT)

## Contact Info ##
* Email: Cesar Lopez at [Lopez.cesar.aug@gmail.com](mailto:lopez.cesar.aug@gmail.com)
* Github: [https://github.com/wowgr8](https://github.com/wowgr8)