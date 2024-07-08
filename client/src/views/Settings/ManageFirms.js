

// import React, { useRef, useState, useEffect } from 'react';
// import { Segmented, Row, Col, Button, Divider, Input, Select, Space, Form, Spin, Modal, Table, Typography, } from 'antd';
// import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import { Description } from '@mui/icons-material';



// const litigationCodeColumns = [
//     {
//         title: 'Firms Name',
//         dataIndex: 'firmName',
//         key: 'firmName',
//     },
    
//     // other columns as needed
// ];
// const litigationCodeData = [
//     {
//         key: '1',
//         firmName: 'NR',
        

//     },
//     {
//         key: '2',
//         firmName: 'ITRC',
        

//     },

// ];

// const ManageFirms = () => {
//     const [selectedOption, setSelectedOption] = useState('Courts');
//     const [stateItems, setStateItems] = useState([]);
//     const [courtFormItems, setCourtFormItems] = useState(['High Court', 'District Court']);
//     const [courtItems, setCourtItems] = useState([]);
//     const [courtNameItems, setCourtNameItems] = useState([]);
//     const [stateName, setStateName] = useState('');
//     const [courtName, setCourtName] = useState('');
//     const [courtNameName, setCourtNameName] = useState('');
//     const [showForm, setShowForm] = useState(false);
//     const [showLitigationForm, setShowLitigationForm] = useState(false);
//     const [apiData, setApiData] = useState(null);
//     const [litigantCodeApiData, setLitigantCodeApiData] = useState(null);
//     const [litigantTableCodeApiData, setLitigantTableCodeApiData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [selectedState, setSelectedState] = useState('');
//     const [selectedCourtType, setSelectedCourtType] = useState('');
//     const [selectedCourtName, setSelectedCourtName] = useState('');
//     const [editingCourt, setEditingCourt] = useState(null);

//     const stateInputRef = useRef(null);
//     const courtInputRef = useRef(null);
//     const courtNameInputRef = useRef(null);

//     const onStateNameChange = (event) => setStateName(event.target.value);
//     const onCourtNameChange = (event) => setCourtName(event.target.value);
//     const onCourtNameNameChange = (event) => setCourtNameName(event.target.value);

//     const addStateItem = (e) => {
//         e.preventDefault();
//         if (stateName) {
//             axios.post(`http://localhost:3001/api/admin/states/states`, {
//                 stateName: stateName
//             });


//             setStateItems([...stateItems, stateName]);
//             setStateName('');
//             if (stateInputRef.current) {
//                 stateInputRef.current.focus();
//             }
//         }
//     };

//     const addCourtItem = (e) => {
//         e.preventDefault();
//         if (courtName) {

//             setCourtItems([...courtItems, courtName]);
//             setCourtName('');
//             if (courtInputRef.current) {
//                 courtInputRef.current.focus();
//             }
//         }
//     };

//     const addCourtNameItem = (e) => {
//         e.preventDefault();
//         setShowForm(true);
//         setApiData(null); // Reset API data when form is shown
//         setEditingCourt(null); // Reset editing state
//     };

//     const handleSegmentChange = (value) => setSelectedOption(value);

//     const fetchApiData = async (state, courtType, courtName) => {
//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:3001/api/admin/courts/courts/search?courtName=${courtName}&courtType=${courtType}&state=${state}`);
//             const data = await response.data;
//             setApiData(data);
//         } catch (error) {
//             console.log(state, courtName, courtType);
//             console.error('Error fetching API data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };
//     const fetchLitigationApiData = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get(`http://localhost:3001/api/admin/litigationcodes/`);
//             const data = await response.data;
//             setLitigantCodeApiData(data);
//         } catch (error) {

//             console.error('Error fetching API data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const fetchApiStates = async () => {
//         setLoading(true);
//         try {
//             const stateResponse = await axios.get(`http://localhost:3001/api/admin/states/states`);
//             const data = await stateResponse.data;
//             const findAllResponse = await axios.get(`http://localhost:3001/api/admin/courts/courts`);
//             const findAllData = await findAllResponse.data;
//             // setStateItems(data.map(state => state.state));
//             // setCourtItems(data.map(state => state.courtType));
//             // setCourtNameItems(data.map(state => state.courtName));



//             setStateItems(data.map(state => state.stateName));

//             // Extract court types and remove duplicates
//             const courtTypes = [...new Set(findAllData.map(item => item.courtType))];
//             setCourtItems(courtTypes);

//             // Extract court names and remove duplicates
//             const courtNames = [...new Set(findAllData.map(item => item.courtName))];
//             setCourtNameItems(courtNames);
//         } catch (error) {
//             console.error('Error fetching API data:', error);
//         } finally {
//             setLoading(false);
//         }
//     };






//     const handleRowClick = (record) => {
//         setLoading(true);
//         axios.get(`http://localhost:3001/api/admin/litigationcodes/search?litigationCode=${record.litigationCode}&description=${record.description}`)
//             .then(response => {
//                 setLitigantTableCodeApiData(response.data);
//             })

