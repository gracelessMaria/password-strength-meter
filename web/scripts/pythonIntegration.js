// Placeholder for AI analysis (testing purposes).
const aiAnalysisPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum nisl, vel porttitor massa elementum nec. Ut eget luctus eros. Pellentesque faucibus, eros in laoreet imperdiet, leo felis dignissim ipsum, eu suscipit neque turpis eu mauris. In rhoncus tincidunt arcu, id pretium nisi cursus non. Donec et viverra justo. Nullam quis nulla eu justo imperdiet faucibus. In hac habitasse platea dictumst. Morbi eleifend justo est, et condimentum sapien faucibus vitae. Quisque urna libero, tempus ac ex eget, mollis posuere erat. Proin facilisis, nisl nec accumsan commodo, dolor lectus lacinia quam, eget aliquet neque neque accumsan nisl. Proin a placerat libero."

/**
 * Display warning if password contains three character sequence found in username. 
 * 
 * @param {boolean} isPasswordLikeUsername 
 */
const displaySimilarity = (isPasswordLikeUsername) => {
    const infoElement = document.getElementById("similarity-info");
    if (isPasswordLikeUsername) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

/**
 * Display warning if password is found in list of compromised passwords.
 * 
 * @param {boolean} isCompromised 
 */
const displayCompromise = (isCompromised) => {
    const infoElement = document.getElementById("compromised-info");
    if (isCompromised) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

/**
 * Display AI analysis if passed. Otherwise resets and hides element.
 * 
 * @param {string|undefined} aiAnalysis 
 */
const displayAiAnalysis = (aiAnalysis) => {
    const aiContainer = document.getElementById("ai-container");
    const analysisContainer = document.getElementById("ai-analysis");
    if (aiAnalysis) {
        aiContainer.parentElement.classList.add("show")
        analysisContainer.innerHTML = aiAnalysis;
    } else {
        aiContainer.parentElement.classList.remove("show");
        analysisContainer.innerHTML = "";
    }

};

/**
 * Handles form submission and calls Python code for processing, then toggles UI elements.
 * @param {Event} event 
 */
const onSubmit = async (event) => {
    event.preventDefault();

    // Get formdata
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const { password, username, showAi = "off" } = formProps;
    console.log(formProps);

    // Display loading dialog
    const dialog = document.getElementById("loading-dialog");
    dialog.showModal();
    
    // Execute python code and await
    console.log("thinking...")
    const [isCompromised, isPasswordLikeUsername, aiAnalysis] = await eel.check_password(password, username, showAi)();
    console.log("done thinking!");
    // Close dialog when python is done
    dialog.close();
    
    // Handle python data
    displayCompromise(isCompromised);
    displayAiAnalysis(aiAnalysis);
    displaySimilarity(isPasswordLikeUsername);
};

const form = document.getElementById("password-form");
form.addEventListener("submit", onSubmit);