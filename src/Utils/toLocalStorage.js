export const getReservedDatesFromLocalStorage = (bikeModel) => {
  try {
    const storedData = localStorage.getItem(`reservedDates_${bikeModel}`);
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Błąd odczytu danych z localStorage:", error);
  }
  return null;
};

export const saveReservedDatesToLocalStorage = (bikeModel, data) => {
  try {
    localStorage.setItem(`reservedDates_${bikeModel}`, JSON.stringify(data));
  } catch (error) {
    console.error("Błąd zapisu danych do localStorage:", error);
  }
};
export const clearAllReservedDatesFromLocalStorage = () => {
  try {
    const keysToRemove = Object.keys(localStorage).filter((key) =>
      key.startsWith("reservedDates_")
    );

    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error("Błąd podczas usuwania danych z localStorage:", error);
  }
};
