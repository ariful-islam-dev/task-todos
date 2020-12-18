import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './App.scss';
import Todos from './components/todos';

const App = () => {
    return (
        <Container className="my-3">
            <Row>
                <Col>
                    <Todos/>
                </Col>
            </Row>
        </Container>
    )
}

export default App
