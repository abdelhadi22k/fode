import React from 'react'
import {Row ,Col,Button} from 'react-bootstrap'
import {Roll } from 'react-reveal';


const Categore = ({lowcatgry , lowallCat}:any) => {
 
  const onfeand = (cato:any) => {
    lowcatgry(cato)
  }

  return (
<Row>
    <Col sm="12"className='d-flex justify-content-center'>
<Roll >
      {
        lowallCat.length != 0 ? (
          lowallCat.map((elm:any) => {
            return(
        <div>
            <button onClick={() => onfeand(elm)} className='btn mx-2' >{elm}</button>
        </div>
            )
          })
        ) : <h2>لا توجد قائمة جاليا</h2>
      }

    </Roll>
    </Col>
</Row>
  )
}

export default Categore;
