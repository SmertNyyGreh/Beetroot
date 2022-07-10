// const objectCar = {
//   maker: "Valkswagen",
//   model: "Passat B7",
//   graduationYear: "2012-2015",
//   fuelTankObject: 40,
//   availableAmountOfFuel: 37,
//   fuelConsumptionPer100Km: 8,
//   inforCar() {
//     console.log(`Виробник даного автомобіля:  `, this.maker);
//     console.log(`Модель машини:`, this.model);
//     console.log(`Рік випуску:  `, this.graduationYear);
//     console.log(`Обсяг паливного баку складає:  `, this.fuelTankObject + ` літрів.`);
//     console.log(`Зараз в баці є :  `, this.availableAmountOfFuel + ` літрів.`);
//     console.log(`Розхід топлива:`, this.fuelConsumptionPer100Km + ` літрів на 100 км.`);
//   },
// };
// Функція щоб переглянути загальні хакактеристики автомобіля
// objectCar.inforCar();

// Функція щоб перевірити наявну кількість палива
// console.log(objectCar.availableAmountOfFuel);

// Функція розходу топлива: Сюди необіхдно вказати кількість кілометрів скільки має проїхати автомобіль
// distanceTraveled());

// Функція щоб заправити автомобіль
// carRefueling();

// function distanceTraveled(distanceToOvercome) {
//   //   alert("Автомобілю вистачить палива не більше ніж на 500 кілометрів");
//   //   const distanceToOvercome = +prompt(
//   //     "Вкажіть відстань в кілометрах яку має проїхати автомобіль:"
//   //   );
//   console.log("Автомобілю вистачить палива не більше ніж на 500 кілометрів.");
// //   const distanceToOvercome = 432.5;
//   if(distanceToOvercome > fuelCheck(objectCar.availableAmountOfFuel) - 30){
//    console.log('Автомобілю не вистачить палива щоб доїхати до заправки до місця призначення а потім до заправки, спробуйте спочатку до-заправитися.')
//   } else if(distanceToOvercome < fuelCheck(objectCar.availableAmountOfFuel)){
//    console.log('Все гаразд автомобілю вистачить палива можна їхати))')
//   subtractionOfCapacity(objectCar.fuelConsumptionPer100Km, distanceToOvercome);
//   }
// }
// function subtractionOfCapacity(l, km) {
//   if (km <= 500) {
//     const result = (km * l) / 100;
//     console.log(`На ${km} Km, автомобіль витратив ${result} літрів.`);
//     objectCar.availableAmountOfFuel = objectCar.availableAmountOfFuel - result;
//     console.log(`Зараз в автомобілі є ` + (objectCar.availableAmountOfFuel).toFixed(2) +` літрів. І він може проїхати ` + (fuelCheck(objectCar.availableAmountOfFuel)).toFixed(2) +` кілометрів.`);
//     console.log(`Але памятайте щоб доїхати до заправки йому необхідно 30 Км.`);
//    return result
//   }
// }
// let kilometers;
// function fuelCheck(numberOfLiters){
//  // автомобіль може проїхати літрів
//  kilometers = numberOfLiters * 100 / 8;
//  return kilometers;
// }

// Заправка автомобіля
// function carRefueling(){
   
//       for(; objectCar.availableAmountOfFuel < objectCar.fuelTankObject;){
//          objectCar.availableAmountOfFuel = objectCar.availableAmountOfFuel +1;
//          console.log(`Відбувається заправка `+objectCar.availableAmountOfFuel);
//       }
// }