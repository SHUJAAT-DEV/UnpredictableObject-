export type StringObject = { [key: string]: string };
export type UnpredictableObject = {
  a: number;
  c: any;
  b?: StringObject;
};

