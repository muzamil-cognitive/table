import React, { useState, useEffect,useCallback } from "react";
import { Data } from "./module";
import axios from "axios";
import UserTable from "./components/UserTable";
import { Pagination, Spin, Space } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/Navbar";
const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<Data[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const fetchUser = () => {
    axios
      .get(
        `https://hn.algolia.com/api/v1/search_by_date?query=rage=story&page=${page}`
      )
      .then((data) => {
        setLoading(false);
        let user = data.data.hits;
        setUserData([...userData, ...user]);
        setTotalPage(data.data.nbPages);
      });
  };
  useEffect(() => {
    fetchUser();
    const interval = setInterval(() => {
      setPage((page) => page + 1);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [page,setPage]);
  return (
    <div role="contentinfo" className="app">
      <Navbar />
      {loading ? (
        <div className="spin">
          <Spin></Spin>
        </div>
      ) : (
        <>
          <div className="table">
            <UserTable data={userData} />
          </div>
          <div className="footer">
            <Pagination current={page}  total={totalPage} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
