const aiAnalysisPlaceholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum sit amet est feugiat pretium. Cras placerat tellus ac nunc molestie, ut ornare tortor viverra. Donec tempor felis sed orci maximus vehicula. Donec pretium eu risus vitae tincidunt. Ut nec cursus libero, rutrum placerat mi. Donec ac fermentum ex."

const displayCompromise = (isCompromised) => {
    const infoElement = document.getElementById("compromised-info");
    if (isCompromised) {
        infoElement.style.display = "block";
    } else {
        infoElement.style.display = "none";
    }
};

const displayAiAnalysis = (aiAnalysis) => {
    const analysisContainer = document.getElementById("ai-analysis");
    analysisContainer.innerHTML = aiAnalysis;

};

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const [isCompromised, aiAnalysis = aiAnalysisPlaceholder] = await eel.check_password(formProps.password)();
    displayCompromise(isCompromised);
    displayAiAnalysis(aiAnalysis);
    // Optional disable if checkmarks aren't checked
    console.log(formProps);
};

const form = document.getElementById("password-form");
form.addEventListener("submit", onSubmit);