import { getPoliticians } from "./politicianProvider.js";
import { ShowPoliticianList } from "./PoliticianList.js";
import { getCorporations } from "./corporations/corporationProvider.js";
import { ShowCorporationList } from "./corporations/CorporationList.js";

getPoliticians()
    .then(ShowPoliticianList)
getCorporations()
    .then(ShowCorporationList)