document.addEventListener('DOMContentLoaded', function () {
  // Check if a username exists
  let username = localStorage.getItem('username');

  // If not, ask for one and store it
  if (!username) {
    username = prompt("Welcome to RiseAndTell! What's your name?");
    if (username) {
      localStorage.setItem('username', username);
    }
  }

  // Show personalized welcome message
  if (username) {
    const welcome = document.createElement('p');
    welcome.textContent = `Hello, ${username}! Glad you're here.`;
    welcome.style.fontWeight = 'bold';
    welcome.style.color = '#ff9933';
    welcome.style.marginTop = '10px';

    document.body.insertBefore(welcome, document.body.children[1]);
  }
});
