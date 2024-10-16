import { Link } from "react-router-dom";

const ListIterator = (props) => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-white">{props.heading}</h1>
      <ul>
        {props.lists.map((list, idx) => (
          <li key={idx} className=" my-2 text-base text-[#B7BBBE]">
            <Link to={list.link}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListIterator;
