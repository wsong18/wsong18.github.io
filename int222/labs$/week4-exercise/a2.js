// the array of objects - sample data of a company's sale records in a certain period
var saleRecords = [
    { productCode: "GED010", productName: "GE Dishwaher D010", unitsSold: 30, unitPrice: 825, soldBy: "John" },
    { productCode: "GEC020", productName: "GE Cooler C020", unitsSold: 4, unitPrice: 280, soldBy: "Bill" },
    { productCode: "GED010", productName: "GE Dishwaher D010", unitsSold: 8, unitPrice: 800, soldBy: "Kara" },
    { productCode: "GEC020", productName: "GE Cooler C020", unitsSold: 12, unitPrice: 300, soldBy: "Hong" },
    { productCode: "GEF022", productName: "Refrigerator", unitsSold: 50, unitPrice: 1500, soldBy: "Alex" },
    { productCode: "GEC020", productName: "GE Cooler C020", unitsSold: 2, unitPrice: 280, soldBy: "John" }
];

// defining the function that convert the data(property names and values) in a single object to a string
function recordToString(obj) {
    var str = '', prop;
	
    // the 1st approach: use this approach when you don't know what properties are inside the object 
    for (prop in obj) { // you can ignore the JSLint error of "... be wrapped in an if statement ..."
        str += prop + ": " + obj[prop] + "\t";
    }
	
    // the 2nd approach: use this approach if you know property names in a certain object and you want to control the sequence of properties and values in the output string.
    //str = "productCode: " + obj.productCode;
    //str += "\tproductName: " + obj.productName;
    //str += "\tunitsSold: " + obj.unitsSold;
    //str += "\tunitPrice: " + obj.unitPrice;
    //str += "\tsoldBy: " + obj.soldBy;
	
    return str;
}

// defining the function that traverse an array of objects  
var calIncomeByPCode = function (sale_records, pro_code) {
    var _income = 0, i;
    for (i = 0; i < sale_records.length; i++) {
        if (sale_records[i].productCode === pro_code) { // only the objects whose value of the productCode is [pro_code] are calculated. 
            // calculate the income
			_income += sale_records[i].unitsSold * sale_records[i].unitPrice;
			
			// meanwhile, show the object's details in the web console
            console.log(recordToString(sale_records[i]));
        }
    }
    return _income;
};

// the calculation starts here
var income = calIncomeByPCode(saleRecords, "GED010");

alert("The sales income for GED010: $" + income);

