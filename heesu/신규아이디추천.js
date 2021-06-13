function solution(newID) {
  let ID = newID
    .toLowerCase()
    .replace(/[^\w.-]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/g, "");

  return ID.padEnd(3, ID[ID.length - 1]);
}
