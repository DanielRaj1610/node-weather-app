const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude, longitude)
    const url = 'http://api.weatherstack.com/current?access_key=84e23fda1b095f16dce3a316d82d9fee&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast