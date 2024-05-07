import Card from './Card';

export default function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__heading">
          Reliable, efficient delivery{' '}
          <span className="bold-accent">Powered by Technology</span>
        </h1>
        <p className="header__paragraph">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main>
        <div className="card-container">
          <Card
            title="Supervisor"
            imgSrc="/images/icon-supervisor.svg"
            alt="supervisor icon"
            color="hsl(180, 62%, 55%)"
            gridArea="grid-left"
          >
            Monitors activity to identify project roadblocks
          </Card>
          <Card
            title="Team Builder"
            imgSrc="/images/icon-team-builder.svg"
            alt="team builder icon"
            color="hsl(0, 78%, 62%)"
            gridArea="grid-top"
          >
            Scans our talent network to create the optimal team for your project
          </Card>
          <Card
            title="Karma"
            imgSrc="/images/icon-karma.svg"
            alt="karma icon"
            color="hsl(34, 97%, 64%)"
            gridArea="grid-bottom"
          >
            Regularly evaluates our talent to ensure quality
          </Card>
          <Card
            title="Calculator"
            imgSrc="/images/icon-calculator.svg"
            alt="calculator icon"
            color="hsl(212, 86%, 64%)"
            gridArea="grid-right"
          >
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </main>
    </>
  );
}
