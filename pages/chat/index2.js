import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/chat.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


export default function Chat() {
    return (
        

                        
                     <Container>

                        <Row>
                            <Col md={9} sm={12}>
                            <div className={styles.chat2}>
                                <div className={styles.up}>
                                    <p>Classic 350 (2012-2021)</p>
                                    <p>Comfort</p>
                                </div>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        
                                <Tab.Content className={styles.tab_content}>
                                
                                    <Tab.Pane className={styles.tab_pane} eventKey="first"> 

                                            <div className={styles.cancle}>
                                    
                                            <p> <h6>Q. What's the Minimum hight of a person required to drive a classic 350 ?</h6></p>
                                                 </div> 
                                                 <div className={styles.cancle}>
                                                 <div className={styles.cancle1}>
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>16.1k Views | <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
</svg>Add Answers 
</div> 
</div>


               
                                </Tab.Pane>     
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                            </Col>
                            
                            <Col md={3} sm={12}>
                                <div className={styles.chat2}>
                                <div className={styles.up}>
                                    <p>Trending Bikes</p>
                                    <p><span> View All </span></p>
                               

                               
                                </div>
                            
                                </div>
                            </Col>
                        </Row>
                     </Container>
                 
    
    )

}