document.addEventListener('DOMContentLoaded', function() {
    const chatBotButton = document.querySelector('.chat-bot-button');
    const chatBotWindow = document.querySelector('.chat-bot-window');
    const chatBotClose = document.querySelector('.chat-bot-close');
    const chatMessages = document.querySelector('.chat-bot-messages');
    const chatInput = document.querySelector('.chat-bot-input input');
    const chatSendButton = document.querySelector('.chat-bot-input button');

    // Toggle chat window
    chatBotButton.addEventListener('click', () => {
        chatBotWindow.classList.toggle('active');
    });

    chatBotClose.addEventListener('click', () => {
        chatBotWindow.classList.remove('active');
    });

    // Send message function
    function sendMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = message;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle send button click
    async function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            sendMessage(message);
            chatInput.value = '';
            
            try {
                // Send message to backend
                const response = await fetch('/chatbot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: message })
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                sendMessage(data.message, false);
            } catch (error) {
                console.error('Error:', error);
                sendMessage('Sorry, I encountered an error processing your message.', false);
            }
        }
    }

    chatSendButton.addEventListener('click', handleSendMessage);

    // Handle enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Initial bot message
    setTimeout(() => {
        sendMessage('Hello! How can I help you today?', false);
    }, 500);
}); 