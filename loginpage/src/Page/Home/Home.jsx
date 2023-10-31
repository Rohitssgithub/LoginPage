
import React, { useEffect, useState } from 'react'
import styles from "./Graph.module.scss"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import Table from './Table';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,


);
const Graph = () => {
  const [value, setValue] = useState(null)
  const [year, setYear] = useState([])
  const [obj, setObj] = useState(
    {
      "month_table_data": {
        "2020": [
          {
            "month": "January",
            "value": 14228.1999969482422
          },
          {
            "month": "February",
            "value": 512247.1999969482422
          },
          {
            "month": "March",
            "value": 1437.1999969482422
          },
          {
            "month": "April",
            "value": 19447.1999969482422
          },
          {
            "month": "May",
            "value": 42207.1999969482422
          },
          {
            "month": "June",
            "value": 11407.1999969482422
          },
          {
            "month": "July",
            "value": 11407.1999969482422
          },
          {
            "month": "August",
            "value": 11407.1999969482422
          },
          {
            "month": "Sept",
            "value": 11407.1999969482422
          },
          {
            "month": "Oct",
            "value": 11407.1999969482422
          },
          {
            "month": "Nov",
            "value": 11407.1999969482422
          },
          {
            "month": "Dec",
            "value": 91407.1999969482422
          }
        ],
        "2021": [
          {
            "month": "January",
            "value": 9048.1999969482422
          },
          {
            "month": "February",
            "value": 142275.1999969482422
          },
          {
            "month": "March",
            "value": 947223.1999969482422
          },
          {
            "month": "April",
            "value": 122907.1999969482422
          },
          {
            "month": "May",
            "value": 283407.1999969482422
          },
          {
            "month": "June",
            "value": 68407.1999969482422
          },
          {
            "month": "July",
            "value": 11407.1999969482422
          },
          {
            "month": "August",
            "value": 81407.1999969482422
          },
          {
            "month": "Sept",
            "value": 41407.1999969482422
          },
          {
            "month": "Oct",
            "value": 31407.1999969482422
          },
          {
            "month": "Nov",
            "value": 21407.1999969482422
          },
          {
            "month": "Dec",
            "value": 51407.1999969482422
          }
        ],
        "2022": [
          {
            "month": "January",
            "value": 93208.1999969482422
          },
          {
            "month": "February",
            "value": 1222237.1999969482422
          },
          {
            "month": "March",
            "value": 92227.1999969482422
          },
          {
            "month": "April",
            "value": 912407.1999969482422
          },
          {
            "month": "May",
            "value": 14407.1999969482422
          },
          {
            "month": "June",
            "value": 41407.1999969482422
          },
          {
            "month": "July",
            "value": 31407.1999969482422
          },
          {
            "month": "August",
            "value": 21407.1999969482422
          },
          {
            "month": "Sept",
            "value": 11407.1999969482422
          },
          {
            "month": "Oct",
            "value": 31497.1999969482422
          },
          {
            "month": "Nov",
            "value": 21707.1999969482422
          },
          {
            "month": "Dec",
            "value": 41907.1999969482422
          }

        ],
        "2023": [
          {
            "month": "January",
            "value": 13208.1999969482422
          },
          {
            "month": "February",
            "value": 243327.1999969482422
          },
          {
            "month": "March",
            "value": 33947.1999969482422
          },
          {
            "month": "April",
            "value": 627072.1999969482422
          },
          {
            "month": "May",
            "value": 244907.1999969482422
          },
          {
            "month": "June",
            "value": 918407.1999969482422
          },
          {
            "month": "July",
            "value": 12407.1999969482422
          },
          {
            "month": "August",
            "value": 983407.1999969482422
          },
          {
            "month": "Sept",
            "value": 44407.1999969482422
          },
          {
            "month": "Oct",
            "value": 77407.1999969482422
          },
          {
            "month": "Nov",
            "value": 791407.1999969482422
          },
          {
            "month": "Dec",
            "value": 91107.1999969482422
          }
        ]

      },
      "year_table_data": [
        {
          "year": 2020,
          "high": 23.0787,
          "low": 45.763,
          "percentage": 42
        },
        {
          "year": 2021,
          "high": 23.0787,
          "low": 45.763,
          "percentage": 42
        },
        {
          "year": 2022,
          "high": 23.0787,
          "low": 45.763,
          "percentage": 42
        },
        {
          "year": 2023,
          "high": 23.0787,
          "low": 45.763,
          "percentage": 49
        }
      ],

      "stock_statistics": {
        "market_cap": 12.5,
        "ebitda": 13.5,
        "pe": 124.543,
        "revenue": 34.678,
        "lp": 42.56,
        "op_cash_flow": 76,
        "52_week_high": 144.59,
        "52_week_low": 902.12,
        "eps": 342.3,
        "total_debt": 41.53,
        "cash_reserved": 912.8,
        "levered_free_cash_flow": 712.75
      }
    }
  )
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'MAR-HIGH',
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };
  const uniqueMonths = [...new Set(Object.values(obj.month_table_data).flatMap(yearData => yearData.map(data => data.month)))]

  const uniqueYears = obj.year_table_data.map(yearData => yearData.year)
  const headers = Object.keys(obj.year_table_data[0]);
  const table1Keys = ["market_cap", "ebitda", "pe", "revenue", "lp"];
  const table2Keys = Object.keys(obj.stock_statistics).filter(key => !table1Keys.includes(key));
  var colors = ['aqua', 'yellow', 'orange', 'gray', 'blue', 'fuchsia', 'green',
    'lime', 'maroon', 'navy', 'olive', 'purple', 'red',
    'silver', 'teal', 'white', 'black'];
  const yearToPointStyle = [
    'circle',
    'rect',
    'cross',
    'triangle',
    "crossRot",
    "rectRounded",
    "rectRot",
    "star",
    "triangleRot",
    "line"
  ];
  // const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;

  // const generateRandomColor = (index) => {
  //   let r = Math.floor(Math.random() * 255);
  //   let g = Math.floor(Math.random() * 255);
  //   let b = Math.floor(Math.random() * 255);
  //   return "rgb(" + r + "," + g + "," + b + ")";
  // }

  // Math.floor(Math.random() * 16777215).toString(16)


  useEffect(() => {
    const datasets = Object.keys(obj.month_table_data)?.map((year, index) => {
      const pointStyle = yearToPointStyle[index] || 'circle';
      return {
        label: year,
        data: obj.month_table_data[year]?.map((data) => data.value),
        borderColor: colors[index],
        backgroundColor: colors[index],
        pointStyle: pointStyle,
        pointRadius: 6,
        pointBackgroundColor: colors[index],
        pointBorderColor: colors[index],
      }
    }
    )

    const data = {
      labels: obj.month_table_data?.['2020']?.map((data) => data.month),
      datasets: datasets,
    }
    console.log('data', data)
    setValue(data)
  }, [])
  return (
    <div>
      <div className={styles.graph}>
        <div>
          {value && (
            <Line data={value} options={options} />
          )}
        </div>

        <div>
          <table className={styles.custom_table}>
            <thead>
              <tr>
                <th className={styles.bordered_cell}>Month</th>
                {uniqueYears.map(year => <th key={year}>{year}</th>)}
              </tr>
            </thead>
            <tbody>
              {uniqueMonths.map(month => (
                <tr key={month}>
                  <td className={styles.bordered_cell}>{month}</td>
                  {uniqueYears.map(year => (
                    <td key={year} className={styles.bordered_cell}>
                      {obj.month_table_data[year].find(data => data.month === month)?.value || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className={styles.custom_table}>
            <thead>
              <tr>
                {headers.map(header => (
                  <th key={header} className={styles.bordered_cell}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {obj.year_table_data.map((yearData, index) => (
                <tr key={index}>
                  {headers.map(header => (
                    <td key={header} className={styles.bordered_cell}>
                      {yearData[header] || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div> <table className={styles.custom_table}>
          <thead>
            <tr>
              {table1Keys.map(header => (
                <th key={header} className={styles.bordered_cell}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                table1Keys.map((header) => {
                  return <td className={styles.bordered_cell}>{obj.stock_statistics[header]}</td>
                })
              }
            </tr>
          </tbody>
        </table>
        </div>

        <div> <table className={styles.custom_table}>
          <thead>
            <tr>
              {table2Keys.map(header => (
                <th key={header} className={styles.bordered_cell}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {
                table2Keys.map((header) => {
                  return <td className={styles.bordered_cell}>{obj.stock_statistics[header]}</td>
                })
              }
            </tr>

          </tbody>
        </table>
        </div>
      </div>


    </div >
  )
}

export default Graph