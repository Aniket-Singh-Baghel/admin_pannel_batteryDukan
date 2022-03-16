import {
  CREATE_OEM_MODEL,
  SHOW_OEM_MODEL,
  DELETE_OEM_MODEL,
} from "../ActionType";

const initalState = {
  data: null,
};

export const OemModelReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_OEM_MODEL:
      return {
        ...state,
        ...payload,
      };

    case SHOW_OEM_MODEL:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    case DELETE_OEM_MODEL:
      return {
        ...state,
        data: state.data.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
