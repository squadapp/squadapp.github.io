$('#toggle-login').click(function(){
  $('#login').toggle();
});



var UNIQUEID, JSKEY;


UNIQUEID =  ID;
JSKEY = js;





function login() {
alert(document.getElementById('username').value);



Parse.initialize(UNIQUEID, JSKEY);



var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

alert(username);
alert(password);

Parse.User.logIn(username, password, {
        success: function(user) {
            console.log(user);
            return true;
        },
        error: function(user, error) {
            console.log(user + error);
            return false;
        }
    });
}