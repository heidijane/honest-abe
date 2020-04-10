let corporations = []

export const getCorporations = () => {
    return fetch("http://localhost:3000/corporations?_embed=corporatedonations")
        .then(response => response.json())
        .then(response => corporations = response)
}

export const useCorporations = () => corporations.slice()

let corporationInterests = []

export const getCorporationInterests = () => {
    return fetch("http://localhost:3000/corporateinterests")
        .then(response => response.json())
        .then(response => corporationInterests = response)
}

export const useCorporationInterests = () => corporationInterests.slice()