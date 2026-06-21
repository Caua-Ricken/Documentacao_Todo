import "./App.css";

function App() {
  const baseUrl = "https://SEU-BACKEND.onrender.com/api/tasks";

  return (
    <div className="app">
      <header className="header">
        <h1>Documentação da API - To-do List</h1>
        <p>Rotas para testar no Insomnia ou Postman</p>
      </header>

      <main className="container">
        <section className="card intro">
          <h2>URL Base</h2>
          <code>{baseUrl}</code>

          <h3>Header padrão</h3>
          <pre>{`Content-Type: application/json`}</pre>
        </section>

        <section className="card get">
          <span className="method">GET</span>
          <h2>Listar tarefas</h2>
          <p>Retorna todas as tarefas cadastradas no banco de dados.</p>

          <h3>Rota</h3>
          <code>/api/tasks</code>

          <h3>URL completa</h3>
          <code>{baseUrl}</code>

          <h3>Como testar no Insomnia</h3>
          <p>
            Escolha o método <strong>GET</strong>, cole a URL completa e clique
            em <strong>Send</strong>.
          </p>

          <h3>Resposta esperada</h3>
          <pre>{`[
  {
    "id": 1,
    "title": "Estudar React",
    "description": "Finalizar tela de tarefas",
    "dueDate": "2026-06-30",
    "status": "Pendente"
  }
]`}</pre>
        </section>

        <section className="card post">
          <span className="method">POST</span>
          <h2>Criar tarefa</h2>
          <p>Cria uma nova tarefa.</p>

          <h3>Rota</h3>
          <code>/api/tasks</code>

          <h3>Body JSON</h3>
          <pre>{`{
  "title": "Estudar Node.js",
  "description": "Praticar API com Express",
  "dueDate": "2026-06-30",
}`}</pre>
        </section>

        <section className="card patch">
          <span className="method">PATCH</span>
          <h2>Atualizar status</h2>
          <p>Atualiza apenas o status de uma tarefa.</p>

          <h3>Rota</h3>
          <code>/api/tasks/:id</code>

          <h3>Exemplo</h3>
          <code>{baseUrl}/1</code>

          <h3>Body JSON</h3>
          <pre>{`{
  "done": "Concluida"
}`}</pre>
        </section>

        <section className="card patch">
          <span className="method">PATCH</span>
          <h2>Editar tarefa</h2>
          <p>Atualiza os dados principais da tarefa.</p>

          <h3>Rota</h3>
          <code>/api/tasks/edit/:id</code>

          <h3>Exemplo</h3>
          <code>{baseUrl}/edit/1</code>

          <h3>Body JSON</h3>
          <pre>{`{
  "title": "Estudar Sequelize",
  "description": "Praticar integração com MySQL",
  "dueDate": "2026-07-01",
  "done": "Pendente"
}`}</pre>
        </section>

        <section className="card delete">
          <span className="method">DELETE</span>
          <h2>Excluir tarefa</h2>
          <p>Remove uma tarefa pelo ID.</p>

          <h3>Rota</h3>
          <code>/api/tasks/:id</code>

          <h3>Exemplo</h3>
          <code>{baseUrl}/1</code>
        </section>

        <section className="card">
          <h2>Validações</h2>
          <ul>
            <li>O título da tarefa é obrigatório.</li>
            <li>A data prevista precisa ser válida.</li>
            <li>O status pode ser Pendente ou Concluída.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;