# DOM Standard ESM
All [DOM Standard](https://dom.spec.whatwg.org) globals exported as ES modules

💡 Hint: Check out the sister repositories for other common JS standards!
- [HTML Standard](https://html.spec.whatwg.org): [`jcbhmr/html-standard-esm`](https://github.com/jcbhmr/html-standard-esm)
- [ECMAScript 2023 Language Specification](https://tc39.es/ecma262): [`jcbhmr/ecmascript-builtins-esm`](https://github.com/jcbhmr/ecmascript-builtins-esm)
- [Console Standard](https://console.spec.whatwg.org): [`jcbhmr/console-standard-esm`](https://github.com/jcbhmr/console-standard-esm)
- [Fetch Standard](https://fetch.spec.whatwg.org): [`jcbhmr/fetch-standard-esm`](https://github.com/jcbhmr/fetch-standard-esm)

⏲️ Time Saver: Use the ready-made [`spec.importmap`](./spec.importmap) as an [`--import-map`](https://deno.land/manual/linking_to_external_code/import_maps#import-maps) when using [`deno bundle`](https://deno.land/manual/tools/bundler)!

## Why?

So that you can declaratively list your dependence on DOM APIs! This means that instead of using a polyfill when porting your code to NodeJS and polluting the entire process `globalThis`, you can instead compile your code against a ponyfill (just export a shim instead of apply it globally) and be good to go!

Example NodeJS ponyfill for `EventTarget` (Node v15.0.0 and below)
```js
import EventTarget from "spec:https://dom.spec.whatwg.org/#eventtarget"
```
```json
{
    "imports": {
        "spec:https://dom.spec.whatwg.org/#eventtarget": "https://esm.sh/event-target-polyfill"
    }
}
```
```sh
# Use Deno or your other favorite bundler
deno bundle --import-map=./ponyfill.importmap ./file.js
```

## How To Use

You are _encouraged_ to use the notation of a URL using the `spec:` scheme. This can directly point to a core specification (even versioned if you fear it might change) and map it away to an implementation. Why not just use the `https:` scheme and point directly to the `https://dom.spec.whatwg.org/#interface-node` or similar? Well, you _could_... I just like `spec:`. Either way, the import should be mapped away by either compiling against an import map to generate `https:` ES modules, or by including a `<script type="importmap">` at runtime.

Example using an inline `<script type="importmap">`
```html
<script type="importmap">
    {
        "imports": {
            "spec:https://html.spec.whatwg.org/multipage/window-object.html#dom-document-2" : "https://esm.sh/html-standard-esm/window/document.js",
            "spec:https://dom.spec.whatwg.org/#interface-node"                              : "https://esm.sh/dom-standard-esm/node.js",
            "spec:https://console.spec.whatwg.org/#log"                                     : "https://esm.sh/console-standard-esm/console/log.js"
        }
    }
</script>
<script type="module">
    import document     from "spec:https://html.spec.whatwg.org/multipage/window-object.html#dom-document-2"
    import Node         from "spec:https://dom.spec.whatwg.org/#interface-node"
    import console      from "spec:https://console.spec.whatwg.org/#namespacedef-console"

    console.log(document instanceof Node)
</script>
```
