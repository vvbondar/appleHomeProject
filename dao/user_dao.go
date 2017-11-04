package dao

import "../models"

type UserRepository interface {
	GetAll() ([]models.User, error)
	Get(int) (models.User, error)
	Add(models.User) (error)
	Delete(int) (error)
}

