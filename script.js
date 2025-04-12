function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if (user === "imanuel" && pass === "123") {
        window.location.href = "index.html";
        return false;
    } else {
        document.getElementById('message').innerText = "Username atau password salah!";
        return false;
    }
}
