import { ACTIONS } from "../actionTypes";

export const changeUserName = (name) => {
  return { type: ACTIONS.CHANGE, payLoad: name };
};
