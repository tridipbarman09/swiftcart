import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCH--D0YVKyZJe7BTavwa2bJ0s1UvLt3kw",
    authDomain: "swiftcart-528491-dec5f.firebaseapp.com",
    projectId: "swiftcart-528491-dec5f",
    storageBucket: "swiftcart-528491-dec5f.appspot.com",
    messagingSenderId: "378125858334",
    appId: "1:378125858334:web:8a4923232cea2c92c6200f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.language = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            window.location.href = "index.html";

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})