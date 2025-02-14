const eyecon = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

const togglePassword = () => {
    // Toggle the type attribute using
    // getAttribute() method
    let type;
    if (passwordInput.getAttribute('type') === 'password') {
        type = 'text';
    } else {
        type = 'password';
    }
    // const type = passwordInput
    //     .getAttribute('type') === 'password' ?
    //     'text' : 'password';
    passwordInput.setAttribute('type', type);
    // Toggle the eye and bi-eye icon
    eyecon.classList.toggle('bi-eye');
}

eyecon.addEventListener('click', togglePassword);