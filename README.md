# individual

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple utility to create a globally unique, singleton value for a given key. This is useful for ensuring that a module has only one instance of a cache or resource, even if the module itself is loaded multiple times in a project.

## The Problem: Duplicate Module Instances

In complex JavaScript projects, especially with nested dependencies, it's possible for the same module to be loaded more than once. This can lead to several issues:

-   **Inefficient Caching:** If your module maintains an internal cache, duplicate instances will create separate, un-synced caches, reducing performance.
-   **Resource Conflicts:** If your module manages a unique resource like a WebSocket connection or a native C++ extension instance, creating more than one can cause bugs or even application crashes.

`individual` solves this by providing a shared, global namespace to store a value, guaranteeing that you always get the same instance back.

## Example

```js
import { Individual } from "https://code4fukui.github.io/individual/index.js";

// The first call initializes the cache with an empty object.
const moduleCache = Individual("__MY_MODULE_CACHE", {});

// In another file, or even a duplicate copy of this module,
// calling Individual with the same key returns the *exact same* object.
const sameCache = Individual("__MY_MODULE_CACHE", { some: "other value" });

console.log(moduleCache === sameCache); // true
```

## API

### `Individual(key, defaultValue)`

-   **`key: string`**: A unique string to identify the value in the global namespace (e.g., `window` or `global`).
-   **`defaultValue: any`**: The initial value to be stored if the `key` is not already present. This argument is ignored on subsequent calls with the same key.
-   **Returns**: The stored value. This will be the `defaultValue` on the first call, or the previously stored value on all subsequent calls.

## How It Works

This library checks for the `key` on the global object (`window` in browsers, `global` in Node.js). If the key exists, it returns the stored value. If not, it sets the `defaultValue` for that key and returns it. This ensures that any part of the application using the same key receives the same singleton instance.

## License

MIT License © 2012 Raynos — see [LICENSE](LICENSE).