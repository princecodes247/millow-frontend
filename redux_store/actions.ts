export const saveFetchedData = (data: any[]) => {
    return {
        type: "SAVE_SANITY_DATA",
        data
    }
}

export const saveCustomerAddress = (address: string) => {
    return {
        type: "SAVE_CUSTOMER_ADDRESS",
        address
    }
}
