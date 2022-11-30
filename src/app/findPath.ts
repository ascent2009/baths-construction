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
  switch (newPath[2]) {
    case "peak_barrel":
      newPath[2] = "Баня-бочка с козырьком";
  }
  return newPath.join(" / ");
};
