/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const { join } = require('path');

const app = express();
app.set('PORT', process.env.PORT || 4000);

console.log(app.get('PORT'));
const publicPath = join(__dirname, '..', 'dist');
app.use(express.static(publicPath));

app.get('*', (_, res) => {
	res.sendFile(join(publicPath, 'index.html'));
});

app.listen(app.get('PORT'), () => {
	console.log('Ready for running in port: ', app.get('PORT'));
});
