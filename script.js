function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Please enter both username and password.';
        return false;
    }

    return true;
}