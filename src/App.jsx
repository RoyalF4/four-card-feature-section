import Card from './Card';

export default function App() {
  return (
    <>
      <header className="header">
        <h1>
          Reliable, efficient delivery{' '}
          <span className="header-accent">Powered by Technology</span>
        </h1>
        <p>
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
          >
            Monitors activity to identify project roadblocks
          </Card>
          <Card
            title="Team Builder"
            imgSrc="/images/icon-team-builder.svg"
            alt="team builder icon"
          >
            Scans our talent network to create the optimal team for your project
          </Card>
          <Card title="Karma" imgSrc="/images/icon-karma.svg" alt="karma icon">
            Regularly evaluates our talent to ensure quality
          </Card>
          <Card
            title="Calculator"
            imgSrc="/images/icon-calculator.svg"
            alt="calculator icon"
          >
            Uses data from past projects to provide better delivery estimates
          </Card>
        </div>
      </main>
    </>
  );
}
