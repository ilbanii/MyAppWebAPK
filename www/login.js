function login() {

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    let savedPhone = localStorage.getItem("phone");
    let savedPassword = localStorage.getItem("password");

    if (phone === "" || password === "") {
        message.style.color = "red";
        message.innerHTML = "لطفاً همه فیلدها را پر کنید";
        return;
    }

    if (phone === savedPhone && password === savedPassword) {

        message.style.color = "green";
        message.innerHTML = "ورود موفق";
        localStorage.setItem("loggedIn", "true");
        setTimeout(function(){
            window.location.href = "home.html";
        }, 500);

    } else {

        message.style.color = "red";
        message.innerHTML = "شماره یا رمز عبور اشتباه است";

    }
}
