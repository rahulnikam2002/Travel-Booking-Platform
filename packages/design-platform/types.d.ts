declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
  export = classes;
}

// SVG imports
declare module '*.svg' {
  const content: string;
  export default content;
}

// Webpack Hot Module Replacement types
// declare namespace NodeJS {
//   interface Module {
//     hot?: {
//       accept(path?: string, callback?: () => void): void;
//       accept(dependencies: string[], callback?: () => void): void;
//       decline(path?: string): void;
//       dispose(callback: (data: any) => void): void;
//       addDisposeHandler(callback: (data: any) => void): void;
//       removeDisposeHandler(callback: (data: any) => void): void;
//       invalidate(): void;
//       status(): string;
//       addStatusHandler(callback: (status: string) => void): void;
//       removeStatusHandler(callback: (status: string) => void): void;
//     };
//   }
// }