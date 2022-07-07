import {
  CREATE_OEM_BRAND,
  SHOW_OEM_BRAND,
  DELETE_OEM_BRAND,
} from "../ActionType";

const initalState = {
  data: null,
};

export const OemBrandReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_OEM_BRAND:
      return {
        ...state,
        ...payload,
      };

    case SHOW_OEM_BRAND:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_OEM_BRAND:
      return {
        ...state,
        data: state.data.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
