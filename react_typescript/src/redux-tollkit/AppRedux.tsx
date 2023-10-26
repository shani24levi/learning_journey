import React, { useCallback, useRef } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import store, { selectTodos, addTodo, removeTodo } from './store'

import { useTodos } from '../useTodos'
import '../App.css'

function App() {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const newTodoRef = useRef<HTMLInputElement>(null)

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            dispatch(addTodo(newTodoRef.current.value))
            newTodoRef.current.value = ''
        }
    }, [dispatch])

    function UL<T>({
        items,
        render,
        itemClick,
    }: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > & {
        items: T[]
        render: (item: T) => React.ReactNode
        itemClick: (item: T) => void
    }) {
        return (
            <ul>
                {items.map((item, index) => (
                    <li onClick={() => itemClick(item)} key={index}>
                        {render(item)}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <UL
                items={todos}
                itemClick={(item) => alert(item.id)}
                render={(todo) => (
                    <>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            Remove
                        </button>
                    </>
                )}
            />
            <div>
                <input type="text" ref={newTodoRef} />
                <button onClick={onAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}

const AppWrapper = () => (
    <Provider store={store}>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '50% 50%',
            }}
        >
            <App />
        </div>
    </Provider>
)

export default AppWrapper
