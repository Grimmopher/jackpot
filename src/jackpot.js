const json = [{"draw_date":"2017-11-04T00:00:00.000","multiplier":"3","winning_numbers":"12 14 26 48 51 13"}
,{"draw_date":"2017-11-01T00:00:00.000","multiplier":"2","winning_numbers":"03 06 19 26 44 01"}
,{"draw_date":"2017-10-28T00:00:00.000","multiplier":"2","winning_numbers":"27 35 38 57 66 10"}
,{"draw_date":"2017-10-25T00:00:00.000","multiplier":"3","winning_numbers":"18 22 29 54 57 08"}
,{"draw_date":"2017-10-21T00:00:00.000","multiplier":"2","winning_numbers":"14 41 42 45 69 04"}
,{"draw_date":"2017-10-18T00:00:00.000","multiplier":"2","winning_numbers":"30 49 54 66 69 08"}
,{"draw_date":"2017-10-14T00:00:00.000","multiplier":"3","winning_numbers":"32 37 56 66 69 11"}
,{"draw_date":"2017-10-11T00:00:00.000","multiplier":"2","winning_numbers":"01 03 13 19 69 23"}
,{"draw_date":"2017-10-07T00:00:00.000","multiplier":"2","winning_numbers":"10 49 61 63 65 07"}
,{"draw_date":"2017-10-04T00:00:00.000","multiplier":"2","winning_numbers":"22 23 62 63 66 24"}
,{"draw_date":"2017-09-30T00:00:00.000","multiplier":"3","winning_numbers":"08 12 25 41 64 15"}
,{"draw_date":"2017-09-27T00:00:00.000","multiplier":"3","winning_numbers":"08 10 21 23 25 22"}
,{"draw_date":"2017-09-23T00:00:00.000","multiplier":"2","winning_numbers":"24 45 55 56 57 19"}
,{"draw_date":"2017-09-20T00:00:00.000","multiplier":"3","winning_numbers":"39 48 53 67 68 26"}
,{"draw_date":"2017-09-16T00:00:00.000","multiplier":"2","winning_numbers":"17 18 24 25 31 24"}
,{"draw_date":"2017-09-13T00:00:00.000","multiplier":"3","winning_numbers":"17 24 35 57 63 19"}
,{"draw_date":"2017-09-09T00:00:00.000","multiplier":"2","winning_numbers":"06 20 29 57 59 22"}
,{"draw_date":"2017-09-06T00:00:00.000","multiplier":"3","winning_numbers":"08 14 32 58 67 17"}
,{"draw_date":"2017-09-02T00:00:00.000","multiplier":"2","winning_numbers":"06 21 41 52 62 26"}
,{"draw_date":"2017-08-30T00:00:00.000","multiplier":"2","winning_numbers":"19 28 43 67 69 07"}
,{"draw_date":"2017-08-26T00:00:00.000","multiplier":"2","winning_numbers":"07 15 32 38 66 15"}
,{"draw_date":"2017-08-23T00:00:00.000","multiplier":"4","winning_numbers":"06 07 16 23 26 04"}
,{"draw_date":"2017-08-19T00:00:00.000","multiplier":"4","winning_numbers":"17 19 39 43 68 13"}
,{"draw_date":"2017-08-16T00:00:00.000","multiplier":"3","winning_numbers":"09 15 43 60 64 04"}
,{"draw_date":"2017-08-12T00:00:00.000","multiplier":"2","winning_numbers":"20 24 26 35 49 19"}
,{"draw_date":"2017-08-09T00:00:00.000","multiplier":"4","winning_numbers":"12 30 36 47 62 09"}
,{"draw_date":"2017-08-05T00:00:00.000","multiplier":"2","winning_numbers":"11 21 28 33 45 11"}
,{"draw_date":"2017-08-02T00:00:00.000","multiplier":"3","winning_numbers":"01 16 54 63 69 18"}
,{"draw_date":"2017-07-29T00:00:00.000","multiplier":"2","winning_numbers":"01 28 40 45 48 12"}
,{"draw_date":"2017-07-26T00:00:00.000","multiplier":"2","winning_numbers":"07 19 21 42 69 12"}]

let drawings = []

for (i = 0; i < json.length; i++){
    let d = json[i];
    if (d.draw_date == '2017-10-18T00:00:00.000'){
        break;
    }
    d.winning_numbers = d.winning_numbers.split(' ').map(n => parseInt(n));
    drawings.push({
        drawDate: Date.parse(d.draw_date),
        multiplier: parseInt(d.multiplier),
        winningNumbers: d.winning_numbers.slice(0,5),
        powerBall: d.winning_numbers[5]
    });
}

console.log(drawings);