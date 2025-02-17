const displayCompromise = (isCompromised) => {
    const infoElement = document.getElementById("compromised-info");
    console.log('infoElement', infoElement);
    if (isCompromised) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const [isCompromised, aiAnswer] = await eel.check_password(formProps.password)();
    displayCompromise(isCompromised);
    // Call a function to display ai analysis
    // Optional disable if checkmarks aren't checked
    console.log(formProps);
    console.log(isCompromised);
};

const form = document.getElementById("password-form");
form.addEventListener("submit", onSubmit);