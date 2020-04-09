import { numToDollars } from "../utilities.js"

export const Pac = (pacObject, corporateDonationArray) => {
        return `
        <div class="politician">
            <h3>${pacObject.registeredName}</h3>
            <p><span class="bold">Address</span> ${pacObject.address}</p>
            <p><span class="bold">Corporate Donations</span>
                <ul>
                    ${corporateDonationArray.map(donation => {
                        return `<li>${donation.company} (${numToDollars(donation.donationAmount)})</li>`
                    }).join('')}
                </ul>
            </p>
        </div>
    `
}