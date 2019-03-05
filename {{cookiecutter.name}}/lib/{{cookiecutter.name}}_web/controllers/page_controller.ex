defmodule {{cookiecutter.name|capitalize}}Web.PageController do
  use {{cookiecutter.name|capitalize}}Web, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
