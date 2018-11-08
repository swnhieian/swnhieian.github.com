import React, { Component } from 'react';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';
import { Container } from 'reactstrap';
import { Row, Col } from 'reactstrap';


class Contact extends Component {
  render() {
    return (
      <div className="p-5">

        <Container>
          <h2 className="section-title"><span>Contact</span></h2>
          <Row>
            <Col className="mb-5">
            <h4>              
              Please feel free to contact me if you have any questions.
            </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5><FA icon='envelope'></FA></h5>
              <p> 
                <a href="mailto:swn18@mails.tsinghua.edu.cn">swn18@mails.tsinghua.edu.cn</a>
                <br/>
                <a href="mailto:swnhieian@126.com">swnhieian@126.com</a>
              </p>
            </Col>
            <Col>
              <h5><FA icon='map-marker-alt'></FA></h5>
              <p>
                Room 3-526, FIT Building, Tsinghua University, Beijing, China, 100084
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5><FA icon={['fab', 'github']}></FA></h5>
              <p>
                <a href="https://github.com/swnhieian">@swnhieian</a>
              </p>
              
            </Col>
            <Col>
              <h5><FA icon={['fab', 'facebook']}></FA></h5>
              <p>
                <a href="https://www.facebook.com/swnhieian">@石伟男</a>
              </p>
              
            </Col>
          </Row>

          <Row>
            <Col>
              <h5><FA icon={['fab', 'weixin']}></FA></h5><p>shiweinan1995</p>
            </Col>
            <Col>
              <h5><FA icon={['fab', 'weibo']}></FA></h5>
              <p>
                <a href="https://www.weibo.com/u/2647918555">@石伟男THU</a>
              </p>
            </Col>
          </Row>
              
        </Container>
      </div>
    );
  }
}

export default Contact;
