const StatDetails = (props) => {
  // if(props.dmgObj[''])
  const skill = {
    name: "Acid Splash",
    hasDamage: true,
    healSlots: false,
    checksLevel: { 1: "1d6", 5: "2d6", 11: "3d6", 17: "4d6" },
    damageType: "Acid",
    slotRolls: false,
  };
  return (
    <div className="container">
      <p>Damaging</p>
      <table className="table statsTable">
        <tbody>
          <tr>
            <th scope="row">Name: </th>
            <td>
              <p>Acid Splash</p>
            </td>
          </tr>
          <tr>
            <th scope="row">Roll Check: </th>
            <td>
              <p>Level</p>
            </td>
          </tr>
          <tr>
            <th scope="row">Damage Type: </th>
            <td>
              <p>Acid</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatDetails;
