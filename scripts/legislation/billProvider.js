let bills = []

export const getBills = () => {
    return fetch("http://localhost:3000/legislations?_expand=interest")
        .then(response => response.json())
        .then(response => bills = response)
}

export const useBills = () => bills.slice()