let currentIndex = -1;
let searchLinks = [];

function updateLinks() {
  searchLinks = Array.from(document.querySelectorAll('a')).filter((link) => {
    const parent = link.closest('div');
    let validate =
      parent && (parent.querySelector('h3') || link.href.includes('youtube.')) && !link.closest('div[data-initq');
    link.href &&
      !link.closest('[data-visible="false"]') &&
      link.getAttribute('data-visible') !== 'false' &&
      !link.closest('[style*="display: none"]');

    const style = window.getComputedStyle(link);
    if (style.display === 'none' || style.visibility === 'hidden') {
      return false;
    }
    if (style.opacity === '0') {
      return false;
    }

    if (link.offsetWidth === 0 && link.offsetHeight === 0) {
      return false;
    }
    if (link.offsetParent === null) {
      return false; // Element is likely outside the viewport or off-screen.
    }

    return validate;
  });
}

function styleLink(index) {
  // Remove styling from previous link
  if (currentIndex >= 0 && currentIndex < searchLinks.length) {
    const prevLink = searchLinks[currentIndex];
    prevLink.style.textDecoration = '';
    prevLink.style.backgroundColor = '';
  }

  // Apply styling to new link
  if (index >= 0 && index < searchLinks.length) {
    currentIndex = index;
    const link = searchLinks[currentIndex];
    link.style.textDecoration = 'underline';
    link.style.backgroundColor = '#282828';
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
