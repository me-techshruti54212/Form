import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table1 from "../components/Table1";
import Table2 from "../components/Table2";

const Home = () => {
  const navigate = useNavigate();
  const data = localStorage.getItem("form");
  useEffect(() => {
    if (!data) {
      navigate("/", { replace: true });
      alert(
        "Please enter your details in the form before accessing home page!"
      );
    }
  }, []);

  return (
    data && (
      <div>
        <Table1 />
        <Table2 />
      </div>
    )
  );
};

export default Home;
