import { useState } from "react";

//TODO:make this work
const SkillSearch = (props) => {
  return (
    <div class="input-group">
      <div class="form-outline">
        <input type="search" id="form1" class="form-control" />
      </div>
      <button type="button" class="btn btn-primary">
        {/* <i class="fas fa-search"></i> */}
        go
      </button>
    </div>
  );
};
export default SkillSearch;
