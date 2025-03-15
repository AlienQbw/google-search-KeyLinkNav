let currentIndex = -1;
let searchLinks = [];

function updateLinks() {
  searchLinks = Array.from(document.querySelectorAll('a')).filter((link) => {
    const parent = link.closest('div');
    return parent && parent.querySelector('h3') && link.href && !link.href.includes('google.');
  });
}

function styleLink(index) {
  // Remove styling from previous link
  if (currentIndex >= 0 && currentIndex < searchLinks.length) {
    const prevLink = searchLinks[currentIndex];
    prevLink.style.textDecoration = '';
    prevLink.style.border = '';
  }

  // Apply styling to new link
  if (index >= 0 && index < searchLinks.length) {
    currentIndex = index;
    const link = searchLinks[currentIndex];
    link.style.textDecoration = 'underline';
    link.style.border = '2px solid blue';
    link.scrollIntoView({ behavior: 'smooth', block: 'center' });
    link.focus();
  }
}

document.addEventListener('keydown', (e) => {
  if (!/google\..+\/search/.test(window.location.href)) return;

  updateLinks();

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (searchLinks.length > 0) {
      let newIndex = currentIndex + 1;
      if (newIndex >= searchLinks.length) newIndex = 0;
      styleLink(newIndex);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (searchLinks.length > 0) {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) newIndex = searchLinks.length - 1;
      styleLink(newIndex);
    }
  }
});

updateLinks();
