import requests

request = requests.get('https://www.betrybe.com')

print("status code:", request.status_code)
print("headers:", request.headers)
print("header - content-type:", request.headers['Content-Type'])
