import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Card, Button } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";

const Loker = () => {
  // const [data, setData] = useState(null);
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, setData } = state;

  const getData = async () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-3 gap-x-12 gap-y-10">
        {data !== null &&
          data.map((res, i) => {
            return (
              <Card key={i} className="!w-full">
                <img
                  src={res.company_image_url}
                  className="rounded-md h-36 mb-8 object-cover"
                />
                <div className="flex justify-between">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {res.title}
                  </h5>
                  <p className="text-green-500 font-bold">{res.job_type}</p>
                </div>
                <p className="font-bold mt-0 text-gray-700 dark:text-gray-400">
                  {res.company_name}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
                  {res.job_description}
                </p>

                <div className="flex justify-between">
                  <p className="font-bold mt-0 text-gray-700 dark:text-gray-400">
                    {res.company_city}
                  </p>
                  <p className="text-blue-400 font-bold">{res.job_tenure}</p>
                </div>

                <Button>Apply</Button>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Loker;
