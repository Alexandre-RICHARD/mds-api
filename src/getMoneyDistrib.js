import { currenciesCoupures } from "./currencyCoupures";

export const getMoneyDistrib = ({ price, devise }) => {
  if (price < 0 || typeof price !== "number")
    throw new Error("Args should be number higher than 0 and money devise");
  if (!["€", "$"].includes(devise)) {
    const errorString = `Devise should be "${Object.keys(currenciesCoupures).flat()}"`
    throw new Error(errorString);
  }

  const deviseMoneyValue = currenciesCoupures[devise]

  const greenASCI = '\u001b[32m'
  const redASCI = '\u001b[31m'
  const blackASCI = '\u001b[0m'

  let remainingMoney = price;
  const moneyDistrub = deviseMoneyValue.coupures.reduce((prev, moneyValue) => {
    const moneyValueQuantity = Math.floor(remainingMoney / moneyValue);
    if (moneyValueQuantity > 0) {
      const moneyTypeString = `${deviseMoneyValue.getType(moneyValueQuantity)}${moneyValueQuantity > 1 ? 's' : ''}`;
      const moneyValueQuantityString = `${greenASCI}${moneyValueQuantity}${blackASCI}`
      const moneyValueCurrency = `${redASCI}${moneyValue}${blackASCI}`

      remainingMoney -= moneyValueQuantity * moneyValue;
      return prev += `  - ${moneyValueQuantityString} ${moneyTypeString} de ${moneyValueCurrency} ${devise}\n`;
    } else return prev;
  }, `Une somme de ${price} ${devise} peut être divisée en :\n`);
  console.log(moneyDistrub);
}
