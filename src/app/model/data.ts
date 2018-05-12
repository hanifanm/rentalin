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
        id: 1,
        service_id: 4,
        city_id: 1,
        car_type_id: 1,
        price: 300000,
        additional: 'Minum',
        seat: 7,
        image: 'https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/avanza.jpg?alt=media&token=8c3bf22d-288f-4918-912a-232928993028'
    },
    {
        id: 2,
        service_id: 4,
        city_id: 2,
        car_type_id: 3,
        price: 300000,
        additional: 'Termasuk Supir',
        seat: 6,
        image: 'https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/terios.jpg?alt=media&token=a4ccca33-b9c5-4122-9117-530e24413367'
    },
    {
        id: 3,
        service_id: 4,
        city_id: 2,
        car_type_id: 2,
        price: 400000,
        additional: 'Antar Jemput',
        seat: 8,
        image: 'https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/innova.jpg?alt=media&token=29554091-0680-44be-86f7-7f05f972f566'
    },
    {
        id: 4,
        service_id: 4,
        city_id: 1,
        car_type_id: 4,
        price: 250000,
        additional: '-',
        seat: 5,
        image: 'https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/jazz.jpg?alt=media&token=586ce2dd-3ac1-40be-b01c-4d26483cbd03'
    },
    {
        id: 5,
        service_id: 4,
        city_id: 2,
        car_type_id: 5,
        price: 300000,
        additional: '-',
        seat: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/rentalin-hanifanm.appspot.com/o/brio.jpg?alt=media&token=c9ef0464-0002-495e-bee8-f9f50bc8a699'
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
    }
]

// let interactions : { id : number; user_id : number; service_id : number; rsv_date : string; service_name : string; price : number;}[] = [];
let interactions = [];

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