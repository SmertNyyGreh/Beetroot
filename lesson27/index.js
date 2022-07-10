const p = 3.14;
class Circle {
  constructor(value) {
    this.radius = value;
  }
  get circleRadius() {
    return `Радіус цього кола складає ${this.radius}`;
  }
  set circleRadius(value) {
    this.radius = value;
  }
  get circleDiameter() {
    return `Діаметр вказаного кола складає ${this.radius * 2}`;
  }
  sArea() {
    return `Площа цього кола з вказаним діаметром буде дорівнювати ${p * this.radius ** 2}`;
  }
  cLength(){
   return `Довжина цього кола з вказаним діаметром буде дорівнювати ${2 * p * this.radius}`;
  }
  
}
const cirleR = new Circle(4);
cirleR.circleRadius = 7;
console.log(cirleR.circleRadius);
console.log(cirleR.circleDiameter);
console.log(cirleR.sArea());
console.log(cirleR.cLength());