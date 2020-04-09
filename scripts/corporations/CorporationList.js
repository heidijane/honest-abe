import { useCorporations } from "./corporationProvider.js"
import { Corporation } from "./Corporation.js"

const contentTarget = document.querySelector("#corporationList")

export const ShowCorporationList = () => {
    render()
}

const render = () => {
    const corporations = useCorporations()

    contentTarget.innerHTML = corporations.map(corporation => {
        return Corporation(corporation)
    }).join('')
}