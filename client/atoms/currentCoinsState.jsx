import { atom } from "recoil";

// Takes index of current album in focus
export const currentCoinsState = atom({
  key: "currentCoinsState", // unique ID (with respect to other atoms/selectors)
  // default: 0, // default value (aka initial value)

  default: 1200 // default value (aka initial value)
});