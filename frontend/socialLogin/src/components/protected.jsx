import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Protect = ({ token }) => {
  const isRun = useRef(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("/documents", config )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {data ? (
        <>
          {data.map((el, i) => (
            <h3 key={i}>{el}</h3>
          ))}
        </>
      ) : (
        <div>protected</div>
      )}
    </div>
  );
};

export default Protect;
