/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';

// Services
export interface HelloWorldDef {
    getFortune: (callParams: CallParams$$<null>) => string | Promise<string>;
    hello: (str: string, callParams: CallParams$$<'str'>) => void | Promise<void>;
}
export function registerHelloWorld(service: HelloWorldDef): void;
export function registerHelloWorld(serviceId: string, service: HelloWorldDef): void;
export function registerHelloWorld(peer: IFluenceClient$$, service: HelloWorldDef): void;
export function registerHelloWorld(peer: IFluenceClient$$, serviceId: string, service: HelloWorldDef): void;
export function registerHelloWorld(...args: any[]) {
    registerService$$(
        args,
        {
    "defaultServiceId": "hello-world",
    "functions": {
        "fields": {
            "getFortune": {
                "domain": {
                    "tag": "nil"
                },
                "codomain": {
                    "items": [
                        {
                            "name": "string",
                            "tag": "scalar"
                        }
                    ],
                    "tag": "unlabeledProduct"
                },
                "tag": "arrow"
            },
            "hello": {
                "domain": {
                    "fields": {
                        "str": {
                            "name": "string",
                            "tag": "scalar"
                        }
                    },
                    "tag": "labeledProduct"
                },
                "codomain": {
                    "tag": "nil"
                },
                "tag": "arrow"
            }
        },
        "tag": "labeledProduct"
    }
}
    );
}


// Functions
export const getRelayTime_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (xor
    (call -relay- ("peer" "timestamp_ms") [] ret)
    (fail :error:)
   )
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function getRelayTime(
    config?: {ttl?: number}
): Promise<number>;

export function getRelayTime(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<number>;

export function getRelayTime(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "getRelayTime",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "u64",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        getRelayTime_script
    );
}

export const sayHello_script = `
(xor
 (seq
  (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
  (call %init_peer_id% ("hello-world" "hello") ["Hello, world!"])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function sayHello(
    config?: {ttl?: number}
): Promise<void>;

export function sayHello(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<void>;

export function sayHello(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "sayHello",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "tag": "nil"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        sayHello_script
    );
}

export const tellFortune_script = `
(xor
 (seq
  (seq
   (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
   (call %init_peer_id% ("hello-world" "getFortune") [] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function tellFortune(
    config?: {ttl?: number}
): Promise<string>;

export function tellFortune(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<string>;

export function tellFortune(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "tellFortune",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        tellFortune_script
    );
}
