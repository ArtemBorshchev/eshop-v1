export const filterUnique = function (arr) {
  const uniqueValues = new Set();
  return arr.filter((item) => {
      const name = item.category.name;
      if (!uniqueValues.has(name)) {
          uniqueValues.add(name);
          return true;
        }
        return false;
      });
    }
    
export const findMaxDiscount = function (arr) {
  let newPoster = {};
  if (arr.length === 0) {
      return undefined;
  }
  let maxDiscount = Math.floor(Math.random() * 47 + 1)
  for (let i = 1; i < arr.length; i++) {
    let newDiscount = Math.floor(Math.random() * 47 + 1);
    if (newDiscount > maxDiscount) {
      maxDiscount = newDiscount;
      newPoster.discount = maxDiscount;
      newPoster.title = arr[i].title;
      newPoster.image = arr[i].images;
    }
  }
  return newPoster;
}
