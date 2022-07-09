export const isSubList = function (list1: number[], list2: number[]): boolean {
  return list1.every(val => list2.includes(val));
};

export const getAllIndexes = function (arr: any[], val: any) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      indexes.push(i);
    }
  }
  return indexes;
};
