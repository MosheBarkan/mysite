var choice;
var gotChoice = false;
var savedInDatabase = false;
$('#leftSection').click(function () {
  if (gotChoice === false) {
	  console.log('You Picked Blue');
	  alert('You Picked Blue');
	  choice = 'Blue';
	  gotChoice = true;
   } else {
	  alert('You already chose ' + choice);
  }
})
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
		console.log("You already chose " + choice);
	}
});

function saveChoice (key, data) {
	window.localStorage.setItem(key, data);
	console.log(key + "=" + data);
}



function load(key, varToStore) {
	var item = window.localStorage.getItem(key);
	if (item === null || item === undefined) {
		return realState(varToStore);
	}
	if (isBool(item)) {
		varToStore = strToBool(item);
	}
	else {
		varToStore = item;
	}
	return varToStore;
}	
function isBool(string) {
	if (string === "true" || string === "false") {
		return true;
	}
	return false;
}
function strToBool(to) {
	if (to === "true") {
		return true;
	}
	else {
		return false;
	}
}
function realState(variable) {
	return variable;
}
choice = load("choice", choice);
gotChoice = load("gotChoice", gotChoice);
savedInDatabase = load("savedInDatabase", savedInDatabase);

console.log(choice);
console.log(gotChoice);
console.log(savedInDatabase);
