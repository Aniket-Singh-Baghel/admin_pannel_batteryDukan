import { CREATE_SCHEME, SHOW_SCHEME, DELETE_SCHEME } from "../ActionType";

const initalState = {
  data: null,
};

export const SchemeReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_SCHEME:
      return {
        ...state,
        ...payload,
      };

    case SHOW_SCHEME:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_SCHEME:
      return {
        ...state,
        data: state.data.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
