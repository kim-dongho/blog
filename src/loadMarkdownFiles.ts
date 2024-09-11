const markdownFiles = import.meta.glob("./data/*.mdx", { eager: true });

export default markdownFiles;
