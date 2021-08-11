import React from 'react'
import Card from "./Card";

function CovidSummary(props) {

    const {totalConfirmed,totalRecovered,totalDeaths,newCases,country} = props;
    return (
        <div>
            <div>
                <div>
                    <h1 style={{textTransform: "capitalize"}}>{country==" " ? "World Wide Corona Report": country}</h1>
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Card>
                            <span>Total Confirmed Cases</span> <br />
                            <span>{totalConfirmed}</span>
                        </Card>
                        <Card>
                            <span>Total Recovered Cases</span> <br />
                            <span>{totalRecovered}</span>
                        </Card>
                        <Card>
                            <span>Total Deaths</span> <br />
                            <span>{totalDeaths}</span>
                        </Card>
                        <Card>
                            <span>New Cases in the World</span> <br />
                            <span>{newCases}</span>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidSummary
