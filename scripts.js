// Function to handle the dropdown toggle
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Function to show information based on dropdown action
function showInfo(info) {
  var displayElement = document.getElementById("infoDisplay");
  displayElement.textContent = "Information about " + info;
  displayElement.style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
