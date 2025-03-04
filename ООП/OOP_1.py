"""
ООП - объектно-ориентированное программирование
Класс - общее описание предметной области на ЯП
Объект - экземпляр (конкретный представитель класса)
Метод - функция, связанная с объектом класса (классом)
Атрибут - характеристика (свойство) объекта или класса
Конструктор - метод, который управляет созданием объекта

Инкапсуляция - механизм, позволяющий скрывать вутренние детали реализации объекта
и предоставлять доступ к ним только через определенные методы, чтобы защитить
данные и контралировать доступ к ним
"""

class Car:
    def __init__(self, brand, model, year, power, currence="RUB"):
        self.brand = brand
        self.model =model
        self.year = year
        self.power = power
        self.country = "Armenia"
        self.currence = currence
        self.is_power = False

        # защищенный атрибут
        self._color = "black"

    # метод объекта
    def go(self):
        if self.is_power:
            print(f"{self.brand}  {self.model} TO GO!")
        else:
            print("Car must is POWER ON")

    def turn(self):
        if self.is_power:
            print(f"{self.brand}  {self.model} turn {direction.upper()}")
        else:
            print("Car must is POWER ON")
    def stop(self, direction):
        print(f"{self.brand}  {self.model} turn {direction}")

    def power_on(self):
        if self.is_power:
            print("Car already is POWER ON")
        else:
            print(f"{self.brand}  {self.model} POWER ON")
            self.is_power = True

    def power_off(self):
        if not self.is_power:
            print("Car already is POWER OFF")
        else:
            print(f"{self.brand}  {self.model} POWER OFF")
            self.is_power = False

car_audi = Car(brand="Audi", model="A6", year=2022, power=249)
car_BMW= Car(brand="BMW", model="X5", year=2022, power=349)

car_BMW.go()
car_audi.go()

print(car_audi.country)
print(car_audi.currence)

car_BMW.turn(direction="left")
car_BMW.turn(direction="right")


@property
def speed (self):
    return  self.__speed
def speed(self,value):
    self.__speed = value

# Дочерний класс грузовых машин
class Truck(Car):
    # указываем характеристики родительского класса и новые характеристики дочернего класса
    def __init__(self, brand, model, year, power, capasity, axles, currence="RUB"):
        # вызываем конструкцию родительского класса с его параметрами через функцию super()
        super().__init__(brand, model, year, power, currence="RUB")
        self.capasity = capasity
        self.axles = axles

def tilt_trailer(self):
    print(f"{self.brand} {self.model} tilt trailer")

def power_off(self):
    super().power_off()
    print("the method of Truck class")

truck = Truck(brand="Volvo",model="2xx", year="2019", capasity=4000, axles=4,power=700)
truck.power_on()


