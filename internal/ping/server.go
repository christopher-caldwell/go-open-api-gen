package ping

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
)

var _ ServerInterface = (*pingServer)(nil)

type pingServer struct{}

func newPingServer() *pingServer {
	return &pingServer{}
}

func RegisterPingHandlers(r *chi.Mux) {
	server := newPingServer()
	HandlerFromMux(server, r)
}

// (GET /ping)
func (pingServer) GetPing(w http.ResponseWriter, r *http.Request) {
	resp := PingService()

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(resp)
}
