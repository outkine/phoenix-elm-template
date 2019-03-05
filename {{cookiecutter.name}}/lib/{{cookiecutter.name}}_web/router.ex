defmodule {{cookiecutter.name|capitalize}}Web.Router do
  use {{cookiecutter.name|capitalize}}Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", {{cookiecutter.name|capitalize}}Web do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", {{cookiecutter.name|capitalize}}Web do
  #   pipe_through :api
  # end
end
