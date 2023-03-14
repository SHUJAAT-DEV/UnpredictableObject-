import { StringObject, UnpredictableObject } from "./types";

export function filterArrayByCheckObject(
  checkObject: StringObject,
  unpredictableObject: UnpredictableObject
): Array<StringObject> | null {

  const findArrayKey = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj;
    } else if (typeof obj === "object") {
      for (const prop in obj) {
        if (prop === "xyz") {
          return obj[prop];
        } else {
          const found = findArrayKey(obj[prop]);
          if (Array.isArray(found)) {
            return found;
          }
        }
      }
    }
    return null;
  };

  const array = findArrayKey(unpredictableObject);
  if (!Array.isArray(array)) {
    return null;
  }

  const filteredArray = array.filter((obj) => {
    return Object.entries(checkObject).every(([key, value]) => {
      return obj[key] === value;
    });
  });

  return filteredArray.length ? filteredArray : null;
}

