import React, { useEffect, useState } from "react";
import flylogo from "../img/flylogo.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const formatTime = (time) => {
    const [hours, minutes] = time.split(":");

    if (hours > 12) {
      return `${hours - 12}:${minutes} PM`;
    }

    return `${hours}:${minutes} AM`;
  };

export const duration = (arr, dep) => {
        const [arrHours, arrMinutes] = arr.split(":");
        const [depHours, depMinutes] = dep.split(":");

        if (arrMinutes < depMinutes) {
          const durHours = arrHours - depHours - 1;
          const durMinutes = +arrMinutes + 60 - depMinutes;

          return `${durHours}h ${durMinutes}m`;
        }

        return `${arrHours - depHours}h ${arrMinutes - depMinutes}m`;
      };

export const stopDuration = (time) => {
           const [stopHours, stopMinutes] = time.split(":");
           return `${stopHours !== "00" ? stopHours + "h" : ""} ${stopMinutes}m`;
      };

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

  useEffect(() => {
    getFlights();
  }, []);


  return (
    <>
      <div className="mainPage">
        <header>
          <h1>First class travel at economy prices</h1>
          <h2>Select a tour that suits you below.</h2>
        </header>
        <section className="left">
          <div className="bg-white tableDiv">
            <table className="table table-hover">
              <tbody>
                {flights.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() => selectedFlight(item.id)}
                      style={{outline:selectedRow === item.id ? "1px solid blue" : "",}}
                      className={selectedRow === item.id ? "table-active" : ""}
                    >
                      <td id="tdLogo">
                        <img src={flylogo} alt="flylogo" />
                      </td>
                      <td>
                        <span>{duration(item.arrival_time, item.departure_time)}</span>
                        <p>{item.airline}</p>
                      </td>
                      <td>
                        <span>{formatTime(item.departure_time)} - {formatTime(item.arrival_time)}</span>
                      </td>
                      <td id="tdStop">
                        <span>{item.stop_amount ? item.stop_amount + " stop"  : "Nonstop"}</span>
                        <p>{item.stop_amount  ? stopDuration(item.stop_duration) +  " in " +  item.stop_place  : ""}</p>
                      </td>
                      <td id="tdPrice">
                        <span>${item.total_price}</span>
                        <p>{item.travel_type}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        {rightSection ? (
          <section className="right">
            <div className="selectedInfo">
              <p>
                <img src={flylogo} alt="flyLogo" />
              </p>
              <span>{selectedFly[0].airline}</span>
              <p>{selectedFly[0].flight_number}</p>
              <span>{duration(selectedFly[0].arrival_time, selectedFly[0].departure_time)}</span>
              <span style={{ display: "block" }}>{formatTime(selectedFly[0].departure_time)} - {formatTime(selectedFly[0].arrival_time)}</span>
              <p>{selectedFly[0].stop_amount ? stopDuration(selectedFly[0].stop_duration) + " in " + selectedFly[0].stop_place  : ""}</p>
            </div>
            <div className="selectedPrices">
              <p>
                <strong>Subtotal </strong>
                <strong>${selectedFly[0].price}</strong>
              </p>
              <p>
                <strong>Taxes and Fees </strong>
                <strong>${selectedFly[0].total_price - selectedFly[0].price}</strong>
              </p>
              <p>
                <strong>Total </strong>
                <strong>${selectedFly[0].total_price}</strong>
              </p>
              <Link
                to="/BookingPage/"
                state={selectedFly}
                className="btn btn-primary"
              >
                Next
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
      <div className="mainMobile">
        <div className="mobileHeader">
          <h1>First class travel at economy prices</h1>
          <h2>Select a tour that suits you below.</h2>
        </div>
        {flights.map((item, index) => {
          return (
            <div key={index} className="flyCard" onClick={() => selectedFlight(item.id)}>
              <section className="upSection">
                <div>
                  <img src={flylogo} alt="" />
                </div>
                <div>
                  <strong>{duration(item.arrival_time, item.departure_time)}</strong>
                  <p>{item.airline}</p>
                </div>
                <div style={{ position: "absolute", right: "1rem" }}>
                  <strong>${item.price}</strong>
                </div>
              </section>
              <section className="downSection">
                <div>
                  <strong>{formatTime(item.departure_time)} - {formatTime(item.arrival_time)}</strong>
                  <p>{item.stop_amount  ? stopDuration(item.stop_duration) +  " in " +  item.stop_place  : ""}</p>
                </div>
                <div>
                  <strong>{item.stop_amount ? item.stop_amount + " stop" : "Nonstop"}</strong>
                  <p>{item.travel_type}</p>
                </div>
              </section>
            </div>
          );
        })}
        {rightSection ? (
          <section className="flyInfoMobile">
            <div className="selectedInfo">
              <p>
                <img src={flylogo} alt="flyLogo" />
              </p>
              <span>{selectedFly[0].airline}</span>
              <p>{selectedFly[0].flight_number}</p>
              <span>{duration(selectedFly[0].arrival_time,  selectedFly[0].departure_time  )}</span>
              <span style={{ display: "block" }}>{formatTime(selectedFly[0].departure_time)} -  {formatTime(selectedFly[0].arrival_time)}</span>
              <p>{selectedFly[0].stop_amount  ? stopDuration(selectedFly[0].stop_duration) +  " in " +  selectedFly[0].stop_place  : ""}</p>
            </div>
            <div className="selectedPrices">
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
              <Link
                to="/BookingPage"
                state={selectedFly}
                className="btn btn-primary"
              >
                Next
              </Link>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    </>
  );
};


