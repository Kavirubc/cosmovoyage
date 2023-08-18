
import CryptoJS from "crypto-js";

export const encryptData = (text) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    process.env.REACT_APP_SECRET_PASs
  ).toString();

  return data;
};

export const decryptData = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, process.env.REACT_APP_SECRET_PASs);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return data;
};