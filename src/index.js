import express from "express";
const app = express();

import mogoose from "mongoose";

let urlDB =
  "mongodb+srv://PlatziCourse:PlatziCourse12345@platzicourse.2n7px.mongodb.net/Grahpql-mongo?retryWrites=true&w=majority";
mogoose
  .connect(urlDB, {})
  .then(() => console.log("Base de datos Connectada"))
  .catch((err) => console.log(err));

import Car from "./models/Car";

import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";

// settings

app.set("port", process.env.PORT || 3000);

async function startApolloServer(typeDefs, resolvers) {
  const SERVER = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      Car,
    },
    introspection: true,
    playground: true,
    playground: {
      endpoints: `http://localhost:3000/graphql`,
      settings: {
        "editor.theme": "dark",
      },
    },
  });
  await SERVER.start();
  SERVER.applyMiddleware({ app });

  app.listen(app.get("port"), () => {
    console.log("Server en Puerto", app.get("port"));
  });
}

startApolloServer(typeDefs, resolvers);
