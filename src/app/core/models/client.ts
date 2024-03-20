import { Adresse } from "./adresse"

export interface ClientList {
    id: number,
    nomComplet: string,
    telephone: string
    adresse:Adresse
}
