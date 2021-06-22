export const getHHMMDate = (date)=>{
    const convertDate = new Date(date)
    const hh = convertDate.getHours()
    const mm = convertDate.getMinutes()
    return `${hh}:${mm}`
}