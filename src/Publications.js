import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button, Badge} from 'reactstrap';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';
import Truncate from 'react-truncate';
import $ from 'jquery';
class Publications extends Component {
	componentDidMount() {
		$('[data-toggle="tooltip"]').tooltip();
	}
  constructor() {
		super();
		this.myName = "Weinan Shi";
	  this.paperData = [
			{
				title: 'VIPBoard: Improving Screen-Reader Keyboard for Visually Impaired People with Character-Level Auto Correction',
				url: 'https://dl.acm.org/citation.cfm?doid=3290605.3300747',
			  conference: 'CHI 2019',
			  authors: ['Weinan Shi', 'Chun Yu', 'Shuyi Fan', 'Feng Wang', 'Tong Wang', 'Xin Yi', 'Xiaojun Bi', 'Yuanchun Shi'],
				abstract: 'Modern touchscreen keyboards are all powered by the word-level auto-correction ability to handle input errors. Unfortunately, visually impaired users are deprived of such benefit because a screen-reader keyboard offers only character-level input and provides no correction ability. In this paper, we present VIPBoard, a smart keyboard for visually impaired people, which aims at improving the underlying keyboard algorithm without altering the current input interaction. Upon each tap, VIPBoard predicts the probability of each key considering both touch location and language model, and reads the most likely key, which saves the calibration time when the touchdown point misses the target key. Meanwhile, the keyboard layout automatically scales according to users� touch point location, which enables them to select other keys easily. A user study shows that compared with the current keyboard technique, VIPBoard can reduce touch error rate by 63.0% and increase text entry speed by 12.6%.',
				award: 'honorable',
			  video: 'http://pi.cs.tsinghua.edu.cn/lab/videos/video-VIPBoard.mp4',
			  paper: 'http://pi.cs.tsinghua.edu.cn/lab/papers/VIPBoard.pdf',
			  img: 'http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2019/04/thumbnail-VIPBoard-150x150.jpg'
			},
		  {
				title: 'Lip-Interact: Improving Mobile Device Interaction with Silent Speech Commands',
				url: 'https://dl.acm.org/citation.cfm?id=3242599',
			  conference: 'UIST 2018',
			  authors: ['Ke Sun', 'Chun Yu', 'Weinan Shi', 'Lan Liu', 'Yuanchun Shi'],
			  abstract: 'We present Lip-Interact, an interaction technique that allows users to issue commands on their smartphone through silent speech. Lip-Interact repurposes the front camera to capture the user’s mouth movements and recognize the issued commands with an end-to-end deep learning model. Our system supports 44 commands for accessing both system-level functionalities (launching apps, changing system settings, and handling pop-up windows) and application-level functionalities (integrated operations for two apps). We verify the feasibility of Lip-Interact with three user experiments: evaluating the recognition accuracy, comparing with touch on input efficiency, and comparing with voiced commands with regards to personal privacy and social norms. We demonstrate that Lip-Interact can help users access functionality efficiently in one step, enable one-handed input when the other hand is occupied, and assist touch to make interactions more fluent.',
			  video: 'http://pi.cs.tsinghua.edu.cn/lab/videos/Lip-Interact.mp4',
			  paper: 'http://pi.cs.tsinghua.edu.cn/lab/papers/Lip_Interact_final.pdf',
			  img: '/lip-interact.jpg'
			},
			{
				title: 'TOAST: Ten-Finger Eyes-Free Typing on Touchable Surfaces',
				url: "https://dl.acm.org/citation.cfm?id=3191765",
				conference: 'Ubicomp 2018',
				authors: ['Weinan Shi', 'Chun Yu', 'Xin Yi', 'Zhen Li', 'Yuanchun Shi'],
				abstract: "Touch typing on flat surfaces (e.g. interactive tabletop) is challenging due to lack of tactile feedback and hand drifting. In this paper, we present TOAST, an eyes-free keyboard technique for enabling efficient touch typing on touch-sensitive surfaces. We first formalized the problem of keyboard parameter (e.g. location and size) estimation based on users' typing data. Through a user study, we then examined users' eyes-free touch typing behavior on an interactive tabletop with only asterisk feedback. We fitted the keyboard model to the typing data, results suggested that the model parameters (keyboard location and size) changed not only between different users, but also within the same user along with time. Based on the results, we proposed a Markov-Bayesian algorithm for input prediction, which considers the relative location between successive touch points within each hand respectively. Simulation results showed that based on the pooled data from all users, this model improved the top-1 accuracy of the classical statistical decoding algorithm from 86.2% to 92.1%. In a second user study, we further improved TOAST with dynamical model parameter adaptation, and evaluated users' text entry performance with TOAST using realistic text entry tasks. Participants reached a pick-up speed of 41.4 WPM with a character-level error rate of 0.6%. And with less than 10 minutes of practice, they reached 44.6 WPM without sacrificing accuracy. Participants' subjective feedback also indicated that TOAST offered a natural and efficient typing experience.",
				video: 'http://pi.cs.tsinghua.edu.cn/lab/videos/TOAST.mp4',
				paper: 'http://pi.cs.tsinghua.edu.cn/lab/papers/TOAST.pdf',
				img: 'http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2018/04/new-image-n24k9-300x300.jpg'
			},
			{
				title: 'Word Clarity as a Metric in Sampling Keyboard Test Sets',
				url: "https://dl.acm.org/citation.cfm?id=3025701",
				conference: 'CHI 2017',
				authors: ['Xin Yi', 'Chun Yu', 'Weinan Shi', 'Xiaojun Bi', 'Yuanchun Shi'],
				abstract: "Test sets play an essential role in evaluating text entry techniques. In this paper, we argue that in addition to the widely adopted metric of bigram representativeness and memorability, word clarity should also be considered as a metric when creating test sets from the target dataset. Word clarity quantifies the extent to which a word is likely to confuse with other words on a keyboard. We formally define word clarity, derive equations calculating it, and both theoretically and empirically show that word clarity has a significant effect on text entry performance: it can yield up to 26.4% difference in error rate, and 25% difference in input speed. We later propose a Pareto optimization method for sampling test sets with different sizes, which optimizes the word clarity and bigram representativeness, and memorability of the test set. The obtained test sets are published on the Internet.",
				paper: 'http://pi.cs.tsinghua.edu.cn/lab/papers/Word%20Clarity_Xin%20Yi_CHI2017.pdf',
				img: 'http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2017/01/Word-clarity-300x300.png'
			},
			{
				title: 'Is it too small?: Investigating the performances and preferences of users when typing on tiny QWERTY keyboards',
				url: "https://www.sciencedirect.com/science/article/pii/S1071581917300654",
				conference: 'IJHCS 2017',
				authors: ['Xin Yi', 'Chun Yu', 'Weinan Shi', 'Yuanchun Shi'],
				abstract: "Typing on tiny QWERTY keyboards on smartwatches is considered challenging or even impractical due to the limited screen space. In this paper, we describe three user studies undertaken to investigate users’ typing abilities and preferences on tiny QWERTY keyboards. The first two studies, using a smartphone as a substitute for a smartwatch, tested five different keyboard sizes (2, 2.5, 3, 3.5 and 4 cm). Study 1 collected typing data from participants using keyboards and given asterisk feedback. We analyzed both the distribution of touch points (e.g., the systematic offset and shape of the distribution) and the effect of keyboard size. Study 2 adopted a Bayesian algorithm based on a touch model derived from Study 1 and a unigram word language model to perform input prediction. We found that on the smart keyboard, participants could type between 26.8 and 33.6 words per minute (WPM) across the five keyboard sizes with an uncorrected character error rate ranging from 0.4% to 1.9%. Participants’ subjective feedback indicated that they felt most comfortable with keyboards larger than 2.5 cm. Study 3 replicated the 3.0 and 3.5 cm keyboard tests on a real smartwatch and verified that in terms of text entry speed, error rate and user preference, there was no significant difference between the results measured on a smartphone and that on a smartwatch with same sized keys. This study result indicated that the results of Study 1 and 2 are applicable to smartwatch devices. Finally, we conducted a simulation to investigate the performance of different touch/language models based on our collected data. The results showed that using either a bigram language model or a detailed touch model can effectively correct imprecision in users’ input. Our results suggest that achieving satisfactory levels of text input on tiny QWERTY keyboards is possible.",
				paper: "http://pi.cs.tsinghua.edu.cn/lab/papers/IJHCS_Xin%20YI.pdf",
				img: "http://pi.cs.tsinghua.edu.cn/wp-content/uploads/2017/06/IJHCS-YX--300x300.png"
			}
	  ]
  }
  render() {
	var paperList = this.paperData.map((data, index)=> {
		var authorLine = data.authors.map((author, i)=> {
			var symbol = '';
			if (i < data.authors.length - 1) {
				symbol = ', ';
			}
			if (author === this.myName) {
				return (<span key={i}><strong>{author}</strong>{symbol}</span>);
			} else {
				return (<span key={i}>{author + symbol}</span>);
			}
		});
		return (
			<Row key={index} className="topspace publication mb-3 align-items-center">
			   <Col md="3" sm="6" className="widget text-center mb-3">
			      <img src={data.img} alt={data.title} className="rounded align-middle"></img>
			   </Col>
			   <Col md="9" sm="6" className="maincontent">
			     <header className="page-header">
				   	<h5 className="page-title"><a href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a></h5>
						 {data.award === 'honorable' && (<h6><b><FA icon="award"></FA>&nbsp;&nbsp;Best Paper Honorable Mention Award (Top 5%)</b></h6>)}						 
						<h6 className="page-authors align-middle"><Badge color="secondary" className="align-middle">{data.conference}</Badge>{' '}{authorLine}</h6>
				   </header>
					<div className="abstract">
					<Truncate lines={4}>
						{data.abstract}
					</Truncate>
					</div>
					<div className="text-left">
					{data.video && 
						<a href={data.video} target="_blank" rel="noopener noreferrer"><Button color="primary" className="mr-2 mt-2 rounded" data-toggle="tooltip" data-placement="top" title="Paper Video"><FA icon="video"></FA></Button></a>
					}
					{data.paper &&
						<a href={data.paper} target="_blank" rel="noopener noreferrer"><Button color="primary" className="mr-2 mt-2 rounded" data-toggle="tooltip" data-placement="top" title="PDF File"><FA icon="file-pdf"></FA></Button></a>
					}
					</div>
			       
			   </Col>
			</Row>
		)
	})
    return (
      <Container className="pb-5">
		  {paperList}
	   </Container>
    );
  }
}

export default Publications;
