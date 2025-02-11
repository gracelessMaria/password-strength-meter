const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const [score, isCompromised, aiAnswer] = await eel.check_password(formProps.password)();
    console.log('score', score)
}

const form = document.getElementById("password-check"); 
form.addEventListener("submit", onSubmit)

/**
 * TODO
 * This script will handle displaying the loader
 * So we need to getElementById("loader")
 * And before we await eel display the loader
 * And after await hide the loader
 */