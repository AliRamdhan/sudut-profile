import React from "react";
import ActivitiesCard from "./activities-card";
import { activities } from "../../_lib/data";

const ActivitiesWrapperRecent = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {activities
          .filter((activity) => activity.status == "ongoing")
          .map((activity) => (
            <div key={activity.id}>
              <ActivitiesCard activity={activity} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ActivitiesWrapperRecent;
