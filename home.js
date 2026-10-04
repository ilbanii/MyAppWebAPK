document.getElementById("logoutBtn").onclick = function () {

    localStorage.removeItem("loggedIn");

    window.location.replace("login.html");

};
