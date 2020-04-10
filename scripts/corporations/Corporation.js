export const Corporation = (corporationObject, interestsArray) => {
        return `
        <div class="corporation">
            <h3>${corporationObject.company}</h3>
            <p><span class="bold">Address</span> ${corporationObject.address}</p>
            <p><span class="bold">Interests</span>
                <ul>
                    ${interestsArray.length !== 0 ? interestsArray.map(corpInterest => `<li>${corpInterest.interest.about}</li>`).join('') : `None`}
                </ul>
            </p>
        </div>
    `
}