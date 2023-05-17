const removeFromArray = function(array, ...toRemove) {
  // for (const i of toRemove) {
  //   array = array.filter(x => x!==i);
  // }

  // return array;

  return array.filter(x => !toRemove.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
