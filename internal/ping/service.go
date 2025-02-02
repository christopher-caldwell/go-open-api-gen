package ping

import "openapigen/internal/api"

func PingService() api.Pong {
	return api.Pong{
		Ping: "pong",
	}
}
