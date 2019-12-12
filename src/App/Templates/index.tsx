import React from "react";

const Standard: React.FC = (props: any) => {

  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        { /* HEADER */ }      
        
        { /* CONTENT */ }
        {props.children}
        { /* FOOTER */ }
      </div>
    </div>
  );
};

export default Standard;
