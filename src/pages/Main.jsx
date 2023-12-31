import React, { useEffect, useState } from "react";
import flylogo from "../img/flylogo.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const Main = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFly, setSelectedFly] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rightSection, setRightSection] = useState(false);

  const url = "http://127.0.0.1:8000/flights/";

  const getFlights = async () => {
    const flightsData = await axios.get(url);
    setFlights(flightsData.data);
  };

  const selectedFlight = (id) => {
    setRightSection(true);
    setSelectedFly(flights.filter((fly) => fly.id === id));
    setSelectedRow(id);
  };
  console.log(flights);

  useEffect(() => {
    getFlights();
  }, []);


  return (
    <div className="tableDiv">
      <section className="left">
        <h1 className="table-title">First class travel at economy prices</h1>
        <h5 className="table-description">
          Select a tour that suits you below.
        </h5>
        <div className="bg-white rounded ">
          <table className="table table-hover" >
            <tbody>
              {flights.map((item, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => selectedFlight(item.id)}
                    style={{
                      outline:
                        selectedRow === item.id ? "1px solid blue" : "",
                      
                    }}
                    className={selectedRow === item.id ? "table-active" : ""}
                  >
                    <td id="tdLogo">
                      <img src={flylogo} alt="flylogo" />
                    </td>
                    <td>
                      <strong>"item.duration"</strong>
                      <p>{item.airline}</p>
                    </td>
                    <td>
                      <strong>
                        {item.departure_time} - {item.arrival_time}
                      </strong>
                    </td>
                    <td id="tdStop">
                      <strong>
                        {item.stopAmount
                          ? item.stopAmount + " stop"
                          : "Nonstop"}
                      </strong>
                      <p>
                        {item.stopAmount
                          ? item.stopDuration + " in " + item.stopPlace
                          : ""}
                      </p>
                    </td>
                    <td id="tdPrice">
                      <strong>$ {item.total_price}</strong>
                      <p>{item.travelType}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section className="right">
        {rightSection ? (
          <>
            <div className="rightBox rounded">
              <p>
                <img src={flylogo} alt="flyLogo" />
              </p>
              <strong>{selectedFly[0].airline}</strong>
              <p>{selectedFly[0].flight_number}</p>
              <strong>"durationTime"</strong>
              <strong style={{ display: "inline-block" }}>
                "d_time and a_time"
              </strong>
              <p>
                {selectedFly[0].stopAmount
                  ? selectedFly[0].stopDuration +
                    " in " +
                    selectedFly[0].stopPlace
                  : ""}
              </p>
            </div>
            <div className="rightPrices">
              <p>
                <strong>Subtotal </strong>
                <strong>${selectedFly[0].price}</strong>
              </p>
              <p>
                <strong>Taxes and Fees </strong>
                <strong>
                  ${selectedFly[0].total_price - selectedFly[0].price}
                </strong>
              </p>
              <p>
                <strong>Total </strong>
                <strong>${selectedFly[0].total_price}</strong>
              </p>
              <Link to="/BookingPage" className="btn btn-primary">Next</Link>
            </div>
          </>
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
