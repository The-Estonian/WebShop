import requests

def addTwentyProductsToDB():
    ITEMCOUNT = 20

    get_from_url = "https://fakestoreapi.com/products/"
    send_to_url = "http://localhost:8080/api/products"

    for index in range(1,ITEMCOUNT+1):
        # print(url+str(index))
        get_response = requests.get(get_from_url+str(index))
        if get_response.status_code == 200:
            data = get_response.json()
            remove_keys = ['id', 'rating']
            cleanData = {key: value for key, value in data.items() if key not in remove_keys}
            post_response = requests.post(send_to_url, json=cleanData)
            if post_response.status_code != 200:
                print("Error routing data to DB! Could the PostgreSQL DB be down?")
            else:
                print(f"Item nr: {index} sent to DB!")
        else:
            print(f"Failed to fetch data. HTTP Status code: {response.status_code}")

def addFiftyColorsToDB():
    ITEMCOUNT = 20

    get_from_url = "https://fakestoreapi.com/products/"
    send_to_url = "http://localhost:8080/api/products"

    for index in range(1,ITEMCOUNT+1):
        # print(url+str(index))
        get_response = requests.get(get_from_url+str(index))
        if get_response.status_code == 200:
            data = get_response.json()
            remove_keys = ['id', 'rating']
            cleanData = {key: value for key, value in data.items() if key not in remove_keys}
            post_response = requests.post(send_to_url, json=cleanData)
            if post_response.status_code != 200:
                print("Error routing data to DB! Could the PostgreSQL DB be down?")
            else:
                print(f"Item nr: {index} sent to DB!")
        else:
            print(f"Failed to fetch data. HTTP Status code: {response.status_code}")

addTwentyProductsToDB()