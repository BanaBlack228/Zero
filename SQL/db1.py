from xml.sax.expatreader import version

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
cur = conn.cursor()
cur.execute("SELECT version();")
version = cur.fetchone()
print(version)