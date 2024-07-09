const sourceDiv = document.getElementById("content");
const Div = document.getElementById("overview");

const targetDiv2 = document.getElementById("invoices");
const targetDiv3 = document.getElementById("payment");
const targetDiv4 = document.getElementById("customers");
const targetDiv5 = document.getElementById("account-settings");
const targetDiv6 = document.getElementById("support");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

const targetDivs = [Div,targetDiv2,targetDiv3,targetDiv4,targetDiv5,targetDiv6]; // Array of target divs

button1.addEventListener("click", function() {
sourceDiv.innerHTML = Div.innerHTML; // Clear any potential content updates
 sourceDiv.style.display = "block"; // Ensure source div is visible
});
button2.addEventListener("click", function() {
    updateSourceDiv(targetDiv2);
});
button3.addEventListener("click", function() {
    updateSourceDiv(targetDiv3);
  });
button4.addEventListener("click", function() {
    updateSourceDiv(targetDiv4);
  });
button5.addEventListener("click", function() {
    updateSourceDiv(targetDiv5);
  });
button6.addEventListener("click", function() {
    updateSourceDiv(targetDiv6);
  });

  function updateSourceDiv(clickedTargetDiv) {
    targetDivs.forEach(targetDiv => targetDiv.style.display = "none"); // Hide all targets
    sourceDiv.innerHTML = clickedTargetDiv.innerHTML;
    clickedTargetDiv.style.display = "block"; // Show clicked target
  }
