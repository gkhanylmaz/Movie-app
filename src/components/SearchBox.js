import React from "react";

const SearcBox= ({setSearchValue, searchValue}) => {
    
    return (
        <div className="col col-sm-4">
            <input className="form-control"
             value={searchValue.value}
             onChange={(el) => setSearchValue(el.target.value)}
             placeholder="Arama Yapmak İçin Giriniz"></input>    
         </div>
    )
}
export default SearcBox