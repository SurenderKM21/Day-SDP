const OpaqueCircle = ({ top, left }) => {
    return (
      <div
        className="absolute w-40 h-40 bg-blue-200 opacity-30 rounded-full"
        style={{ top: `${top}%`, left: `${left}%` }}
      ></div>
    );
  };
  
  export default OpaqueCircle;
  