const PORT = 5000;
import app from './app.js';
app.listen(PORT,()=>{
    console.log(`server is Listening at http://local:${PORT}`);
});