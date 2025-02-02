package main

import (
	"log"
	"net/http"

	"openapigen/internal/api"
	"openapigen/internal/server"

	"github.com/go-chi/chi/v5"
)

func main() {
	// create a type that satisfies the `api.ServerInterface`, which contains an implementation of every operation from the generated code
	httpServer := server.NewServer()

	r := chi.NewMux()

	// get an `http.Handler` that we can use
	h := api.HandlerFromMux(httpServer, r)

	s := &http.Server{
		Handler: h,
		Addr:    "0.0.0.0:8080",
	}

	// And we serve HTTP until the world ends.
	log.Fatal(s.ListenAndServe())
}
