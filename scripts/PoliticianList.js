import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politician.js"
import { usePacs } from "./pacs/pacProvider.js"

const contentTarget = document.querySelector("#politicianList")

export const ShowPoliticianList = () => {
    render()
}

const render = () => {
    const politicians = usePoliticians()
    const pacs = usePacs()

    contentTarget.innerHTML = politicians.map(politician => {

        //match the pac object to the pac/politician donation relationship
        const pacContributors = politician.pacdonations.map(donation => {

            const contributor = pacs.find((pac) => {
                if (pac.id === donation.pacId) {

                    return true
                }
                return false
            })

            //return a new object that is a combination of the pac info and the donation amount
            return {...contributor, ... { "donationAmount": donation.amount } }
        })

        return Politician(politician, pacContributors)
    }).join('')
}