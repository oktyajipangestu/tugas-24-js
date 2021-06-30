function urut() {
    let angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    console.log("Sebelumnya : ".concat(angka));
    let asc = angka.sort();
    console.log("Ascending : ".concat(asc));
    let dsc = angka.reverse();
    console.log("Descending : ".concat(dsc));
}

urut();