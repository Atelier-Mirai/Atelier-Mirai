require "webrick"

srv = WEBrick::HTTPServer.new(
  DocumentRoot: "./",
  BindAddress: "127.0.0.1",
  Port: 8080
)

Signal.trap(:INT){ srv.shutdown }
srv.start
