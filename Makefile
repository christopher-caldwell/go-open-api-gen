oapi-gen:
	go run github.com/oapi-codegen/oapi-codegen/v2/cmd/oapi-codegen -config oapi.conf.yaml ./openapi.yaml -o ./pkg/api/api.gen.go
oapi-merge:
	npx @openapitools/openapi-generator-cli generate \
		-i internal/ping/ping.oapi.yaml \
		-o oapi.yaml