const Express = require('Express');
const app = Express();

app.listen(3000, ()=>{
  console.log('server is started');
});

const user = [
  [0, "Leila", 20],
  [1, "Murad", 15],
  [2, "Anar", 33],
  [3, "Aliyev", 57]
];

app.get('/', (req, res) => {
  res.json(user);
});
