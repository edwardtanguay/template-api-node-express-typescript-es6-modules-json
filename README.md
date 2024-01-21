# API Template

This is a Node/Express API that is ready to use and customize. 

## TypeScript

- using `nodemon` and `tsx`, all ts files are watched and reloaded upon being changed
  - `tsx` executes very fast which is a good user experience, i.e. you can make a change and immediately test it in the API
  - `package.json` has two scripts set up to host this API at a hosting provider such as Render or Cyclic, or a cloud computer such as at Hetzner or DigitalOcean:
    - `npm run build` - will build a /dist folder that has the compiled JavaScript files
    - `npm start` - will start this compiled version of the API
- note that when you import a **.ts** file, you need to provide a **.js** extension
  - this is because we are using the `"module": "nodenext"` in **tsconfig.json** ([info](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports))
  - and we have to use `"module": "nodenext"` because we are using lowdb [info]([info](https://github.com/typicode/lowdb/issues/554))
  - if you switch your datasouce from lowdb to something else, you can go back to using no extensions for TypeScript imports if you switch to `"module": "es2022"`

## Testing

### Vitest/Supertest

- run testing with `npm t`
- see: `src/server.test.ts` 
  - currently only GET routes are tested
  - for non-GET routes, you would have to mock the database

### REST Client

- required: VSCode [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- see: `test.rest`
