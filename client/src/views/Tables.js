// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   Table,
//   Row,
//   Col,
// } from "reactstrap";

// function TableLayout(props) {
//   // Access the passed data from props
//   const tableData = props.tableData;

//   return (

//         <Row>
//           <Col md="12">
//             <Card>
//               <CardHeader>
//                 <CardTitle tag="h4">Simple Table</CardTitle>
//               </CardHeader>
//               <CardBody>
//                 <Table responsive>
//                   <thead className="text-primary">
//                     <tr>
//                       <th>Case Name</th>
//                       <th>Start Date</th>
//                       <th>Last Updated</th>
//                       <th className="text-right">Next Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Iterate over the data and render table rows */}
//                     {tableData.map((data, index) => (
//                       <tr key={index}>
//                         <td>{data.name}</td>
//                         <td>{data.country}</td>
//                         <td>{data.city}</td>
//                         <td className="text-right">{data.salary}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </Table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
      
//   );
// }


// // ParentComponent.js


// function Tables() {
//   // Define your data here
//   const tableData = [
//     { name: "Dakota Rice", country: "Niger", city: "Oud-Turnhout", salary: "$36,738" },
//     { name: "Minerva Hooper", country: "Curaçao", city: "Sinaai-Waas", salary: "$23,789" },
//     // Add more data as needed
//   ];

//   return (
//     <div className="content">
//       {/* Call the Tables component and pass the data as props */}
//       <TableLayout tableData={tableData} />
//     </div>
//   );
// }

// export default Tables;




// import React, { useEffect, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const MyCalendar = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('/events.json')
//       .then(response => response.json())
//       .then(data => {
//         const formattedEvents = data.map(event => ({
//           ...event,
//           start: new Date(event.start),
//           end: new Date(event.end)
//         }));
//         setEvents(formattedEvents);
//       });
//   }, []);

//   return (
//     <div className="content">
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ height: 500 }}
//       />
//     </div>
//   );
// };

// export default MyCalendar;

import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // Import custom CSS

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => {
        const formattedEvents = data.map(event => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }));
        setEvents(formattedEvents);
      });
  }, []);

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: isMobile ? '100vh' : 500 }}
        defaultView={isMobile ? Views.AGENDA : Views.MONTH}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
      />
    </div>
  );
};

export default MyCalendar;
