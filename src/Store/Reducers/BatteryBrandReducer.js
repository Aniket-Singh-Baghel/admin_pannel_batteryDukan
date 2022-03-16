import { CREATE_BATTERY_BRAND, DELETE_BATTERY_BRAND, SHOW_BATTERY_BRAND } from "../ActionType";

const initalState = {
  data: null,
};

export const BatteryBrandReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_BATTERY_BRAND:
      return {
        ...state,
        ...payload,
      };

    case SHOW_BATTERY_BRAND:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    case DELETE_BATTERY_BRAND:
      let copyData = [...state.data];
      return {
        ...state,
        data: copyData.splice((item, index) => index !== payload),
      };

    default:
      return state;
  }
};
