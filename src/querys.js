import gql from "graphql-tag";

const getAllCharacters=gql`
 query Character($page: Int){

    characters(page:$page){
  results{
   id
   name
   status
   species
  
   image
   location{
    
    name
    dimension
   }
  }
}
  }
 `

  export default getAllCharacters