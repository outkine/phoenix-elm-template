# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :{{cookiecutter.name}},
  ecto_repos: [{{cookiecutter.name|capitalize}}.Repo]

# Configures the endpoint
config :{{cookiecutter.name}}, {{cookiecutter.name|capitalize}}Web.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "94YmqKe2PATiX88ozZgE3cjr28f2dIer2re1KUwAO7/Jv8sns46u+WG78LgLnvcL",
  render_errors: [view: {{cookiecutter.name|capitalize}}Web.ErrorView, accepts: ~w(html json)],
  pubsub: [name: {{cookiecutter.name|capitalize}}.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
