import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { LineChart, Line ,XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar} from 'recharts';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

div{
  display: flex;
  margin: 20px auto;
  padding-top: 10px;
}

Select {
  width: 100px;
}
`;

function Menu1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 실제 데이터 가져오기. 임시 데이터 사용 중.
      const chartData = [
        { name: '1월', uv: 65 },
        { name: '2월', uv: 59 },
        { name: '3월', uv: 80 },
        { name: '4월', uv: 81 },
        { name: '5월', uv: 61 },
        { name: '6월', uv: 71 },
        { name: '7월', uv: 71 },
        { name: '8월', uv: 51 },
        { name: '9월', uv: 61 },
        { name: '10월', uv: 71 },
        { name: '11월', uv: 91 },
        { name: '12월', uv: 61 },
      ];
      setData(chartData);
    };
    
    fetchData();
  }, [data]);

  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // 실제 데이터 가져오기. 임시 데이터 사용 중.
      const chartData = [
        {
          name: 'Page A',
          uv: 40,
          pv: 24,
          amt: 24,
        },
        {
          name: 'Page B',
          uv: 30,
          pv: 13,
          amt: 22,
        },
        {
          name: 'Page C',
          uv: 20,
          pv: 98,
          amt: 22,
        },
      ];
      setData1(chartData);
    };
    
    fetchData();
  });
  
  return (
    <Wrapper>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#3430b7" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <section>
        <div>
          <span>2024년</span>
          <Form.Select type="text" placeholder="일">
            <option value="1">월</option>
            <option value="2">1</option>
            <option value="3">2</option>
            <option value="4">3</option>
            <option value="5">4</option>
            <option value="6">5</option>
            <option value="7">6</option>
            <option value="8">7</option>
            <option value="9">8</option>s
            <option value="10">9</option>
            <option value="11">10</option>
            <option value="12">11</option>
            <option value="12">12</option>
          </Form.Select>
          <label htmlFor="year">의 관리비는 %%%%%원 입니다.</label> 
        </div>
      </section>
      <ResponsiveContainer>
        <BarChart width={15} height={4} data={data1}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

export default Menu1;