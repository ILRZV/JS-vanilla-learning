// let arrayNumber = [6, 2, 4, 7, 2, 9, 3, 10];
// //      let minNumber = a[0];
// let maxProfit = 0;
// let buyDay = 0;
// let sellDay = 0;
// let currentBuyDay = 0;
// for (let i = 1; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] - arrayNumber[currentBuyDay] > maxProfit) {
//         sellDay = i;
//         buyDay = currentBuyDay;
//         maxProfit = arrayNumber[i] - arrayNumber[currentBuyDay];
//     }
//     if (arrayNumber[i] < arrayNumber[currentBuyDay]) {
//         currentBuyDay = i;
//     }
// }
// console.log(buyDay, sellDay, maxProfit);