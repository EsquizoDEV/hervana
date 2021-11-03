const API = "https://employeedetails.free.beeceptor.com/my/api/path"

const getData = async ()=> {
    const response = await document.fetch(API);

    console.log(response)
}

getData()