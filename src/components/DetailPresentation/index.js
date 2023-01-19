import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getResourcePath } from '../../utils/script_loader';

const DetailPresentation = (page) => {
    page = page.page;
    const prop_value = 'url("' + getResourcePath(page.presentationImagePath) + '")';
    const b_image={backgroundImage: prop_value};
    return (
        <Container className='no-padding' fluid>
            <Row id='project-presentation'  style={b_image}>
                <Col className='align-self-center'>
                    <Row>
                        <Col></Col>
                        <Col className='col-10 text-center'>
                            <h1 className="presentation-title">{page.title}</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailPresentation;