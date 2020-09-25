# markdown-it-concat-code

Concatenate all or some fenced code blocks from a markdown file.

[markdown-it]: https://github.com/markdown-it/markdown-it

## Usage

```js
const md = require('markdown-it')()
  .use(require('markdown-it-concat-code'), opts, src);
```

The `opts` object can contain:

Name       |  Type  | Description
-----------|--------|----------------------------------------------------------------------------
`lang`     | string | Only include code blocks specifying `lang' as the language. If not specified, null or empty string then return all fenced code blocks.
`separator`| string | Append this string after each code block included in output. Defaults to '\n'.

`src` is an object whose value will be filled with the concatenated code blocks.

## Example

```js
const mdconcat = require('./').default

var mds = fs.readFileSync('README.md', 'utf8');
var src = {};

// all code blocks
md().use(mdconcat, {}, src).parse(mds, {});

console.log(src.value);

// with `lang` specified
md().use(mdconcat, { lang: 'c' }, src).parse(mds, {});

console.log(src.value);
```

## Testing

`npm run test`

```c
// Some C code for test case
```
