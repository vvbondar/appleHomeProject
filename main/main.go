package main

import (
	"../service"
	"../dao"
	"fmt"
)

func main () {
	userService :=service.GetDataService{
		GetDataDao: dao.UserDao{},
	}
	productService :=service.GetDataService{
		GetDataDao: dao.ProductDao{},
	}
	fmt.Println(userService.GetData())
	fmt.Println(productService.GetData())
}