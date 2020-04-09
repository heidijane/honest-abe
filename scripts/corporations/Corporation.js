export const Corporation = (corporationObject) => {
    return `
        <div class="politician">
            <h3>${corporationObject.company}</h3>
            <p><span class="bold">Address</span> ${corporationObject.address}</p>
        </div>
    `
}