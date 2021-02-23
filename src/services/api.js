export const FetchData = (url, body) => {
    console.log(body)

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Authorization": {
                "Api-Token": "d65594d3b238d28b01ccdf4aab08e2f8e4e51b42c17569938a7a821e3533156b885bec41"
            }
        },
        body: body,
        mode: 'no-cors'
    })
        .then(response => console.log("Response: ", response))
        .then(data => console.log("Data: ", data))

}

