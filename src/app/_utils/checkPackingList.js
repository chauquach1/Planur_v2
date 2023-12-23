import completePackList from "../libs/completePackList";

export default function checkPackedItems(userPacklist) {
  let packingCategories = Object.keys(completePackList);
  let newPackList = {};

  for (const [key, value] of Object.entries(userPacklist)) {
    if (packingCategories.includes(key) && Array.isArray(value) && value.length > 0) {
      newPackList[key] = value;
    }
  }
  return newPackList;
}
