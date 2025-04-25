const SECRET_CODES = ["code1", "code2", "code3", "code4"];

// Load the remembered code on page load
window.onload = function () {
   const rememberedCode = localStorage.getItem("rememberedCode");
   if (rememberedCode) {
      document.getElementById("secretCode").value = rememberedCode;
      document.getElementById("remember-me").checked = true;
   }

   // Ensure popup starts hidden (in case of improper styles)
   const popup = document.getElementById("popup");
   popup.classList.add("hidden");
   popup.style.display = "none";
};

// Check the code and handle login
function checkCode(event) {
   event.preventDefault(); // Prevent form submission

   const enteredCode = document.getElementById("secretCode").value.trim();
   const rememberMe = document.getElementById("remember-me").checked;

   if (SECRET_CODES.includes(enteredCode)) {
      // Save the code if "Remember Me" is checked
      if (rememberMe) {
         localStorage.setItem("rememberedCode", enteredCode);
         localStorage.setItem("userName", enteredCode);  // Save the user's name (or code)
      } else {
         localStorage.removeItem("rememberedCode");
         localStorage.removeItem("userName");  // Remove the user's name
      }
      
      // Redirect to the homepage after successful login
      window.location.href = "/Movie Hut/index.html";  // Adjust the path as needed
   } else {
      const popup = document.getElementById("popup");
      popup.classList.remove("hidden");
      popup.style.display = "flex";
   }
}

// Close the popup
function closePopup() {
   const popup = document.getElementById("popup");
   popup.classList.add("hidden");
   popup.style.display = "none";
}
