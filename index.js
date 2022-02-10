const URL = 'http://localhost:3000/users'


function submitData( name, email ) {
    return fetch( URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then(resp => resp.json())
      .then( function (respObj) {
        document.body.innerHTML = respObj[ "id" ]
      } )
      .catch(function(error) {
        document.body.innerHTML = error.message
      } )
  }