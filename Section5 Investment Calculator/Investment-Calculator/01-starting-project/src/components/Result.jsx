import { formatter } from "../util/investment";

export default function Result({ finalAnnualData }) {
  const initialAmount = finalAnnualData[0].valueEndOfYear - finalAnnualData[0].interest - finalAnnualData[0].annualInvestment;
  return (
    <section>
      <table id="result" className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>

          {finalAnnualData.map((data, index, arr) => {
            const { year, valueEndOfYear, interest, annualInvestment } = data;
            let totalInterest = valueEndOfYear - annualInvestment * year - initialAmount;
            let investedCapital = valueEndOfYear - totalInterest;
            // data.totalInterest = totalInterest;
            // data.investedCapital = investedCapital;

            return <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          })}
        </tbody>
      </table>
    </section>
  );
}