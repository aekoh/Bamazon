var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  var displaySearch = function() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(
            "ID: " +
              res[i].item_id +
              " || NAME: " +
              res[i].product_name +
              " || DEPT: " +
              res[i].department_name +
              " || PRICE: " +
              res[i].price +
              " || STOCK: " +
              res[i].stock_quantity
        );
      }
      runSearch();
    });
  } 



  function runSearch() {
    inquirer
      .prompt([
        {
        name: "ID",
        type: "input",
        message: "Enter product ID",
        filter: Number
      },
      { 
        name: "Quantity", 
        type: "input",
        message: "How many would you like?",
        filter: Number
      },
      
    ]).then(function(input) {
        var inputID = input.ID
        var inputQuantity = input.Quantity;
        makePurchase(inputID, inputQuantity);
    });
  };

  function makePurchase(ID, totalAmount){
    connection.query("Select * FROM products WHERE item_id = " + ID, function(err,res){
      if(err){console.log(err)};
      if(totalAmount <= res[0].stock_quantity){
        var priceTotal = res[0].price * totalAmount;
        console.log("In Stock!");
        console.log(" Total for " + totalAmount + " " + res[0].product_name + " is " + priceTotal + ".");
     
        connection.query("UPDATE products SET stock_quantity = " + (res[0].stock_quantity - totalAmount) + " WHERE item_id = " + ID);
      } else {
        console.log("Sorry we are out of stock " + res[0].product_name + " in stock!");

      };
      displaySearch();

    });
  };

      displaySearch();
  
  
  
  
  
  
  
  
  
  
  
  
        /*function idSearch() {
    inquirer
      .prompt({
        name: "item_id",
        type: "input",
        message: "Find product ID",
        filter: Number
        
      })
      .then(function(answer) {
        var query = "SELECT item_id,product_name FROM products WHERE ?";
        connection.query(query, { item_id: answer.item_id }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("NAME: " + res[i].product_name);
          }
          runSearch();
        });
      });
  }










  
   