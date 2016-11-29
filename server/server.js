import Express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';

/* eslint-disable no-console */

const port = process.env.PORT || 8081;
const app = new Express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../views', 'index.html'));
});

//app.use(Express.static('static'));

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Running server on port ' + port);
});
