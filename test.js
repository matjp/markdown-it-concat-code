const { strictEqual: equal } = require('assert')
const md = require('markdown-it')
const mdconcat = require('./').default
const fs = require('fs')

var mds = fs.readFileSync('README.md', 'utf8')
var src = {}

// all code blocks
md().use(mdconcat, {}, src).parse(mds, {})

equal(
  src.value,
  "const md = require('markdown-it')()\n" +
  "  .use(require('markdown-it-concat-code'), opts, src);\n" +
  '\n' +
  "const mdconcat = require('./').default\n" +
  '\n' +
  "var mds = fs.readFileSync('README.md', 'utf8');\n" +
  'var src = {};\n' +
  '\n' +
  '// all code blocks\n' +
  'md().use(mdconcat, {}, src).parse(mds, {});\n' +
  '\n' +
  'console.log(src.value);\n' +
  '\n' +
  '// with `lang` specified\n' +
  "md().use(mdconcat, { lang: 'c' }, src).parse(mds, {});\n" +
  '\n' +
  'console.log(src.value);\n' +
  '\n' +
  '// Some C code for test case\n' +
  '\n'
)

// with `lang` specified
md().use(mdconcat, { lang: 'c' }, src).parse(mds, {})

equal(
  src.value,
  '// Some C code for test case\n' +
  '\n'
)
