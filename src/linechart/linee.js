import React from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis} from 'recharts'

const pdata=[
  {
    name:"react",student:"MCA",fees:100
  },
  {
    name:"java",student:"MCA",fees:400
  },
  {
    name:"javascript",student:"MCA",fees:40
  },
  {
    name:"php",student:"MCA",fees:800
  },
  {
    name:"python",student:"MCA",fees:10
  },
  {
    name:"c",student:"MCA",fees:120
  },
]

const Linee = () => {


  return (
    <>
    <div className='linechart mt-5'>
      <h3>line chart</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata}>
          <XAxis dataKey="name" interval={'preserveStartEnd'}/>
          <YAxis/>
          <Line dataKey="fees"/>

        </LineChart>
      </ResponsiveContainer>

    </div>
    </>
  )
}

export default Linee