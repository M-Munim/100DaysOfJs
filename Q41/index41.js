// Write a fun to convert an amout from one currency to another using static exchange rates.

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  PKR: 272,
};

const convertCurrency = (amount, fC, tC) => {
  let amountInUSD = 0;

  if (fC != "USD") {
    amountInUSD = amount / rates[fC];
  } else {
    amountInUSD = amount;
  }


  let convertedAmount = 0;

  if (tC != "USD") {
    convertedAmount = amountInUSD * rates[tC];
  } else {
    convertedAmount = amountInUSD;
  }
  return convertedAmount;
}

console.log(convertCurrency(100, "GBP", "EUR"));