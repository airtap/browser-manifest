# browser manifest

**An informal specification to describe the basic properties of a browser (in the broadest sense) as well as the features it wants and supports.**

## Example

```js
manifest = {
  name: 'chrome',
  version: '26',
  platform: 'windows 2012',
  title: 'Sauce Labs Google Chrome 26 on Windows 2012',
  wants: {
    tunnel: true
  },
  supports: {
    headless: false
  }
}
```

## Properties

### `name`

Required, one of [`browser-names`](https://github.com/airtap/browser-names).

### `version`

Required, a version string. Does not have to be fully qualified, as long as the version is unique among a set of browsers with the same properties. May also be a non-numeric version like "beta" or "dev".

Some browsers don't have a version; in that case use `0.0.0` for now.

### `title`

Optional. A string for display purposes, for humans to identify this browser among others.

### `wants`

An optional object describing (airtap) features that a browser wants, by the following optional properties:

- `tunnel` (boolean): browser needs a tunnel to connect to local test server
- `loopback` (boolean): browser needs a hostname other than `localhost` in order to route 127.0.0.1 traffic through a tunnel.

### `supports`

An optional object describing features supported by a browser, by the following optional properties:

- `headless` (boolean): browser can be configured to be headless (TBD: is this distinct from a root `headless` property that would indicate that the browser is always or never headless?)
- `devtools` (boolean): can open devtools on request

## Additional properties

The manifest may contain additional properties not described here, including nested objects. Such properties can be used by whatever tool launches a browser and by [`airtap-match-browsers`](https://github.com/airtap/match-browsers) for more specific matching.
