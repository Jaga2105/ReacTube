const uploadTime=(publishedAt)=>{
    // calulate current time
    const currentTime = new Date();

    // calculate publishd time
    const publishedTime= new Date(publishedAt);

    // calculate time difference in seconds
    const timeDifference = Math.floor((currentTime-publishedTime)/1000);

    // calculate time difference in year,month,week,day,hour,minutes,seconds

    const year= Math.floor(timeDifference/(365*24*60*60));
    const month =Math.floor(timeDifference/(30*24*60*60));
    const week =Math.floor(timeDifference/(7*24*60*60));
    const day=Math.floor(timeDifference/(24*60*60));
    const hour=Math.floor(timeDifference/(60*60));
    const minute = Math.floor(timeDifference/(60));
    const second=timeDifference;

    let timeUnit="";
    let timeValue=0;

    if(year>0){
        timeUnit="year"
        timeValue=year;
    }else if(month>0){
        timeUnit="month"
        timeValue=month;
    }else if(week>0){
        timeUnit="week"
        timeValue=week;
    }else if(day>0){
        timeUnit="day"
        timeValue=day;
    }else if(hour>0){
        timeUnit="hour"
        timeValue=hour;
    }else if(minute>0){
        timeUnit="minute"
        timeValue=minute;
    }else{
        timeUnit="second"
        timeValue=second;
    }

    return `${timeValue} ${timeUnit}${timeValue!==1 ? "s" :""} ago`;
}
export default uploadTime;