// Nilai Variabel
// let name

// name = 'Udin Petot'
// document.write(name) //ingin memunculkan di halaman
// console.log(name) //hanya di inspect

// Konstanta
// const phi = 3.14
// const greet = 'Hello World'

// console.log(phi)
// console.log(greet)

// Tipe Data Number
let phi, price, quantity

phi = 3.14
price = 1000
quantity = 2

console.log('Nilai Phi = ' + phi);
console.log('Nilai Price =', price);
console.log('Nilai Quantity=', quantity);

// Tipe Data String
let nama, kota

nama = 'Budi'
kota = 'Jakarta'

console.log('Nama = ' + nama)
console.log('Kota =', kota)

// Tipe Data Boolean
let isMarried, isStudent

isMarried = true
isStudent = false

console.log('Status Married = ' +isMarried)
console.log('Status Student =', isStudent)

// Tipe Data Object Array
let fruits

fruits = [
    'Apple', 
    'Banana', 
    'Orange'
]

console.log('Buah = ' + fruits)
console.log('Buah = ' + fruits[1])
console.log('Orange = ' + fruits[2])

fruits[1] = 'Mango' // Mengubah array dengan Index
console.log('Buah = ' + fruits) 

// Tipe Data Object Array 2 Dimensi
let students = [
    ['Budi', 'Jakarta'],
    ['Andi', 'Bandung']
]

console.log(students)
console.log(students[0][0])

// Operator Aritmatika Pertambahan
let pertambahan = 10 + 10
console.log(pertambahan)

// Operator Aritmatika Pengurangan
let pengurangan = 10 - 10
console.log(pengurangan)

// Operator Aritmatika Perkalian
let perkalian = 10 * 10
console.log(perkalian)

// Operator Aritmatika Pembagian
let pembagian = 10/10
console.log(pembagian)

// Operator Aritmatika Modulus
let modulus = 10%10
console.log(modulus)

// Operator Perbandingan
let lebihdari = 10 > 10
console.log(lebihdari)

let kurangdari = 10 < 10
console.log(lebihdari)

let lebihdarisamadengan = 10 >= 10
console.log(lebihdarisamadengan)

let kurangdarisamadengan = 10 <= 10
console.log(kurangdarisamadengan)

let samaDengan = 10 == 10
console.log(samaDengan)


// Operator Logika AND
let and = true && true
console.log(and)

// Operator Logika OR
let or = true || false
console.log(or)

// Operator Logika NOT
let not = !true
console.log(not)

// Operator String
let namaDepan, namaBelakang
namaDepan = 'Udin'
namaBelakang = 'Petot'

let namaLengkap = namaDepan + ' ' + namaBelakang
console.log(namaLengkap)

// Operator Spread
let angka = [1, 2, 3, 4, 5]
let angka2 = [...angka, 6, 7,8 ,9 , 10]
console.log(angka2)

// Operator Spread


// Operator Spread