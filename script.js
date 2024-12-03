let messages = {}; // Object to store messages with their codes

document.getElementById("sendButton").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput").value;
    if (messageInput.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Generate a unique 5-digit code
    let code;
    do {
        code = Math.floor(10000 + Math.random() * 90000).toString(); // Generate a 5-digit code
    } while (messages[code]); // Ensure the code is unique

    messages[code] = messageInput; // Store the message with the code
    document.getElementById("codeDisplay").innerText = `Your code is: ${code}`;
    document.getElementById("messageInput").value = ""; // Clear the input
});

document.getElementById("retrieveButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value;
    const message = messages[codeInput]; // Retrieve message using the code

    if (message) {
        // Display the retrieved message
        alert(`Your message is: ${message}`);
    } else {
        // Handle the case where the code is not found
        alert("No message found for this code.");
    }
});