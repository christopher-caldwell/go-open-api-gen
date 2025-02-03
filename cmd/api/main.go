package main

import (
	"fmt"
	"log"
	"net/http"

	"openapigen/internal/server"

	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	done := make(chan bool, 1)
	apiServer := server.NewServer()
	go server.GracefulShutdown(apiServer, done)

	err = apiServer.ListenAndServe()
	if err != nil && err != http.ErrServerClosed {
		panic(fmt.Sprintf("http server error: %s", err))
	}

	// Wait for the graceful shutdown to complete
	<-done
	log.Println("Graceful shutdown complete.")

}
