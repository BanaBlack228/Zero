import requests

def get_gender_data(name: str) -> dict:
    url = "https://api.genderize.io/"
    response = requests.get(url)
    data = response.json()
    return data

def parse_gender_data(data: dict) -> None:
    pass

gender_data = get_gender_data(name="Elena")
print(gender_data)
print(parse_gender_data(data=gender_data))