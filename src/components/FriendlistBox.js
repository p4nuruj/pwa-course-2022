import Avatar from "./Avatar";
import "../css/FriendlistBox.css";

function FriendlistBox (props) {
  let data = props.data;

  return (
    <div className="friendlistbox">
      {
        data.map((item,index) => {
          return (<div key={index} className={`friendlistbox-item`}>
            <Avatar name={item.user}/> <div className="friendlist-item"> {item.displayName}</div>
          </div>)
        })
      }
    </div>
  )
}

export default FriendlistBox;