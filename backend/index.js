const PORT = 5000;
const app = require('./app.js');
app.listen(PORT,()=>{
    console.log(`server is Listening at http://local:${PORT}`);
});