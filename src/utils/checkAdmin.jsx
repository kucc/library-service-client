export function checkAdminHome(path) {
  const pathKeywords = path.split("/");
  if (pathKeywords[1] === "admin" && !pathKeywords[2]) {
    return true;
  }
  return false;
}
