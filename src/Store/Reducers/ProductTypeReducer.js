import {
  CREATE_PRODUCT_TYPE,
  DELETE_PRODUCT_TYPE,
  SHOW_PRODUCT_TYPE,
} from "../ActionType";

const initalState = {
  data: null,
};

export const ProductTypeReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT_TYPE:
      return {
        ...state,
        ...payload,
      };

    case SHOW_PRODUCT_TYPE:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_PRODUCT_TYPE:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
