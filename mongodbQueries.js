// 1. Queries using $and and $or

// Find all restaurants in Brooklyn that serve either hamburgers or pizza
db.restaurants.find({
  $and: [
    { borough: "Brooklyn" },
    { $or: [{ cuisine: "Hamburgers" }, { cuisine: "Pizza" }] },
  ],
});

// Find all neighborhoods in either Manhattan or Brooklyn
db.neighborhoods.find({
  $or: [{ borough: "Manhattan" }, { borough: "Brooklyn" }],
});

// --------> newDB()

// 2. Queries using $not and $nor

// Find all supplies where 'quantity' is not less than 100
db.sample_supplies.find({
  quantity: { $not: { $lt: 100 } },
});

// Find restaurants that neither serve Italian food nor are located in Queens
db.restaurants.find({
  $nor: [{ cuisine: "Italian" }, { borough: "Queens" }],
});
