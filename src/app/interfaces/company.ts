/**
 * Empresa que o usuário pode selecionar
 * @interface Company
 * @property {string} name - Nome da Empresa
 * @property {string} cnpj - cnpj da Empresa
 */
export interface Company {
    name: string,
    cnpj: string
}

export const COMPANIES: Company[] = [
    {
        cnpj: "00.000.000/0000-00",
        name: "battuta log"
    },
    {
        cnpj: "00.000.000/0000-01",
        name: "armazém battuta"
    },
    {
        cnpj: "00.000.000/0000-02",
        name: "beat"
    }
]