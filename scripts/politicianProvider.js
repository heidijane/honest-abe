let politicians = []

export const getPoliticians = () => {
    return fetch("http://localhost:3000/politicians?_embed=pacdonations&_embed=politicianlegislations")
        .then(response => response.json())
        .then(response => politicians = response)
}

export const usePoliticians = () => politicians.slice()