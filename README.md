# perseus-configured
Perseus, with fewer global deps

## About

A version of https://github.com/Khan/perseus that has all the global js dependencies in place.

This does not include the css dependencies, however you can look at QuestionRenderer.js for
an example of how to load those too, if you are using webpack or another system that supports
importing css files.

Usage:

```
npm install --save perseus-configured
```

```
import Perseus from 'perseus-configured';
```

or

```
const Perseus = require('perseus-configured');
```

## Example

This repo is also an example application for using Perseus. See [App.js](src/App.js)
and [QuestionRenderer.js](src/QuestionRenderer.js) for an example of how to use
perseus-configured.

To start it, run:

```
npm install
npm run start
```

Or, if you'd like to supply Perseus's dependencies yourself, feel free to use
[perseus-globals.js](src/perseus-globals.js), [i18n.js](src/lib/i18n.js), and
[kas.js](src/lib/kas.js) for your own project.

## License

[MIT licensed](LICENSE)

