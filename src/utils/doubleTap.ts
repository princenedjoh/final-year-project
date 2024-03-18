let prev : number
const DoubleTap = (date : number) => {
    if(date - prev < 500){
        return true
    } else {
        prev = date
        return false
    }
}

export default DoubleTap