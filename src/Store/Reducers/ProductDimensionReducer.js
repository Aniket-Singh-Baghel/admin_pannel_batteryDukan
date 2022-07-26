import {
  CREATE_PRODUCT_DIMENSION,
  DELETE_PRODUCT_DIMENSION,
  SHOW_PRODUCT_DIMENSION,
} from "../ActionType";

const initalState = {
  data: null,
};

export const ProductDimensionReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_PRODUCT_DIMENSION:
      return {
        ...state,
        ...payload,
      };

    case SHOW_PRODUCT_DIMENSION:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_PRODUCT_DIMENSION:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
