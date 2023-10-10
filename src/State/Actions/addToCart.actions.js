export const addToCart = (reservationData) => {
  return {
    type: "ADD_TO_CART",
    payload: reservationData,
  };
};
