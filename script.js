document.getElementById('recommendation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!message) {
    alert("Please enter a message.");
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';

  const quote = document.createElement('p');
  quote.textContent = `“ ${message} ”`;

  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = name ? `- ${name}` : '- Anonymous';

  card.appendChild(quote);
  card.appendChild(author);

  document.getElementById('recommendations-container').appendChild(card);

  

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
  popup.style.display = 'flex';
});

// Close popup
closePopup.addEventListener('click', function () {
  popup.style.display = 'none';
});