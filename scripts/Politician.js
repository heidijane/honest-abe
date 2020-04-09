import { numToDollars } from "./utilities.js"

export const Politician = (politicianObject, pacDonationArray) => {
        return `
        <div class="politician">
            <h3>${politicianObject.name.first} ${politicianObject.name.last}</h3>
            <p><span class="bold">Age</span> ${politicianObject.age}</p>
            <p><span class="bold">Represents</span> ${politicianObject.district}</p>
            <p><span class="bold">Donations from PACs</span>
                <ul>
                    ${pacDonationArray.map(donation => {
                        return `<li>${donation.registeredName} (${numToDollars(donation.donationAmount)})</li>`
                    }).join('')}
                </ul>
            </p>
        </div>
    `
}