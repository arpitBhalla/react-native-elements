export type Size = 'sm' | 'md' | 'lg';

export type SizeX = 'xs' | Size | 'xl';

type direction = 'l' | 'r' | 't' | 'b';

type styleName = 'm' | 'p';

type SystemProp = `${styleName}${direction | ''}`;

export type Stringify<T extends string> = T | Omit<string, T>;

export interface System extends Record<SystemProp, string | number> {}
