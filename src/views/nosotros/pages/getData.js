const getData = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    const user =  data.results[0].picture.large
    return user
}

export default getData

