require("dotenv").config();
const jwt = require("jsonwebtoken");

const data = {
  id: "vrt43v4vrv4rxe23ec2",
  username: "cookie",
  password: "aksjdhasodah",
  createAt: Date.now(),
};

const token = jwt.sign(data, process.env.encrypt, { expiresIn: "168h" });
console.log(token);

jwt.verify(token, process.env.encrypt, (err, decoded) => {
  console.log(decoded);
});

