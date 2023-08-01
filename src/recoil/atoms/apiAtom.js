const { atom } = require("recoil");

const baseURLState = atom({
  key: "baseURLState",
  default: "http://118.67.134.56:8080",
});

export default baseURLState;
