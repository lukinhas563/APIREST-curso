import app from "./app";

const port = 3002;
app.listen(port, () => {
    console.log(`CTRL + Clique em http://localhost:${port}`);
});