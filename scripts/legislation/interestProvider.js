let interests = []

export const getInterests = () => {
    return fetch("http://localhost:3000/interests?_embed=corporateinterests")
        .then(response => response.json())
        .then(response => interests = response)
}

export const useInterests = () => interests.slice()