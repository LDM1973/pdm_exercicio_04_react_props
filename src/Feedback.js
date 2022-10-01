const Feedback = props => (
    <div className="d-flex justify-content-evenly m-2">
        <p className='text-center mt-2'>Essa análise foi útil?</p>
        <button type="button" className="btn btn-primary">
            {props.textoOK}
        </button>
        <button type="button" className="btn btn-danger">
            {props.textoNOK}
        </button>
    </div>
)

export default Feedback