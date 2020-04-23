const apiGetAllFoods = 'http:/10.0.3.2:3000/data';

async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        return responseJson.data; //list of foods
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

//send post request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiGetAllFoods, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

async function updateAFood(params) {
    try {
        let response = await fetch(apiGetAllFoods, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export {getFoodsFromServer, insertNewFoodToServer, updateAFood};
