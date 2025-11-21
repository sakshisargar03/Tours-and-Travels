document.querySelectorAll('.holiday-type').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const type = link.dataset.type;
    const packages = document.querySelectorAll('.package-card');
    packages.forEach(pkg => {
      if(pkg.dataset.type === type || type === '') pkg.style.display = 'block';
      else pkg.style.display = 'none';
    });
  });
});
