declare module 'case-mapper' {
    type objSwitchCase = (obj: Record<string, any>, switchStrCaseFn: toSnakeCase) => Record<string, any>;

    type toSnakeCase = (key: string) => void;
    type toCamelCase = (key: string) => void;
}