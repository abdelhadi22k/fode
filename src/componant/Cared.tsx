import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Zoom} from 'react-reveal';


const  Cared = ({data}:any)=> {
  return (
    <Row >
       <Zoom >
      {
        data.length != 0 ? (data.map((elment:any) => {
          return(

            <Col key={elment.id}  sm="12" className='mb-2' >
            <Card className='d-flex flex-row' >
              <Card.Img className='img-item' variant="top" src={elment.imgUrl} />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between '>
                  <div className='item-title'>
                  {elment.title}
                  </div> 
                  <div className='item-price'>
                  {elment.price}
                  </div> 
                   </Card.Title>
                <Card.Text className='py-2' >
                  <div className='item-description ' > {elment.description} </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          )
        })) : <h3>لا يوجد قائمة حالبا</h3>
      }
     </Zoom>
    </Row>
  );
}

export default Cared;