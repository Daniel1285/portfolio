function sendMessage() {
    var userInput = document.getElementById("message-input").value;
    var chatMessages = document.getElementById("chat-messages");

    // Display user message
    var userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.innerHTML = "<strong>You:</strong> " + userInput;
    chatMessages.appendChild(userMessage);

    // Simulate bot response (replace this with actual bot logic)
    var botResponse = document.createElement("div");
    botResponse.className = "message";
    botResponse.innerHTML = "<strong>Bot:</strong> " + "I received your message: " + userInput;
    chatMessages.appendChild(botResponse);

    // Clear input field
    document.getElementById("message-input").value = "";

    // Scroll to the bottom of the chat window
    chatMessages.scrollTop = chatMessages.scrollHeight;
}