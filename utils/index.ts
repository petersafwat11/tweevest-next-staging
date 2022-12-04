export * from "./api";

export function convertToInternationalCurrencySystem(
  labelValue: string | number | undefined,
  decimals = 2
) {
  if (labelValue === undefined) {
    return 0;
  }
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(decimals) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(decimals) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(decimals) + "K"
    : Math.abs(Number(labelValue));
}
