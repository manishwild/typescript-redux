import React,{ useState } from 'react'
// import { useDispatch } from 'react-redux'
//import { useSelector } from 'react-redux'
// import { actionCreators } from '../state'
import { useTypedSelector } from '../hooks/useTypedSelectors'
import { useAction } from '../hooks/useAction'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useAction()
  const { data, error, loading } = useTypedSelector((state) => state.repositories)
  //console.log((state))
  
  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepositories(term)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList
