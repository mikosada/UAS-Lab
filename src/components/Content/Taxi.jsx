import React, { useEffect } from "react";
import axios from "axios";

const Taxi = () => {
  //   useEffect(() => {
  //     const fetchDestinations = async () => {
  //       const destinations = ["surabaya", "madiun", "batu", "malang", "kediri"];

  //       for (let destination of destinations) {
  //         const options = {
  //           method: "GET",
  //           url: "https://booking-com15.p.rapidapi.com/api/v1/taxi/searchLocation",
  //           params: { query: destination },
  //           headers: {
  //             "X-RapidAPI-Key":
  //               "da2a0d072bmsh784322b81a75388p1800e9jsn28bb44c02fb1",
  //             "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  //           },
  //         };

  //         try {
  //           const response = await axios.request(options);
  //           console.log(`Result for ${destination} is`, response.data);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       }
  //     };

  //     fetchDestinations();
  //   }, []);

  return <div>test</div>;
};

export default Taxi;
