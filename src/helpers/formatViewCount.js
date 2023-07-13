const formatViewCount=(viewCount)=>{
    const view=Number(viewCount);
    if(view>1000000)
    return (view/1000000).toFixed(1)+" M";

    if(view>1000)
    return (view/1000).toFixed(0)+" K";

    return view.toString();
}

export default formatViewCount;