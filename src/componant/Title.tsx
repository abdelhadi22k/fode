import React from 'react'
import {Row ,Col} from 'react-bootstrap'
const Title = () => {
  return (
    <div>
      <Row className='my-2 mb-5' >
        <Col sm="12" className="justify-content-center text-center" >
            <div className="title">
                قائمة الطعام
                <div  className="justify-content-center text-center d-flex" >
                <p className='underline'></p>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}
export default Title
