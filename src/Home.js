import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';


class Home extends Component {
  render() {
    return (
      <Container>
		
		<Row className="section topspace">
			<Col>
				<p className="lead text-muted text-justify">
					I am a PhD student at Department of Computer Science and Technology, Tsinghua University.
					I mainly focus on <strong>Human Computer Interaction</strong>, supervised by&nbsp;
					<a href="http://media.cs.tsinghua.edu.cn/~pervasive/shiyc/" target="_blank" rel="noopener noreferrer">Prof. Yuanchun Shi</a> and&nbsp;
					<a href="http://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" target="_blank" rel="noopener noreferrer">Prof. Chun Yu</a>. I received my Bachelor's degree 
					at Tsinghua University in 2016.
					<br/><br/>
					Currently, my research interest includes <strong>text entry techniques</strong>, <strong>smartphones and smartwatches</strong>,
					<strong> accessibility</strong> and <strong>novel interaction techniques</strong>. I aim at creating novel, natural and easy-to-use 
					interaction techniques for the current and for the future.
				</p>
			</Col>
		</Row> 

		<Container className="section featured topspace education">
				<h2 className="section-title"><span>Education</span></h2>
				<Row>
					<Col md="2" sm="3">
						<p className="text-right"><strong>2016.9 ~ Present</strong></p>
					</Col>
					<Col md="10" sm="9">
						<p className="text-left">
							<strong>PhD Candidate</strong> on Human-Computer Interaction, Department of computer science and technology, Tsinghua University.
						</p>
					</Col>
				</Row>
				<Row>
					<Col md="2" sm="3">
						<p className="text-right"><strong>2012.9 ~ 2016.6</strong></p>
					</Col>
					<Col md="10" sm="9">
						<p className="text-left">
							<strong>Bachelor's degree</strong> at Department of Computer Science and Technology, Tsinghua University. 
						</p>
						<p className="text-left">
							<strong>Bachelor's degree</strong> at Department of Economics and Finance, Tsinghua University. (Second Degree Program)
						</p>
					</Col>
				</Row>
		</Container>
		<Container className="section featured topspace education">
			<h2 className="section-title"><span>Experience</span></h2>
			<Timeline>
            <TimelineEvent title="2019, 2017"
						   createdAt=""
						   titleStyle={{fontWeight: "bold", "fontSize": "1.3em"}}
						   iconColor="#6fba1c"
						   iconStyle={{'fontSize': '1.3em'}}
                           icon={<FA icon='chalkboard-teacher'></FA>}
            >
                <h6><strong>Teaching assistant</strong> of Theory and Practice of Human Computer Interaction, Tsinghua University.</h6>
            </TimelineEvent>
            <TimelineEvent
				title="2016"
				titleStyle={{fontWeight: "bold", "fontSize": "1.3em"}}
				createdAt=""
				iconColor="#03a9f4"
                icon={<FA icon='building'></FA>}
            >
                <h6><strong>Intern</strong> at <a href="http://www.cloudbeaver.com/" target="_blank" rel="noopener noreferrer">CloudBeaver Techonology (Beijing) Co., Ltd.</a></h6>
            </TimelineEvent>
			<TimelineEvent
                title="2016"
				createdAt=""
				titleStyle={{fontWeight: "bold", "fontSize": "1.3em"}}
				iconColor="#03a9f4"
                icon={<FA icon='building'></FA>}
            >
                <h6><strong>Intern</strong> at <a href="https://www.tencent.com/" target="_blank" rel="noopener noreferrer">Tencent Technology (Shenzhen) Co., Ltd.</a></h6>
            </TimelineEvent>
			<TimelineEvent
                title="2014 ~ 2015"
				createdAt=""
				titleStyle={{fontWeight: "bold", "fontSize": "1.3em"}}
				iconColor="#6fba1c"
                icon={<FA icon='school'></FA>}
            >
             <h6><strong>Director of Operations in student union</strong> of Dept. of Computer Science and Technology, Tsinghua University.</h6>
            </TimelineEvent>
    </Timeline>
		</Container>

		
		<Container className="section featured topspace">
			<h2 className="section-title"><span>Skills</span></h2>
			<Row>
				<Col>
					<h3 className="text-center">Languages</h3>
					<p>Chinese</p>
					<p>English</p>
				</Col>
				<Col>
					<h3 className="text-center">Coding</h3>
					<p>Python</p>
					<p>Java (Android)</p>
					<p>C#</p>
				</Col>
				<Col>
					<h3 className="text-center">Web Dev</h3>
					<p>HTML</p>
					<p>CSS</p>
					<p>JavaScript</p>
				</Col>
				<Col>
					<h3 className="text-center">Others</h3>
					<p>Academic research and writing</p>
					<p>LATEX typesetting and publishing</p>
				</Col>
			</Row>
		</Container> 
	</Container>
    );
  }
}

export default Home;
