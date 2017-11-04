package application

import (
	"github.com/gin-gonic/gin"
	"../handlers"
)

func Run() {
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()
	v1 := r.Group("/api/v1")

	handlers.InitUserHandlers(v1)

	r.Run(":8080")
}