var app = express();

//static files
app.use(express.static('./public'));



//listen to port
app.listen(3000);
console.log("Listening to port 3000.")


