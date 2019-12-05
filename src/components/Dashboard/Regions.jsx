import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Dash from './chart';
import PieChart from './pie';


class Dashbo extends React.Component {

        render() {
 
            
            return ( 
                <React.Fragment>
                     <div style = {{marginBottom : '3em'}} >
                        <h3 style = {{margin : '1em 3em 1em' }} >
                            Dashboard
                        </h3>
                        <div>
                            < Dash />
                        </div>
                    </div>
                 
               
                    <Row style = {{width : '100%'}} >
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                                <a href = '/' ><h4 className='mb-4'>Greater Accra</h4></a>
                                < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-2'>Upper East </h4></a>
                                
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Central Region </h4></a>
                               < PieChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Volta Region</h4></a>
                               
                            < PieChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Ashanti Region </h4></a>
                            < PieChart />
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Eastern Region </h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Oti Region </h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Savannah Region </h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Ahafo Region</h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>North East </h4></a>
                               
                            < PieChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Bono Region</h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Western Region</h4></a>
                            < PieChart />
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Nothern Region </h4></a>
                               
                            < PieChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col  md={6} xl={6}>
                        <Card>
                            <Card.Body>
                            <a href = '/' ><h4 className='mb-4'>Upper West </h4></a>
                               
                            < PieChart />
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    
                </Row>
           
            </React.Fragment>
            );
        }
    }
    

export default Dashbo;