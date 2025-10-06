// script.js

console.log("Dark Mode Profile Card Loaded ✅");

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log(`Opening: ${button.textContent.trim()}`);
  });
});
