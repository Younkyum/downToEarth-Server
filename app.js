const express = require("express")
const app = express()
const challengesRouter = require("./router/challengesRouter")
const recordsRouter = require("./router/recordsRouter")
const tempRouter = require("./router/temp")

/** express로 3000포트에 호스팅 */
app.use(express.json());

app.listen(3000, () => {
    console.log("Connected. Listening in port 3000")
});


app.use("/challenges", challengesRouter);
app.use("/challenges", recordsRouter);
app.use("/temp", tempRouter);