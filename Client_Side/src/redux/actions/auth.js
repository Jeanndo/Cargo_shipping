import { AUTH } from "../../constants/actionTypes";

import * as api from "../../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login the user
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    console.log(data?.result?.name);
    if(data?.result?.role==="user"){
      history.push("/driver");
    }else if(data?.result?.role==="admin"||data?.result?.role==="ADMIN"){
      history.push("/admin");
    }
   
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

    history.push("/admin");
  } catch (error) {
    console.log(error);
  }
};