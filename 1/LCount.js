const count = function(allItems, itemsToCount) {
  let totalCount = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (totalCount[item]) {
        totalCount[item] += 1;
      } else {
        totalCount[item] = 1;
      }
    }
  }
  
  return totalCount;
};

module.exports = count;
