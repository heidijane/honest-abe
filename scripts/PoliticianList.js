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
        let pacContributors = politician.pacdonations.map(donation => {

            const contributor = pacs.find(pac => pac.id === donation.pacId)
            return contributor
        })

        //remove duplicate pac contributors
        pacContributors = pacContributors.filter((contrib, index) => {
            return pacContributors.indexOf(contrib) >= index
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

        //filter the influencing corporations to get only the ones that have donated to PACs that have donated to the politician    
        influencingCorporations = influencingCorporations.filter(corp => {
            let matchingPacs = []
                //for each corporation to pac donation...
            corp.corporatedonations.forEach(corporateDonation => {
                    //find a pac in the array of pacs that have donated to the politician where the ID of the pac matches the pacID of the corporation's donation
                    const foundPac = pacContributors.find(pacDonations => pacDonations.id === corporateDonation.pacId)
                        //if a pac was found push it into the matchinPacs array
                    if (foundPac !== undefined) {
                        matchingPacs.push(foundPac)
                    }
                })
                //if the matching pacs array isn't empy add the corporation to the influencing corporations array of objects
            if (matchingPacs.length !== 0) {
                return true
            }
        })

        return Politician(politician, sponsoredBills, pacContributors, influencingCorporations)
    }).join('')
}