

import React, { useRef, useState, useEffect } from 'react';
import { Segmented, Row, Col, Button, Divider, Input, Select, Space, Form, Spin, Modal, Table, Typography, } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Description } from '@mui/icons-material';



const litigationCodeColumns = [
    {
        title: 'Litigation Code',
        dataIndex: 'litigationCode',
        key: 'litigationCode',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    // other columns as needed
];
const litigationCodeData = [
    {
        key: '1',
        litigationCode: 'NR',
        description: 'Its a description'

    },
    {
        key: '2',
        litigationCode: 'ITRC',
        description: 'Income Tax Referred Case'

    },

];

const ManageCourts = () => {
    const [selectedOption, setSelectedOption] = useState('Courts');
    const [stateItems, setStateItems] = useState([]);
    const [courtFormItems, setCourtFormItems] = useState(['High Court', 'District Court']);
    const [courtItems, setCourtItems] = useState([]);
    const [courtNameItems, setCourtNameItems] = useState([]);
    const [stateName, setStateName] = useState('');
    const [courtName, setCourtName] = useState('');
    const [courtNameName, setCourtNameName] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [showLitigationForm, setShowLitigationForm] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [litigantCodeApiData, setLitigantCodeApiData] = useState(null);
    const [litigantTableCodeApiData, setLitigantTableCodeApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCourtType, setSelectedCourtType] = useState('');
    const [selectedCourtName, setSelectedCourtName] = useState('');
    const [editingCourt, setEditingCourt] = useState(null);

    const stateInputRef = useRef(null);
    const courtInputRef = useRef(null);
    const courtNameInputRef = useRef(null);

    const onStateNameChange = (event) => setStateName(event.target.value);
    const onCourtNameChange = (event) => setCourtName(event.target.value);
    const onCourtNameNameChange = (event) => setCourtNameName(event.target.value);

    const addStateItem = (e) => {
        e.preventDefault();
        if (stateName) {
            const url = process.env.NODE_ENV === "production" ?
                "api/admin/states/states"
                : "http://localhost:3001/api/admin/states/states";

            axios.post(url, {
                stateName: stateName
            });


            setStateItems([...stateItems, stateName]);
            setStateName('');
            if (stateInputRef.current) {
                stateInputRef.current.focus();
            }
        }
    };

    const addCourtItem = (e) => {
        e.preventDefault();
        if (courtName) {

            setCourtItems([...courtItems, courtName]);
            setCourtName('');
            if (courtInputRef.current) {
                courtInputRef.current.focus();
            }
        }
    };

    const addCourtNameItem = (e) => {
        e.preventDefault();
        setShowForm(true);
        setApiData(null); // Reset API data when form is shown
        setEditingCourt(null); // Reset editing state
    };

    const handleSegmentChange = (value) => setSelectedOption(value);

    const fetchApiData = async (state, courtType, courtName) => {
        setLoading(true);
        try {
            const url = process.env.NODE_ENV === "production" ?
                `api/admin/courts/courts/search?courtName=${courtName}&courtType=${courtType}&state=${state}`
                : `http://localhost:3001/api/admin/courts/courts/search?courtName=${courtName}&courtType=${courtType}&state=${state}`;
            const response = await axios.get(url);
            const data = await response.data;
            setApiData(data);
        } catch (error) {
            console.log(state, courtName, courtType);
            console.error('Error fetching API data:', error);
        } finally {
            setLoading(false);
        }
    };
    const fetchLitigationApiData = async () => {
        setLoading(true);
        try {
            const url = process.env.NODE_ENV === "production" ?
                `api/admin/litigationcodes`
                :
                `http://localhost:3001/api/admin/litigationcodes`;
            const response = await axios.get(url);
            const data = await response.data;
            setLitigantCodeApiData(data);
        } catch (error) {

            console.error('Error fetching API data:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchApiStates = async () => {
        setLoading(true);
        try {
            const url1 = process.env.NODE_ENV === "production" ?
                `api/admin/states/states`
                :
                `http://localhost:3001/api/admin/states/states`;
            const url2 = process.env.NODE_ENV === "production" ?
                `api/admin/courts/courts`
                :
                `http://localhost:3001/api/admin/courts/courts`;
            const stateResponse = await axios.get(url1);
            const data = await stateResponse.data;
            const findAllResponse = await axios.get(url2);
            const findAllData = await findAllResponse.data;
            // setStateItems(data.map(state => state.state));
            // setCourtItems(data.map(state => state.courtType));
            // setCourtNameItems(data.map(state => state.courtName));



            setStateItems(data.map(state => state.stateName));

            // Extract court types and remove duplicates
            const courtTypes = [...new Set(findAllData.map(item => item.courtType))];
            setCourtItems(courtTypes);

            // Extract court names and remove duplicates
            const courtNames = [...new Set(findAllData.map(item => item.courtName))];
            setCourtNameItems(courtNames);
        } catch (error) {
            console.error('Error fetching API data:', error);
        } finally {
            setLoading(false);
        }
    };






    const handleRowClick = (record) => {
        setLoading(true);
        const url = process.env.NODE_ENV === "production" ?
            `api/admin/litigationcodes/search?litigationCode=${record.litigationCode}&description=${record.description}`
            :
            `http://localhost:3001/api/admin/litigationcodes/search?litigationCode=${record.litigationCode}&description=${record.description}`;

        axios.get(url)
            .then(response => {
                setLitigantTableCodeApiData(response.data);
            })

            .catch(error => {
                console.error("There was an error fetching the court details!", error);
            })
            .finally(() => {
                setLoading(false);
            });
        // console.log(record);
    };


    //   const handleEdit = (data) => {
    //     setEditingCourt(data);
    //     setShowLitigationForm(true);
    //   };

    //   const confirmDelete = (id) => {
    //     // Handle delete confirmation here
    //   };


    useEffect(() => {
        fetchApiStates();
        fetchLitigationApiData();
        if (selectedState && selectedCourtType && selectedCourtName) {
            fetchApiData(selectedState, selectedCourtType, selectedCourtName);
        }
    }, [selectedState, selectedCourtType, selectedCourtName]);

    const handleSelectChange = (value, optionType) => {
        if (optionType === 'state') {
            setSelectedState(value);
        } else if (optionType === 'courtType') {
            setSelectedCourtType(value);
        } else if (optionType === 'courtName') {
            setSelectedCourtName(value);
        }
    };

    const handleSubmit = async (values) => {
        try {
            if (editingCourt) {
                const url = process.env.NODE_ENV === "production" ?
                    `api/admin/courts/${editingCourt.id}`
                    :
                    `http://localhost:3001/api/admin/courts/${editingCourt.id}`;

                await axios.put(url, values);
            } else {
                const url = process.env.NODE_ENV === "production" ?
                    `api/admin/courts/courts`
                    :
                    `http://localhost:3001/api/admin/courts/courts`;
                await axios.post(url, values);

            }

            setShowForm(false);
            setEditingCourt(null);

        } catch (error) {
            console.log(values);
            console.error('Error submitting form:', error);
        }
    };

    const handleLitigationSubmit = async (values) => {
        try {
            if (editingCourt) {
                const url = process.env.NODE_ENV === "production" ?
                `api/admin/courts/${editingCourt.id}`
                :
                `http://localhost:3001/api/admin/courts/${editingCourt.id}`;
                await axios.put(url, values);
            } else {
                const url = process.env.NODE_ENV === "production" ?
                `api/admin/litigationcodes`
                :
                `http://localhost:3001/api/admin/litigationcodes`;
                await axios.post(url, values);
                fetchLitigationApiData();
                // handleRowClick(values);

            }

            setShowLitigationForm(false);
            setEditingCourt(null);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleEdit = (court) => {
        setEditingCourt(court);
        setShowForm(true);
    };

    const handleDelete = async (courtId) => {
        try {
            const url = process.env.NODE_ENV === "production" ?
                `api/admin/courts/${courtId}`
                :
                `http://localhost:3001/api/admin/courts/${courtId}`;
            const data = await axios.delete(url);
            Modal({
                title: `${data.message}`,

            });
            console.log(data)
            // Optionally refresh court name items here
        } catch (error) {
            console.error('Error deleting court:', error);
        }
    };

    const confirmDelete = (courtId) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this court?',
            onOk: () => handleDelete(courtId),
        });
    };

    return (
        <div className="content">
            <Segmented
                options={['Courts', 'Litigation Codes']}
                block
                onChange={handleSegmentChange}
            />
            {selectedOption === 'Courts' &&
                <Row gutter={16}>
                    <Col span={12} style={{ width: "800px" }}>
                        <h5>Court State</h5>
                        <Select
                            style={{ width: 400 }}
                            placeholder="Select State"
                            onChange={(value) => handleSelectChange(value, 'state')}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="Please enter state"
                                            ref={stateInputRef}
                                            value={stateName}
                                            onChange={onStateNameChange}
                                            onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button
                                            type="text"
                                            icon={<PlusOutlined />}
                                            onClick={addStateItem}
                                            disabled={!stateName.trim()}
                                        >
                                            Add state
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={stateItems.map((item) => ({
                                label: item,
                                value: item,
                            }))}
                        />
                        <br />
                        <br />
                        <h5>CourtType</h5>
                        <Select
                            style={{ width: 400 }}
                            placeholder="Select Court"
                            onChange={(value) => handleSelectChange(value, 'courtType')}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Input
                                            placeholder="Please enter court"
                                            ref={courtInputRef}
                                            value={courtName}
                                            onChange={onCourtNameChange}
                                            onKeyDown={(e) => e.stopPropagation()}
                                        />
                                        <Button
                                            type="text"
                                            icon={<PlusOutlined />}
                                            onClick={addCourtItem}
                                            disabled={!courtName.trim()}
                                        >
                                            Add court
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={courtItems.map((item) => ({
                                label: item,
                                value: item,
                            }))}
                        />
                        <br />
                        <br />
                        <h5>CourtName</h5>
                        <Select
                            style={{ width: 400 }}
                            placeholder="Select Court Name"
                            onChange={(value) => handleSelectChange(value, 'courtName')}
                            dropdownRender={(menu) => (
                                <>
                                    {menu}
                                    <Divider style={{ margin: '8px 0' }} />
                                    <Space style={{ padding: '0 8px 4px' }}>
                                        <Button
                                            type="text"
                                            icon={<PlusOutlined />}
                                            onClick={addCourtNameItem}
                                        >
                                            Add court name
                                        </Button>
                                    </Space>
                                </>
                            )}
                            options={courtNameItems.map((item) => ({
                                label: item,
                                value: item,
                            }))}
                        />
                    </Col>
                    <Col span={12}>
                        {loading ? (
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                <Spin />
                            </div>
                        ) : apiData ? (
                            <div style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}>
                                <h3>Court Details</h3>
                                <p><strong>Court Name:</strong> {apiData.courtName}</p>
                                <p><strong>Court Type:</strong> {apiData.courtType}</p>
                                <p><strong>Court Address:</strong> {apiData.courtAddress}</p>
                                <p><strong>City:</strong> {apiData.city}</p>
                                <p><strong>State:</strong> {apiData.stateName}</p>
                                <p><strong>Pin Code:</strong> {apiData.pincode}</p>
                                <p><strong>Phone:</strong> {apiData.phone}</p>
                                <p><strong>Web Link:</strong> {apiData.webLink}</p>
                                <p><strong>Email:</strong> {apiData.email}</p>
                                <Space>
                                    <Button
                                        icon={<EditOutlined />}
                                        onClick={() => handleEdit(apiData)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        icon={<DeleteOutlined />}
                                        onClick={() => confirmDelete(apiData.id)}
                                    >
                                        Delete
                                    </Button>
                                </Space>
                            </div>
                        ) : (
                            showForm ? (
                                <Form
                                    layout="vertical"
                                    onFinish={handleSubmit}
                                    initialValues={editingCourt}
                                    style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}
                                >
                                    <div style={{ display: "flex", gap: "10%" }}>
                                        <Form.Item
                                            label="Court Name"
                                            name="courtName"
                                            rules={[{ required: true, message: 'Please enter court name' }]}
                                            style={{ width: "100%" }}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="Court Type"
                                            name="courtType"
                                            rules={[{ required: true, message: 'Please select court type' }]}
                                            style={{ width: "100%" }}
                                        >
                                            <Select
                                                options={courtFormItems.map((item) => ({
                                                    label: item,
                                                    value: item,
                                                }))}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div style={{ display: "flex", gap: "10%" }}>
                                        <Form.Item
                                            label="Court Address"
                                            name="courtAddress"
                                            rules={[{ required: true, message: 'Please enter court address' }]}
                                            style={{ width: "100%" }}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            label="City"
                                            name="city"
                                            rules={[{ required: true, message: 'Please enter city' }]}
                                            style={{ width: "100%" }}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <div style={{ display: "flex", gap: "10%" }}>
                                        <Form.Item
                                            label="State"
                                            name="stateName"
                                            rules={[{ required: true, message: 'Please select state' }]}
                                            style={{ width: "100%" }}
                                        >
                                            {/* <Input /> */}
                                            <Select
                                                // style={{ width: 400 }}
                                                placeholder="Select State"
                                                // onChange={(value) => handleSelectChange(value, 'state')}

                                                options={stateItems.map((item) => ({
                                                    label: item,
                                                    value: item,
                                                }))}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            label="Pin Code"
                                            name="pincode"
                                            rules={[
                                                { required: true, message: 'Please enter pin code' },
                                                { pattern: /^\d{6}$/, message: 'Pin code must be exactly 6 digits' }
                                            ]}
                                            style={{ width: "100%" }}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                        rules={[
                                            { required: true, message: 'Please enter phone number' },
                                            { pattern: /^\d{10}$/, message: 'Phone number must be exactly 10 digits' }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Web Link"
                                        name="webLink"
                                        rules={[{ required: true, message: 'Please enter web link' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please enter email' },
                                            { type: 'email', message: 'Please enter a valid email' }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">Submit</Button>
                                    </Form.Item>
                                </Form>

                            ) : (
                                <h1>Select a court name or add a new one</h1>
                            )
                        )}
                    </Col>
                </Row>
            }
            {selectedOption === 'Litigation Codes' && (
                <>
                    <div style={{ display: "flex", gap: "10%", alignItems: "center" }}>

                        <h4>Litigation Case Codes</h4>
                        <Button type="primary" icon={<PlusOutlined />} onClick={() => (setShowLitigationForm(true))}>
                            Add Litigation Code
                        </Button>
                    </div>

                    <Row gutter={16}>
                        <Col span={12} style={{ width: "800px" }}>
                            {/* <Table columns={litigationCodeColumns} dataSource={litigationCodeData} /> */}
                            <Table
                                columns={litigationCodeColumns}
                                dataSource={litigantCodeApiData}
                                onRow={(record) => ({
                                    onClick: () => handleRowClick(record),
                                })}
                            />
                        </Col>
                        <Col span={12}>
                            {loading ? (
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                    <Spin />
                                </div>
                            )
                                : (
                                    showLitigationForm ? (
                                        <Form
                                            layout="vertical"
                                            onFinish={handleLitigationSubmit}
                                            initialValues={editingCourt}
                                            style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}
                                        >

                                            <Form.Item label="Litigation Code" name="litigationCode" rules={[{ required: true, message: 'Please enter court name' }]} style={{ width: "100%" }}>
                                                <Input />
                                            </Form.Item>


                                            <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter court address' }]} style={{ width: "100%" }}>
                                                <Input />
                                            </Form.Item>



                                            <Form.Item>
                                                <Button type="primary" htmlType="submit">Submit</Button>
                                            </Form.Item>
                                        </Form>
                                    )
                                        : litigantTableCodeApiData ? (
                                            <div style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}>
                                                <h3>Court Details</h3>
                                                <p><strong>Court Name:</strong> {litigantTableCodeApiData.litigationCode}</p>
                                                <p><strong>Court Type:</strong> {litigantTableCodeApiData.description}</p>

                                                <Space>
                                                    <Button
                                                        icon={<EditOutlined />}
                                                        onClick={() => handleEdit(litigantTableCodeApiData)}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        icon={<DeleteOutlined />}
                                                        onClick={() => confirmDelete(litigantTableCodeApiData.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </Space>
                                            </div>
                                        )

                                            : (
                                                <h1>Select a litigaation code or add a new one</h1>
                                            )
                                )}
                        </Col>
                    </Row>
                </>
            )}
        </div>
    );
};

export default ManageCourts;
