const Comentario = ({avatar, nome, comentario, horario}) => {
    return (
      <div className="d-flex">
        <div className="d-flex align-items-center">
        <i className={`${avatar}`} />
        </div>
        <div className="flex-grow-1 ms-2 border p-3">
          <h4 className="text-bold"><b>{nome}</b></h4>
          <p>{comentario}</p>
          <p className="text-muted">{horario}</p>
        </div>
      </div>
    )
  }
  
  export default Comentario