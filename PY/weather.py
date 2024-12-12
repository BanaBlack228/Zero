import json

import requests
from requests.exceptions import ConnectionError
from bs4 import BeautifulSoup as Bs
from fake_useragent import UserAgent

def get_html (url: str) -> str:
    headers = {'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"}
    try:
        responses = requests.get(url, headers=headers)
        #если УСПЕШНЫЙ запрос ИЛИ переадресция - то хорошо
        if responses.status_code == 200 or str(responses.status_code)[0] == '3':
            html = responses.text
            return html
        else:
            print(f"Ошибка запроса. Код отвтеа:{responses.status_code}")
            return None
    except ConnectionError as err:
        print(f"Ошибка запроса. \n{err}")
        return None

def get_weather_from_day(html: str) -> dict:
    soup = Bs(html, "html.parser")
    pass
    weather_info = {}
    day = soup.find("div", class_="dates short-d").text
    weather_info[day] = {}
    table = soup.find("div", class_="weather-short").find('table')
    table_rows = table.find_all('tr')
    for row in table_rows:
        weather_day = row.find('td', class_='weather-day').text

        weather_info[day][weather_day] = {}

        weather_temperature = row.find('td', class_='weather-temperature').text
        weather_type = row.find('div', class_='wi')['title']
        weather_feeling = row.find('td', class_='weather-feeling').text
        weather_probability = row.find('td', class_='weather-probability').text

        weather_info[day][weather_day]["weather_temperature"] = weather_temperature
        weather_info[day][weather_day]["weather_type"] = weather_type
        weather_info[day][weather_day]["weather_feeling"] = weather_feeling
        weather_info[day][weather_day]["weather_probability"] = weather_probability
    return weather_info

def write_data_to_json(data: dict) -> None:
    with open("weather.json", "w", encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

URL = "https://world-weather.ru/pogoda/russia/saint_petersburg/7days/"
html = get_html(url=URL)
if html:
    data = get_weather_from_day(html)
    write_data_to_json(data)

