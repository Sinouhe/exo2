# exo2

use 

"npm install"

to install all dependencies.

use 

"npm run dev"

to launch the server.

default port is 4202, you can configure it on the config.json file.

the routes of this api starts by "/api/v1", where v1 is version of the api, you can upgreade or change this path on the config.json.

all the return from each routes is a json lie this :
in case of error
{
    status: 'error',
    result: data,
    message: message
}
in case of suuccess
{
    status: 'success',
    result: data,
    message: message
}


check the status of the response before using data to know if the response of the request is correct.

the routes are :
    /api/v1/players
    to return all the players

    /api/v1//players/:id
    to have a specific id player, if player doest exist, 404 page is returned.
