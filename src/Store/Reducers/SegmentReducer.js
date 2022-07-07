import { CREATE_SEGMENT, SHOW_SEGMENT, DELETE_SEGMENT } from "../ActionType";

const initalState = {
  data: null,
};

export const SegmentReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_SEGMENT:
      return {
        ...state,
        ...payload,
      };

    case SHOW_SEGMENT:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_SEGMENT:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
