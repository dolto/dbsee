interface TapsElementParams {
    index: Number
}

interface TapsData {
    name: string,
    url: string,
    params: string[],
    params_value: string[][],
    result_value: string[]
}

export type {TapsElementParams, TapsData}