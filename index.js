module.exports.default = function (md, opts, src) {
  function scanForCode (state) {
    var i, token

    src.value = ''

    for (i = 0; i <= state.tokens.length - 1; i++) {
      if (state.tokens[i].type === 'fence') {
        token = state.tokens[i]
        if (opts.lang && (opts.lang !== '') && (opts.lang !== token.info)) {
          continue
        }
        src.value += token.content + '\n'
      }
    }
  }

  md.core.ruler.push('scanForCode', scanForCode)
}
