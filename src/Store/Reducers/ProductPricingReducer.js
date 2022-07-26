import {
  CREATE_PRODUCT_PRICING,
  DELETE_PRODUCT_PRICING,
  SHOW_PRODUCT_PRICING,
} from "../ActionType";

const initalState = {
  data: null,
};

export const ProductPricingReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_PRODUCT_PRICING:
      return {
        ...state,
        ...payload,
      };

    case SHOW_PRODUCT_PRICING:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_PRODUCT_PRICING:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
