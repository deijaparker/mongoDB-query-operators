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
