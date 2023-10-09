export const BOOK_RESERVATION = "BOOK_RESERVATION";

export const bookReservation = (formData, totalPrice, startDate, endDate) => {
  return {
    type: BOOK_RESERVATION,
    payload: {
      formData,
      totalPrice,
      startDate,
      endDate,
    },
  };
};
