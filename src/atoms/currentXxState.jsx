import { atom } from "recoil";

// Don't mind this - I used this for simplified hackathon storytelling shortcuts -Lucy

export const currentIslandState = atom({
  key: "currentIslandState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});