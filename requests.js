const createPuzzle = async (wordCount)=>{
    const response= await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status===200){
        const data= await response.json()
        return data.puzzle
    }
    else{
        throw new Error('oops')
    }
}

const getCountry = async (myCode)=>{
    const response=await fetch("http://api.countrylayer.com/v2/all?access_key=960d8bf5ada33099134b4cc49eb60d69")
    if(response.status===200){
        const data=await response.json()
        const a=data.find((e)=>e.alpha2Code===myCode)
        return a.name
    }
    else{
        throw new Error('oh no')
    }
}

const getLocation =async ()=>{
    const response=await fetch('http://ipinfo.io/json?token=170305df712e5a')
    if(response.status===200){
        const data=await response.json()
        return data
    }else{
        throw new Error("yeah no")
    }
}

const getCurrentCountry = async() => {
    const response= await getLocation()
    const alpha=response.getCountry
    const name= await getCountry(alpha)
    return name
}
//city region county
