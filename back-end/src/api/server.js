const port = process.env.PORT || 3113;
const app = require('./app');

app.listen(port);
console.log(`Api rodando na porta: ${port}`);
