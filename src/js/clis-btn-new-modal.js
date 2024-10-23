document.querySelectorAll('.prise-btn').forEach(button => {
  button.addEventListener('click', function (event) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const x = event.clientX - buttonRect.left - size / 2;
    const y = event.clientY - buttonRect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});
