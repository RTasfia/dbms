let cattleInfo = [];
let i;
const handleCattle = () => {
 
    fetch("http://localhost:2800/cattle")
    .then(res => res.json())
    .then(data => {
        console.log("cattle",data)
        const tableBody = document.getElementById("cattleTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].Co_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Co_Type} </td>
            <td>${data[i].Co_Color}</td>
            <td>${data[i].Co_Gender}</td>
            <td>${data[i].Co_Weight} </td>
            <td>${data[i].Co_FoodIntake} </td>
            <td>${data[i].Co_MilkProduction} </td>
            <td>${data[i].Co_Shed_No} </td>
            <td>${data[i].Co_Status} </td>
            </tr>`
        }
        tableBody.innerHTML = dataHTML;
        })

}

const handleGoat = () => {
    fetch("http://localhost:2800/goat")
    .then(res => res.json())
    .then(data => {
        console.log("goat",data)
        const tableBody = document.getElementById("goatTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].G_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].G_Type} </td>
            <td>${data[i].G_Color}</td>
            <td>${data[i].G_Gender}</td>
            <td>${data[i].G_Weight} </td>
            <td>${data[i].G_FoodIntake} </td>
            <td>${data[i].G_MilkProduction} </td>
            <td>${data[i].G_Shed_No} </td>
            <td>${data[i].G_Status} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
}

const handleChicken = () => {
    fetch("http://localhost:2800/chicken")
    .then(res => res.json())
    .then(data => {
        console.log("chicken",data)
        const tableBody = document.getElementById("chickenTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].C_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].C_Type} </td>
            <td>${data[i].C_Number}</td>
            <td>${data[i].C_Breed}</td>
            <td>${data[i].C_FoodIntake} </td>
            <td>${data[i].C_AvgEggProd} </td>
            <td>${data[i].ShedNo} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}

const handleDuck = () => {
    fetch("http://localhost:2800/duck")
    .then(res => res.json())
    .then(data => {
        console.log("duck",data)
        const tableBody = document.getElementById("duckTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].D_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].D_Type} </td>
            <td>${data[i].D_Number}</td>
            <td>${data[i].D_Breed}</td>
            <td>${data[i].D_FoodIntake} </td>
            <td>${data[i].D_AvgEggProd} </td>
            <td>${data[i].ShedNo} </td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}
const handleFish = () => {
    fetch("http://localhost:2800/fish")
    .then(res => res.json())
    .then(data => {
        console.log("fiah",data)
        const tableBody = document.getElementById("fishTable");
        let dataHTML = "";
        for(let i=0;i<data.length;i++){
            dataHTML += `<tr> 
            <td>${data[i].Fi_ID} </td>
            <td>${data[i].Br_ID} </td> 
            <td>${data[i].Fi_Type} </td>
            <td>${data[i].Fi_FoodIntake} </td>
            <td>${data[i].F_ReleasingTime}</td>
            <td>${data[i].F_Reproduction} </td>
            <td>${data[i].F_Num}</td>
            <td>${data[i].FishingTime} </td>
            <td>${data[i].PondNo}</td>
            </tr>`
        }
        console.log(dataHTML)
        tableBody.innerHTML = dataHTML;
        })
    console.log("click")
}