export const getCategoryColor = (category : string) => {
    switch (category) {
        case 'earthquake':
            return 'orange'
        case 'water':
            return 'royalblue'
        case 'atmosphere':
            return 'magenta'
    
        default:
            break;
    }
}