// @flow strict
import GitHubCalendar from "react-github-calendar";
import SectionTitle from "../helper/section-title";

function Contributions() {
  const glowingBorderStyle = {
    border: '2px solid #060F2D', 
    borderRadius: '8px',
    boxShadow: '0 0 10px #060F2D', 
  };

  return (
  
    <div id="contributions" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      {/* Title for the activity graph section */}
      <SectionTitle title="Contribution Activity" />

      {/* Container div for GitHubCalendar component with inline style for glowing border */}
      <div style={glowingBorderStyle} className="w-full flex justify-center py-12">
        {/* GitHubCalendar component rendering user's GitHub activity */}
        <GitHubCalendar
          username="ramonortegajr"
          blockSize={12} 
        />
      </div>
    </div>
  );
};

export default Contributions;
