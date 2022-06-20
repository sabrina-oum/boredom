const Filter = () => {
    return (
        <form className="filter-form">
            <div className="form-group">
                <label className="form-label">Type</label>
                <input className="form-control" placeholder="Type" />
            </div>
            <div className="form-group">
                <label className="form-label">Min price</label>
                <input className="form-control" placeholder="Min price" />
            </div>
            <div className="form-group">
                <label className="form-label">Max price</label>
                <input className="form-control" placeholder="Max price" />
            </div>
        </form>
    );
}

export default Filter;
