//opdracht 1
function arrayOutput(){
    const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
    var random = (Math.floor(Math.random() * Math.floor(lapRounds.length)));
    console.log(lapRounds[random]);
}
arrayOutput();

//opdracht 2
function recordLog(){
    const allMyRecords = [
        ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
        ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
    ];
    for (var x = 0; x < allMyRecords.length; x++){
        for (var y = 0; y < allMyRecords[x].length; y++){
            console.log(allMyRecords[x][y]);
        }
    }
}
recordLog();

//opdracht 3
/*t.b.c.*/