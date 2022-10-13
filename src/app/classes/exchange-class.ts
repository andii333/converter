import { ExchangeResponse } from "../interfaces/response"

export class ExchangeClass {
    rates: { [key: string]: number | string }
    constructor(res: ExchangeResponse) {
        this.rates = res['rates']
    }
}