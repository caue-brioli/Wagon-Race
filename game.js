$(document).ready(function() {
  $(document).on('keyup', function(e) {
    var key = e.keyCode;
    // $('td:last-child.active').parent().append('<td>Lalala</td>');
    // $('td:last-child.active').text('You win!');
    if(key == 81){
      var current1 = $("#player1_race>td.active");
      $(current1).next().addClass('active');
      $(current1).removeClass('active');
    } else if (key == 80){
      var current2 = $("#player2_race>td.active");
      $(current2).next().addClass('active');
      $(current2).removeClass('active');
    }
    if ($('td:last-child.active').length == 1) {
      var players = {
        81: "vermelho",
        80: "amarelo"
      };
      alert("You win number " + players[key] + "!");
      window.location.reload(true);
    }
  });
});
