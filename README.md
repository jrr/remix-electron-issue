# remix-electron issue

This is a simple repro demonstrating what happens when you try to integrate [remix-electron](https://github.com/itsMapleLeaf/remix-electron/) with a recent Remix starter.

To see the error:

```
pnpm i
pnpm build
pnpm electron desktop/index.js
```

Here's the error:

```
pnpm electron desktop/index.js
App threw an error during load
ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/path/to/remix-electron-issue/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///Users/jrr/path/to/remix-electron-issue/remix-electron-issue/desktop/index.js:2:23
    at ModuleJob.run (node:internal/modules/esm/module_job:217:25)
```

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
