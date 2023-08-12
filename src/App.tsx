import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './componant/NavBar';
import Title from './componant/Title';
import Categore from './componant/Categore';
import Cared from './componant/Cared';
import { item } from './Date';

const  App = () => {

  const allCat = ['الكل', ...new Set(item.map((el) =>  el.category))]
 
  console.log(allCat)

  const [data , sitdata] = useState(item);
  
  const catgry = (cat:any) =>{

    if (cat === `الكل`) {
      sitdata(item);

    }else
    {
    const newAerre=item.filter((elment) => elment.category === cat)
    sitdata(newAerre);
    }
  }
  const search = (word:any) =>{

    if (word !== ``) {
         const newAerre=item.filter((elment) => elment.title === word)
         sitdata(newAerre);
    }
  }
  return (
    <div >
        <NavBar llsearch={search} ></NavBar>
      <Container>
        <Title></Title>
        <Categore lowcatgry={catgry} lowallCat={allCat} ></Categore>
        <Cared data={data} ></Cared>
      </Container>
    </div>
  );
}

export default App;
