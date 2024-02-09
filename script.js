const text = document.getElementById('text');
const speedInput = document.getElementById('speed');
const originalText = 'We love Programming!';
let currentIndex = 0;

// Set initial text content
text.innerHTML = originalText;

function typeNextCharacter() {
  if (currentIndex < originalText.length) {
    const currentCharacter = originalText.charAt(currentIndex);
    text.innerHTML = originalText.substring(0, currentIndex) + currentCharacter;
    currentIndex++;
    setTimeout(typeNextCharacter, 500 / parseInt(speedInput.value));
  }
}

speedInput.addEventListener('input', () => {
  // Reset the index when the speed changes
  currentIndex = 0;
  // Start typing again with the new speed
  typeNextCharacter();
});

// Start typing the text with the initial speed
typeNextCharacter();