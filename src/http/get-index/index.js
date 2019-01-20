let arc = require('@architect/functions');
let url = arc.http.helpers.url;

exports.handler = async function http (req) {
    return {
        type: 'text/html; charset=utf8',
        body: `<!DOCTYPE html>
<html>
  <head>
    <title>hey</title>
  </head>
  <body>
    <App></App>
    <script src=${url('app.mjs')} type=module crossorigin></script>
  </body>
</html>`
    };
};
