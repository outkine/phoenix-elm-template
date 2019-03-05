defmodule {{cookiecutter.name|capitalize}}.Repo do
  use Ecto.Repo,
    otp_app: :{{cookiecutter.name}},
    adapter: Ecto.Adapters.Postgres
end

