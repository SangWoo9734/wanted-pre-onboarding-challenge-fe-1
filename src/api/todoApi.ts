import axios, { AxiosError } from "axios";

export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoListResponse {
  data: TodoType[];
}

interface TodoDetailResponse {
  data: TodoType;
}

interface TodoDeleteResponse {
  data: null;
}

interface ServerError {
  details: string;
}

const userAuth = JSON.stringify(localStorage.getItem("auth"));

const getTodos = async () => {
  try {
    const { data } = await axios.get<TodoListResponse>("http://localhost:8080/todos", {
      headers: {
        Authorization: userAuth,
      },
    });

    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getTodoById = async (id: string) => {
  try {
    const { data } = await axios.get<TodoDetailResponse>(`http://localhost:8080/todos/${id}`, {
      headers: {
        Authorization: userAuth,
      },
    });

    return data.data;
  } catch (error) {
    return null;
  }
};

const createdTodo = async (title: string, content: string) => {
  try {
    await axios
      .post<TodoType>(
        "http://localhost:8080/todos",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: userAuth,
          },
        },
      )
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};
const updateTodo = async (id: string, title: string, content: string) => {
  try {
    await axios
      .put<TodoType>(
        `http://localhost:8080/todos/${id}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: userAuth,
          },
        },
      )
      .then((response) => console.log(response));
  } catch (error) {
    console.log(error);
  }
};
const deleteTodo = async (id: string) => {
  try {
    await axios
      .delete<TodoDeleteResponse>(`http://localhost:8080/todos/${id}`, {
        headers: {
          Authorization: userAuth,
        },
      })
      .then((response) => console.log(response));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError.response) {
        console.log(serverError.response);
      }
    }
    console.log(error);
  }
  return;
};

export { getTodos, getTodoById, createdTodo, updateTodo, deleteTodo };
