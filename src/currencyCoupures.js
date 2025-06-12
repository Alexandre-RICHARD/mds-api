export const currenciesCoupures = {
  "€": {
      coupures: [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01],
      getType: (value) => value >= 5 ? "billet" : "pièce"
  },
  "$": {
      coupures: [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01],
      getType: (value) => value > 1 ? "dollar" : "cent"
  },
}
