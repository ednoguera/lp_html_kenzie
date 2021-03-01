export const FetchData = (url, body) => {
    console.log(body)

    fetch(url, {
        "method": 'POST',
        "headers": {
            "Content-type": "application/json",
            'Api-Key': {
                "Api-Token": "469e5872940f20c30730dcef3dcf85cbb8fc28c2b9e68813929c99e490ab86c236b88512"
            }
        },
        "body": body,
        "mode": 'no-cors'
    })
        .then(response => console.log("Response: ", response.json()))
        .then(data => console.log("Data: ", data))

}

