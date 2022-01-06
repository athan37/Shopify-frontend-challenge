import { Post } from "./components/Post";
import { Loading } from "./components/Loading";
import { DatePicker } from "antd";
import moment from "moment";
import { message } from "antd";

import { useEffect, useState } from "react";

interface APOD_Item {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const showError = (error: string) => {
  return message.error(error);
};

export const App = () => {
  const [posts, setPosts] = useState<APOD_Item[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<string>("2022-01-05");
  const [endDate, setEndDate] = useState<string>("2022-01-05");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_NASA_APOD_KEY;
    const url = process.env.REACT_APP_URL;

    const query = `${url}?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;

    setLoading(true);
    fetch(query)
      .then((response) => response.json())
      .then((data) => {
        //Process here
        setPosts(data);
        setLoading(false);
        //End here
      });
  }, [startDate, endDate]);

  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <h2>Using Nasa's APOD API</h2>
        <div className="header-date-query">
          <div className="left-query">
            <h3> Start date </h3>
            <DatePicker
              value={moment(startDate)}
              onChange={(value) =>
                value && value.format("YYYY-MM-DD") <= endDate
                  ? setStartDate(value.format("YYYY-MM-DD"))
                  : showError("Invalid start date")
              }
            />
          </div>
          <div>
            <h3> End date </h3>
            <DatePicker
              value={moment(endDate)}
              onChange={(value) =>
                value && value <= moment() && value >= moment(startDate)
                  ? setEndDate(value.format("YYYY-MM-DD"))
                  : showError("Invalid end date")
              }
            />
          </div>
        </div>
      </header>
      <main>
        {loading ? (
          <Loading />
        ) : (
          posts &&
          posts.map((item: APOD_Item, index: number) => (
            <Post key={index} data={item} />
          ))
        )}
      </main>
    </div>
  );
};
