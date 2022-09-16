module.exports = {
    listen: function(app, PORT){
        app.listen(PORT,()=>{
            console.log("server has been started on port:"+PORT);
        });
    }
}