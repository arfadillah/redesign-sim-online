const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const dayTabs = document.querySelectorAll(".day-tab");
const dayPanels = document.querySelectorAll(".mobile-day-panel");

if (dayTabs.length && dayPanels.length) {
  dayTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.day;

      dayTabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      dayPanels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === target);
      });
    });
  });
}

const reenrollmentForm = document.querySelector("#reenrollment-form");
const saveNotice = document.querySelector("#save-notice");

if (reenrollmentForm && saveNotice) {
  reenrollmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveNotice.hidden = false;
  });
}

const announcementList = document.querySelector(".announcement-list");

if (announcementList) {
  const announcementItems = Array.from(
    announcementList.querySelectorAll(".announcement-item[data-date]"),
  );

  announcementItems
    .sort((firstItem, secondItem) => {
      const firstDate = new Date(firstItem.dataset.date ?? "");
      const secondDate = new Date(secondItem.dataset.date ?? "");

      return secondDate - firstDate;
    })
    .forEach((item) => announcementList.appendChild(item));
}
