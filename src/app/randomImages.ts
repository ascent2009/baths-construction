import { ListImageType } from "../types";

export function randomImages(arr: ListImageType) {
  let randomArr = [];

  for (let i = 0; i < arr.length; i++) {
    const randomPic = Math.floor(Math.random() * arr.length);
    randomArr.push(arr[randomPic]);
  }
  return randomArr.slice(0, 3);
}
