const winnings = (matches, powerballMatch) => {

    switch (matches){
        case 0:
            return powerballMatch ? 4 : 0;
            break;
        case 1:
            return powerballMatch ? 4 : 0;
            break;
        case 2:
            return powerballMatch ? 7 : 0;
            break;
        case 3:
            return powerballMatch ? 100 : 7;
            break;
        case 4:
            return powerballMatch ? 50000 : 100;
            break;
        case 5:
            return powerballMatch ? 'jackpot' : 1000000;
            break;
    }
}

// nums: [10, 16, 38, 43, 63]
// pb:  23
// checkNums: array of lottoNumber objects
// checkPb: lottoNumber object
//    ex. lottoNumber object:
//        {number: 10, match: false}
const check = (nums, pb, checkNums, checkPb) => {
    checkNums.forEach( (n) => {
        n.match = nums.includes(n.number);
    });

    checkPb.match = pb === checkPb.number;

    let matches = checkNums.reduce( (t, n) => { return t = n.match ? t + 1 : t } , 0);

    return {
        matches: matches,
        winnings: winnings(matches, checkPb.match)
    }
}

export default check;