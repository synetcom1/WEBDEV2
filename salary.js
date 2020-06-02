var calculateSalary = function () {
  const name = prompt("What is your name?");
  let payRate = parseInt(prompt("What is your pay-rate?"));
  let hoursWorked = parseFloat(
    prompt("Tell me how many hours you worked for two weeks?"),
  );

  const overTime = 80;
  const eiRate = 1.58 / 100;
  const cppRate = 5.25 / 100;

  let grossSalary, netSalary;
  let hourlyRate;

  switch (payRate) {
    case 1:
      hourlyRate = 14.6;
      break;
    case 2:
      hourlyRate = 15.6;
      break;
    case 3:
      hourlyRate = 16.6;
      break;
    case 4:
      hourlyRate = 17.6;
      break;
    case 5:
      hourlyRate = 18.6;
      break;
    case 6:
      hourlyRate = 19.6;
      break;
    case 7:
      hourlyRate = 20.6;
      break;
    case 8:
      hourlyRate = 21.6;
      break;
    case 9:
      hourlyRate = 22.6;
      break;
    default:
      hourlyRate = 23.6;
  }

  if (hoursWorked > overTime) {
    grossSalary =
      overTime * hourlyRate + (hoursWorked - overTime) * hourlyRate * 1.5;
  } else {
    grossSalary = hoursWorked * hourlyRate;
  }

  ei = grossSalary * eiRate;
  cpp = grossSalary * cppRate;
  netSalary = grossSalary - ei - cpp;

  document.getElementById("output").innerHTML =
    "Your Name: " +
    name +
    "<br>Pay-rate: " +
    payRate +
    "<br>Overtime Hours: " +
    (hoursWorked - overTime) +
    " hours<br>Hourly Rate:  $" +
    hourlyRate.toFixed(2) +
    "<br> Gross Salary: $" +
    grossSalary.toFixed(2) +
    "<br>Net Salary: $" +
    netSalary.toFixed(2);
};

calculateSalary();
