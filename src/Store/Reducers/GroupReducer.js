import { CREATE_GROUP, SHOW_GROUP, DELETE_GROUP, FIND_ONE_GROUP } from "../ActionType";

const initalState = {
  data: null,
  GroupByID: null,
};

export const GroupReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_GROUP:
      return {
        ...state,
        ...payload,
      };

    case SHOW_GROUP:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_GROUP:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
