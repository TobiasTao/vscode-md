import { type } from 'os';

export interface ExtensionConfig {
  options: object;
  theme: object;
  image: {
    pathType: 'relative' | 'absolute';
    dirPath: string;
  };
}

export type updateScope = 'all' | 'value' | 'imgConfig';
