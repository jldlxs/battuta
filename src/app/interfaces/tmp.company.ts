/**
 * Empresa que o usuário pode selecionar
 * @interface Company
 * @property {string} name - Nome da Empresa
 * @property {string} cnpj - cnpj da Empresa
 * @property {boolean} default - empresa padrão - opcional
 */
export interface Company {
    name: string,
    cnpj: string,
    default?: boolean,
}

export const COMPANIES: Company[] = [
    {
        cnpj: "00.000.000/0000-00",
        name: "Battuta Log",
        default: true
    },
    {
        cnpj: "00.000.000/0000-01",
        name: "Armazém Battuta"
    },
    {
        cnpj: "00.000.000/0000-02",
        name: "Beat"
    }
]