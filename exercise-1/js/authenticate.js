// JavaScript authentication file
$(function() {

  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAM7UTSAxji2QnT-epmbK8aNGbAXAI_osg",
        authDomain: "slick-62f7e.firebaseapp.com",
        databaseURL: "https://slick-62f7e.firebaseio.com",
        storageBucket: "slick-62f7e.appspot.com",
        messagingSenderId: "1055455660051"
    };
    firebase.initializeApp(config);

    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#email').val();
        var password = $('#password').val();
        var displayName = $('display-name').val();

        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
            user.updateProfile({
                displayName: displayName,
                photoURL: 'photo'
            }).then(function() {

            })
        })
                // Set display name

    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('email').val();
        var password = $('password').val();

        // Authenticate using email and password, then redirect
        firebase.auth().signInWithEmailAndPassword().then(){
            
        }

    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect



    };

    // Assign event lister to form submission



    // Assign click event to logout button



    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
