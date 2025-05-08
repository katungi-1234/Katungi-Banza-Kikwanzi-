function toggleMenu() {
    alert("Menu clicked. This can be expanded to show navigation links.");
  }
  document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("servicesSection").scrollIntoView({ behavior: "smooth" });
  });
  
  document.getElementById("contactBtn").addEventListener("click", function () {
    alert("You clicked Get In Touch! This could open a contact form or link to contact page.");

  });
  
 
  document.getElementById("menuBtn").addEventListener("click", function () {
    alert("Menu clicked! Add nav toggle or dropdown here.");
  });