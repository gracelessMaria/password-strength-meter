const strengthColors = ["#ff0000", "#ff0000", "#ffa700", "#fff400", "#a3ff00", "#2cba00"];

const passwordTestCheck = (password) => {
    const score = [false, false, false, false, false];
    
    const minLength = password.length >= 12;
    score[0] = minLength;

    const upperCaseRegex = /\p{Lu}/u;
    score[1] = !!password.match(upperCaseRegex);

    const lowerCaseRegex = /\p{Ll}/u;
    score[2] = !!password.match(lowerCaseRegex);

    const digitRegex = /[0-9]/;
    score[3] = !!password.match(digitRegex);

    const specialRegex = /[^\p{L}0-9]/u;
    score[4] = !!password.match(specialRegex);

    return score;
};

const toggleRequirementCheckmarks = (score) => {
    const requirementListElements = Array.from(document.getElementsByClassName("requirement"));
    requirementListElements.forEach((element, index) => {
        if (score[index]) {
            element.classList.add("requirement-checked");
        } else {
            element.classList.remove("requirement-checked");
        }
    });
};

const setPasswordStrengthElementStyling = (score) => {
    const passwordStrength = score.filter(Boolean).length;
    const passwordStrengthElement = document.getElementById("password-strength");
    passwordStrengthElement.style.width = `${20 * passwordStrength}%`;
    passwordStrengthElement.style.backgroundColor = strengthColors[passwordStrength];
}

const handlePasswordChange = (event) => {
    const score = passwordTestCheck(event.target.value);
    toggleRequirementCheckmarks(score);
    setPasswordStrengthElementStyling(score);
};

const passwordField = document.getElementById("password");
passwordField.addEventListener("input", handlePasswordChange);


/**
 * TODO
 * This script will handle displaying the loader
 * So we need to getElementById("loader")
 * And before we await eel display the loader
 * And after await hide the loader
 */