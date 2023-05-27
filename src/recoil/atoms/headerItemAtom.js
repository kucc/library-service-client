const { atom } = require("recoil");

export const headerItemState = atom({
  key: "headerItemState",
  default: ["전체도서", "마이페이지", "로그아웃"],
});
