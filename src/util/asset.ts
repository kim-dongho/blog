const defaultIconURL = "/assets/icons";

const iconNames = [
  "blog",
  "tag",
  "cancel",
  "hamburger-dark",
  "hamburger-light",
  "sun",
  "moon",
  "leaf",
  "github-light",
  "github-dark",
  "filter-light",
  "filter-dark",
];

const icons = iconNames.reduce((acc, name) => {
  const formattedName = name
    .replace(/-dark$/, "Dark")
    .replace(/-light$/, "Light");
  acc[formattedName] = `${defaultIconURL}/icon-${name}.svg`;
  return acc;
}, {} as Record<string, string>);

export const images = {}; // 유지되지만 빈 객체일 경우 삭제 가능

export { icons };
