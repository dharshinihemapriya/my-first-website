// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Join Mission button
function showMessage() {
    alert(
        "🌊 Thank you for joining the Ocean Mission! 💙\n\nTogether, let's protect our oceans and marine life."
    );
}


// Learn More buttons
const learnButtons = document.querySelectorAll(".card button");

learnButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert(
            "🌊 Discover more about marine life and help protect our beautiful oceans!"
        );
    });
});