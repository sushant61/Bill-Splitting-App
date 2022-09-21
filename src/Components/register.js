import React from "react";
import { useGlobalContext } from "../Context";
const Register = () => {
  const {
    groupName,
    setGroupName,
    name,
    setName,
    list,
    setList,
    setLogin,
    setLoading,
  } = useGlobalContext();
  const addPeople = (e) => {
    e.preventDefault();
    setList([...list, name]);
    setName("");
    console.log(list);
  };
  const handlesubmit = () => {
    console.log("Submitted");
    setGroupName("");
  };
  const toggle = () => {
    setLogin(true);
  };
  React.useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <section id="entry-page">
      <div>
        <form action="">
          <label htmlFor="">
            Group Name :
            <input
              type="text"
              placeholder="eg. buddies"
              required
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </label>
          <label htmlFor="">
            Member name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <button type="submit" className="add" onClick={addPeople}>
            Add
          </button>
          <button type="submit" className="register" onClick={handlesubmit}>
            Register
          </button>
          <button className="toggle" onClick={toggle}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Register;
