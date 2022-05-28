import React, { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { GiDeliveryDrone } from "react-icons/gi";
import { GrFlag } from "react-icons/gr";
import { MdOutlineEmojiPeople } from "react-icons/md";

const BusinessSummary = () => {
  return (
    <div className="text-2xl">
      <h2 className="text-center text-2xl font-bold">Business Summerry</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 bg-base-300 mx-5 my-10 p-10">
        <div className="p-5">
          <>
            <GiDeliveryDrone className="text-2xl"></GiDeliveryDrone>
          </>
          <h1 className="text-3xl">Today's Delivery</h1>
          <h3>
            <CountUp className="font-bold" end={235} duration={5} suffix=" pieces" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
        </div>
        <div className="p-5">
          <>
            <MdOutlineEmojiPeople className="text-2xl text-center"></MdOutlineEmojiPeople>
          </>
          <h1 className="text-3xl">Happy client</h1>
          <h3>
            <CountUp end={273} duration={5} suffix=" +" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
        </div>
        <div className="p-5">
          <>
            <GrFlag className="text-2xl text-center"></GrFlag>
          </>
          <h1 className="text-3xl">Countries</h1>
          <h3>
            <CountUp end={35} duration={2} suffix=" +" redraw={true}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
