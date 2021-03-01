const url = "https://startsuacarreira.kenzie.com.br/?utm_source=teste&utm_medium=utmbuilder&utm_campaign=daniel"

const newUrl = url.split("?")
const urlParams = newUrl[1]
const params = urlParams.split("&")

console.log(newUrl)
console.log(urlParams)
console.log(params[1].split("=")[1])
