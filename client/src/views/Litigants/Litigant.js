
import React from "react";

import { Button, Segmented, Space, Switch, Table, Typography, Select } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

function Litigant() {
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
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
      width: 150,
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
      relationship: 'Client',
      legalType: 'applicant',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing",
      
    },
    {
      key: '2',
      name: 'Ravi 2',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '3',
      name: 'Raj 3',
      relationship: 'Opponent',
      legalType: 'Accused',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '4',
      name: 'Ram 4',
      relationship: 'Client',
      legalType: 'applicant',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '5',
      name: 'Ravi 5',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '6',
      name: 'Raj 6',
      relationship: 'Opponent',
      legalType: 'Accused',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '7',
      name: 'Ram 7',
      relationship: 'Client',
      legalType: 'applicant',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '8',
      name: 'Ravi 8',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '9',
      name: 'Raj 9',
      relationship: 'Opponent',
      legalType: 'Accused',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '10',
      name: 'Ram 10',
      relationship: 'Client',
      legalType: 'applicant',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '11',
      name: 'Ravi 11',
      relationship: 'Opponent',
      legalType: 'respondent',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },
    {
      key: '12',
      name: 'Raj 12',
      relationship: 'Opponent',
      legalType: 'Accused',
      type: 'individual',
      address: 'xxx,address street,erode - 3928323',
      designation: 'employee',
      company: 'xxx Company',
      identification: 'adhar numbersd86666',
      phone: "6379474799595",
      emailid: "xxx@gmail.com",
      notes: "this is a client notes made by testing"
    },

  ];
  const nav = useNavigate();


  const handleChange = (value, key) => {
    if (value === 'view') {
      nav(`/viewLitigant`);
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
                  <Link to={"/addLitigant"}>
                    <Button type="primary" shape="round" icon={<UserAddOutlined />} size={"large"} style={{ backgroundColor: "#0a2540", float: "right" }}>
                      Add Litigant
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

export default Litigant;
