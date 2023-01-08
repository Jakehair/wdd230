let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());

document.querySelector("#last-updated").textContent = formattedDate;
