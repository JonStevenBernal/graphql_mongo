import mogoose from "mongoose";

const Schema = mogoose.Schema;

const CarSchema = new Schema({
  name: String,
  modelo: String,
  anio: Number,
  marca: String,
});

const Car = mogoose.model("cars", CarSchema);

export default Car;
