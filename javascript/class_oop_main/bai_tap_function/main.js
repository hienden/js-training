// **Bài tập 1: Lớp đối tượng hình chữ nhật**

// Yêu cầu:

// - Tạo một lớp đối tượng **`Rectangle`** với hai thuộc tính **`width`** và **`height`**.
// - Cài đặt phương thức **`getArea()`** để tính diện tích của hình chữ nhật (Area = width * height).
// - Cài đặt phương thức **`getPerimeter()`** để tính chu vi của hình chữ nhật (Perimeter = 2 * (width + height)).

class Rectangle {
  width;
  height;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(2, 3);
console.log(rectangle1.getArea());
console.log(rectangle1.getPerimeter());

// **Bài tập 2: Kế thừa trong lớp đối tượng động vật**

// Yêu cầu:

// - Tạo một lớp đối tượng **`Animal`** với hai thuộc tính **`name`** (tên) và **`age`** (tuổi).
// - Tạo các lớp con **`Dog`**, **`Cat`** và **`Bird`** kế thừa từ lớp **`Animal`**.
// - Mỗi lớp con phải có một phương thức **`sound()`** riêng để in ra tiếng kêu tương ứng của động vật.

class Animal {
  name;
  age;
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }
}
class Dog extends Animal {
  sound() {
    return "gau gau gau";
  }
}
class Cat extends Animal {
  sound() {
    return "meo meo meo";
  }
}
class Bird extends Animal {
  sound() {
    return "liu lo...";
  }
}

const becgie = new Dog("bec1", 2);
const tamthe = new Cat("tam1", 1);
const hoami = new Bird("mi1", 1);

console.log("dog", becgie.sound());
console.log("cat", tamthe.sound());
console.log("bird", hoami.sound());

// **Bài tập 3: Lớp đối tượng đơn giản**

// Yêu cầu:

// - Tạo một lớp đối tượng **`SimpleCalculator`** với các phương thức **`add(a, b)`**, **`subtract(a, b)`**,
// **`multiply(a, b)`** và **`divide(a, b)`**.
// - Mỗi phương thức nhận hai tham số **`a`** và **`b`**, và trả về kết quả sau khi thực hiện phép tính tương ứng.

class SimpleCalculator {
  a;
  b;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}
const result = new SimpleCalculator();

console.log(result.add(11, 2));
console.log(result.subtract(11, 2));
console.log(result.multiply(11, 2));
console.log(result.divide(11, 2));

// **Bài tập 4: Lớp đối tượng xe hơi**

// Yêu cầu:

// - Tạo một lớp đối tượng **`Car`** với ba thuộc tính **`make`** (hãng xe), **`model`** (mẫu xe), và **`year`** (năm sản xuất).
// - Cài đặt phương thức **`displayInfo()`** để hiển thị thông tin của chiếc xe theo định dạng:
// "Hãng xe: [make], Mẫu xe: [model], Năm sản xuất: [year]".

class Car {
  make;
  model;
  year;
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return `Hãng xe: ${this.make}, Mẫu xe: ${this.model}, Năm sản xuất: ${this.year}`;
  }
}
const car1 = new Car("Honda", "city", 2019);
console.log(car1.displayInfo());

// **Bài tập 5: Getter và Setter**

// Yêu cầu:

// - Tạo một lớp đối tượng **`Temperature`** để chuyển đổi giữa hai loại nhiệt độ, Celsius và Fahrenheit.
// - Sử dụng getter và setter để đảm bảo rằng dữ liệu đầu vào luôn đúng và không hợp lệ.
// - Cài đặt phương thức **`convertToFahrenheit(celsius)`** để chuyển đổi từ độ Celsius sang độ Fahrenheit (Fahrenheit = Celsius * 9/5 + 32).
// - Cài đặt phương thức **`convertToCelsius(fahrenheit)`** để chuyển đổi từ độ Fahrenheit sang độ Celsius (Celsius = (Fahrenheit - 32) * 5/9).
