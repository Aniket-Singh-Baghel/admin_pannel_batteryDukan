import {
  CREATE_BATTERY_DETAIL,
  DELETE_BATTERY_DETAIL,
  SHOW_BATTERY_DETAIL,
} from "../ActionType";

const initalState = {
  data: null,
};

export const BatteryDetailReducer = (
  state = initalState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_BATTERY_DETAIL:
      return {
        ...state,
        ...payload,
      };

    case SHOW_BATTERY_DETAIL:
      return {
        ...state,
        ...payload,
        data: payload.data,
      };

    case DELETE_BATTERY_DETAIL:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.filter((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
