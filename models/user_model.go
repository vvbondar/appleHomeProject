package models

type User struct {
	ID        int    `json:"id"`
	Name      string `json:"name" binding:"required"`
	Login     string `json:"login" binding:"required"`
	Password  string `json:"password" binding:"required"`
}