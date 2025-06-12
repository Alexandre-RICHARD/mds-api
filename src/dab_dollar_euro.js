import { getMoneyDistrib } from "./getMoneyDistrib";
import { currenciesCoupures } from "./currencyCoupures";
import { makeQuery } from "./cliQuery";

(async () => {
  const price = await makeQuery("De quelle quantité d'argent souhaites-tu obtenir la distribution ? ");

  const currenciesChoice = Object.keys(currenciesCoupures);
  console.log('Choisissez une devise :');
  currenciesChoice.forEach((currency, index) => {
    console.log(`${index + 1}: ${currency}`)
  });
  const deviseChoice = await makeQuery(`Entrez le numéro correspondant (${currenciesChoice.map((currency, index) => ` ${index + 1}`).flat()} ) : `);
  const devise = currenciesChoice[deviseChoice - 1] ?? "€";
  const priceNumber = parseFloat(price, 10);
  getMoneyDistrib({ price: priceNumber, devise: devise });
})()



