//  {
//     "draw_date": "2016-10-19T00:00:00.000",
//     "multiplier": "2",
//     "winning_numbers": "10 16 38 43 63 23"
//  }
export default async(startDate) => {
    let powerballDrawings = await fetch('https://data.ny.gov/resource/8vkr-v8vh.json');
    let json = await powerballDrawings.json();
    let drawings = [];
    for (let i = 0; i < json.length; i++){
        let raw = json[i];
        let drawing = {
            winningNumbers: raw.winning_numbers.split(' ').map(n => parseInt(n)),
            drawDate: Date.parse(raw.draw_date),
            multiplier: parseInt(raw.multiplier)
        }
        if (drawing.drawDate > startDate) {
            drawings.push(drawing);
        } else {
            break;
        }
    }
    return drawings;
}