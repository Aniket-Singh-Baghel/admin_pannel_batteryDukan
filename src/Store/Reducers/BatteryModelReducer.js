import { CREATE_BATTERY_MODEL, DELETE_BATTERY_MODEL, SHOW_BATTERY_MODEL } from "../ActionType";

const initalState = {
  data: null,
};

export const BatteryModelReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_BATTERY_MODEL:
      return {
        ...state,
        ...payload,
      };

    case SHOW_BATTERY_MODEL:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_BATTERY_MODEL:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
