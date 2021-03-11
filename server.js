const readline = require("readline-sync");
const sales = require("./sales");
const sellers = require("./sellers");

class Server {
  options = [
    "Add new seller",
    "List sellers",
    "Add sale",
    "Edit sale",
    "Remove sale",
    "List sales by highest amount",
  ];

  init = () => {
    this.listOptions();
  };
  listOptions = () => {
    console.log("\x1b[33m%s\x1b[0m", "Options:");
    const index = readline.keyInSelect(this.options, "Which option?");

    switch (index) {
      case 0:
        sellers.addSeller();
        break;
      case 1:
        sellers.listSellers();
        break;
      case 2:
        sales.addSale();
        break;
      case 3:
        sales.editSale();
        break;
      case 4:
        sales.removeSale();
        break;
      case 5:
        sales.listSales();
        break;
      default:
        console.log("\x1b[31m%s\x1b[0m", `${index} is not a valid option`);
        return false;
    }

    this.listOptions();
  };
}

const server = new Server();

server.init();
