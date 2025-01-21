from http.client import responses

import requests

from bs4 import BeautifullSoup as BS

import json

class Parser:
    def __init__(self, url):
        self.url = url
        self.data_weather = {}
        self.data_vacancies = []
        self.html = response.text

    def get_html(self):
        response = requests.get(self.url)

    def parse_html(self):
        self.get_html()
        soup = Bs(self.html, "parser.html")
        data = soup.find_all("table", class_="weather")
        self.data_weather = {"data": data}

    def write_data_to_file(self):
        with open("file.txt", "w") as f:
            json.dump(self.data_weather, f, indent=2)


parser_weather = Parser(url="www.weather.com")
parser_weather.parse_html()
