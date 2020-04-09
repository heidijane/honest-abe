import { getPoliticians } from "./politicianProvider.js";
import { ShowPoliticianList } from "./PoliticianList.js";

getPoliticians()
    .then(ShowPoliticianList)