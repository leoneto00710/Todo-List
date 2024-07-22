export function Search({search,setSearch}){
    return(
        <div className="search">
            <div className="search-text"><h2>Busque por suas tarefas</h2></div>
            <div className="search-input" >
                <input
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="digite para pesquisar..."
                />
            </div>
        </div>
    )
}