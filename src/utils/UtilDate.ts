export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Obtener las partes de la hora
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Formatear la fecha y hora
  const formattedDate = `${hours}:${minutes}:${seconds} ${year}-${month}-${day}`;
  return formattedDate;
};
