const sendBtn = document.getElementById('send-button'); 
const messageInput = document.getElementById('typing-input');
const messages = document.getElementById('messages'); 


function sendMessage() {
    if(messageInput.value != '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('outgoing-message');
        newMessage.innerText = messageInput.value;  
        messages.appendChild(newMessage);
    }
}
messageInput.addEventListener('keydown', e => {
    if(e.key == 'Enter') {
        sendMessage();
    }
})
sendBtn.addEventListener('click', sendMessage)