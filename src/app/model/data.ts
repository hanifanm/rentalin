let users = [
    {
        id: 1,
        name: 'Super Admin',
        email: 'superadmin@rentalin.com',
        password: 'asdasd',
        level: 1
    },
    {
        id: 2,
        name: 'Pindah007',
        email: 'vendor1@rentalin.com',
        password: 'asdasd',
        level: 2
    },
    {
        id: 3,
        name: 'Luxury Rental',
        email: 'vendor2@rentalin.com',
        password: 'asdasd',
        level: 2
    },
    {
        id: 4,
        name: 'User1',
        email: 'user1@rentalin.com',
        password: 'asdasd',
        level: 3
    },
    {
        id: 5,
        name: 'User2',
        email: 'user2@rentalin.com',
        password: 'asdasd',
        level: 3
    }
]

let services = [
    {
        id: 1,
        user_id: 2,
        type: 1,
        name: 'Pick Up'
    },
    {
        id: 2,
        user_id: 2,
        type: 1,
        name: 'Truk'
    },
    {
        id: 3,
        user_id: 2,
        type: 2,
        name: 'Jasa Angkut'
    },
    {
        id: 4,
        user_id: 3,
        type: 1,
        name: 'Mobil Kecil'
    },
    {
        id: 5,
        user_id: 3,
        type: 1,
        name: 'Mobil Mewah'
    },
    {
        id: 6,
        user_id: 3,
        type: 2,
        name: 'Supir & Penerjemah'
    }
]

let guides = [
    {
        id: 1,
        name: '3 Orang Tukang Angkut',
        service_id: 3,
        city_id: 1,
        cps: 500000,
        cphr: 50000,
        cphd: 250000,
        cpd: 500000
    },
    {
        id: 2,
        name: '3 Orang Tukang Angkut',
        service_id: 3,
        city_id: 2,
        cps: 500000,
        cphr: 50000,
        cphd: 250000,
        cpd: 500000
    },
    {
        id: 3,
        name: 'Supir Professional',
        service_id: 6,
        city_id: 2,
        cps: 1000000,
        cphr: 100000,
        cphd: 600000,
        cpd: 1000000
    },
    {
        id: 4,
        name: 'Supir Professional',
        service_id: 6,
        city_id: 1,
        cps: 1200000,
        cphr: 110000,
        cphd: 700000,
        cpd: 1200000
    },
    {
        id: 5,
        name: 'Supir',
        service_id: 6,
        city_id: 2,
        cps: 600000,
        cphr: 50000,
        cphd: 300000,
        cpd: 600000
    },
    {
        id: 6,
        name: 'Penerjemah Bahasa Inggris',
        service_id: 6,
        city_id: 2,
        cps: 500000,
        cphr: 50000,
        cphd: 300000,
        cpd: 500000
    },
]

let cars = [
    {
		"id": 1,
		"service_id": 4,
		"city_id": 1,
		"car_type_id": 1,
		"price": 300000,
		"additional": "Minum",
		"seat": 7,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/avanza.png?alt=media&token=d29353bd-0377-4da0-b427-ebd6a52e6b87"
	},
	{
		"id": 3,
		"service_id": 4,
		"city_id": 2,
		"car_type_id": 2,
		"price": 400000,
		"additional": "Antar Jemput",
		"seat": 8,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/innova.png?alt=media&token=9744f68b-1392-4606-98f5-d62ca859dc44"
	},
	{
		"id": 2,
		"service_id": 4,
		"city_id": 2,
		"car_type_id": 3,
		"price": 300000,
		"additional": "Termasuk Supir",
		"seat": 6,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/terios.jpg?alt=media&token=a46fcfee-35b6-4bda-a159-ffc933a10f46"
	},
	{
		"id": 4,
		"service_id": 4,
		"city_id": 1,
		"car_type_id": 4,
		"price": 250000,
		"additional": "-",
		"seat": 5,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/jazz.png?alt=media&token=6ac11362-58f2-4051-ac32-c9663f1eb1f6"
	},
	{
		"id": 5,
		"service_id": 4,
		"city_id": 2,
		"car_type_id": 5,
		"price": 300000,
		"additional": "-",
		"seat": 4,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/brio.png?alt=media&token=db91ac65-580b-4a47-8287-861a2b622385"
	},
	{
		"id": 6,
		"service_id": 5,
		"city_id": 1,
		"car_type_id": 8,
		"price": 1000000,
		"additional": "Termasuk Supir Professional",
		"seat": 3,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/sedan%20bmw.jpg?alt=media&token=b041e22b-dca9-4301-9d7c-d1e4e984f7ba"
	},
	{
		"id": 7,
		"service_id": 5,
		"city_id": 2,
		"car_type_id": 10,
		"price": 2000000,
		"additional": "Bebas Parkir",
		"seat": 5,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/alphard.jpg?alt=media&token=152410d1-af59-4192-9384-4e96baf1a1be"
	},
	{
		"id": 8,
		"service_id": 5,
		"city_id": 1,
		"car_type_id": 9,
		"price": 2000000,
		"additional": "Home Stay",
		"seat": 7,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/limousine.jpg?alt=media&token=96b394dc-6feb-4bab-800c-e21c2435db85"
	},
	{
		"id": 9,
		"service_id": 1,
		"city_id": 2,
		"car_type_id": 6,
		"price": 500000,
		"additional": "Termasuk Supir",
		"seat": 1,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/pick%20up.jpg?alt=media&token=6fd5aaac-7262-493b-8236-45ea5bf826fb"
	},
	{
		"id": 10,
		"service_id": 2,
		"city_id": 1,
		"car_type_id": 7,
		"price": 1500000,
		"additional": "2 Tukang Angkut",
		"seat": 1,
		"image": "https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/truk.jpg?alt=media&token=cd52b0c1-ff50-4335-a98d-f758e4f1ab07"
	}
]

