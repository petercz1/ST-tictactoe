console.log('loaded');

var counter_rounds = 0;
var current_player = true;
var player_name_1 = 'bill',
  player_name_2 = 'bob',
  current_name;
var token = 'X',
  current_token = 'X';
var chkstring = '';
var winner = '';

$(document).ready(setup);

function setup() {
  //console.log('Inside setup');
  $('div[id^=s]').click(square_clicked);
  $('#reset').click(reset);
}

function square_clicked() {
  // grab the value of the square
  var square = $(this).attr('id');
  // check values - 3 in a row?
  check_values(this);
  swap_player();
  // if no winner then
  increase_counter_rounds();
}

function reset() {
  // does reset stuff
  //console.log('resetting stuff?');
  counter_rounds = 0;
  current_player = 'A';
  // reset anything else?
}

function check_values(square) {
  //console.log('checking values, doing square stuff');
  if (current_player === true) {
    $(square).addClass('xclicked');
  } else {
    $(square).addClass('oclicked');
  }
  $(square).text(current_token);
  $(square).off('click');
  check_tokens();
  if(winner !=''){
      console.log('winner is:' + winner);
  }
}

function swap_player() {
  //console.log('swaps player AND token');
  current_player = !current_player;
  current_name = current_player ? player_name_1 : player_name_2;
  current_token = current_player ? 'X' : 'O';
  //console.log(current_name + ' ' + current_token);
}

function increase_counter_rounds() {
  counter_rounds++;
  // anything else here? dunno....
}

function check_tokens() {
  //console.log('Inside check_tokens');
  compare($('.row1'));
  compare($('.row2'));
  compare($('.row3'));
  compare($('.col1'));
  compare($('.col2'));
  compare($('.col3'));
  compare($('.diag1'));
  compare($('.diag2'));
}

function compare(chk_tags) {
  //console.log('Inside comparison');
  var result = chk_tags[0].innerHTML + chk_tags[1].innerHTML + chk_tags[2].innerHTML;
  if (result === 'XXX') {
    winner = 'X has won';
  }
  if (result === 'OOO') {
    winner =  'O has won';
  }
}