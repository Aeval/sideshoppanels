function getStandings() {
    $.get('http://www.dota2.com/international/getgroupstagestandings/?l=english')
        .done(function(data){
            var groupA = data[0];
            var groupB = data[1];
            var standingsA = groupA['team_standings'];
            var standingsB = groupB['team_standings'];

            $('#groupA').empty();
            $('#groupB').empty();
            
            standingsA.forEach(team => {
                $('#groupA').append("<tr><td>"+standingsA[team].team_id+"</td><td>"+standingsA[team].team_name+"</td><td>" + standingsA[team].match_wins + "</td><td>" + standingsA[team].match_losses + "</td></tr>");
            }); 

            standingsB.forEach(team => {
                $('#groupB').append("<tr><td>"+standingsB[team].team_id+"</td><td>"+standingsB[team].team_name+"</td><td>" + standingsB[team].match_wins + "</td><td>" + standingsB[team].match_losses + "</td></tr>");
            });
        });
}

$(document).ready(function() {
    var getData = setInterval(getStandings, 30000);
});