//             .catch(error => {
//                 console.error("There was an error fetching the court details!", error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//         // console.log(record);
//     };


//     //   const handleEdit = (data) => {
//     //     setEditingCourt(data);
//     //     setShowLitigationForm(true);
//     //   };

//     //   const confirmDelete = (id) => {
//     //     // Handle delete confirmation here
//     //   };


//     useEffect(() => {
//         fetchApiStates();
//         fetchLitigationApiData();
//         if (selectedState && selectedCourtType && selectedCourtName) {
//             fetchApiData(selectedState, selectedCourtType, selectedCourtName);
//         }
//     }, [selectedState, selectedCourtType, selectedCourtName]);

//     const handleSelectChange = (value, optionType) => {
//         if (optionType === 'state') {
//             setSelectedState(value);
//         } else if (optionType === 'courtType') {
//             setSelectedCourtType(value);
//         } else if (optionType === 'courtName') {
//             setSelectedCourtName(value);
//         }
//     };

//     const handleSubmit = async (values) => {
//         try {
//             if (editingCourt) {

//                 await axios.put(`http://localhost:3001/api/admin/courts/${editingCourt.id}`, values);
//             } else {

//                 await axios.post('http://localhost:3001/api/admin/courts/courts', values);

//             }

//             setShowForm(false);
//             setEditingCourt(null);

//         } catch (error) {
//             console.log(values);
//             console.error('Error submitting form:', error);
//         }
//     };

//     const handleLitigationSubmit = async (values) => {
//         try {
//             if (editingCourt) {

//                 await axios.put(`http://localhost:3001/api/admin/courts/${editingCourt.id}`, values);
//             } else {

//                 await axios.post('http://localhost:3001/api/admin/litigationcodes', values);
//                 fetchLitigationApiData();
//                 // handleRowClick(values);

//             }

//             setShowLitigationForm(false);
//             setEditingCourt(null);

//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     const handleEdit = (court) => {
//         setEditingCourt(court);
//         setShowForm(true);
//     };

//     const handleDelete = async (courtId) => {
//         try {
//             const data = await axios.delete(`http://localhost:3001/api/admin/courts/${courtId}`);
//             Modal({
//                 title: `${data.message}`,

//             });
//             console.log(data)
//             // Optionally refresh court name items here
//         } catch (error) {
//             console.error('Error deleting court:', error);
//         }
//     };

//     const confirmDelete = (courtId) => {
//         Modal.confirm({
//             title: 'Are you sure you want to delete this court?',
//             onOk: () => handleDelete(courtId),
//         });
//     };
//   return (
//     <div className='content'>
//         <>
//                 <div style={{display:"flex",gap:"10%",alignItems:"center"}}>

//                     <h4>Litigation Case Codes</h4>
//                     <Button type="primary" icon={<PlusOutlined />} onClick={() => (setShowLitigationForm(true))}>
//                             Add Litigation Code
//                         </Button>
//                 </div>
                        
//                     <Row gutter={16}>
//                         <Col span={12} style={{ width: "800px" }}>
//                             {/* <Table columns={litigationCodeColumns} dataSource={litigationCodeData} /> */}
//                             <Table
//                                 columns={litigationCodeColumns}
//                                 dataSource={litigantCodeApiData}
//                                 onRow={(record) => ({
//                                     onClick: () => handleRowClick(record),
//                                 })}
//                             />
//                         </Col>
//                         <Col span={12}>
//                             {loading ? (
//                                 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

//                                     <Spin />
//                                 </div>
//                             )
//                                 : (
//                                     showLitigationForm ? (
//                                         <Form
//                                             layout="vertical"
//                                             onFinish={handleLitigationSubmit}
//                                             initialValues={editingCourt}
//                                             style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}
//                                         >

//                                             <Form.Item label="Litigation Code" name="litigationCode" rules={[{ required: true, message: 'Please enter court name' }]} style={{ width: "100%" }}>
//                                                 <Input />
//                                             </Form.Item>


//                                             <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter court address' }]} style={{ width: "100%" }}>
//                                                 <Input />
//                                             </Form.Item>



//                                             <Form.Item>
//                                                 <Button type="primary" htmlType="submit">Submit</Button>
//                                             </Form.Item>
//                                         </Form>
//                                     )
//                                         : litigantTableCodeApiData ? (
//                                             <div style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}>
//                                                 <h3>Court Details</h3>
//                                                 <p><strong>Court Name:</strong> {litigantTableCodeApiData.litigationCode}</p>
//                                                 <p><strong>Court Type:</strong> {litigantTableCodeApiData.description}</p>

//                                                 <Space>
//                                                     <Button
//                                                         icon={<EditOutlined />}
//                                                         onClick={() => handleEdit(litigantTableCodeApiData)}
//                                                     >
//                                                         Edit
//                                                     </Button>
//                                                     <Button
//                                                         icon={<DeleteOutlined />}
//                                                         onClick={() => confirmDelete(litigantTableCodeApiData.id)}
//                                                     >
//                                                         Delete
//                                                     </Button>
//                                                 </Space>
//                                             </div>
//                                         )

