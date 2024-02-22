export default function UserInput({ onInputChange, data }) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init_invest">Initial Investment</label>
          <input type="number" id="initialInvestment" value={data.initialInvestment} onChange={onInputChange} />
        </p>
        <p>
          <label htmlFor="futr_invest">Future Investment</label>
          <input type="number" id="annualInvestment" value={data.annualInvestment} onChange={onInputChange} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input type="number" id="expectedReturn" value={data.expectedReturn} onChange={onInputChange} />
        </p>
        <p>
          <label htmlFor="dur">Duration</label>
          <input type="number" id="duration" value={data.duration} onChange={onInputChange} />
        </p>
      </div>
    </section>
  );
}