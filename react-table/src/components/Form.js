function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className="row mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            onChange={onValChange}
            value={formObject.fullname}
            name="fullname"
          />
        </div>
        <div className="mb-3">
          <input
            type="time"
            className="form-control"
            placeholder="Checkin Time"
            onChange={onValChange}
            value={formObject.checkin}
            name="checkin"
          />
        </div>
        
        <div className="d-grid">
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-success"
          />
        </div>
      </div>
    );
  }
  export default Form;