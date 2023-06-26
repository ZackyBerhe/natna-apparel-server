const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema/schema");
// const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(5000, () => {});
