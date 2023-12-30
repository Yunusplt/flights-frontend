import React from "react";
import data from "../data";
import flylogo from "../img/flylogo.png";

export const Main = () => {
  return (
    <div className="tableDiv">
      <section className="left">
        <h1 className="table-title">First class travel at economy prices</h1>
        <h5 className="table-description">
          Select a tour that suits you below.
        </h5>
        <div className="bg-white rounded ">
          <table className="table table-hover">
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td id="tdLogo">
                    <img src={flylogo} alt="flylogo" />
                  </td>
                  <td>
                    <strong>{item.duration}</strong>
                    <p>{item.airline}</p>
                  </td>
                  <td>
                    <strong>
                      {item.departure} - {item.arrival}
                    </strong>
                  </td>
                  <td id="tdStop">
                    <strong>{item.stop.stopAmount}</strong>
                    <p>
                      {item.stop.stopTime
                        ? item.stop.stopTime + " in " + item.stop.stopPlace
                        : ""}
                    </p>
                  </td>
                  <td id="tdPrice">
                    <strong>{item.totalPrice}</strong>
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
        <div className="rightBox rounded">
          <p>
            <img src={flylogo} alt="flyLogo" />
          </p>
          <strong>Hawaiian Airlines</strong>
          <p>FIG4312</p>
          <strong>16h 45m (+1d)</strong>
          <strong style={{ display: "inline-block" }}>7:00 AM - 4:15 PM</strong>
          <p>2h 45m in HNL</p>
        </div>
        <div className="rightPrices">
          <p><strong>Subtotal </strong> <strong>$503</strong></p>
          <p><strong>Taxes and Fees</strong>  <strong>$121</strong></p>
          <p><strong>Total</strong> <strong>$624</strong></p>
          <button className="btn btn-primary ">Next</button>
        </div>
      </section>
    </div>
  );
};
