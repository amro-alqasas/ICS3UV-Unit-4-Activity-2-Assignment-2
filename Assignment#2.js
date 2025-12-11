// Education Savings Calculator
console.log("=== Education Savings Calculator ===");

// Step 1: Get starting amount
let startingAmount = parseFloat(prompt("Enter the starting bank account amount: $"));

// Step 2: Get yearly interest rate
let interestRatePercent = parseFloat(prompt("Enter the yearly interest rate (as a percentage): "));
let interestRate = interestRatePercent / 100;  // Convert percentage to decimal

// Step 3: Get amount needed for education
let educationGoal = parseFloat(prompt("Enter the amount needed for post-secondary education: $"));

// Step 4: Calculate years needed
let currentAmount = startingAmount;
let years = 0;

// Keep adding interest until we reach or pass the goal
while (currentAmount < educationGoal) {
  // Calculate interest for this year
  let interest = currentAmount * interestRate;

  // Add interest to the account
  currentAmount = currentAmount + interest;

  // Count this year
  years = years + 1;

  // Show progress (optional - you can remove this)
  console.log("Year " + years + ": $" + currentAmount.toFixed(2));
}

// Step 5: Show the result
console.log("====================================");
console.log("Starting amount: $" + startingAmount);
console.log("Yearly interest rate: " + interestRatePercent + "%");
console.log("Education goal: $" + educationGoal);
console.log("====================================");
console.log("It will take " + years + " years for the starting bank account");
console.log("to reach the required amount for post-secondary education.");
console.log("Final amount after " + years + " years: $" + currentAmount.toFixed(2));
