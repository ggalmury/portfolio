export const capitalizeFirstWord = (value: string): string => {
  return value ? value[0].toUpperCase() + value.slice(1) : "";
};
