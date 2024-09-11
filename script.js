const movie=async()=>{
    let result=""
    mname=data.value
    const res=await fetch(`http://www.omdbapi.com/?apikey=fa1c9c03&t=${mname}`)

    const jsres=await res.json()
    console.log(jsres)
    result=`
    <h3>${jsres.Title}</h3>
    <h4>${jsres.Released}</h4>
        <h4>${jsres.Director}</h4>
            <h4>${jsres.Writer}</h4>

                <h4>${jsres.Actors}</h4>

                    <h4>${jsres.Language}</h4>

                        <h4>${jsres.Country}</h4>
    <h4>${jsres.Awards}</h4>
    <img src=${jsres.Poster}/>
       



    
    
    `
    cnt.innerHTML=result
}


