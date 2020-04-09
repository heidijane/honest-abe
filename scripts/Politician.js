export const Politician = (politicianObject) => {
    return `
        <div class="politician">
            <h3>${politicianObject.name.first} ${politicianObject.name.last}</h3>
            <p><span class="bold">Age</span> ${politicianObject.age}</p>
            <p><span class="bold">Represents</span> ${politicianObject.district}</p>
        </div>
    `
}