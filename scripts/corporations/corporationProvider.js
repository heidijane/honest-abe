let corporations = []

export const getCorporations = () => {
    return fetch("http://localhost:3000/corporations")
        .then(response => response.json())
        .then(response => corporations = response)
}

export const useCorporations = () => corporations.slice()