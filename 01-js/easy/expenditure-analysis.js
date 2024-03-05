/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++) {
    let currentTransaction = transactions[i];
    let category = currentTransaction.category;
    let amount = currentTransaction.price;

    let categoryFound = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j].category === category) {
        categoryFound = true;
        result[j].totalSpent += amount;
        break;
      }
    }

    if (!categoryFound) {
      result.push({ category: category, totalSpent: amount });
    }
  }

  return result;
}

console.log(
  calculateTotalSpentByCategory([
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656076800000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656076800000,
      price: 30,
      category: 'Clothing',
      itemName: 'Shirt',
    },
    {
      id: 4,
      timestamp: 1656076800000,
      price: 15,
      category: 'Electronics',
      itemName: 'Phone',
    },
  ])
);

module.exports = calculateTotalSpentByCategory;
