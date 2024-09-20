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
  "arrow-left-dark",
  "arrow-left-light",
  "arrow-right-dark",
  "arrow-right-light",
];

const icons = iconNames.reduce((acc, name) => {
  const formattedName = name
    .replace(/-dark$/, "Dark")
    .replace(/-light$/, "Light");
  acc[formattedName] = `${defaultIconURL}/icon-${name}.svg`;
  return acc;
}, {} as Record<string, string>);

export { icons };
