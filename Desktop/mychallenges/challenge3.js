function calculateNetSalary(basicSalary, benefits) {
   
    const PAYE_RATE = 0.15; 
    const NHIF_RATE = 0.025; 
    const NSSF_RATE = 0.06; 

    const grossSalary = basicSalary + benefits;

    const payee = grossSalary * PAYE_RATE;

    const nhifDeductions = grossSalary * NHIF_RATE;

    const nssfDeductions = grossSalary * NSSF_RATE;

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log("Basic Salary: $" + basicSalary);
    console.log("Benefits: $" + benefits);
    console.log("Gross Salary: $" + grossSalary.toFixed(2));
    console.log("Payee (Tax): $" + payee.toFixed(2));
    console.log("NHIF Deductions: $" + nhifDeductions.toFixed(2));
    console.log("NSSF Deductions: $" + nssfDeductions.toFixed(2));
    console.log("Net Salary: $" + netSalary.toFixed(2));
}

calculateNetSalary(50000, 2000);
