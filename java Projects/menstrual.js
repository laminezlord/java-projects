const prompt = require("prompt-sync")({ sigint: true });

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function predictCycle(startDate, cycleLength) {
  const start = new Date(startDate);

  const nextPeriod = addDays(start, cycleLength);
  const ovulation = addDays(nextPeriod, -14);

  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = ovulation;

  console.log("Next Period:", nextPeriod.toDateString());
  console.log("Ovulation:", ovulation.toDateString());
  console.log("Fertile Window:", fertileStart.toDateString(), "to", fertileEnd.toDateString());
}

while (true) {
  const startDate = prompt("Enter last period date (YYYY-MM-DD): ");
  const cycleLength = parseInt(prompt("Enter cycle length: "));

  predictCycle(startDate, cycleLength);

  const again = prompt("Again? yes/no: ").toLowerCase();
  if (again !== "yes") break;
}
