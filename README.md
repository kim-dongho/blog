## DH's Blog

This blog organizes JavaScript and TypeScript theories along with coding test practice problems.

It reads Mdx files stored in `./src/data` and displays them on the blog.

## Tech Stack for This Blog

- FrontEnd

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Recoil](https://img.shields.io/badge/Recoil-3578E5?logo=recoil&logoColor=white)](https://recoiljs.org/)
[![Emotion](https://img.shields.io/badge/Emotion-C865B5?logo=emotion&logoColor=white)](https://emotion.sh/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

- Language

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Version

Node: v20.16.0

React: v18.3.1

## MDX Frontmatter

```tsx
interface MdxFrontMatter {
  title: string; // Required
  koTitle: string; // Required
  id?: number; // Optional
  thumbnail?: string; // Optional
  date: string; // Required (ISO format)
  tags: string[]; // Required (array of strings)
  draft?: boolean; // Optional (default is false)
  summary: string; // Required
}
```
