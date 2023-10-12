function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;

  const apiKey = "4151e336490613f0e391f0a8"; // ma clé d'API gratuite sur exchangerate

  const url = `https://v6.exchangerate-api.com/v6/4151e336490613f0e391f0a8/latest/${fromCurrency}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const exchangeRate = data.conversion_rates[toCurrency];
      console.log(exchangeRate);
      const result = amount * exchangeRate;
      console.log(result);

      document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
       
    }) 
    .catch(error => {
      console.log(error);
      document.getElementById("result").innerText = "Une erreur s'est produite lors de la conversion.";
    });
}
