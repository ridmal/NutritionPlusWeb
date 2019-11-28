import Chart from "react-google-charts";
import React from 'react';
import { Row, Col, List, Icon } from 'antd';

var PieChart = ({ foodDetails, proteinLimit, cabsLimit, fatLimit }) => {
    const LimitList = [];
    if (proteinLimit < foodDetails.protein) LimitList.push({ title: 'Protin Limit Exceed', isLimitExceed: true })
    else LimitList.push({ title: 'Protin amount is matching', isLimitExceed: false });
    if (cabsLimit < foodDetails.carbs) LimitList.push({ title: 'Carbs Limit Exceed', isLimitExceed: true });
    else LimitList.push({ title: 'Carbs amount is matching', isLimitExceed: false });
    if (fatLimit < foodDetails.fat) LimitList.push({ title: 'Fat Limit Exceed', isLimitExceed: true });
    else LimitList.push({ title: 'Fat amount is matching', isLimitExceed: false });

    return (
        <div>
            <Row>
                <List
                    itemLayout="horizontal"
                    dataSource={LimitList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.isLimitExceed ? <Icon type="close-circle" style={{ fontSize: 16, color: '#DC143C' }} /> : <Icon type="check-circle" style={{ fontSize: 16, color: '#32CD32' }} />}
                                title={item.title}
                            />
                        </List.Item>
                    )}
                />
            </Row>
            <Row>
                <Chart
                    width={'480px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Nutrition', 'Amount'],
                        ['protein', foodDetails.protein],
                        ['Carbs', foodDetails.carbs],
                        ['Fat', foodDetails.fat],
                    ]}
                    rootProps={{ 'data-testid': '1' }}
                />
            </Row>
        </div>
    )
}

export default PieChart;