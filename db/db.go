package db

import (
	"../structs"
)

var User structs.UserData
var Product structs.ProductData

func init () {
	User, _ = structs.NewUser("A", "B", "123")
	Product, _ = structs.NewProduct("MAC")
}