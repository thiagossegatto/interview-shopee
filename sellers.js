const { messages, questions } = require("./utils");

class Sellers {
  data = [];

  addSeller = () => {
    if (this.data.length < 5) {
      messages.warning("Adding a new seller:");
      let name = questions.question("Seller name: ");

      if (name !== "" && !this.isSeller(name)) {
        this.data.push(name);
        messages.success("Saller added successfully");
      } else {
        messages.error("Seller empty ou already added");
      }
    } else {
      messages.error("You already added 5 Sellers");
    }
  };
  listSellers = () => {
    if (this.data.length < 1) {
      messages.error("No sallers added");
    } else {
      console.table(this.data);
    }
  };
  isSeller = (name) => {
    return this.data.includes(name);
  };
}

module.exports = new Sellers();
