import {
  CREATE_PRODUCT_MEDIA,
  DELETE_PRODUCT_MEDIA,
  SHOW_PRODUCT_MEDIA,
} from "../ActionType";

const initalState = {
  data: null,
};

export const ProductMediaReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_PRODUCT_MEDIA:
      return {
        ...state,
        ...payload,
      };

    case SHOW_PRODUCT_MEDIA:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_PRODUCT_MEDIA:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
