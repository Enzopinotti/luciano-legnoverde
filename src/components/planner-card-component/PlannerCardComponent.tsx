import { PlannerCard } from "../../models/planner-card";

import './planner_card-component.scss';
import { FaArrowRightLong } from "react-icons/fa6";

const PlannerCardComponent = ({ planner }: { planner: PlannerCard[] }) => {
  return (
    <div id="planner_card-component">
      {planner.map((plannerItem: PlannerCard) => (
        <div key={plannerItem.id} className="card_planner">
          <span className="absolute_count-num">{plannerItem.id}</span>
          <h3 className="title_card">{plannerItem.title}</h3>
          <ul className="items_card">
            {plannerItem.items.map((item: string, index: number) => (
              <li key={index}>
                <span>
                  <FaArrowRightLong className="icon"/>
                  <p>{item}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlannerCardComponent;
