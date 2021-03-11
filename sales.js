const { messages, questions } = require("./utils");
const sellers = require("./sellers");

class Sales {
  data = [];
  sale = {
    sellerName: "",
    customerName: "",
    dateSale: "",
    itemName: "",
    amount: "",
  };
  options = [
    "Seller name",
    "Customer name",
    "Date Sale",
    "Item name",
    "Amount",
  ];

  addSale = () => {
    messages.warning("Adding a new Sale");
    this.sale.sellerName = questions.question("Seller name: ");
    if (!sellers.data.includes(this.sale.sellerName)) {
      messages.error("Seller not found!");
      messages.error("Here is a list of Sellers available");
      sellers.listSellers();
    } else {
      this.sale.customerName = questions.question("Customer name: ");
      this.sale.dateSale = questions.question("Date of sale: ");
      this.sale.itemName = questions.question("Sale item name: ");
      this.sale.amount = questions.questionFloat("Sale amount: ");

      this.data.push(this.sale);
      messages.success("Sale added successfully");
    }
    this.cleanSeller();
  };

  listSales = () => {
    if (this.data.length < 1) {
      messages.error("No sales added");
    } else {
      console.table(this.sortSales());
    }
  };

  removeSale = () => {
    if (this.data.length < 1) {
      messages.error("No sales found");
    } else {
      this.listSales();
      const resIndex = questions.question("Type the INDEX's Sale to remove: ");

      delete this.data[parseInt(resIndex)];
      messages.success("Sale removed successfully");
    }
  };

  editSale = () => {
    if (this.data.length < 1) {
      messages.error("No sales found to edit");
    } else {
      this.listSales();
      const index = questions.question(
        "Which sale would you like to edit? (type the INDEX):"
      );
      if (!this.data[index]) {
        messages.error("Index not found to edit");
      } else {
        const infoIndex = questions.select(
          this.options,
          "Which information would you like to edit?"
        );
        let value = "";
        if (this.options[infoIndex] === "Amount") {
          value = questions.questionFloat(
            `Enter with the new value for (${this.options[infoIndex]}):`
          );
        } else {
          value = questions.question(
            `Enter with the new value for (${this.options[infoIndex]}):`
          );
        }
        this.data[index][Object.keys(this.sale)[infoIndex]] = value;
      }
    }
  };

  cleanSeller = () => {
    this.sale = {
      sellerName: "",
      customerName: "",
      dateSale: "",
      itemName: "",
      amount: "",
    };
  };

  sortSales = (key = "amount") => {
    function compare(a, b) {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    }
    return this.data.sort(compare);
  };
}

module.exports = new Sales();
