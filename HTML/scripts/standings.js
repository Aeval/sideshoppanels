function getStandings() {
    const teams = {
        Liquid: '2163',
        EG: '39',
        VP: '1883502',
        VGjStorm: '5228654',
        Fnatic: '350190',
        Winstrike: '5229127',
        LGD: '15',
        OG: '2586976',
        Mineski: '543897',
        IG: '5',
        Optic: '5026801',
        TNC: '2108395',
        VG: '726228',
        Secret: '1838315'
    };

    $('#groupA').empty();
    $('#groupB').empty();

    $.each(teams, function(key, value) {
        $.get(`https://api.opendota.com/api/teams/${value}/matches`)
            .done(function(data){
                let gamesWon = 0;
                let gamesLost = 0;
                
                for (let i = 0; i < 30; i++) {
                    let game = data[i];
                    
                    if(game.start_time > 1534291200 && game.leagueid == 9870){
                        if((game.radiant == true && game.radiant_win == true)||(game.radiant == false && game.radiant_win == false)){
                            gamesWon += 1;
                        }else{
                            gamesLost += 1;
                        }
                    }
                }
                
                if(key < 'Oo'){
                    $('#groupA').append("<tr><td><img src='../Img2/teams/"+value+".png' height='40' width='40'></img></td><td>"+ key +"</td><td>" + gamesWon + "</td><td>" + gamesLost + "</td></tr>");
                }else{
                    $('#groupB').append("<tr><td><img src='../Img2/teams/"+value+".png' height='40' width='40'></img></td><td>"+ key +"</td><td>" + gamesWon + "</td><td>" + gamesLost + "</td></tr>");
                }
                
            });
    });
};

$(document).ready(function() {
    getStandings();
    var getData = setInterval(getStandings, 900000);
});
