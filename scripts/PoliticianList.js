import { usePoliticians } from "./politicianProvider.js"
import { Politician } from "./Politician.js"
import { usePacs } from "./pacs/pacProvider.js"
import { useBills } from "./legislation/billProvider.js"
import { useInterests } from "./legislation/interestProvider.js"
import { useCorporations, useCorporationInterests } from "./corporations/corporationProvider.js"

const contentTarget = document.querySelector("#politicianList")

export const ShowPoliticianList = () => {
    render()
}

const render = () => {
    const politicians = usePoliticians()
    const pacs = usePacs()
    const bills = useBills()
    const interests = useInterests()
    const corporations = useCorporations()
    const corporationInterests = useCorporationInterests()

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

        /*get the politician's influencing corporations, i.e. corporations that share the same
         interests as their legislation and have contributed to PACs that have donated to them*/

        //create an array of corporation/interest relationships where the politician's sponsored bills interests overlap
        let matchingInterests = []
        sponsoredBills.forEach(bill => {
            const interest = corporationInterests.filter(corpInterest => corpInterest.interestId === bill.interestId)
            matchingInterests = matchingInterests.concat(interest)
        })

        //convert the array of corporation/interests into corporation objects
        let influencingCorporations = matchingInterests.map(corpInterest => {
            return corporations.find(corp => corp.id === corpInterest.corporationId)
        })

        console.log(influencingCorporations)

        return Politician(politician, sponsoredBills, pacContributors)
    }).join('')
}