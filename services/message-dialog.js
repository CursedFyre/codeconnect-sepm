// Message Dialog Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const messageDialog = document.getElementById('message-dialog');
    const closeDialogBtn = document.getElementById('close-dialog');
    const dialogUsername = document.getElementById('dialog-username');
    const dialogAvatar = document.getElementById('dialog-avatar');
    
    // Close dialog when close button is clicked
    if (closeDialogBtn) {
      closeDialogBtn.addEventListener('click', function() {
        hideMessageDialog();
      });
    }
    
    // Close dialog when clicking outside of dialog content
    if (messageDialog) {
      messageDialog.addEventListener('click', function(event) {
        if (event.target === messageDialog) {
          hideMessageDialog();
        }
      });
    }
    
    // Close dialog with Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && messageDialog && !messageDialog.classList.contains('hidden')) {
        hideMessageDialog();
      }
    });
    
    // Function to show message dialog
    window.showMessageDialog = function(username, avatarSrc, messages = []) {
        if (!messageDialog) return;
      
        // Set user info
        dialogUsername.textContent = username;
        dialogAvatar.src = avatarSrc;
      
        // Clear previous messages
        const messageList = messageDialog.querySelector('.message-list');
        messageList.innerHTML = '';
      
        // Render new messages
        messages.forEach(msg => {
          const msgDiv = document.createElement('div');
          msgDiv.className = 'message ' + (msg.from === 'You' ? 'sent' : 'received');
          msgDiv.innerHTML = `
            <div class="message-content">${msg.text}</div>
            <div class="message-time">${msg.time}</div>
          `;
          messageList.appendChild(msgDiv);
        });
      
        // Show dialog
        messageDialog.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      
        // Focus input
        const messageInput = messageDialog.querySelector('.message-input');
        if (messageInput) messageInput.focus();
      };
      
    // Function to hide message dialog
    window.hideMessageDialog = function() {
      if (messageDialog) {
        messageDialog.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scrolling
      }
    };
    
    // Add send message functionality
    const messageForm = messageDialog?.querySelector('.message-input-container');
    const messageInput = messageDialog?.querySelector('.message-input');
    const sendButton = messageDialog?.querySelector('.btn-send');
    
    if (messageForm && messageInput && sendButton) {
      // Send message on button click
      sendButton.addEventListener('click', function() {
        sendMessage();
      });
      
      // Send message on Enter key
      messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
        }
      });
    }
    
    // Function to send message
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message) {
        // Create new message element
        const messageList = messageDialog.querySelector('.message-list');
        const newMessage = document.createElement('div');
        newMessage.className = 'message sent';
        
        // Get current time
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
        
        // Set message content
        newMessage.innerHTML = `
          <div class="message-content">${message}</div>
          <div class="message-time">${formattedTime}</div>
        `;
        
        // Add message to list
        messageList.appendChild(newMessage);
        
        // Clear input and scroll to bottom
        messageInput.value = '';
        messageList.scrollTop = messageList.scrollHeight;
      }
    }
  });