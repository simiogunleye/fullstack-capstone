const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req,res) => {
	return res.status(200).send('Success')
});

app.listen(process.env.PORT || 8080);
 
module.exports = app;
