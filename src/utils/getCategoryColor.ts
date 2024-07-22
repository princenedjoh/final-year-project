export const getCategoryColor = (category : string) => {
    switch (category) {
        case 'earthquake':
            return 'orange'
        case 'water':
            return 'royalblue'
    
        default:
            break;
    }
}