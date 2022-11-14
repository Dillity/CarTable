

export type tableInfoType = {
    brand: String,
    color: String,
    horsepower: Number,
    bodyStyle: String,
    yearOfRelease: Number
}

export type propsType = {
    tableInfo: Array<tableInfoType>,
    tableError: String
}