import React from "react";

const HomeThreeColumns = () => {
  const columnsData = [
    {
      number: 10,
      category: "Oddanych Worków",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: 5,
      category: "Wspartych Organizacji",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
    {
      number: 7,
      category: "Zorganizowanych Zbiórek",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.",
    },
  ];

  return (
    <div className="homeThreeColumns-background">
      <div className="container homeThreeColumns-content">
        {columnsData?.map((achievement) => (
          <div
            className="homeThreeColumns-columnBox"
            key={achievement.category}
          >
            <h3>{achievement.number}</h3>
            <p className="homeThreeColumns-columnCategory">
              {achievement.category}
            </p>
            <p className="homeThreeColumns-columnText">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeThreeColumns;
