require('dotenv').config();
const express = require("express");
const createError = require('http-errors');
const path = require('path')

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));


require("./config/db.config");
require("./config/hbs.config");

const { session, loadUser } = require("./config/session.config");
app.use(session);
app.use(loadUser);

app.use((req, res, next) => {
  const path = req.path;
  res.locals.title = path;
  next();
});

const routes = require("./config/routes.config");
app.use("/", routes);


app.use((req, res, next) => {
   next(createError(404, "Page not found"));
 });


app.use((error, req, res, next) => {
  console.error(error);
   const message = error.message;
   const metadata = app.get("env") === "development" ? error : {};
   const status = error.status || 500;
   res.status(status).render(`errors/500`, { message, metadata });
 });

const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Application listening at port ${port}`));



