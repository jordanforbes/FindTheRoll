import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const StatDetails = (props) => {
  const [damageType, setDamageType] = useState("");

  const thisSkillObj = useSelector((state) => state.skillSelector);

  useEffect(() => {
    if (thisSkillObj["damage"]) {
      setDamageType(thisSkillObj["damage"]["damage_type"]["name"]);
    } else {
      setDamageType("");
    }
  }, [thisSkillObj]);

  return (
    <div className="container">
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <h3>{thisSkillObj.name}</h3>
            </td>
          </tr>
          <tr>
            <th scope="row">Damage Type: </th>
            <td>
              <p>{damageType}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatDetails;
