document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');

  // ===== Search: show dropdown on focus =====
  searchInput.addEventListener('focus', () => {
    searchDropdown.classList.add('active');
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => searchDropdown.classList.remove('active'), 200);
  });

  // ===== Search filtering =====
  const allLinks = searchDropdown.querySelectorAll('a');
  const allCols = searchDropdown.querySelectorAll('.dropdown-col');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (!query) {
      allLinks.forEach(a => a.style.display = '');
      allCols.forEach(col => col.style.display = '');
      return;
    }

    allCols.forEach(col => {
      const links = col.querySelectorAll('a');
      let hasVisible = false;

      links.forEach(a => {
        const match = a.textContent.toLowerCase().includes(query);
        a.style.display = match ? '' : 'none';
        if (match) hasVisible = true;
      });

      col.style.display = hasVisible ? '' : 'none';
    });
  });
});
