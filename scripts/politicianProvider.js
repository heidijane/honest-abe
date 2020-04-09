let politicians = []

export const getPoliticians = () => {
    return fetch("http://localhost:3000/politicians")
        .then(response => response.json())
        .then(response => politicians = response)
}

export const usePoliticians = () => politicians.slice()