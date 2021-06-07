import csv
import json
import requests

url = "http://localhost:1337/courses/"


csvfile = open('courses.csv', 'r')
jsonfile = open('courses.json', 'w')

fieldnames = ("t")
reader = csv.DictReader( csvfile, fieldnames)
courses = list()

for row in reader:
    courses.append({ "title": row["t"]})
    json.dump(row, jsonfile)
    jsonfile.write('\n')

print(courses)

for element in courses:
    data ={"title": element["title"]}
    payload = json.dumps(data)
    headers = {
        'content-type': "application/json",
        'cache-control': "no-cache",
        'postman-token': "79fe6b1b-8384-b1b6-4d06-701c947b4ec2"
    }

    response = requests.request("POST", url, data=payload, headers=headers)

    print(response.text)