
import {
  getAuth,
  updatePassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();
const newPasswordInput = document.getElementById("newPassword");
const changePasswordBtn = document.getElementById("changePasswordBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    changePasswordBtn.addEventListener("click", () => {
      const newPassword = newPasswordInput.value;

      if (newPassword.length < 6) {
        alert("Password should be at least 6 characters");
        return;
      }

      updatePassword(user, newPassword)
        .then(() => {
          alert("Password updated successfully!");
        })
        .catch((error) => {
          alert("Error updating password: " + error.message);
        });
    });
  } else {
    // User not logged in, redirect or show login message
    alert("You need to log in first to change your password.");
  }
});
