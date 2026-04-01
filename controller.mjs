import users from "./data.mjs";

// MENAMPILKAN DATA
const index = () => {
    console.log("\n=== DATA USERS ===");

    users.map((user, i) => {
        console.log(
            `${i + 1}. ${user.nama} | Umur: ${user.umur} | ${user.alamat} | ${user.email}`
        );
    });
};

// MENAMBAH DATA
const store = () => {
    users.push(
        { nama: "Celine Maharani", umur: 22, alamat: "Bogor", email: "celine@gmail.com" },
        { nama: "Iqbal Maulana", umur: 23, alamat: "Bekasi", email: "iqbal@gmail.com" }
    );

    console.log("\nData berhasil ditambahkan.");
};

// MENGHAPUS DATA
const destroy = () => {
    const deleted = users.pop();

    console.log(`\nData ${deleted.nama} berhasil dihapus.`);
};

export { index, store, destroy };