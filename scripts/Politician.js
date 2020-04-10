import { numToDollars } from "./utilities.js"

export const Politician = (politicianObject, legislationArray, pacDonationArray) => {
        return `
        <div class="politician">
            <h3>${politicianObject.name.first} ${politicianObject.name.last}</h3>
            <p><span class="bold">Age</span> ${politicianObject.age}</p>
            <p><span class="bold">Represents</span> ${politicianObject.district}</p>
            <p><span class="bold">Sponsored Legislation</span>
                <ul>
                    ${legislationArray.length !== 0 ? legislationArray.map(bill => `<li>${bill.name}</li>`).join('') : `None`}
                </ul>
            </p>
            <p><span class="bold">Related PACs</span>
                <ul>
                    ${pacDonationArray.length !== 0 ? pacDonationArray.map(donation => `<li>${donation.registeredName}</li>`).join('') : `None`}
                </ul>
            </p>
        </div>
    `
}