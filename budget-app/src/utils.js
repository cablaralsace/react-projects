//generation of randomized key ids

const uniqueId = () => {
    return (
        Math.round(Math.random()*1000000)
    )
}

export default uniqueId;