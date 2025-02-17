const eyecon = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

const toggleShowPassword = () => {
    // Toggle the input type attribute using getAttribute() and setAttribute method
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