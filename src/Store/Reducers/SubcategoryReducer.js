import { CREATE_SUBCATEGORY, SHOW_SUBCATEGORY, DELETE_SUBCATEGORY } from "../ActionType";

const initalState = {
  data: null,
};

export const SubCategoryReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_SUBCATEGORY:
      return {
        ...state,
        ...payload,
      };

    case SHOW_SUBCATEGORY:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_SUBCATEGORY:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
