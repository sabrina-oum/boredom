import Filter from "./components/Filter";

const Home = () => {
  return (
    <div className="home">
      <h1 className="page-title">Fight boredom and generate an activity to do</h1>
      <button className="btn btn--primary btn--lg">Generate another activity</button>
      <Filter />
      <div className="activity-card">
        <h2 className="activity-card__title">Express.js course</h2>
        <div className="activity-card__info-wrapper">
          <div className="activity-card__info">
            <span className="activity-card__label">Type</span>
            <span className="activity-card__value">Education</span>
          </div>
          <div className="activity-card__info">
            <span className="activity-card__label">Accessibility</span>
            <span className="activity-card__value">0.25</span>
          </div>
          <div className="activity-card__info">
            <span className="activity-card__label">Participants</span>
            <span className="activity-card__value">1</span>
          </div>
          <div className="activity-card__info">
            <span className="activity-card__label">Price</span>
            <span className="activity-card__value">0.0</span>
          </div>
        </div>
        <button className="btn btn--outline-primary">Add to favorites</button>
      </div>
    </div>
  );
};

export default Home;
