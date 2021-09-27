const fs = require("fs");
const path = require("path");

const getAllUser =  () => {
  const user =  fs.readFileSync(path.join(__dirname, "./user.json"), {
    encoding: "utf8",
  });
  return JSON.parse(user);
};
const insertUser =  (user) => {
  try {
    const db =  getAllUser();
    db.push(user);
     fs.writeFileSync(
      path.join(__dirname, "./user.json"),
      JSON.stringify(db,null, 4),
      { encoding: "utf-8" }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { getAllUser, insertUser };
