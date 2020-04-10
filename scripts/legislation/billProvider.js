let bills = []

export const getBills = () => {
    return fetch("http://localhost:3000/legislations")
        .then(response => response.json())
        .then(response => bills = response)
}

export const useBills = () => bills.slice()