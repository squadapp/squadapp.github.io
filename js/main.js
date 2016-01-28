$('#toggle-login').click(function(){
  $('#login').toggle();
});

var loaded = false;

//Parse.initialize(UNIQUEID, JSKEY);

function init() {

    var UNIQUEID, JSKEY;

    UNIQUEID =  ID;
    JSKEY = js;
    Parse.initialize(UNIQUEID, JSKEY);
    loaded = true;
    alert('INITIALIZING...');
}

function signup() {
    var newusername = document.getElementById('newusername').value;
    var newpassword = document.getElementById('newpassword').value;

    alert(newusername + " " + newpassword);

    Parse.user.signup(newusername, newpassword {
        success: function(user) {
            console.log(user);
            return true;
        },
        error: function(user, error) {
            console.log(user + " " + error);
            return false;
        }
    })
}


function getClubs(user) {

    var temp = user.get("officerClubs");
    
    if(temp == null) {
        console.log("you're not an officer LOOOOL");
    } else {
        for(var i = 0; i < temp.length; i++) {
            console.log("club " + i + " " + temp[i].name);
        }
    }
}

function errorMsg(user, error) {
    alert(user + error);
}
function login() {

if(!loaded) {
    //alert("first time");
    init();
}
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
//console.log("username: " + username + " password: " + password);
Parse.User.logIn(username, password, {
        success: function(user) {
            getClubs(user);
            return true;
        },
        error: function(user, error) {
            // errorMsg();
            console.log(error);
            return false;
        }
    });


//alert(password);
}



