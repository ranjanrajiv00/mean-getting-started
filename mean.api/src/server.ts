import app from './app';
const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`server is strated at ${port}`);
});