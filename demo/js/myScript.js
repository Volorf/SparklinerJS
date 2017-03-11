// Our array
var myArray = [10, 30, 3, 8, 39, 25, 22, 89, 74, 7, 2, 40, 61, 17, 35, 31, 8, 14, 39, 32, 53]
// Create object
var mySparkliner = new Sparkliner()
// Set html element ID for SVG sparkliner. To this html element will append our sparkliner
mySparkliner.id = "sparkliner"
// CUSTOMIZE OUR SPARKLINE
// Set a stroke color
mySparkliner.strokeColor = "#000"
// Set a stroke width
mySparkliner.strokeWidth = 2
// Pass a data and create SVG sparkliner
mySparkliner.create(myArray)
