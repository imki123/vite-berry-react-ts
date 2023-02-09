import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import { styled } from '@linaria/react'
import './App.css'

function App() {
  function counter(state: number, action: 'inc' | 'dec' | 'reset') {
    if (action === 'inc') return state + 1
    else if (action === 'dec') return state - 1
    else return 0
  }
  const [count, dispatch] = useReducer(counter, 0)

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => dispatch('reset')}>count is {count}</button>
        <button onClick={() => dispatch('dec')}>-</button>
        <button onClick={() => dispatch('inc')}>+</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <StyledDiv size={count + 10}>Hello Linaria!</StyledDiv>
    </div>
  )
}

export default App

const StyledDiv = styled.div<{ size: number }>`
  height: 200px;
  width: 300px;
  color: white;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: ${({ size }) => `${size}px`};
`
