import psycopg2

# объект соединения с БД
try:
    conn = psycopg2.connect(
        dbname="postgres",
        user="postgres",
        password="postgres",
        host="localhost",
        post="5433"
    )
    print("Соединение с БД установлено")
    #                                      user     password host      post dbname
    #conn = psycopg2.connect("postgresql://postgres:postgres@localhost:5433/postgres")
except Exception as err:
    conn=None
    print(f"Возникла ошибка {err}")

# объект курсор для выполнения запросов

conn.autocommit = True #немедленное выполнение команды с изминением состояния БД

cur = conn.cursor()
cur.execute("SELECT version();")

version = cur.fetchone()
cur.close()
print(version)

#Команда которая создала базу данных в pgAdmin
# with conn.cursor() as cur:
#     cur.execute("CREATE DATABASE library;")

create_table_category = """
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
"""

create_table_products = """
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT REFERENCES categories(id)
);

"""

with conn.cursor() as cur:
    cur.execute(create_table_category)
    cur.execute(create_table_products)

insert_data_category = """
INSERT INTO categories (name) VALUES 
('Электроника'),
('Компьютеры'),
('Мобильные телефоны');

"""

insert_data_product= """
INSERT INTO products (name, description, price, category_id) VALUES 
('Смартфон', 'Современный смартфон с большим экраном', 599.99, 3),
('Ноутбук', 'Мощный ноутбук для работы и игр', 999.99, 2),
('Наушники', 'Беспроводные наушники с хорошим звуком', 199.99, 1);

"""

# with conn.cursor() as cur:
#     cur.execute(insert_data_product)
#     cur.execute(insert_data_category)

#Выбор всех товаров с их категориями
query_1 = """
SELECT p.id, p.name AS product_name, c.name AS category_name, p.price
FROM products p
JOIN categories c ON p.category_id = c.id;
"""

with conn.cursor() as cur:
    cur.execute(query_1)
    result = cur.fatchall()

print("Выбор всех товаров с их категориям:")
print(*result, sep='\n')

conn.close()

#Количество товаров по каждой категории
query_2 = """
SELECT c.name AS category_name, COUNT(p.id) AS product_count
FROM categories c
LEFT JOIN products p ON c.id = p.category_id
GROUP BY c.name;
"""

with conn.cursor() as cur:
    cur.execute(query_2)
    results = cur.fatchall()

print("Количество товаров по каждой категории:")
print(*result, sep='\n')

conn.close()