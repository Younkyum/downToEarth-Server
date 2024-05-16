require("express")
const app = express()


/** express로 3000포트에 호스팅 */
app.use(express.json());

app.listen(3000, () => {
    console.log("Connected. Listening in port 3000")
});