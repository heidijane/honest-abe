import { getPoliticians } from "./politicianProvider.js";
import { ShowPoliticianList } from "./PoliticianList.js";
import { getCorporations, getCorporationInterests } from "./corporations/corporationProvider.js";
import { ShowCorporationList } from "./corporations/CorporationList.js";
import { ShowPacList } from "./pacs/PacList.js";
import { getPacs } from "./pacs/pacProvider.js";
import { getBills } from "./legislation/billProvider.js";
import { getInterests } from "./legislation/interestProvider.js";


const promises = [
    getPoliticians(),
    getCorporations(),
    getPacs(),
    getInterests(),
    getBills(),
    getCorporationInterests()
]

Promise.all(promises)
    .then(() => {
        ShowPoliticianList()
        ShowCorporationList()
        ShowPacList()
    })