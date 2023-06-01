const { atom } = require("recoil");

export const headerItemState = atom({
  key: "headerItemState",
  default: [{ id: "/search", value: "전체도서" }, { id: "/mypage", value: "마이페이지" }, { id: "/logout", value: "로그아웃" }],
});
