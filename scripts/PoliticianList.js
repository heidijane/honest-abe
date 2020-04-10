import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politician.js"
import { usePacs } from "./pacs/pacProvider.js"
import { useBills } from "./legislation/billProvider.js"

const contentTarget = document.querySelector("#politicianList")

export const ShowPoliticianList = () => {
    render()
}

const render = () => {
    const politicians = usePoliticians()
    const pacs = usePacs()
    const bills = useBills()

    contentTarget.innerHTML = politicians.map(politician => {

        //get the politician's sponsored bills
        const sponsoredBills = politician.politicianlegislations.map(rel => {
            const billData = bills.find(bill => bill.id === rel.legislationId)
            return billData
        })


        //match the pac object to the pac/politician donation relationship
        const pacContributors = politician.pacdonations.map(donation => {

            const contributor = pacs.find(pac => pac.id === donation.pacId)
            return contributor
        })

        return Politician(politician, sponsoredBills, pacContributors)
    }).join('')
}