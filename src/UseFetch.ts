import { useEffect, useState } from "react";

export interface Todo {
    id: number;
    description: string;
    isDone: boolean;
}

export function useFetch() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data: Todo[]) => setTodos(data))
            .catch((error) => console.error("Error loading todos:", error));
    }, []);

    return todos;
}