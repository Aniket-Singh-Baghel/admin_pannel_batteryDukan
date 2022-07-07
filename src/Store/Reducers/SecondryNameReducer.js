import { CREATE_SECONDARY_NAME, DELETE_SECONDARY_NAME, SHOW_SECONDARY_NAME } from "../ActionType";

const initalState = {
  data: null,
};

export const SecondryNameReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_SECONDARY_NAME:
      return {
        ...state,
        ...payload,
      };

    case SHOW_SECONDARY_NAME:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_SECONDARY_NAME:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
