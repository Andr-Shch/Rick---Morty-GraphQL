import gql from "graphql-tag";

const getAllCharacters=gql`
 query Character($page: Int){

    characters(page:$page){
        info{
      next
    }
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