import { MongoClient } from "mongodb";
let db, articlesCollection;

const connectToDB = async (cb) => {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.aeducdq.mongodb.net/?retryWrites=true&w=majority`
  );
  await client.connect();

  db = client.db("react-blog-db"); // use react-blog-db
  articlesCollection = db.collection("articles");

  cb();
};

export { db, articlesCollection, connectToDB };
