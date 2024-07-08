
import React from "react";

import { Button, Segmented, Space, Switch, Table, Typography, Select } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function ClientAssociate() {
  const columns = [
    {
      title: 'Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
   
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 120,
    },
    {
      title: 'Email Id',
      dataIndex: 'emailid',
      key: 'emailid',
      width: 120,
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
      width: 120,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      width: 150,
    },
   
   
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
      width: 100,
    },
    {
      title: 'Action',
      width: 100,
      fixed: 'right',
      render: (text, record) => (
        <Select
          // defaultValue="view"
          placeholder = "View"
          style={{
            width: 120,
          }}
          onChange={(value) => handleChange(value, record.key)}
          options={[
            {
              value: 'view',
              label: 'view',
            },
            {
              value: 'edit',
              label: 'edit',
            },
            {
              value: 'delete',
              label: 'delete',
            },
          ]}
        />
      ),
    }
  ];
  const data = [
    {
      key: '1',
      name: 'Ram 1',
      address:'Adress of 1',
      type: 'Non-Client',
      
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      client: "client 1",
      
    },
    {
        key: '2',
        address:'Adress of 2',
        name: 'Ram 2',
        
        type: 'Non-Client',
        
        phone: "6379474799595",
        emailid: "xxx@gmail.com",
        client: "client 2",
        
    },
    {
        key: '3',
        name: 'Ram 3',
        address:'Adress of 3',
      
      type: 'Non-Client',
      
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      client: "client 3",
      
    },
   
  ];
  const nav = useNavigate();


  const handleChange = (value, key) => {
    if (value === 'view') {
      nav(`/viewClientAssociate`);
    } else if (value === 'edit') {
      nav('/edit');
    } else if (value === 'delete') {
      handleDelete(key);
    }
  };
  const handleDelete = (key) => {
    console.log('Deleted record key:', key);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Litigant's</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="content"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Link to={"/addClientAssociate"}>
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right" }}>
                      Add Client Associate
                    </Button>
                  </Link>
                  <br />
                  <br />
                  <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                      x: 1500,
                      y: 400,
                    }}
                    pagination={{
                      pageSize: 10,
                    }}
                  />

                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ClientAssociate;
