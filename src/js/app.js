// SELECT ELEMENTS
const sidebarButtonContainer = document.querySelector(
  ".sidebar__buttonContainer"
);
const componentsSelection = document.querySelectorAll(".components > div");
const sidebarAddativeCheckbox = document.querySelector(
  ".sidebar__addativeCheckbox"
);

// RENDER ELEMENTS FUNCTION
const renderElements = () => {
  componentsSelection.forEach((component, index) => {
    // Turn off visbility for all components.
    component.style.display = "none";

    // CREATE SIDEBAR ELEMENT
    const sidebarListItem = document.createElement("li");
    const sidebarButton = document.createElement("button");

    sidebarButtonContainer.append(sidebarListItem);
    sidebarListItem.append(sidebarButton);

    // Insert name of component without suffix to textcontent of sidebarButton.
    sidebarButton.textContent = component.classList.value.split("-")[0];
    sidebarButton.classList.add("sidebar__button");

    // EVENTS
    sidebarButton.addEventListener("click", () => {
      // Render behaviour based on additiveCheckbox.
      if (sidebarAddativeCheckbox.checked) {
        sidebarButton.classList.toggle("sidebar__button--active");
      } else {
        // Remove remove active class on all buttons.
        const sidebarButtons = document.querySelectorAll(".sidebar__button");
        sidebarButtons.forEach((sidebarButton) => {
          if (sidebarButton.classList.contains("sidebar__button--active")) {
            sidebarButton.classList.remove("sidebar__button--active");
          }
        });
        // Clear all components from components section of website.
        componentsSelection.forEach((component) => {
          component.style.display = "none";
        });
        // Add active class on current sidebarButton.
        sidebarButton.classList.add("sidebar__button--active");
      }

      // Only display componentInfo if sidebarButton is active.
      sidebarButton.classList.contains("sidebar__button--active")
        ? (component.style.display = "block")
        : (component.style.display = "none");
    });
  });
};

// RENDER WEBSITE ELEMENTS
document.addEventListener("DOMContentLoaded", () => renderElements());