//                                             : (
//                                                 <h1>Select a litigaation code or add a new one</h1>
//                                             )
//                                 )}
//                         </Col>
//                     </Row>
//                 </>
//     </div>
//   )
// }

// export default ManageFirms
import React, { useRef, useState, useEffect } from 'react';
import { Row, Col, Button, Form, Input, Select, Spin, Modal, Table, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const litigationCodeColumns = [
    {
        title: 'Firms Name',
        dataIndex: 'firmName',
        key: 'firmName',
    },
    // Add other columns as needed
];

const ManageFirms = () => {
    const [showForm, setShowForm] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [editingFirm, setEditingFirm] = useState(null);
    const [litigantCodeApiData, setLitigantCodeApiData] = useState([]);
    const [litigantTableCodeApiData, setLitigantTableCodeApiData] = useState(null);

    useEffect(() => {
        fetchLitigationApiData();
    }, []);

    const fetchLitigationApiData = async () => {
        setLoading(true);
        try {
            const url = process.env.NODE_ENV === "production" ?
            `api/admin/firms`
            :
            `http://localhost:3001/api/admin/firms`;
            const response = await axios.get(url);
            setLitigantCodeApiData(response.data);
        } catch (error) {
            console.error('Error fetching API data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRowClick = (record) => {
        setLoading(true);
        const url = process.env.NODE_ENV === "production" ?
            `api/admin/firms/search?firmName=${record.firmName}`
            :
            `http://localhost:3001/api/admin/firms/search?firmName=${record.firmName}`;
        axios.get(url)
            .then(response => {
                setLitigantTableCodeApiData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the firm details!", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleEdit = (firm) => {
        setEditingFirm(firm);
        setShowForm(true);
    };

    const handleDelete = async (firmId) => {
        try {
            const url = process.env.NODE_ENV === "production" ?
            `api/admin/litigationcodes/${firmId}`
            :
            `http://localhost:3001/api/admin/litigationcodes/${firmId}`;
            const data = await axios.delete(url);
            Modal.info({
                title: `${data.message}`,
            });
            fetchLitigationApiData();
        } catch (error) {
            console.error('Error deleting firm:', error);
        }
    };

    const confirmDelete = (firmId) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this firm?',
            onOk: () => handleDelete(firmId),
        });
    };

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            if (editingFirm) {
                const url = process.env.NODE_ENV === "production" ?
                `api/admin/litigationcodes/${editingFirm.id}`
                :
                `http://localhost:3001/api/admin/litigationcodes/${editingFirm.id}`;
                await axios.put(url, values);
            } else {
                const url = process.env.NODE_ENV === "production" ?
                `api/admin/firms`
                :
                `http://localhost:3001/api/admin/firms`;
                await axios.post(url, values);
            }
            setShowForm(false);
            setEditingFirm(null);
            fetchLitigationApiData();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='content'>
            <div style={{ display: "flex", gap: "10%", alignItems: "center" }}>
                <h4>Manage Firms</h4>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setShowForm(true)}>
                    Add Firm
                </Button>
            </div>

            <Row gutter={16}>
                <Col span={12} style={{ width: "800px" }}>
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
                    ) : (
                        showForm ? (
                            <Form
                                layout="vertical"
                                onFinish={handleSubmit}
                                initialValues={editingFirm}
                                style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}
                            >
                                <Form.Item label="Firm Name" name="firmName" rules={[{ required: true, message: 'Please enter firm name' }]} style={{ width: "100%" }}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter city' }]} style={{ width: "100%" }}>
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Firm Type" name="firmType" rules={[{ required: true, message: 'Please select firm type' }]} style={{ width: "100%" }}>
                                    <Select
                                        options={[
                                            { label: 'Independent', value: 'independent' },
                                            { label: 'Company', value: 'company' },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item label="Contact Name" name="contact" rules={[{ required: true, message: 'Please enter contact name' }]} style={{ width: "100%" }}>
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
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        ) : litigantTableCodeApiData ? (
                            <div style={{ border: "2px solid black", padding: '10px', borderRadius: "5%" }}>
                                <h3>Firm Details</h3>
                                <p><strong>Firm Name:</strong> {litigantTableCodeApiData.firmName}</p>
                                <p><strong>City:</strong> {litigantTableCodeApiData.city}</p>
                                <p><strong>Firm Type:</strong> {litigantTableCodeApiData.firmType}</p>
                                <p><strong>Contact Name:</strong> {litigantTableCodeApiData.contactName}</p>
                                <p><strong>Email:</strong> {litigantTableCodeApiData.email}</p>
                                <p><strong>Phone:</strong> {litigantTableCodeApiData.phone}</p>
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
                        ) : (
                            <h1>Select a firm or add a new one</h1>
                        )
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default ManageFirms;
