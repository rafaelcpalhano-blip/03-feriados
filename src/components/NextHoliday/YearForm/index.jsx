import "./year-form.css"


export default function YearForm() {
  return (
    <form className="year-form">
        <label htmlFor="year">Ano</label>
        <div className="year-row">
            <input type="number" id="year" placeholder="2026" required/>
            <button>Buscar</button>
        </div>
    </form>
  )
}
