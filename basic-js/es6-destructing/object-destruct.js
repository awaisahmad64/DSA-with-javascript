// before object destructuring
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2009,
  color: 'golden',
};
myVehicleIs(vehicleOne);
function myVehicleIs(vehicle) {
  console.log(
    'My vehicle brand is ' +
      vehicle.brand +
      ', model is ' +
      vehicle.model +
      ' type is ' +
      vehicle.type +
      ' year is ' +
      vehicle.year +
      ' and color is ' +
      vehicle.color
  );
}
// after destructuring
myRide(vehicleOne)
function myRide({ brand, model, type, year, color }) {
  console.log(
    'My vehicle brand is ' +
      brand +
      ' model is ' +
      model +
      ' type is ' +
      type +
      ' year is ' +
      year +
      ' color is ' +
      color
  );
}
