const express = require("express");
const viewRouter = require('./routes/viewRoutes');
const apiRouter = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(apiRouter);
app.use(viewRouter);


app.listen(PORT, () => {
  console.log("listening on port 3001");
});

