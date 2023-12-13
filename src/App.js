import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


function App() {

  const data = [
    {name:"Birds", value: 100000},
    {name:"Cats", value: 50000},
    {name:"Dogs", value: 65000},
    {name:"Sloths", value: 40008},
  ];

  return (
    <div style={{textAlign:"center"}} >
              <h1>💗 Ben's Alltime Favorite Animals MVP  💗</h1>
      <div className="App">

      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>

        {/* <BarChart width={150} height={40} data={data}>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart> */}

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
    </div>
  );
}

export default App;
