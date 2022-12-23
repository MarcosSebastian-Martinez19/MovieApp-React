const API = "https://api.themoviedb.org/3"

export const get = async (path) => {
    const result = await fetch(API + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTRkMzIzZmIyZTJiZjg1YzIxN2RiMDNkODkwNGEzYiIsInN1YiI6IjYzNWMwMTFiYTM5ZDBiMDA3YThlZTgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ng2TmQtKn0_B0_ZubQyRCtK1nsOzQSermIp9ZMvahig",
            "Content-Type": "application/json;charset=utf-8"
        }
    })
    return await result.json()
}