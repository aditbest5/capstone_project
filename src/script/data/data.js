const STORAGE_KEY = "APP_DATA";

class BrowserStorage{
    static getAllData(){
        return localStorage.getItem(STORAGE_KEY);
    }

    static saveDataPerson(data){
        let dataOnStorage = this.getAllData();
        dataOnStorage = JSON.parse(dataOnStorage);

        if (dataOnStorage == null) {
            dataOnStorage = [];
            dataOnStorage.push(data)
        }else{
            dataOnStorage.push(data);
        }
        const allData = JSON.stringify(dataOnStorage);
        localStorage.setItem(STORAGE_KEY,allData);
    }

    static deleteItem(id){
        let dataOnStorage = this.getAllData();
        dataOnStorage = JSON.parse(dataOnStorage);

        for (let i = 0; i < dataOnStorage.length; i++) {
            if (dataOnStorage[i].id === id) {
                dataOnStorage.split(i,1);
            }
        }

        const allData = JSON.stringify(dataOnStorage);
        localStorage.setItem(STORAGE_KEY,allData);
    }
}


export default BrowserStorage;