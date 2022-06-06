const MYSQL = require('MYSQL');
const connection = MYSQL.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '12345',
  database: 'task'
});
connection.connect((err) => {
  if (!err) {
    console.log("SUCCESS");
  }
  else {
    console.error(err)
  }
});

connection.query(`
  INSERT INTO test_table (Task_description, Due_date, Employee, Finished_date)
  VALUES
    ('create get-request handler/task', '2022-05-20', 'Murad', '2020-05-19'),
    ('create post-request handler/task', '2022-05-13', 'Aynur', '2021-03-17'),  
    ('connect node.js to mysql', '2020-04-15', 'Leyla', NULL),
    ('create ER diagram', NULL, 'Yaqub', '2022-04-15'),
`,
  (err, data) => {
    if (!err) {
      console.log(data);
    }
    else {
      console.error(err)
    }
  });
