import React, { useEffect, useState } from "react";

const useFriends = () => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friendsData.json");
      const data = await res.json();
      // console.log(data);
      setFriends(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { friends, loading };
};

export default useFriends;
