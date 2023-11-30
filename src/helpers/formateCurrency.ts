const formatCurrency = (
  amount: string | number = 0,
  currency: 'USD' | 'GBP' | 'NGN' = 'USD',
  fractionDigits = 0
): string => {
  const formattedAmount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: fractionDigits,
  });

  return formattedAmount;
};

export default formatCurrency;
