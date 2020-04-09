let pacs = []

export const getPacs = () => {
    return fetch("http://localhost:3000/pacs?_embed=corporatedonations")
        .then(response => response.json())
        .then(response => pacs = response)
}

export const usePacs = () => pacs.slice()