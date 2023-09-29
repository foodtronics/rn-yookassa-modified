import type { ErrorCodesEnum } from '../types';
export declare class YooKassaError extends Error {
    code: ErrorCodesEnum;
    constructor(code: ErrorCodesEnum, message: string);
}
