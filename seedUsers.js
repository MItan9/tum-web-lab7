const bcrypt = require("bcrypt");
const db = require("./database");

const users = [
  {
    username: "admin",
    password: bcrypt.hashSync("adminpass", 10),
    role: "admin",
    permissions: JSON.stringify(["READ", "WRITE"]),
  },
  {
    username: "visitor",
    password: bcrypt.hashSync("visitorpass", 10),
    role: "visitor",
    permissions: JSON.stringify(["READ"]),
  },
];

users.forEach(({ username, password, role, permissions }) => {
  db.run(
    `INSERT OR IGNORE INTO users (username, password, role, permissions)
     VALUES (?, ?, ?, ?)`,
    [username, password, role, permissions],
    (err) => {
      if (err) console.error(err.message);
      else console.log(`✅ User ${username} added`);
    }
  );
});
