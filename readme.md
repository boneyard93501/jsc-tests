Some errors:

flunce cli mismatch:

```bash
$ npx fluence aqua -i ./aqua/ -o ./src/_aqua
Error: Invalid config at /Users/bebo/.fluence/config.yaml. Errors:

/version must be equal to constant
allowedValue: 0

$ fluence aqua -i ./aqua/ -o ./src/_aqua
Successfully compiled /../jsclient/aqua
```

Compile errors:

```bash
$ node --loader ts-node/esm src/index.ts
(node:50340) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:859
    return new TSError(diagnosticText, diagnosticCodes, diagnostics);
           ^
TSError: ⨯ Unable to compile TypeScript:
src/index.ts:3:5 - error TS2305: Module '"@fluencelabs/js-client"' has no exported member 'randomKras'.

3     randomKras // // Import function for choosing random relay from list of possible relay nodes (network environment)
      ~~~~~~~~~~
src/index.ts:12:1 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

12 await Fluence.connect(randomKras()); // Connecting to the fourth kras node.
   ~~~~~
src/index.ts:12:15 - error TS2554: Expected 2 arguments, but got 1.

12 await Fluence.connect(randomKras()); // Connecting to the fourth kras node.
                 ~~~~~~~~~~~~~~~~~~~~~

  node_modules/@fluencelabs/js-client/dist/types/index.d.ts:15:36
    15     connect: (relay: RelayOptions, config: ClientConfig) => Promise<void>;
                                          ~~~~~~~~~~~~~~~~~~~~
    An argument for 'config' was not provided.
src/index.ts:33:1 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

33 await sayHello();
   ~~~~~
src/index.ts:39:13 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

39 console.log(await tellFortune());
               ~~~~~
src/index.ts:41:19 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

41 const relayTime = await getRelayTime();
                     ~~~~~
src/index.ts:46:1 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

46 await Fluence.disconnect();
   ~~~~~

    at createTSError (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:859:12)
    at reportTSError (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:863:19)
    at getOutput (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:1077:36)
    at Object.compile (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:1433:41)
    at Module.m._compile (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:1617:30)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/bebo/localdev/jsclient/node_modules/ts-node/src/index.ts:1621:12)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Function.Module._load (node:internal/modules/cjs/loader:960:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:169:29) {
  diagnosticCodes: [
    2305, 1378,
    2554, 1378,
    1378, 1378,
    1378
  ]
}
```