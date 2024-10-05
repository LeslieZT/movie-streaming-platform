export const formatRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  const seconds = 0; // No se proporcionan segundos en el valor de entrada, por lo que asumimos que es 0.

  // Asegurar que los valores sean siempre de 2 dígitos (con padding)
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
