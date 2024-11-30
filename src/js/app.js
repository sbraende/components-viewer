// SELECT HTML ELEMENTS
const sidebarButtons = document.querySelectorAll(".sidebar__button");
const componentButton = document.querySelector(".component__button");
const componentSelect = document.querySelector(".component__select");

// RENDER ON PAGE OPEN
document.addEventListener("DOMContentLoaded", () => renderComponents());

// RENDER SELECTED COMPONENTS
const renderComponents = () => {
  // ComponentsSections that are active should render on page.
  sidebarButtons.forEach((button, index) => {
    // Get reference to componentSection based on sidebarButton clicked.
    const componentSection = document.querySelector(
      ".component__" + button.value
    );

    // If sidebarButton is NOT active, hide the content of the componentSection.
    if (!button.classList.contains("sidebar__button--active")) {
      componentSection.textContent = "";
    }
  });
};

sidebarButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log("button clicked");
    // Toggle active class on button.
    button.classList.toggle("sidebar__button--active");
    renderComponents();
    // TODO: I'm deleting all the contents inside the section sidebar.
    // Probably need to make a quaryAll for "components" in the begninning, storing init information.
    // Then we can filter based on that.
    // Could we use filter in general? Maybe less distrucive than removing information...
  });
});
