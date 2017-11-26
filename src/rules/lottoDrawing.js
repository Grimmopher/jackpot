import lottoNumber from './lottoNumber';
import powerball from './powerball';

export default class lottoDrawing {
    // drawing =
    //  {
    //     "drawDate": javascript Date object,
    //     "multiplier": int,
    //     "winningNumbers": int[]
    //  }
    //  playerNums = [12, 14, 20, 21, 34, 10]
    constructor(drawing, playerNums) {
        drawing.winningNumbers = drawing.winningNumbers.map(n => new lottoNumber(n));
        this.drawDate = drawing.drawDate;
        this.multiplier = drawing.multiplier;
        this.winningNumbers = drawing.winningNumbers.slice(0,5);
        this.powerball = drawing.winningNumbers[5];

        let game = powerball(playerNums.slice(0,5), playerNums[5], this.winningNumbers, this.powerball);
        this.matches = game.matches;
        this.winnings = game.winnings;
    }
}