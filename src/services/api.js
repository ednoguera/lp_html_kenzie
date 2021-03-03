export const FetchData = (body) => {
    console.log(body);

    fetch("https://kenzie39049.api-us1.com", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authentication: {
                "Api-Token":
                    "3d1ff2d6411377e74b3d4897d986b2e46d764c248e38f8550737f8b05976fa7a6a5d2930"
            }
        },
        body: body,
        mode: "no-cors"
    })
        .then((response) => console.log("Response: ", response.json()))
        .then((data) => console.log("Data: ", data));
};
