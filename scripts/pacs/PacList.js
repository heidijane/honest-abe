import { usePacs } from "./pacProvider.js";
import { Pac } from "./Pac.js";
import { useCorporations } from "../corporations/corporationProvider.js";

const contentTarget = document.querySelector("#pacList")

export const ShowPacList = () => {
    render()
}

const render = () => {
    const pacs = usePacs()
    const corporations = useCorporations()

    contentTarget.innerHTML = pacs.map(pac => {

        //match the corporation object to the corporation/pac donation relationship
        const corporateContributors = pac.corporatedonations.map(donation => {
            const contributor = corporations.find(corporation => corporation.id === donation.corporationId)

            //add the donation amount to the contributor array we are passing to the Pac function
            contributor.donationAmount = donation.amount

            //return a new object that is a combination of the corporation info and the donation amount
            return {...contributor, ... { "donationAmount": donation.amount } }
        })

        //convert the single PAC and its corporate donations into an HTML representation
        return Pac(pac, corporateContributors)

    }).join('')
}