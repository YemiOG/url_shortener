import moongoose from "moongoose";
import config from "config";

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await moongoose.connect(db, { useNewUrlParser: true });
    console;
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
export default connectDB;
