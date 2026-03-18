function registerUser(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
}

function loginUser(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "profile.html";
    } else {
        alert("Invalid credentials");
    }
}

function logout() {
    window.location.href = "login.html";
}

// Load profile data
if (window.location.pathname.includes("profile.html")) {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        document.getElementById("userName").innerText = user.name;
        document.getElementById("userEmail").innerText = user.email;
    }
}