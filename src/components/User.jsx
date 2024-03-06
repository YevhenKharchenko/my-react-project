import { HiUser } from "react-icons/hi";

export default function UserMenu(props) {
  return (
    <div>
      <p>
        <HiUser className="my-icon" size="24" color="blue" /> {props.name}
      </p>
    </div>
  );
}
