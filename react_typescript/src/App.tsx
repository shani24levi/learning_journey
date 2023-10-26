import React, {
    useCallback,
    useEffect,
    useState,
    useReducer,
    useRef,
} from 'react'
import './App.css'
import {
    TodosProvider,
    useTodos as UstodoC,
    useAddTodo,
    useRemoveTodo,
} from './useTodosConrext'
import { useTodos } from './useTodos'

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>

const Box = ({ children }: { children: React.ReactNode }) => (
    <div
        style={{
            padding: '1rem',
            fontWeight: 'bold',
        }}
    >
        {children}
    </div>
)

const List: React.FunctionComponent<{
    items: string[]
    onClick?: (item: string) => void
}> = ({ items, onClick }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index} onClick={() => onClick?.(item)}>
                {item}
            </li>
        ))}
    </ul>
)

interface Payload {
    text: string
}

interface Todo {
    id: number
    done: boolean
    text: string
}

const Button: React.FunctionComponent<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & {
        title?: string
    }
> = ({ title, children, style, ...rest }) => (
    <button
        {...rest}
        style={{
            ...style,
            backgroundColor: 'red',
            color: 'white',
            fontSize: 'xx-large',
        }}
    >
        {title ?? children}
    </button>
)

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number }

const useNumber = (initialValue: number) => useState<number>(initialValue)

type UseNumberValue = ReturnType<typeof useNumber>[0]
type UseNumberSetValue = ReturnType<typeof useNumber>[1]

const Incrementer: React.FunctionComponent<{
    value: UseNumberValue
    setValue: UseNumberSetValue
}> = ({ value, setValue }) => (
    <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />
)

function App() {
    const todos2 = UstodoC()
    const addTodo2 = useAddTodo()
    const removeTodo2 = useRemoveTodo()

    const onListClick = useCallback((item: string) => {
        alert(item)
    }, [])

    const [payload, setPayload] = useState<Payload | null>(null)

    useEffect(() => {
        fetch('/data.json')
            .then((resp) => resp.json())
            .then((data) => {
                setPayload(data)
            })
    }, [])

    const [todos1, dispatch] = useReducer(
        (state: Todo[], action: ActionType) => {
            switch (action.type) {
                case 'ADD':
                    return [
                        ...state,
                        {
                            id: state.length,
                            text: action.text,
                            done: false,
                        },
                    ]
                case 'REMOVE':
                    return state.filter(({ id }) => id !== action.id)
                default:
                    throw new Error()
            }
        },
        []
    )

    const { todos, addTodo, removeTodo } = useTodos([
        { id: 0, text: 'Hey there', done: false },
    ])

    const newTodoRef = useRef<HTMLInputElement>(null)

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            // addTodo(newTodoRef.current.value)
            addTodo2(newTodoRef.current.value)
            // dispatch({
            //     type: 'ADD',
            //     text: newTodoRef.current.value,
            // })
            newTodoRef.current.value = ''
        }
    }, [addTodo])

    const [value, setValue] = useNumber(0)

    return (
        <TodosProvider
            initialTodos={[
                { id: 0, text: 'Hey there useContext', done: false },
            ]}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '50% 50%',
                }}
            >
                <App></App>
                {/* <JustShowTodos /> */}
            </div>
        </TodosProvider>
    )
}

export default App
