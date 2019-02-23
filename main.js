let move = 1;
let play = true;

$("table tr td").click(function(){
  if( $(this).text()=="" && play) {
    if ( (move%2)==1) {
      $(this).append("X");
      $(this).css("color", "#61892f");
    }
    else {
      $(this).append("O");
      $(this).css("color", "#e85a4f");
    }
    move++;
    if (winner()!= -1 && winner()!=""){
      if (winner()=="X") {
        $("body").append('<div class="win"><span>win</span>X</div>');
        $("body").append('<button onclick="location.reload()">Restart</button>');
        $(".win").css("background-color", "#61892f");
        $("button").css("color", "#61892f");
      }
      else {
        $("body").append('<div class="win"><span>win</span>O</div>');
        $("body").append('<button onclick="location.reload()">Restart</button>');
        $(".win").css("background-color", "#e85a4f");
        $("button").css("color", "#e85a4f");
      }

      play = false;
    }
  }
});
function winner(){
  game1 = $('table tr:nth-child(1) td:nth-child(1)').text();
  game2 = $('table tr:nth-child(1) td:nth-child(2)').text();
  game3 = $('table tr:nth-child(1) td:nth-child(3)').text();
  game4 = $('table tr:nth-child(2) td:nth-child(1)').text();
  game5 = $('table tr:nth-child(2) td:nth-child(2)').text();
  game6 = $('table tr:nth-child(2) td:nth-child(3)').text();
  game7 = $('table tr:nth-child(3) td:nth-child(1)').text();
  game8 = $('table tr:nth-child(3) td:nth-child(2)').text();
  game9 = $('table tr:nth-child(3) td:nth-child(3)').text();

  if ((game1 == game2) && (game2 == game3)) {
    return game3;
  }
  else if ((game4 == game5) && (game5 == game6)) {
    return game6;
  }
  else if ((game7 == game8) && (game8 == game9)) {
    return game9;
  }
  else if ((game1 == game4) && (game4 == game7)) {
    return game7;
  }
  else if ((game2 == game5) && (game5 == game8)) {
    return game8;
  }
  else if ((game3 == game6) && (game6 == game9)) {
    return game9;
  }
  else if ((game1 == game5) && (game5 == game9)) {
    return game9;
  }
  else if ((game3 == game5) && (game5 == game7)) {
    return game7;
  }
  return -1;
}
