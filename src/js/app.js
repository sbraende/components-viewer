// SELECT ELEMENTS
const sidebarButtonContainer = document.querySelector(
  ".sidebar__buttonContainer"
);
const componentsSelection = document.querySelectorAll(".components > div");
const sidebarAddativeCheckbox = document.querySelector(
  ".sidebar__addativeCheckbox"
);

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

    // Insert name of component without suffix to textcontent of sidebarButton.
    sidebarButton.textContent = component.classList.value.split("-")[0];

    // Add class to sidebarButton for styling.
    sidebarButton.classList.add("sidebar__button");

    // Eventlistener for sidebarButton.
    sidebarButton.addEventListener("click", () => {
      // Render behaviour based on additiveCheckbox
      if (sidebarAddativeCheckbox.checked) {
        // Toggle active class on button.
        sidebarButton.classList.toggle("sidebar__button--active");
      } else {
        // Remove remove active class on all buttons
        const sidebarButtons = document.querySelectorAll(".sidebar__button");
        sidebarButtons.forEach((sidebarButton) => {
          if (sidebarButton.classList.contains("sidebar__button--active")) {
            sidebarButton.classList.remove("sidebar__button--active");
          }
        });
        // Clear all components from components section
        componentsSelection.forEach((component) => {
          component.style.display = "none";
        });
        // Add active class on current sideButton
        sidebarButton.classList.add("sidebar__button--active");
      }

      // Only display componentInfo if sidebarButton is active.
      sidebarButton.classList.contains("sidebar__button--active")
        ? (component.style.display = "block")
        : (component.style.display = "none");
    });
  });
};
