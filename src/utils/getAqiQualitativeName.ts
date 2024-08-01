const getAqiQualitativeName = (aqi : number) : {name : string, color : string} => {
    switch (aqi) {
        case 1:
            return {
                name : 'Good',
                color : '#6D8793'
            }
        case 2:
            return {
                name : 'Fair',
                color : '#799950'
            }
        case 1:
            return {
                name : 'Moderate',
                color : '#936D6D'
            }
        case 1:
            return {
                name : 'Poor',
                color : 'magenta'
            }
        case 1:
            return {
                name : 'Very Poor',
                color : 'red'
            }
    
        default:
            return {name : 'null', color : 'null'};
    }
}

export default getAqiQualitativeName