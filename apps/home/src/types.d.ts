declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'react' {
  export type ComponentType<P = any> = (props: P) => any;
}
