package dao

import (
	"../db"
)

type UserDao struct {}

type ProductDao struct {}

func (ud UserDao) GetAll () (us interface{}, err error) {
	return db.User, nil
}

func (ud ProductDao) GetAll () (us interface{}, err error) {
	return db.Product, nil
}