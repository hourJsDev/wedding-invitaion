export const base64Encode = (str) => {
  return btoa(str);
};
export const base64Decode = (encoded) => {
  return atob(encoded);
};
