var choice;
var gotChoice = false;
var savedInDatabase = false;
var users = "/api/listUsers";
var twitchUser;
$('#leftSection').click(function () {
  if (gotChoice === false) {
    console.log('You Picked Blue');
    alert('You Picked Blue');
    choice = 'Blue';
    gotChoice = true;
  } else {
    alert('You already chose ' + choice);
  }
});
$('#rightSection').click(function () {
  if (gotChoice === false) {
    console.log('You Picked Red');
    alert('You Picked Red');
    choice = 'Red';
    gotChoice = true;
  } else {
    alert('You already chose ' + choice);
  }
});

$('#leftSection').hover(function () {
  $('#secondSection').css('background-color', 'blue');
  $('#secondSection').css('color', 'white');
}, function () {
  $('#secondSection').css('background-color', '#e1dada');
  $('#secondSection').css('color', '#333');
}
);
$('#rightSection').hover(function () {
  $('#secondSection').css('background-color', 'red');
  $('#secondSection').css('color', 'white');
}, function () {
  $('#secondSection').css('background-color', '#e1dada');
  $('#secondSection').css('color', '#333');
}
);

$(function () {
  $('#secondSection').css('transition', 'all 0.25s linear');
});

$('#register').click(function () {
  if (savedInDatabase === false) {
    saveChoice('choice', choice);
    saveChoice('gotChoice', gotChoice);
    savedInDatabase = true;
    saveChoice('savedInDatabase', savedInDatabase);
  } else {
    console.log('You already chose ' + choice);
  }
});

var twitchUserAsk
$('#getUsers').click(function () {
  if ($("#twitchText").val().length > 0) {
    twitchUserAsk = $("#twitchText").val();
  
    $.ajax({
      type: "GET",
      crossDomain: true,
      url: "https://api.twitch.tv/kraken/" + twitchUserAsk,
      dataType: "json",
      success: function (res) {
        twitchUser = res;
        console.log("saved in " + "twitchUser");
        console.log("-----");
        console.log(twitchUser);
        if ($("#twitchText").val() === "games/top") {
          for(var shit in twitchUser.top) {
            console.log(twitchUser.top[shit].game.name);
            console.log(twitchUser.top[shit].game.popularity);
          }
        }
      },
      error: function () { console.log("Error getting twitch.tv api"); }

    });
  }    
  });

function saveChoice (key, data) {
  window.localStorage.setItem(key, data);
  console.log(key + '=' + data);
}

function load (key, varToStore) {
  var item = window.localStorage.getItem(key);
  if (item === null || item === undefined) {
    return varToStore;
  }
  if (isBool(item)) {
    varToStore = strToBool(item);
  }else {
    varToStore = item;
  }
  return varToStore;
}
function isBool (string) {
  if (string === 'true' || string === 'false') {
    return true;
  }
  return false;
}
function strToBool (to) {
  if (to === 'true') {
    return true;
  }else {
    return false;
  }
}

choice = load('choice', choice);
gotChoice = load('gotChoice', gotChoice);
savedInDatabase = load('savedInDatabase', savedInDatabase);

console.log(choice);
console.log(gotChoice);
console.log(savedInDatabase);









//for(var shit in temp1.follows) {
//console.log(temp1.follows[shit].user.name); } 