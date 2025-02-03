package ping

func PingService() Pong {
	return Pong{
		Ping: "pong",
	}
}
