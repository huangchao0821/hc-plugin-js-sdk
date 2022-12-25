export type Platform = 'android' | 'ios';
type JSON_PARAM = {
    jsonrpc: '2.0';
    id: string;
    method: string;
    params: any[];
};
type JSON_RESULT = {
    jsonrpc: '2.0';
    id: string;
    result: any;
    error: string;
};
export declare class NativeRPC {
    private platform;
    private taskMap;
    constructor(platform: Platform);
    send(param: JSON_PARAM): void;
    listen(param: JSON_RESULT): void;
    invoke(method: string, ...args: any[]): Promise<unknown>;
}
export {};
