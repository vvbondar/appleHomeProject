package postgres

import (
	"database/sql"
	"../../models"
)

type PostgresUserRepository struct {
	Db *sql.DB
}

func (p PostgresUserRepository) GetAll() (us []models.User, err error) {
	rows, err := p.Db.Query("SELECT id, name, login, password FROM shop_user")
	if err != nil {
		return
	}
	defer rows.Close()

	for rows.Next() {
		u := models.User{}
		if err = rows.Scan(&u.ID, &u.Name, &u.Login, &u.Password); err != nil {
			return
		}
		us = append(us, u)
	}
	return
}

func (p PostgresUserRepository) Get(id int) (user models.User, err error) {
	row := p.Db.QueryRow("SELECT id, name, login, password FROM shop_user WHERE id = $1", id)
	err = row.Scan(&user.ID, &user.Name, &user.Login, &user.Password)
	return
}

func (p PostgresUserRepository) Add(u models.User) (err error) {
	_, err = p.Db.Exec("INSERT INTO shop_user(name, login, password) VALUES($1, $2, $3)", u.Name, u.Login, u.Password)
	return
}

func (p PostgresUserRepository) Delete(id int) (err error) {
	_, err = p.Db.Exec("DELETE FROM shop_user WHERE id = $1", id)
	return
}