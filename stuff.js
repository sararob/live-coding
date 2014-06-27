//STEP 1
var currentUser = null;
var ref = new Firebase("https://jsla.firebaseio.com/");
var messageRef = ref.child('messages');
var usersRef = ref.child('users');

//STEP 2
	$('#login').on("click", function () {
		auth.login('twitter');
	});

//STEP 3
var auth = new FirebaseSimpleLogin(ref, function (error, user) {
	if (error) {
		console.log(error);
	}
	else if (user) {
		// console.log(user);
		usersRef.child(user.uid).set({pic: user.thirdPartyUserData.profile_image_url, username: user.username});
		currentUser = user;
	} else {
	}
});

//STEP 4
	var user = snapshot.val();
	$("<div id='user'><img src=" + user.pic + "/><span id='username'>@" + user.username + "</span></div>").appendTo($('#here'));

//STEP 5
	$('#tweet-submit').on('click', function () {
		if (currentUser != null) {
			var message = $('#msgInput').val();

			//Send the message to Firebase

			$('#msgInput').val('');
		} else {
			alert('You must login with Twitter to post!');
		}
	});


messageRef.push({message: message, username: currentUser.username, user: currentUser.uid});

//STEP 6
	var message = snapshot.val();
	$("<div class='msg-text'>@" + message.username + "<br/>" + message.message + "</div>").appendTo($('#stream'));

