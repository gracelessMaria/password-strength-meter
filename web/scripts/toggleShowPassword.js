const eyecon = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
/**
 * Toggle the input type attribute between `password` and `text`.
 */
const toggleShowPassword = () => {
    let type;
    if (passwordInput.getAttribute('type') === 'password') {
        type = 'text';
    } else {
        type = 'password';
    }

    passwordInput.setAttribute('type', type);
    eyecon.classList.toggle('bi-eye');
};

eyecon.addEventListener('click', toggleShowPassword);