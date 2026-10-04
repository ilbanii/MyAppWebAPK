function register() {

    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (phone === "" || password === "") {
        message.style.color = "red";
        message.innerHTML = "لطفاً همه فیلدها را پر کنید";
        return;
    }

    if (phone.length < 10) {
        message.style.color = "red";
        message.innerHTML = "شماره تلفن صحیح نیست";
        return;
    }

    if (password.length < 4) {
        message.style.color = "red";
        message.innerHTML = "رمز عبور باید حداقل ۴ کاراکتر باشد";
        return;
    }

    localStorage.setItem("phone", phone);
    localStorage.setItem("password", password);
    localStorage.setItem("registered", "true");
    alert("در حال رفتن به صفحه اصلی");
    window.location.href = "home.html";

    }
function goLogin() {

    window.location.href = "login.html";

}

