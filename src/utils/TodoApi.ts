interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
}

class TodoApi {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    url: string,
    method: string,
    body?: object
  ): Promise<T> {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseURL}${url}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  }

  public async fetchTodos(): Promise<Todo[]> {
    return this.request<Todo[]>("/todo", "GET");
  }

  public async addTodo(content: string): Promise<Todo> {
    return this.request<Todo>("/todo", "POST", { content, completed: false });
  }

  public async updateTodo(todo: Todo): Promise<Todo> {
    return this.request<Todo>(`/todo/${todo.id}`, "PUT", todo);
  }

  public async deleteTodo(id: string): Promise<void> {
    await this.request<void>(`/todo/${id}`, "DELETE");
  }
}

const todoApi = new TodoApi("https://6419173375be53f451ec85c6.mockapi.io");

export default todoApi;
