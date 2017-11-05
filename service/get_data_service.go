package service

import (
	"../dao"
)

type GetDataService struct {
	GetDataDao dao.GetDataDao
}

func (u *GetDataService) GetData() (res interface{}, err error) {
	res, err = u.GetDataDao.GetAll()
	return
}