import React, { useState } from "react";
import ActivitiesCard from "./activities-card";
import { activities } from "../../_lib/data";
import { Button } from "@/components/ui/button";

const ActivitiesWrapperPast = () => {
  // State to control how many items are shown
  const [visibleCount, setVisibleCount] = useState(6);

  // Filtered past activities
  const pastActivities = activities.filter(
    (activity) => activity.status === "completed"
  );

  // Show only the visible count
  const visibleActivities = pastActivities.slice(0, visibleCount);

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {visibleActivities.map((activity) => (
          <div key={activity.id}>
            <ActivitiesCard activity={activity} />
          </div>
        ))}
      </ul>

      {/* Load More Button */}
      {visibleCount < pastActivities.length && (
        <div className="flex justify-center my-16">
          <Button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2 text-base"
            variant={`outline`}
          >
            See more events
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActivitiesWrapperPast;
