import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASdbOxrgon53SOfDgGvz-6zxk9d4vFid0",
  authDomain: "your-auth-domain",
  projectId: "miniprojectse-6ecfd",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function signInWithPhoneNumber(phoneNumber) {
    const appVerifier = new RecaptchaVerifier("sign-in-button", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
      },
    });

    // Request OTP
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.error("Error requesting OTP:", error);
      });
  }

function verifyOtpCode(code) {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("User signed in successfully:", user);
        // You can redirect the user to another page or perform other actions after successful login
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.error("Error verifying OTP:", error);
      });
}

document.getElementById("sign-in-button").addEventListener("click", () => {
    const phoneNumber = document.getElementById("phone-number").value;
    signInWithPhoneNumber(phoneNumber);
});
  
document.getElementById("verify-otp-button").addEventListener("click", () => {
    const otpCode = document.getElementById("otp-code").value;
    verifyOtpCode(otpCode);
});
