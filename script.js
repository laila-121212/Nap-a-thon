//const backBtn = document.querySelector(".back-btn");
//backBtn.addEventListener("click", () => {
  //  toggleVisibility();
//});

document.querySelector("form").addEventListener("submit", function(event) {
event.preventDefault();

// Collect input values
const startTime = document.querySelector("[name='stime']").value;
const endTime = document.querySelector("[name='etime']").value;
const sleepTime = parseInt(document.querySelector("[name='slptime']").value, 10);

// Convert time strings to Date objects
const startDate = new Date("1970-01-01T" + startTime + "Z");
const endDate = new Date("1970-01-01T" + endTime + "Z");

// Calculate total hours of hackathon
const duration = (endDate - startDate) / (1000 * 60 * 60); // Duration in hours

// Calculate sleep schedule
let sleepStartTime = new Date(startDate);
sleepStartTime.setHours(sleepStartTime.getHours() - sleepTime); // Subtract sleep time from start

// Output results
const sleepTimeFormatted = sleepStartTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
alert(`You should start sleeping at: ${sleepTimeFormatted}`);

// Redirect to schedule.html with sleep start time in the query parameters
  const url = `index5.html?sleepTime=${encodeURIComponent(sleepTimeFormatted)}`;
  window.location.href = url;
});