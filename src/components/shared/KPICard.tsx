import React from "react";
import { Card, CardContent } from "../ui/card";
import { KPICardDetails } from "@/types";
import { TrendingDown, TrendingUp, Users } from "lucide-react";

const KPICard = ({ cardDetails }: { cardDetails: KPICardDetails }) => {
  console.log(cardDetails);
  return (
    <Card className={`p-5 h-full`}>
      <CardContent className="p-0">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[#20224] text-sm font-bold opacity-70">
              {cardDetails.title}
            </h2>
            <p className="text-4xl mt-3 font-bold text-black">
              {cardDetails.currentCount}
            </p>
          </div>
          <div className="p-3 bg-[#DD2A7B] rounded-full w-fit">
            <cardDetails.icon size={25} color="white" />
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          {cardDetails.trend === "Up" ? (
            <TrendingUp className="text-[#00b96b]" />
          ) : (
            <TrendingDown className="text-[#f93c65]" />
          )}
          <p>
            <span
              className={`${
                cardDetails.trend === "Up" ? "text-[#00b69b]" : "text-[#f93c65]"
              }`}
            >
              {cardDetails.percentage}% {cardDetails.trend}
            </span>{" "}
            from {cardDetails.duration?.toLocaleLowerCase()}
          </p>
        </div>
        {/* <h2>{cardDetails.title}</h2>
        <p>{cardDetails.currentCount}</p> */}
      </CardContent>
    </Card>
  );
};

export default KPICard;
