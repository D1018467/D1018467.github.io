const showPasswordCheckbox = document.getElementById("show-password");
const passwordInput = document.getElementsByName("psw")[0];

showPasswordCheckbox.addEventListener("change", function() {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

const forgotPasswordLink = document.getElementById("forgot-password-link");

forgotPasswordLink.addEventListener("click", function() {
    window.alert("密碼忘記？ 記憶力是有多低");
});

const LoginwithFacebooklink = document.getElementById("Log-in-with-Facebook-link");

LoginwithFacebooklink.addEventListener("click", function() {
    window.alert("臉書在維修，乖乖用Instagram");
});
