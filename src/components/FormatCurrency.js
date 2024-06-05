//function to convert work according to your country selection
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",  //$
  style: "currency",
});
const FormatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
