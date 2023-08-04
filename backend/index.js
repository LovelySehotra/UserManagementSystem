const PORT = process.env.PORT || 5500;
const app =require( './app.js');
app.listen(PORT,()=>{
    console.log(`server is Listening at http://localhost:${PORT}`);
});