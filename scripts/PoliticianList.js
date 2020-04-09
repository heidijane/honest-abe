import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politician.js"

const contentTarget = document.querySelector("#politicianList")

export const ShowPoliticianList = () => {
    render()
}

const render = () => {
    const politicians = usePoliticians()

    contentTarget.innerHTML = politicians.map(politician => {
        return Politician(politician)
    }).join('')
}