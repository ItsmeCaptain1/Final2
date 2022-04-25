const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  databse: "final2",
  password: "mummypapa",
  port: 5433,
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM final2 ORDER BY id", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
