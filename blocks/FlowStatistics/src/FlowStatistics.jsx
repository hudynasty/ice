import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Grid } from '@icedesign/base';
import LineChart from './LineChart';
import Head from './Head';
import './FlowStatistics.scss';

const TabPane = Tab.TabPane;
const { Row, Col } = Grid;

const MOCK_DATA = {
  threeMonths: {
    visits: '4,677',
    unique_users: '3,621',
    ip: '5,690',
    click: '6,583',
  },
  halfYear: {
    visits: '6,688',
    unique_users: '8,339',
    ip: '7,989',
    click: '9,832',
  },
  nearlyYear: {
    visits: '10,323',
    unique_users: '9,262',
    ip: '12,639',
    click: '26,386',
  },
};
export default class FlowStatistics extends Component {
  static displayName = 'FlowStatistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row type="wrap" className="flow-statistics">
        <Col span="24">
          <IceContainer>
            <h4 style={styles.title}>流量统计</h4>
            <Tab type="text" size="small">
              <TabPane tab="近三个月" key="1">
                <Head data={MOCK_DATA.threeMonths} />
                <LineChart />
              </TabPane>
              <TabPane tab="近半年" key="2">
                <Head data={MOCK_DATA.halfYear} />
                <LineChart />
              </TabPane>
              <TabPane tab="近一年" key="3">
                <Head data={MOCK_DATA.nearlyYear} />
                <LineChart />
              </TabPane>
            </Tab>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  title: {
    margin: '0',
    fontSize: '16px',
    paddingBottom: '15px',
    fontWeight: 'bold',
    color: '#333',
  },
};
