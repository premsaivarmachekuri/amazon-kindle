const express = require('express')
require('dotenv').config()
const axios = require('axios')
const cors = require('cors')
const app = express()

app.use(cors());


const HASURA_ADMIN_SECRET = process.env.HASURA_ADMIN_SECRET

// const endpoint = "https://destined-vulture-28.hasura.app/api/rest/getAllBooks";
const endpoint = "https://destined-vulture-28.hasura.app/v1/graphql"
const headers = {
	"Content-type": "application/json",
    "Authorization": HASURA_ADMIN_SECRET,
    // x-hasura-admin-secret: <your-admin-secret>'
};
const gqlQuery = {
    "query": `query @cached {
        kindle_books(where: { price: { _in: ["5.00", "9.99"] } }) {
          asin
          imgUrl
          price
          author
          category_id
          category_name
          isBestSeller
          isEditorsPick
          isGoodReadsChoice
          isKindleUnlimited
        }
      }`,
    "variables": {}
};

const options = {
    "method" : "post",
    "headers": headers,
    body: JSON.stringify(gqlQuery)
}


async function req(){
    const response  = await fetch(endpoint, options);
    const data = await response.json()
    console.log(data.data)

}
req()

app.listen(5000, () => {
    console.log("Server is running at port 5000")
})



// async function (req, res) => {
//     try{
//         const result = await axios({
//             url: endpoint,
//             method: 'post',
//             headers: headers,
//             data: graphqlQuery
//         })
//         res.send(result.data)
//     }
//     catch(e){
//         res.status(500).send(`Server Error, ${e}`)
//     }
// })