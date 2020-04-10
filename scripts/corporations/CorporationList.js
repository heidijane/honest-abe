import { useCorporations, useCorporationInterests } from "./corporationProvider.js"
import { Corporation } from "./Corporation.js"

const contentTarget = document.querySelector("#corporationList")

export const ShowCorporationList = () => {
    render()
}

const render = () => {
    const corporations = useCorporations()
    const corpInterests = useCorporationInterests()

    contentTarget.innerHTML = corporations.map(corporation => {

        const interests = corpInterests.filter(rel => rel.corporationId === corporation.id)

        return Corporation(corporation, interests)
    }).join('')
}