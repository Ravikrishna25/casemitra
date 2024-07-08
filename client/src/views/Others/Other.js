
import React from "react";

import { Button, Segmented, Space, Switch, Table, Typography, Select } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Other() {
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
      title: 'Case',
      dataIndex: 'case',
      key: 'case',
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
          onChange={(value) => handleChange(value, record)}
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
      relationship: 'Client',
      legalType: 'applicant',
      type: 'Non-Client',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      case: "97/1097",
      
    },
    {
      key: '2',
      name: 'Ravi 2',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'Opp Client',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      case: "97/1097"
    },
    {
      key: '3',
      name: 'Raj 3',
      relationship: 'Opp Lawyer',
      legalType: 'Accused',
      type: 'Opp Lawyer',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      case: "97/1097"
    },
    {
      key: '4',
      name: 'Ram 4',
      relationship: 'Client',
      legalType: 'applicant',
      type: 'Pending',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      case: "Pending"
    },
    {
      key: '5',
      name: 'Ravi 5',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'Pending',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      case: "Pending"
    },
   
  ];
  const nav = useNavigate();


  const handleChange = (value, record) => {
    if (value === 'view') {
      nav(`/viewOthers/${record.type}`);
    } else if (value === 'edit') {
      nav('/edit');
    } else if (value === 'delete') {
      handleDelete(record.key);
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
                  <Link to={"/addOthers"}>
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right" }}>
                      Add Contacts
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

export default Other;
