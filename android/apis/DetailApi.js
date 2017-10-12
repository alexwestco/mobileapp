var DetailApi = {
    getData() {
        var url = "http://www.cityvibes.gr/android/official_files/35"
        return fetch(url).then((res) => res.json(), (reason) => console.log("KAPPA REALITY" + reason))
    }
}

module.exports = DetailApi
