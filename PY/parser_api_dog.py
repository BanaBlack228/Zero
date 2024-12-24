import requests
from  random import randint

# resp = requests.get(url)
# data = resp.json()
# print(data)
# print(resp.text)

def get_image_link(url: str) -> str:
    resp = requests.get(url)
    data = resp.json()
    link = data.get("message")

    return link

def download_image(url: str) -> None:
    resp = requests.get(url)
    image = resp.content
    with open("image.jpg", "wb") as f:
        f.write(image)
# /api/breeds - PATH-param(параметры пути)
# api_url = "https://dog.ceo/api/breeds/image/random"
# link = get_image_link(url=api_url)
# download_image(url=link)

"""
1. Скачать 30 разных картинок
2. Создать папки для каждой породы собак
3. Имя картинки должно быть poroda_img_randint.jpg (samoyed_img_456.jpg, jack_terrier_img_13.jpg)
4*. Реализовать проверку существования файла с таким именем 
    (если файл с таким именем существует, сгенирировать случайное число еще раз)

https://dog.ceo/api/breeds/image/random   
/api/breeds - PATH-param(параметры пути)

https://api.genderize.io?name=misha
? - отделяет домен от QUERY - параметров 
name=misha = QUERY-param (параметр запроса)
"""