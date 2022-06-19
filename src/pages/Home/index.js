const Home = () => {
  return (
    <div className="Home">
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
