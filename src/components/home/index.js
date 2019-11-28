import React, { React, Component } from 'react'
import PieChart from './components/charts/PieChart';
import { List, Modal, Input, Row, Col } from 'antd';
import "antd/dist/antd.css";

class HomePage extends Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div style={{ width: '300px', float: 'left', color: 'white', fontSize: '30px' }}> Nutrition Plus</div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px', textAlign: 'right' }}
                    >
                        <Menu.Item key="1">Foods</Menu.Item>
                        <Menu.Item key="2">Diets</Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                        <Menu.Item key="4">Login</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="App">
                        <header className="App-header">
                            {/* <img src='./img/MainPageLogo.jpeg' className="App-logo"></img> */}
                            {/* <Button type="primary">Primary</Button> */}
                            <div className="input-form">
                                <Row>
                                    <Col span={3}></Col>
                                    <Col span={9} style={{ textAlign: 'center' }}>
                                        <p style={{ color: '#006400', marginTop: 30 }}>Find Out Best healthy foods for your nutrition limits from here </p>
                                        <Icon type="forward" style={{ fontSize: 100, color: '#32CD32' }} />
                                    </Col>
                                    <Col span={12}>
                                        <Row style={{ padding: 10 }}>
                                            <p style={{ color: '#000000' }}>Enter your Limits</p>
                                        </Row>
                                        <Row style={{ padding: 10 }}>
                                            <Col span={9}> <p style={{ fontSize: 14, color: '#000000' }}>protein Limit</p></Col>
                                            <Col span={14}> <Input placeholder="limit" onChange={this.onChangeprotein} /> </Col>
                                            <Col span={1}> <p style={{ fontSize: 14, color: '#000000' }}>g</p> </Col>
                                        </Row>
                                        <Row style={{ padding: 10 }}>
                                            <Col span={9}> <p style={{ fontSize: 14, color: '#000000' }}>Fat Limit</p> </Col>
                                            <Col span={14}> <Input placeholder="limit" onChange={this.onChangeFat} /></Col>
                                            <Col span={1}> <p style={{ fontSize: 14, color: '#000000' }}>g</p> </Col>
                                        </Row>
                                        <Row style={{ padding: 10 }}>
                                            <Col span={9}> <p style={{ fontSize: 14, color: '#000000' }}>Carbs Limit</p></Col>
                                            <Col span={14}> <Input placeholder="limit" onChange={this.onChangeCabs} /></Col>
                                            <Col span={1}> <p style={{ fontSize: 14, color: '#000000' }}>g</p> </Col>
                                        </Row> </Col>
                                </Row>
                            </div>
                            <div style={{ flex: 1 }}>
                                <List
                                    grid={{ gutter: 16, column: 4 }}
                                    dataSource={this.state.foodData}
                                    style={{ marginTop: '30px', marginLeft: '30px' }}
                                    renderItem={item => (
                                        <List.Item>
                                            <div onClick={() => this.clickOnFood(item)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: 250, borderWidth: 4, borderColor: '#09d3ac' }}
                                                    bordered
                                                >
                                                    <Meta title={item.name} description={item.description} />
                                                </Card>
                                            </div>
                                        </List.Item>
                                    )}
                                />

                                <Modal title={this.state.foodDetails.foodName}
                                    visible={this.state.isVisible}
                                    onOk={this.onClickOk}
                                    onCancel={this.onClickOk}
                                >
                                    <div><p> {this.state.foodDetails.description}</p></div>
                                    <PieChart foodDetails={this.state.foodDetails} proteinLimit={this.state.proteinLimit} fatLimit={this.state.fatLimit} cabsLimit={this.state.cabsLimit} />
                                </Modal>
                            </div>
                        </header>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Design by Ridmal</Footer>
            </Layout>
        )
    }
}

export default HomePage;
