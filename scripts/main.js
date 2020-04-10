import { getPoliticians } from "./politicianProvider.js";
import { ShowPoliticianList } from "./PoliticianList.js";
import { getCorporations } from "./corporations/corporationProvider.js";
import { ShowCorporationList } from "./corporations/CorporationList.js";
import { ShowPacList } from "./pacs/PacList.js";
import { getPacs } from "./pacs/pacProvider.js";


const promises = [
    getPoliticians(),
    getCorporations(),
    getPacs()
]

Promise.all(promises)
    .then(() => {
        ShowPoliticianList()
        ShowCorporationList()
        ShowPacList()
    })