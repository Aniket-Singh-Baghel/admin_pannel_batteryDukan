import { CREATE_CATEGORY, SHOW_CATEGORY, DELETE_CATEGORY } from "../ActionType";

const initalState = {
  data: null,
};

export const CategoryReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        ...payload,
      };

    case SHOW_CATEGORY:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_CATEGORY:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
