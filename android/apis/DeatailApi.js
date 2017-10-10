var DetailApi = {
    getData(shopID) {
        var url = "http://www.cityvibes.gr/android/official_files/" + shopID
        return fetch(url).then((res) => res.json(), (reason) => console.log("KAPPA REALITY" + reason))
    }
}

module.exports = DetailApi