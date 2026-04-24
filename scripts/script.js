// Project image lists for index thumbnails
const projectImages = {
  'Finance Manager': ['images/FM_img1.png','images/FM_img2.png','images/FM_img3.png','images/FM_img4.png','images/FM_img5.png','images/FM_img6.png'],
  'Breadsheet': ['images/B2.png','images/B3.png'],
  'Home NAS Control Panel': ['images/HomeNASControlPanel.png'],
  'Date Checker': ['images/DateChecker.png'],
  'Inventory Database': ['images/InventoryDatabase.png'],
  'To Do List Application': ['images/To-Do-Application-UI.png'],
  'Spending Pots Manager': ['images/SpendingPotsImg1.png','images/SpendingPotsImg2.png','images/SpendingPotsImg3.png','images/SpendingPotsImg4.png'],
  'JWT Inspector': ['images/JWTInspector.png'],
  'Order Data Service': ['images/OrderDataService_img_1.png'],
  'Printer App': ['images/PrinterApp.png'],
  'Category Budget Tracker': ['images/CategoryBudgetTracker.png'],
  'Weather Forecast Web API': ['images/WeatherForecast.png'],
  'CafeList Console App': ['images/CafeMenu_img1.png','images/CafeMenu_img2.png'],
  'Heating Controller': ['images/CLIHeatingController_img_1.png','images/CLIHeatingController_img_2.png','images/CLIHeatingController_img_3.png'],
  'Coffee Shop Task Manager': ['images/TaskManager_img_1.png','images/TaskManager_img_2.png','images/TaskManager_img_3.png'],
  'Personal Photography Site' : ['images/StonePhotography.png']
};

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function insertProjectThumbnails() {
  const largeTitles = new Set(['JWT Inspector','Weather Forecast Web API','Inventory Database','CafeList Console App','Breadsheet','Coffee Shop Task Manager','Order Data Service','Heating Controller','Category Budget Tracker', 'Personal Photography Site']);
  Object.keys(projectImages).forEach(title => {
    const src = pickRandom(projectImages[title]);
    document.querySelectorAll('h2').forEach(h2 => {
      if (h2.textContent && h2.textContent.trim() === title) {
        // avoid inserting duplicate thumbnails
        const next = h2.nextElementSibling;
        if (next && next.classList && next.classList.contains('indexProjectThumbnail')) return;
        const classes = 'indexProjectThumbnail' + (largeTitles.has(title) ? ' largeThumbnail' : '');
        h2.insertAdjacentHTML('afterend', `<img src="${src}" class="${classes}" alt="${title} thumbnail">`);
      }
    });
  });
}

function closePopup() {
  const closePopUp = document.querySelector(".popup-wrapper");
  closePopUp.classList.add("hidden");
}

/* ========= Dynamic language-based project filtering ========= */

/**
 * Show or hide a whole project "block"
 * i.e. header + buttons + language row until the next header/external section.
 */
function setProjectVisibility(headerEl, visible) {
  if (!headerEl) return;

  headerEl.classList.toggle('hidden', !visible);

  let sibling = headerEl.nextElementSibling;
  while (
    sibling &&
    !sibling.classList.contains('projectHeaders') &&
    !sibling.classList.contains('externalProjects')
  ) {
    sibling.classList.toggle('hidden', !visible);
    sibling = sibling.nextElementSibling;
  }
}

function applyLanguageFilter() {
  const checkboxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
  if (!checkboxes.length) return;

  const activeLangs = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value); // e.g. "html", "sql"

  const headers = document.querySelectorAll('.projectHeaders');

  headers.forEach(header => {
    const baseId = header.id.replace('header-', ''); // e.g. "home-nas"
    const langDiv = document.getElementById('langs-' + baseId);

    if (!langDiv) {
      // If there's no language row, just show it.
      setProjectVisibility(header, true);
      return;
    }

    // Get language codes for this project from class names: lang-html -> "html"
    const projectLangs = Array.from(langDiv.querySelectorAll('.lang-circle'))
      .flatMap(badge =>
        Array.from(badge.classList)
          .filter(cls => cls.startsWith('lang-') && cls !== 'lang-circle')
          .map(cls => cls.replace('lang-', ''))
      );

    if (activeLangs.length === 0) {
      // No filters selected: show all projects
      setProjectVisibility(header, true);
      return;
    }

    const matches = projectLangs.some(lang => activeLangs.includes(lang));
    setProjectVisibility(header, matches);
  });

  // Only show "External Sources" if at least one project is visible
  const external = document.querySelector('.externalProjects');
  if (external) {
    const anyVisibleProject = Array.from(document.querySelectorAll('.projectHeaders'))
      .some(h => !h.classList.contains('hidden'));
    external.classList.toggle('hidden', !anyVisibleProject);
  }
}

// Hook up filter behaviour once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
  checkboxes.forEach(cb => cb.addEventListener('change', applyLanguageFilter));

  const resetBtn = document.getElementById('langFilterReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      // Clear all selections -> logic will treat this as "show everything"
      const boxes = document.querySelectorAll('.lang-filter-chip input[type="checkbox"]');
      boxes.forEach(b => (b.checked = false));
      applyLanguageFilter();
    });
  }

  // Initial pass: apply filter based on initial checkbox state
  applyLanguageFilter();

  // Insert randomized thumbnails under project titles
  try {
    insertProjectThumbnails();
  } catch (e) {
    console.error('Thumbnail insertion failed', e);
  }
});
