Package.describe({
  name: 'pcmagas:minifier-es',
  summary: "JavaScript minifier",
  version: "2017.8.3_6"
});

Npm.depends({
  "source-map": "0.5.6",
  "uglify-es": "3.0.18",
});

Package.onUse(function (api) {
  api.use('babel-compiler@6.19.2');
  api.export(['meteorJsMinify']);
  api.addFiles(['minifier.js'], 'server');
});
