# systemjs-builder-sourceMapContents-min-failing
minimum failing example for a systemjs-builder bug referenced in https://github.com/jspm/jspm-cli/issues/1328

To reproduce:
```
$ git clone https://github.com/aniranc/systemjs-builder-sourceMapContents-min-failing.git
$ npm install
$ jspm install
$ node try_bundle.js
```

Look in `dist-sfx/app.js.map` (for `builder.buildStatic`) and `dist-regular/app.js.map` (for `builder.bundle`)
to find

```
"sourcesContent":[null,null,null,null,null,null,null]
```
