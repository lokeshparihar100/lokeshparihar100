// @include GraphemeSplitter minified code

// Typing effect for hero section
const typingText = [
  "Hi 👋, I'm Lokesh Parihar",
  "Full Stack Developer from India 🇮🇳",
  "Welcome to my Portfolio!"
];
let typingIndex = 0, charIndex = 0, isDeleting = false;
const typingElement = document.getElementById('typing');
if (typingElement) typingElement.textContent = '';
function type() {
  if (!typingElement) return;
  const current = typingText[typingIndex];
  const chars = [...current]; // Use spread to handle most emojis correctly
  if (isDeleting) {
    typingElement.textContent = chars.slice(0, charIndex--).join("");
    if (charIndex < 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingText.length;
      charIndex = 0;
      setTimeout(type, 600);
    } else {
      setTimeout(type, 40);
    }
  } else {
    typingElement.textContent = chars.slice(0, charIndex).join("");
    charIndex++;
    if (charIndex > chars.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else {
      setTimeout(type, 80);
    }
  }
}
type();

// Scroll progress bar
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
function setTheme(dark) {
  if (dark) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
if (localStorage.getItem('theme') === 'dark') {
  themeToggle.checked = true;
  setTheme(true);
}
themeToggle.addEventListener('change', (e) => {
  setTheme(e.target.checked);
});
