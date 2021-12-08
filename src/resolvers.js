export default {
  Query: {
    allCars: async (parent, args, { Car }) => {
      const cars = await Car.find();
      return cars.map((x) => {
        x._id = x.id.toString();
        return x;
      });
    },
  },
  Mutation: {
    createCar: async (parent, args, { Car }) => {
      const car = await new Car(args).save();
      car._id = car.id.toString();
      return car;
    },
    updateCarYear: async (parent, args, { Car }) => {
      const car = await Car.findOneAndUpdate(
        { _id: args._id },
        { $set: { anio: args.anio } },
        { new: true }
      );
      car._id = car._id.toString();
      return car;
    },
  },
};
