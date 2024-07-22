export function Filter({filter, setFilter}){
    return(
        <div className="filter">
            <h2>Filtrar</h2>
            <div className="filter-options">
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incoplete">Incompletas</option>
                    </select>
            </div>
        </div>
    )
}