
const express = require('express')
const app = express()
const userRoute = require('./routes/indexRouter');
const blogRoute = require('./routes/blogRouter');
const { connectionToMongodb } = require('./config/config');

 // Views
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, 'views'));

// Connect to MongoDB
connectionToMongodb();

// Routes
app.use('/users', userRoute);
app.use('/blogs', blogRoute);
app.use('/', uploadRoute);

app.get("/", (req, res) => {
    res.render("dashboard");
  });

  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  
  app.get("/login", (req, res) => {
    res.render("login");
  });