let cities = [
    {
        id: 1,
        name: 'Jakarta'
    },
    {
        id: 2,
        name: 'Bandung'
    }
]

let car_type = [
    {
        id: 1,
        name: 'Avanza'
    },
    {
        id: 2,
        name: 'Innova'
    },
    {
        id: 3,
        name: 'Terios'
    },
    {
        id: 4,
        name: 'Jazz'
    },
    {
        id: 5,
        name: 'Brio'
    },
    {
        id: 6,
        name: 'Pick Up'
    },
    {
        id: 7,
        name: 'Truck'
    },
    {
        id: 8,
        name: 'Sedan BMW'
    },
    {
        id: 9,
        name: 'Limousine'
    },
    {
        id: 10,
        name: 'Alphard'
    }
]

let interactions = [{
		"id": 2,
		"user_id": 4,
		"service_id": 4,
		"rsv_date": "2018-05-11",
		"service_name": "Avanza",
		"price": 300000,
		"status": 4
	},
	{
		"id": 3,
		"user_id": 4,
		"service_id": 5,
		"rsv_date": "2018-06-15",
		"service_name": "Limousine",
		"price": 2000000,
		"status": 2
	},
	{
		"id": 4,
		"user_id": 4,
		"service_id": 5,
		"rsv_date": "2018-05-31",
		"service_name": "Alphard",
		"price": 2000000,
		"status": 1
	},
	{
		"id": 5,
		"user_id": 5,
		"service_id": 2,
		"rsv_date": "2018-05-18",
		"service_name": "Truck",
		"price": 1500000,
		"status": 1
	},
	{
		"id": 6,
		"user_id": 5,
		"service_id": 1,
		"rsv_date": "2018-05-26",
		"service_name": "Pick Up",
		"price": 500000,
		"status": 3
	},
	{
		"id": 7,
		"user_id": 5,
		"service_id": 3,
		"rsv_date": "2018-05-18",
		"service_name": "3 Orang Tukang Angkut",
		"price": 250000,
		"status": 2
	},
	{
		"id": 8,
		"user_id": 4,
		"service_id": 6,
		"rsv_date": "2018-05-24",
		"service_name": "Penerjemah Bahasa Inggris",
		"price": 500000,
		"status": 2
	},
	{
		"id": 9,
		"user_id": 4,
		"service_id": 6,
		"rsv_date": "2018-05-28",
		"service_name": "Supir Professional",
		"price": 700000,
		"status": 3
	}
]

let getUserById = function (id) {
    return users.filter(u => u.id === id);
}

let getServiceById = function (id) {
    return services.filter(s => s.id === id);
}

let getServiceIdByUserId = function (userId) {
    let res = [];
    for (let i = 0; i < services.length; i++) {
        if (services[i].user_id === userId) {
            res.push(services[i].id);
        }
    }
    return res;
}

let getGuideById = function (id) {
    return guides.filter(g => g.id === id);
}

let getCarById = function (id) {
    return cars.filter(c => c.id === id);
}

let getCityById = function (id) {
    return cities.filter(c => c.id === id);
}

let getCarTypeById = function (id) {
    return car_type.filter(ct => ct.id === id);
}

let getInteractionById = function (id) {
    return interactions.filter(i => i.id === id);
}

export {
    users,
    getUserById,

    services,
    getServiceById,
    getServiceIdByUserId,

    guides,
    getGuideById,

    cars,
    getCarById,

    cities,
    getCityById,

    car_type,
    getCarTypeById,

    interactions,
    getInteractionById
}