"""
Дeкоратор - это функция позволяет или расширять поведение другой функции или метода
"""
import  time


def decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

def repeat(num_time):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_time):
                func(*args, **kwargs)
        return wrapper
    return decorator

def timing(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        func(*args, **kwargs)
        end = time.time()
        print(f"Время выполнения: {end - start} сек")
    return wrapper

@decorator
def hello():
    print("Hello")

@repeat(5)
def greet(name):
    print(f"Hello,{name}")

@timing
def parse_page():
    time.sleep(3)

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n + 1)

def memoize(func):
    cashe = {}
    def wrapper(*args):
        if args in cashe:
            return cashe[args]
        else:
            result = func(*args)
            cashe[args] = result
            return result

hello()
greet(name="Alis")
parse_page()