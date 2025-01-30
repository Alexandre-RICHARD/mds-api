enum CurrenciesEnum {
  "€" = "€",
  "$" = "$",
}

type Coupure = Record<
  CurrenciesEnum,
  {
    coupures: number[];
    getType: (value: number) => string;
  }
>;

const currenciesCoupures: Coupure = {
  "€": {
    coupures: [
      500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
    ],
    getType: (value: number) => (value >= 5 ? "billet" : "pièce"),
  },
  "$": {
    coupures: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01],
    getType: (value: number) => (value > 1 ? "dollar" : "cent"),
  },
};

type Args = {
  currency?: CurrenciesEnum;
  price: number;
};

export const dabGetMoneyDistribution = ({
  currency = CurrenciesEnum["€"],
  price,
}: Args) => {
  if (price < 0 || typeof price !== "number")
    return "Args should be number higher than 0 and money devise";

  // if (![Object.values(CurrenciesEnum)].includes(currency)) {
  //   const errorString = `Currency should be "${Object.values(CurrenciesEnum).flat()}"`;
  //   return errorString;
  // }
  const deviseMoneyValue = currenciesCoupures["€"];

  let remainingMoney = price;
  const moneyDistrub = deviseMoneyValue.coupures.reduce((prev, moneyValue) => {
    const moneyValueQuantity = Math.floor(remainingMoney / moneyValue);

    if (moneyValueQuantity > 0) {
      const moneyTypeString = `${deviseMoneyValue.getType(moneyValue)}${moneyValueQuantity > 1 ? "s" : ""}`;
      const moneyValueQuantityString = moneyValueQuantity;
      const moneyValueCurrency = moneyValue;

      remainingMoney -= moneyValueQuantity * moneyValue;
      const newString = `${
        prev
      } ${moneyValueQuantityString} ${moneyTypeString} de ${moneyValueCurrency} ${currency},`;
      return newString;
    }
    return prev;
  }, `Une somme de ${price} ${currency} peut être divisée en :`);
  return moneyDistrub;
};
