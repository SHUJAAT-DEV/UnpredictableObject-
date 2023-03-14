import { filterArrayByCheckObject } from "./algochallenge";
import { StringObject, UnpredictableObject } from "./types";

//Use Cases
const randomObject: UnpredictableObject = {
  a: 22,
  c: {
    xcd: {
      ddffd: {
        xyz: [
          {
            a: 343,
            c: "blabla",
            d: 344,
          },
          {
            a: 123,
            b: "hello",
            xyz: "not an object",
          },
          {
            a: 456,
            b: "world",
            xyz: {
              x: "1",
              y: "2",
              z: "3",
            },
          },
        ],
      },
    },
  },
};

const checkObject: StringObject = {
  a: "456",
  b: "world",
};

console.log(filterArrayByCheckObject(checkObject, randomObject));