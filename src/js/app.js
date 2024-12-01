// SELECT ELEMENTS
const sidebarButtonContainer = document.querySelector(
  ".sidebar__buttonContainer"
);
const componentsSelection = document.querySelectorAll(".components > div");

// RENDER WEBSITE ELEMENTS
document.addEventListener("DOMContentLoaded", () => renderElements());

// RENDER ELEMENTS FUNCTION
const renderElements = () => {
  componentsSelection.forEach((component, index) => {
    // CREATE SIDEBAR ELEMENT
    const sidebarListItem = document.createElement("li");
    const sidebarButton = document.createElement("button");

    // Append sidebar elements to parents.
    sidebarButtonContainer.append(sidebarListItem);
    sidebarListItem.append(sidebarButton);

    // Insert content sidebarButton.
    sidebarButton.textContent = component.classList.value;

    // Add class to sidebarButton.
    sidebarButton.classList.add("sidebar__button");

    // Eventlistener for sidebarButton.
    sidebarButton.addEventListener("click", () => {
      // Toggle active eventListener on button.
      sidebarButton.classList.toggle("sidebar__button--active");

      // Only display componentInfo if sidebarButton is active.
      sidebarButton.classList.contains("sidebar__button--active")
        ? (component.style.display = "block")
        : (component.style.display = "none");
    });
  });
};
