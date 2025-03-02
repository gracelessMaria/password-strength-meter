const aiAnalysisPlaceholder = "The password wawawaqQhahahaafdfd1 has several vulnerabilities that make it relatively easy to crack, despite its length. Here's a concise breakdown: 1. **Repetition of Characters**: The letter 'w' is repeated multiple times, which allows attackers to brute-force the password by testing all combinations with only the non-'w' characters altered. 2. **Use of Special Characters and Symbols**: The presence of punctuation (!), letters (q, Q, h, f), and numbers does not add significant complexity. This simplicity makes it easier for attackers to guess. 3. **Account Type and Domain**: As a regular email or web account, this password lacks the strength expected from such platforms, especially since the domain fd1 is short and lacks features intended for complex passwords. 4. **Predictable Case Usage**: Uppercase letters ('Q', 'F') are used more frequently than lowercase ones, increasing predictability and making brute-force attacks faster. 5. **Lack of Modern Security Features**: The password does not meet the minimum length or complexity standards required for secure passwords (typically requiring 10-20 characters or more symbols). **Conclusion**: While the password is longer than average, its structure makes it easily hackable without advanced techniques. It's suitable for weak security setups and should be updated to a more secure method when necessary."

const displaySimilarity = (isPasswordLikeUsername) => {
    const infoElement = document.getElementById("similarity-info");
    if (isPasswordLikeUsername) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

const displayCompromise = (isCompromised) => {
    const infoElement = document.getElementById("compromised-info");
    if (isCompromised) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

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