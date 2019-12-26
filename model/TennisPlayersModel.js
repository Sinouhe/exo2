class TennisPlayersModel {
    
    #dataFromFile;

    constructor(data) {    

        // In the exercie, first data is takken from file, next they ask to use an fetcher like axios or super 
        //this.dataFromFile = require('../data/data.json')
        this.dataFromFile = data;    
        return this;
    }

    getDataFromFile = () => {
        return this.dataFromFile;
    }

    getDataSortedByID = () => {
        const compare = ( a, b ) => {
            if ( a.id < b.id ){
              return -1;
            }
            if ( a.id > b.id ){
              return 1;
            }
            return 0;
        }
        return this.getDataFromFile().players.sort(compare);        
    }

    getPlayerById = (id) => {
        const idToNumber = parseInt(id)
        if(this.getDataFromFile()?.players && Array.isArray(this.getDataFromFile()?.players)) {
            for (let i = 0 ; i < this.getDataFromFile()?.players.length ; i++) {
                const element  = this.getDataFromFile()?.players[i];
                if (element.id && !isNaN(idToNumber) && element.id === idToNumber)
                    return element;                
            };            
        }
        
        return undefined;
    }


}

module.exports = TennisPlayersModel;
