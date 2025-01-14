"""
ООП - объектно-ориентированное программирование
Класс - общее описание предметной области на ЯП
Объект - экземпляр (конкретный представитель класса)
Метод - функция, связанная с объектом класса (классом)
Атрибут - характеристика (свойство) объекта или класса
Конструктор - метод, который управляет созданием объекта
"""

class Car:
    def __init__(self, brand, model, year, power, currence="RUB"):
        self.brand = brand
        self.model =model
        self.year = year
        self.power = power
        self.country = "Armenia"
        self.currence = currence



    # метод объекта
    def go(self):
        print(f"{self.brand}  {self.model} to go!")

    def turn(self, direction):
        print(f"{self.brand}  {self.model} turn {direction}")

car_audi = Car(brand="Audi", model="A6", year=2022, power=249)
car_BMW= Car(brand="BMW", model="X5", year=2022, power=349)

car_BMW.go()
car_audi.go()

print(car_audi.country)
print(car_audi.currence)

car_BMW.turn(direction="left")
car_BMW.turn(direction="right")