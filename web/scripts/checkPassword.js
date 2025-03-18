//Array of colors where index corresponds to password score (amount of criteria met).
const strengthColors = ["#ff0000", "#ff0000", "#ffa700", "#fff400", "#a3ff00", "#2cba00"];

/**
 * Given a password string calculates a score based on five password criteria: 
 * minimum length of 12, presence of uppercase, lowercase, digit and special character.
 * 
 * @param {string} password 
 * @returns Array of five booleans, which represent the individual score points
 */
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

/**
 * Iterates over score array and toggles checkmarks for corresponding criteria in popover.
 * 
 * @param {boolean[]} score 
 */
const toggleRequirementCheckmarks = (score) => {
    const requirementListElements = Array.from(document.getElementsByClassName("requirement"));
    requirementListElements.forEach((element, index) => {
        if (score[index]) {
            element.classList.add("checked");
            element.classList.remove("unchecked");
        } else {
            element.classList.remove("checked");
            element.classList.add("unchecked");
        }
    });
};

/**
 * Fills the strength meter based on how many criteria are met.
 * 
 * @param {boolean[]} score 
 */
const setPasswordStrengthElementStyling = (score) => {
    const passwordStrength = score.filter(Boolean).length;
    const passwordStrengthElement = document.getElementById("password-strength");
    passwordStrengthElement.style.width = `${20 * passwordStrength}%`;
    passwordStrengthElement.style.backgroundColor = strengthColors[passwordStrength];
};

/**
 * Calculates score, toggles requirement checkmarks and sets strength meter styling.
 * 
 * @param {Event} event 
 */
const handlePasswordChange = (event) => {
    const score = passwordTestCheck(event.target.value);
    toggleRequirementCheckmarks(score);
    setPasswordStrengthElementStyling(score);
};

// Adds event listener to password field. Event listener calls handlePasswordChange when password changes.

const passwordField = document.getElementById("password");
passwordField.addEventListener("input", handlePasswordChange);