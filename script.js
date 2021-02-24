
function showDate(){
    let date = new Date()
    let hours=date.getHours()
    let minutes=date.getMinutes()
    let seconds=date.getSeconds()
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.minutes').innerHTML=minutes
    document.querySelector('.seconds').innerHTML=seconds
    updateTime()
}
function updateTime(){
 setTimeout('showDate()',1000)
}

