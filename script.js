
const buy_currency = "USD";
const sell_currency = "EUR";
const rfq_amount = 1000000;


function test(){
    console.log("test");
    //alert("Hello World");
    return "Hello World x2";
}

function init(){
    console.log("init");
    test()
// Get basic pricing fields
    bid_Price = document.getElementById("bid_Price");
    ask_Price = document.getElementById("ask_Price");
    bid_Margin = document.getElementById("bid_Margin");
    ask_Margin = document.getElementById("ask_Margin");
    bid_Allin = document.getElementById("bid_Allin");
    ask_Allin = document.getElementById("ask_Allin");
    bid_Profit = document.getElementById("bid_Profit");
    ask_Profit = document.getElementById("ask_Profit");
    
    thrombus();

// Get split pricing fields
    bid_Price_1 = document.getElementById("bid_Price_1");
    ask_Price_1 = document.getElementById("ask_Price_1");
    bid_Margin_yours = document.getElementById("bid_Margin_yours");
    ask_Margin_yours = document.getElementById("ask_Margin_yours");
    bid_Margin_theirs = document.getElementById("bid_Margin_theirs");
    ask_Margin_theirs = document.getElementById("ask_Margin_theirs");
    bid_Allin_1 = document.getElementById("bid_Allin_1");
    ask_Allin_1 = document.getElementById("ask_Allin_1");
    bid_Profit_yours = document.getElementById("bid_Profit_yours");
    ask_Profit_yours = document.getElementById("ask_Profit_yours");
    bid_Profit_theirs = document.getElementById("bid_Profit_theirs");
    ask_Profit_theirs = document.getElementById("ask_Profit_theirs");

    rhombus();

}

function rhombus(){
    bid_Price_1.innerHTML = "0.00000000";
    ask_Price_1.innerHTML = "0.00000000";
    bid_Margin_yours.innerHTML = "0.00000000";
    ask_Margin_yours.innerHTML = "0.00000000";
    bid_Margin_theirs.innerHTML = "0.00000000";
    ask_Margin_theirs.innerHTML = "0.00000000";
    bid_Allin_1.innerHTML = "0.00000000";
    ask_Allin_1.innerHTML = "0.00000000";
    bid_Profit_yours.innerHTML = "0.00000000";
    ask_Profit_yours.innerHTML = "0.00000000";
    bid_Profit_theirs.innerHTML = "0.00000000";
    ask_Profit_theirs.innerHTML = "0.00000000";
}

function thrombus(){
    bid_Price.innerHTML = "0.00000000";
    ask_Price.innerHTML = "0.00000000";
    bid_Margin.innerHTML = "0.00000000";
    ask_Margin.innerHTML = "0.00000000";
    bid_Allin.innerHTML = "0.00000000";
    ask_Allin.innerHTML = "0.00000000";
    bid_Profit.innerHTML = "0.00000000";
    ask_Profit.innerHTML = "0.00000000";
    calculate()
}





// fetchung the exchange Rate and Update to DOM
const calculate = () => {
   // const currency_one = "EUR";
    //const currency_two = "USD";

    // window.fetch(`https://v6.exchangerate-api.com/v6/d4e344d882d1d9bb4adc0c70/latest/${buy_currency}`).then(res => res.json()).then(data => {
    //     console.log(data);

    //     const rate = data.conversion_rates[sell_currency];

    //     ask_Price.innerHTML = `1 ${buy_currency} = ${rate} ${sell_currency}`;
    //     bid_Price.innerHTML = (rfq_amount * rate).toFixed(2)


    // })

    var requestURL = 'https://api.exchangerate.host/latest'; 
    var request = new XMLHttpRequest(); 
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      var response = request.response;
      console.log(response);

        bid_Price.innerHTML = response.rates.USD;
        bid_Price_1.innerHTML = response.rates.GBP;

    }


}

