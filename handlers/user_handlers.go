package handlers

import (
	"github.com/gin-gonic/gin"
	"strconv"
	"net/http"
	"fmt"
	"../models"
	"../db"
)

func InitUserHandlers(g *gin.RouterGroup) {
	users := g.Group("/user")
	{
		users.GET("/", getAllUsers)
		users.POST("/", addUser)
		users.DELETE("/:id", deleteUser)
		users.GET("/:id", getUser)
	}
}

func getAllUsers(c *gin.Context) {
	users, err := db.UserRepository.GetAll()
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Error while loading users " + err.Error())
		return
	}
	c.JSON(http.StatusOK, users)
}

func addUser(c *gin.Context) {
	var user models.User
	err := c.BindJSON(&user)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, "Incorrect user data" + err.Error())
		return
	}
	err = db.UserRepository.Add(user)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Can not add user: " + err.Error())
		return
	}
	c.JSON(http.StatusCreated, "User was successfully added");
}

func deleteUser(c *gin.Context) {
	id := c.Params.ByName("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, "Incorrect user id: " + err.Error())
		return
	}

	err = db.UserRepository.Delete(idInt)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "User was not deleted: " + err.Error())
		return
	}
	c.JSON(http.StatusOK, "User was successfully deleted");
}

func getUser(c *gin.Context) {
	id := c.Params.ByName("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, "Incorrect user id: " + err.Error())
		return
	}

	user, err := db.UserRepository.Get(idInt)
	if err != nil {
		c.JSON(http.StatusNotFound, "User was not found: " + err.Error())
		return
	}
	c.JSON(http.StatusOK, user);
}