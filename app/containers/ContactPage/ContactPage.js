import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { Col, Layout, Row } from 'antd';

const { Content, Header } = Layout;

import ContactForm from '../../components/Forms/Contact'
// <ContactForm/>

// Style: global & local
import '../../styles/ant.less';
import './contact.less';

class ContactPage extends PureComponent {

    render() {
        return (
            <article>
                <Helmet>
                    <title>Contact</title>
                    <meta name="description" content="" />
                </Helmet>
                <Layout>   
                    <Content style={{ padding: '0 16px', background: '#fff' }}>
                        <Row>
                            Contact  
                            <Row justify="left" type="flex">
                            <Col span={12} style={{ textAlign:'left', margin:'0'}} >
                            <ContactForm />
                            </Col>
                            <Col span={10} offset={2}>
                            Hello Wolrd
                            </Col>
                            </Row>
                        </Row>

                        <h1>title</h1>
                        <p>Hello World!</p>
                        <p>this page containing my notes on document.head, even though the markup is similar to that of any other article on this site. It seems as if the length of the content is important as well. But how does Safari measure content length? Does the number of children of the wrapper element matter? How about the number of characters inside?

                        Rob Flaherty decided to investigate this further and created some test documents. He made some interesting observations:

                            You need a wrapper element around the actual content, other than  It doesn’t really matter which element you choose, as long as it’s not.
                            Reader requires at least five child elements inside the wrapper. Using double line breaks () inside an element makes it count as two elements.
                            Reader doesn’t seem to work for local files.

                        All valid points, except “Reader requires at least five child elements inside the wrapper”, which doesn’t seem to be true. The number of child elements doesn’t matter, the content length seems to be measured another way. I’ll get to that later.
                        Clayton Ferris did some additional testing, and concluded the following:
                            It looks like that Safari Reader will detect a  or block level element that contains a header element (), followed by a certain amount of text. The reader badge will appear when the content text (not including the header) is more than 2,000 characters.
                        Sadly, none of Clayton’s statements seem to be true. I created some quick test cases to demonstrate it’s just not that simple:
                            Test 1: 3 paragraphs, 1,863 characters (including heading and line breaks); Reader fails.
                            Test 2: same as test 1, but with added — 4 paragraphs, 1,866 characters; Reader works.
                            Test 3: test without any heading elements — 6 paragraphs, 3,718 characters; Reader works.

                This also proves that there is no fixed amount of paragraphs (or other elements) needed to enable Reader; it all depends on the contents.</p>
                    </Content>
                </Layout>
            </article>
        );
    }
}

export default ContactPage;