package structs

type UserData struct {
	ID int
	FirstName string
	LastName string
	Password string
}

type ProductData struct {
	ID int
	Name string
}


func NewUser(firstName, lastName, pass string) (u UserData, err *error) {
	u = UserData{
		FirstName: firstName,
		LastName: lastName,
		Password: pass,
	}
	return
}

func NewProduct(name string) (p ProductData, err *error) {
	p = ProductData{
		Name: name,
	}
	return
}