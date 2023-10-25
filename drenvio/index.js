require("dotenv").config();
const { PORT } = process.env || 3001;
const app = require("./src/app");
const { mongoose } = require("./src/db");

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server raised in port: ${PORT || 3001}`);
});
