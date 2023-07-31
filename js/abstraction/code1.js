// 抽象化
const processPayment = (creditCardType, cost) => {
  if (!checkCardType(creditCardType)) return -1.0;
  const TAX_RATE = 10;
  const totalPayment = cost * (1 + TAX_RATE / 100) + askForTip(cost);
  if (totalPayment >= 300) return -1.0;
  return totalPayment;
};

const checkCardType = (creditCardType) => ['Visa', 'MasterCard'].includes(creditCardType);

const askForTip = (cost) => {
  const TIP_RATE = (
      cost % 3 === 0
      ? 0.03
      : cost % 5 === 0
      ? 0.05
      : cost % 7 === 0
      ? 0.07
      : 0.1
  );
  return cost * TIP_RATE;
};