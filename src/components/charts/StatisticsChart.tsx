import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Without SERA',
    reportRate: 27,
    responseTime: 72,
    employeeSatisfaction: 45,
  },
  {
    name: 'With SERA',
    reportRate: 89,
    responseTime: 24,
    employeeSatisfaction: 87,
  },
];

const StatisticsChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="reportRate" name="Report Rate %" fill="#5B4DC9" />
          <Bar dataKey="responseTime" name="Response Time (hrs)" fill="#7C6FE4" />
          <Bar dataKey="employeeSatisfaction" name="Employee Satisfaction %" fill="#E469B3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
