import SingleActivity from "./SingleActivity";
import { FaClock } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaAsterisk } from "react-icons/fa6";

const ActivityByTime = () => {
  return (
    <div>
      <h4 className="text-2xl text-white font-bold mb-7  max-[440px]:text-center">
        Activity by Time
      </h4>
      <div className="w-full flex flex-col gap-y-4">
        <SingleActivity
          mainTitle="Hour"
          totalVisitors="200"
          totalMoney="$50,00"
          percent="+5%"
        >
          <FaClock className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Daily"
          totalVisitors="1,200"
          totalMoney="$300,00"
          percent="+5%"
        >
          <FaCalendarDay className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Weekly"
          totalVisitors="8,400"
          totalMoney="$2100,50"
          percent="+10%"
        >
          <FaCalendarWeek className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Monthly"
          totalVisitors="32,000"
          totalMoney="$8400,75"
          percent="+15%"
        >
          <FaCalendarDays className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Yearly"
          totalVisitors="384,000"
          totalMoney="$100,200"
          percent="+20%"
        >
          <FaCalendar className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Lifetime"
          totalVisitors="2,384,000"
          totalMoney="$840,200"
          percent="+44%"
        >
          <FaAsterisk className="text-blackPrimary text-3xl" />
        </SingleActivity>
      </div>
    </div>
  );
};
export default ActivityByTime;
