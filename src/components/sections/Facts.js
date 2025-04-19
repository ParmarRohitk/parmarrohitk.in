const facts = [
  {
    count: `${new Date().getFullYear() - 2022}+`,
    label: "years of",
    emphasis: "experience",
  },
  {
    count: "30+",
    label: "completed",
    emphasis: "projects",
  },
  {
    count: "20+",
    label: "Happy",
    emphasis: "clients",
  },
  {
    count: "10+",
    label: "technologies",
    emphasis: "mastered",
  },
  {
    count: "5+",
    label: "CMS &",
    emphasis: "Frameworks",
  },
];

const Facts = () => {
  return (
    <section className="facts">
      <div className="flex-column-mobile">
        {facts.map((fact, index) => (
          <div
            key={index}
            className={`animated-layer fade-in-right-animation ${
              index % 2 === 0 ? "fadeInLeft" : "fadeInRight"
            } wow`}
            data-wow-offset={200}
          >
            <div>
              <div>
                <h3>{fact.count}</h3>
                <p>
                  {fact.label}
                  <span>{fact.emphasis}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Facts;
