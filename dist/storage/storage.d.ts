declare class Storage {
    store: any;
    constructor(type: string);
    set(key: string, value: any): this;
    get(key: string): any;
    remove(key: string): this;
    clear(key: string): void;
}
export declare const localStorage: Storage;
export declare const sessionStorage: Storage;
export {};
