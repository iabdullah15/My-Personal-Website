document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("dark-mode-toggle");

  // Check if user has a preference for dark mode in local storage
  const isDarkModePreferred = localStorage.getItem("dark-mode") === "enabled";

  if (isDarkModePreferred) {
    document.body.classList.add("dark-mode");
  }


  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Toggle dark mode preference in local storage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });

});
