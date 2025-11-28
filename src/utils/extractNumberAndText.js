export const extractNumberAndText = (str) => {
  if (!str) return { number: { display: "0", value: "0" }, text: "" };
  const numberMatch = str.match(/(\d[\d\s]*\d+|\d+)/);
  if (!numberMatch) return { number: null, text: str };

  const number = {
    display: numberMatch[0],
    value: parseInt(numberMatch[0].replace(/\s/g, "")),
  };

  const text = str.slice(numberMatch[0].length);

  return { number, text };
};
