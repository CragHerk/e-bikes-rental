import moment from "moment";

export const isReservationConflict = (reservation, reservationData) => {
  const { name, startDate, endDate } = reservation;
  const momentStartDate = moment(startDate).startOf("day");
  const momentEndDate = moment(endDate).endOf("day");

  const conflicts = reservationData.filter((existing) => {
    const isCurrentReservation = existing === reservation;
    if (isCurrentReservation) {
      return false;
    }

    const existingStartDate = moment(existing.startDate).startOf("day");
    const existingEndDate = moment(existing.endDate).endOf("day");

    const isConflict =
      existing.name === name &&
      !(
        momentStartDate.isSame(momentEndDate) ||
        existingStartDate.isSame(existingEndDate)
      ) &&
      (momentStartDate.isBetween(
        existingStartDate,
        existingEndDate,
        undefined,
        "[]"
      ) ||
        momentEndDate.isBetween(
          existingStartDate,
          existingEndDate,
          undefined,
          "[]"
        ) ||
        existingStartDate.isBetween(
          momentStartDate,
          momentEndDate,
          undefined,
          "[]"
        ) ||
        existingEndDate.isBetween(
          momentStartDate,
          momentEndDate,
          undefined,
          "[]"
        ));

    return isConflict;
  });

  return conflicts.length > 0;
};
