module.exports = {
  copyToastCss: {
    src: ['{{ROOT}}/../node_modules/ng2-toastr/bundles/ng2-toastr.min.css'],
    dest: '{{BUILD}}'
  }, copyToastJs: {
    src: ['{{ROOT}}/../node_modules/ng2-toastr/bundles/ng2-toastr.min.js'],
    dest: '{{BUILD}}'
  },
  copyFontAwesome: {
    src: ['{{ ROOT }} / node_modules / font - awesome / fonts/**/ *'],
  dest: '{ { WWW } } /assets/fonts'
    },
  jqueryCopy: {
    src: ['{{ROOT}}/../node_modules/jquery/src/jquery.js'],
    dest: '{{BUILD}}'
  }
}
