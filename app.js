const express = require("express")
const app = express()
const challengesRouter = require("./router/challengesRouter")
const recordsRouter = require("./router/recordsRouter")

/** express로 3000포트에 호스팅 */
app.use(express.json());

app.listen(3000, () => {
    console.log("Connected. Listening in port 3000")
});


app.use("/challenges", challengesRouter);
app.use("/records", recordsRouter);