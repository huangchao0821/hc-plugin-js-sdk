import { NativeRPC, Platform } from './native';
export type RPC = {
    invoke(method: string, ...args: any[]): Promise<any>;
};
export declare function getIframeRPC(timeout?: number): RPC;
export declare function getNativeRPC(platform: Platform): NativeRPC;
export declare function getRPC(): RPC;
