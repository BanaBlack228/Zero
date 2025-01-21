import os

"""
@classmethod - это метод, 
который принимает ссылку на сам класс в качестве первого аргумента. 
Он может изменять состояние класса, а не конкретного экземпляра.

@staticmethod - это метод,
который не принимает ни ссылку на класс, ни ссылку на экземпляр в качестве аргумента.
Он не может изменять состояние класса или экземпляра.
Это просто функция, которая принадлежит классу,
но не зависит от его состояния.
"""

class Person:
    country_of_origin = 'russia'
    count = 0

    @staticmethod
    def check_exists_file(filename):
        if os.path.isfile(filename):
            return True
        raise ValueError("File not exist")
    @classmethod
    def init_from_birthday(cls, name, birthday):
        age = 2025 - birthday
        return cls(name,age)

    @classmethod
    def edit_country(cls):
        cls.country_of_origin = cls.country_of_origin.title()

    @classmethod
    def increment_count(cls):
        cls.count += 1

    def get_object_count(cls):
        def __init__(self, name, age):
            self.name = name
            self.age = age
            Person.increment_count()

    def hello(self):
        print(f"My name is {self.name}")

    def change_age(self, new_age):
        self.age = new_age

    def _str_(self):
        return self.name

person = Person(name="Dima", age= 23)
person_2 = Person.init_from_birthday(name="Elena", birthday=1994)