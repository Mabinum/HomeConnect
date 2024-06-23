import { Card, Button, Container } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

// const data = [
//   {name: '1월', 관리비: 100, pv: 2400, amt: 2400},
//   {name: '2월', 관리비: 500, pv: 2400, amt: 2400},
//   {name: '3월', 관리비: 600, pv: 2400, amt: 2400},
//   {name: '4월', 관리비: 700, pv: 2400, amt: 2400},
//   {name: '5월', 관리비: 800, pv: 2400, amt: 2400},
//   {name: '6월', 관리비: 900, pv: 2400, amt: 2400},
//   {name: '7월', 관리비: 1000, pv: 2400, amt: 2400},
//   {name: '8월', 관리비: 1100, pv: 2400, amt: 2400},
//   {name: '9월', 관리비: 1200, pv: 2400, amt: 2400},
//   {name: '10월', 관리비: 1300, pv: 2400, amt: 2400},
//   {name: '11월', 관리비: 1500, pv: 2400, amt: 2400},
//   {name: '12월', 관리비: 2000, pv: 2400, amt: 2400},
// 
// ];

function Main() {

  return (
    <>
      {/* <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <BarChart
        width={1000}
        height={700}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px',
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="관리비" fill="#8884d8" barSize={50} />
      </BarChart>
    </Container> */}
    </>
  );
};

export default Main;