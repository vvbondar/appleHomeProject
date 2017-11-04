package db

import (
	"database/sql"
	"../dao"
	"../dao/postgres"
	_ "github.com/lib/pq"
)

var db *sql.DB
var UserRepository dao.UserRepository

func InitDb() (err error) {
	db, err := sql.Open("postgres", "user=postgres password=1111 dbname=shop sslmode=disable");
	if err != nil {
		return
	}

	err = db.Ping()
	if err != nil {
		return
	}

	initRepositories(db)
	return
}

func Close () {
	db.Close()
}

func initRepositories (db *sql.DB) {
	UserRepository = &postgres.PostgresUserRepository{
		Db : db,
	}
}