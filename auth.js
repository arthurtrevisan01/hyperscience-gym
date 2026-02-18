function login(username) {
    localStorage.setItem("hyperUser", username);
    localStorage.setItem("hyperStreak", 0);
}

function getUser() {
    return localStorage.getItem("hyperUser");
}

function logout() {
    localStorage.removeItem("hyperUser");
}

function requireAuth() {
    if (!getUser()) {
        const name = prompt("Digite seu nome para entrar:");
        if (name) login(name);
        location.reload();
    }
}
