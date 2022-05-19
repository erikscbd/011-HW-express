const express = require("express");
const viewRouter = require('./routes/viewRoutes');
const apiRouter = require('./routes/apiRoutes');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(apiRouter);
app.use(viewRouter);




app.listen(3001, () => {
  console.log("listening on port 3001");
});

