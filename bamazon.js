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


  function displaySearch() {
    var query = "SELECT item_id,product_name,department_name,price,stock_quantity FROM products";
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
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Display Store",
          "Find product ID",
          "Find number of unit in stock",
          "Enough stock to meet customer request."
        ]
      })
      .then(function(answer) {
        switch (answer.action) {

        case "Display Store":
          displaySearch();
           break;    

        case "Find product ID":
          idSearch();
          break;
  
        case "Find number of unit in stock":
          unitSearch();
          break;
            
        case "Find number of unit in stock":
          stockSearch();
          break;      

        case "exit":
          connection.end();
          break;
        }
      });
  }
 
  function idSearch() {
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










  
   