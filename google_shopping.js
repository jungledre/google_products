// data = object
// data["items"] = array
// data["items"][0] = object
// data["items"][0].kind = string

//Problem #1
var data = require("./products.json")
shopCount = 0;
for (var i = 0; i < data["items"].length; i++) {
    if (data["items"][i].kind === "shopping#product") {
        shopCount++
    }
}
console.log("shopping#product count is: " + shopCount);

//Problem #2

var data = require("./products.json")
backCount = 0;
for (var i = 0; i < data["items"].length; i++) {
    if (data["items"][i].product["inventories"][0].availability === "backorder") {
        backCount++
    }
}
console.log("backorder count is: "+backCount)

//Problem #3

var data = require("./products.json")
imgCount = 0;
for (var i = 0; i < data["items"].length; i++) {
    if (data["items"][i].product["images"].length > 1) {
        imgCount++
    }
}
console.log("image count is: "+imgCount)

//Problem #4

//4.) Find all canon products in the items (careful with case sensitivity).

var data = require("./products.json")
canonCount = 0;
for (var i = 0; i < data["items"].length; i++) {
    if (data["items"][i].product.brand === "Canon") {
        canonCount++
    }
}
console.log("Canons count is: "+canonCount)

//Problem #5
//5.) Find all items that have product author name of "eBay" and are brand "Canon".

var data = require("./products.json")
ebayCount = 0;
for (var i = 0; i < data["items"].length; i++) {
    if ((data["items"][i].product.author.name.substr(0,4) === "eBay") && (data["items"][i].product.brand === "Canon")) {
        ebayCount++
    }
}

console.log("Ebay and Canons count is: "+ebayCount)

//Problem #5
//6.) Print all the products with their brand, price, and a image link

var data = require("./products.json")

for (var i = 0; i < data["items"].length; i++) {
    console.log(data["items"][i].product.brand);
    console.log(data["items"][i].product.inventories[0].price);
    console.log(data["items"][i].product.images[0].link);
}








