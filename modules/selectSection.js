export default (section, sections, navLinks) => {
  document.querySelector(`#nav-${section.id} p`).style.setProperty('color', 'blue');
  navLinks.forEach((link) => {
    if (link.id !== `nav-${section.id}`) {
      link.querySelector('p').style.setProperty('color', 'unset');
    }
  });

  sections.forEach((sec) => {
    if (sec.id !== section.id) {
      sec.style.setProperty('display', 'none');
    }

    section.style.setProperty('display', 'flex');
  });
};