import { ACTIONS } from "../actionTypes";

export const changeName = (data) => {
  return { type: ACTIONS.CHANGE, payLoad: data };
};

export const fechtData = (data) => {
  return { type: ACTIONS.FETCHDATA, payLoad: data };
};

export const apiData = (apiUrl) => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then((resposne) => {
        dispatch(fechtData(resposne));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
