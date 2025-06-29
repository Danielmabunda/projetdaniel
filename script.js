
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select');
  const allSections = document.querySelectorAll('.genre-section');

  select.addEventListener('change', () => {
    const selectedGenre = select.value;

    // Cacher toutes les sections
    allSections.forEach(section => {
      section.style.display = 'none';
    });

    // Si un genre est sélectionné (différent de "Genres"), on affiche sa section
    if (selectedGenre !== 'Genres') {
      const targetSection = document.querySelector(`.genre-section[data-genre="${selectedGenre}"]`);
      if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
