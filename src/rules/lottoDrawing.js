import lottoNumber from './lottoNumber';
import powerball from './powerball';

export default class lottoDrawing {
    // drawing =
    //  {
    //     "draw_date": "2016-10-19T00:00:00.000",
    //     "multiplier": "2",
    //     "winning_numbers": "10 16 38 43 63 23"
    //  }
    //  playerNums = [12, 14, 20, 21, 34, 10]
    constructor(drawing, playerNums) {
        drawing.winning_numbers = drawing.winning_numbers.split(' ').map(n => parseInt(n)).map(n => new lottoNumber(n));
        this.drawDate = Date.parse(drawing.draw_date);
        this.multiplier = parseInt(drawing.multiplier);
        this.winningNumbers = drawing.winning_numbers.slice(0,5);
        this.powerball = drawing.winning_numbers[5];

        let game = powerball(playerNums.slice(0,5), playerNums[5], this.winningNumbers, this.powerball);
        this.matches = game.matches;
        this.winnings = game.winnings;
    }
}