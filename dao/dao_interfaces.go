package dao


type GetDataDao interface {
	GetAll () (us interface{}, err error)
}
