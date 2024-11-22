document.getElementById("generateFactBtn").addEventListener("click", function() {
    const button = this;
    const statusMessage = document.getElementById("statusMessage");
    const catFact = document.getElementById("catFact");

    // Disable the button and show "Generating..." message
    button.disabled = true;
    statusMessage.textContent = "Generating...";

    // Create an XMLHttpRequest object
    const req = new XMLHttpRequest();

    // Open the request to the cat facts API
    req.open("GET", "https://catfact.ninja/facts?limit=15");

    // Set the response type as JSON
    req.responseType = "json";

    // Send the request
    req.send();

    // Handle the response when the request is successful
    req.onload = () => {
        if (req.status === 200) {
            // Get the random cat fact from the response array
            const facts = req.response.data;  // "data" contains the array of facts
            const randomFact = facts[Math.floor(Math.random() * facts.length)].fact;

            // Display the fact and reset the UI
            catFact.textContent = randomFact;
            statusMessage.textContent = "";  // Clear the "Generating..." message
        } else {
            // If there was an error fetching the fact
            statusMessage.textContent = "Failed to fetch a cat fact. Please try again.";
        }

        // Enable the button again
        button.disabled = false;
    };

    // Handle any errors with the request
    req.onerror = () => {
        statusMessage.textContent = "An error occurred. Please try again.";
        button.disabled = false;  // Enable the button in case of an error
    };
});
