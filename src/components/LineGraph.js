import React from 'react'
import { Line } from "react-chartjs-2"

function LineGraph(props) {
    return (
        <div
            style={{
                width: "1000px",
                height: "1000px",
                margin: "50px auto"
            }}>
            <Line
                data={
                    {
                        labels: props.label.map(l=>l.substr(0,10)),
                        datasets: [
                            {
                                label: '#Cases Till Now',
                                data: props.yAxis,
                                fill: false,
                                backgroundColor: 'rgb(255, 99, 132)',
                                borderColor: 'rgba(255, 99, 132, 0.2)',
                            },
                        ],
                    }

                }
            />
        </div>
    )
}

export default LineGraph
