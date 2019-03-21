> This File is for taking a quick note while developing.

### 1. Path alias
Because react app structure is nested especially in the source folder(app). We need to do a lot `import` from separated folder, and the path will not be very clear.

For example:
```js
import textArea from '../../../components/textArea'
```

After Path alias, the import will be:
```js
import textArea from 'Components/textArea'
```

#### How: Add alias in `babel.config.js`
```js
/*
* For project-wide configuration,
* Babel will automatically search for a "babel.config.js" in this root directory.
* ref: https://babeljs.io/docs/en/config-files#project-wide-configuration
*/
  plugins: [
    [
      "module-resolver",
      {
        "alias": {
          "Components": "./app/components",
        }
      }
    ]
  ]
```

### 2. Why have `index.js` in each Component folder?
For current components, we create a folder composes of `index`, `[componentName]`, and `style`. Basically, `index` only do the job which import component and export again. In this way, we can avoid:
```js
// from
import textArea from 'Components/textArea/textArea'
// to
import textArea from 'Components/textArea'
```
#### * Don't implement code in `index` in order to make your dev environment tabs more clear.

