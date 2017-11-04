package main

import (
	"../db"
	"../application"
	"log"
)

func main(){
	err := db.InitDb()
	if err != nil {
		log.Fatalln("Can not connect to database: ", err)
	}
	defer db.Close()

	application.Run()
}
