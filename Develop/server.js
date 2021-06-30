const exp = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Initialize the app and create a port

const app = exp();
const PORT = process.env.PORT || 3000;
// Set up body parsing, static, and route middleware

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));
app.use(exp.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// Start the server on the port

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));