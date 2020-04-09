import { getPoliticians } from "./politicianProvider.js";
import { ShowPoliticianList } from "./PoliticianList.js";
import { getCorporations } from "./corporations/corporationProvider.js";
import { ShowCorporationList } from "./corporations/CorporationList.js";
import { ShowPacList } from "./pacs/PacList.js";
import { getPacs } from "./pacs/pacProvider.js";

getPoliticians()
    .then(getCorporations)
    .then(getPacs)
    .then(ShowPoliticianList)
    .then(ShowCorporationList)
    .then(ShowPacList)