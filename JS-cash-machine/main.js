function checkCashRegister(price, cash, cid) {
    var change = {
        status: "INSUFFICIENT_FUNDS",
        changes: [],
    };
    let changeValue = cash - price;
    let variants = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];
    for (let i = variants.length - 1; i > 0; i--) {
        let changeHas = 0;
        for(let j = 0; j < i; j++){
            changeHas += variants[j][1] + 1;
        }
        console.log(variants[i][1] + ' ' + changeValue + ' ' + changeHas);
        if(changeValue > changeHas) {
            change.status = 'INSUFFICIENT_FUNDS';
            change.changes = []; 
            break;
        }
        if (changeValue > variants[i][1]) {
            change.status = 'open';
            let amount = Math.floor(changeValue / variants[i][1]);
            change.changes.push([variants[i][0], amount]);
            changeValue -= amount * variants[i][1];
        }
    }
    console.log(change);
    return change;
}

checkCashRegister(19.5, 25, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);