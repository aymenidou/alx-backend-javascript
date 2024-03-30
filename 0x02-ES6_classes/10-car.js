export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(val) {
    this._brand = val;
  }

  set motor(val) {
    this._motor = val;
  }

  set color(val) {
    this._color = val;
  }

  get brand() { return this._brand; }

  get motor() { return this._motor; }

  get color() { return this._color; }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
