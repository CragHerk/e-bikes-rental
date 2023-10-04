import { createAction } from "@reduxjs/toolkit";

export const disablePreviousButton = createAction("DISABLE_PREVIOUS_BUTTON");

export const disableNextButton = createAction("DISABLE_NEXT_BUTTON");
export const setBikeInfo = (bikeInfo) => ({
  type: "SET_BIKE_INFO",
  payload: bikeInfo,
});
