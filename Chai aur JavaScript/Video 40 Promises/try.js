async function getAllUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()  // using await here as coverting data into json takes time
        const users = data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                email: item.email,
                phone: item.phone,
                address: {
                    ...item.address,
                    geo: null
                }
            }
        })
        console.log(users)
    } catch (error) {
        console.log('E: ', error);
    }
}
getAllUsers()