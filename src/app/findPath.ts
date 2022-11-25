export const findPath = () => {
  const path = window.location.pathname;
  let newPath = path.split("/").filter((p) => p !== "");
  switch (newPath[0]) {
    case "catalogue":
      newPath[0] = "Каталог";
  }
  switch (newPath[1]) {
    case "classic_barrel":
      newPath[1] = "Классические бани-бочки";
  }
  return newPath.join(" / ");
};
